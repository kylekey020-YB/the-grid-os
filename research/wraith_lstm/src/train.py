"""Train WRAITH-LSTM v0.1 on local CSV data.

Research only. This script never connects to an exchange, wallet, broker, or
live data feed. It writes local research outputs only.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def load_config(path: str) -> dict:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2), encoding="utf-8")


def train_lstm(train_sequences, train_labels, test_sequences, test_labels, model_cfg: dict):
    from baselines import binary_metrics
    from model import create_lstm_model

    if not train_sequences or not test_sequences:
        return {"status": "not_run", "reason": "insufficient_sequences"}, []

    input_size = len(train_sequences[0][0])
    model, torch = create_lstm_model(
        input_size=input_size,
        hidden_size=int(model_cfg.get("hidden_size", 32)),
        num_layers=int(model_cfg.get("num_layers", 1)),
        dropout=float(model_cfg.get("dropout", 0.1)),
    )
    optimizer = torch.optim.Adam(model.parameters(), lr=float(model_cfg.get("learning_rate", 0.001)))
    loss_fn = torch.nn.BCEWithLogitsLoss()
    epochs = int(model_cfg.get("epochs", 10))

    x_train = torch.tensor(train_sequences, dtype=torch.float32)
    y_train = torch.tensor(train_labels, dtype=torch.float32)
    x_test = torch.tensor(test_sequences, dtype=torch.float32)

    model.train()
    for _ in range(epochs):
        optimizer.zero_grad()
        logits = model(x_train)
        loss = loss_fn(logits, y_train)
        loss.backward()
        optimizer.step()

    model.eval()
    with torch.no_grad():
        probabilities = torch.sigmoid(model(x_test)).tolist()
    predictions = [1 if probability >= 0.5 else 0 for probability in probabilities]
    return {"status": "complete", "metrics": binary_metrics(test_labels, predictions, probabilities)}, probabilities


def run(args: argparse.Namespace) -> int:
    from baselines import flatten_last_step, majority_class_baseline, sklearn_baselines
    from dataset import build_sequences, chronological_split, usable_rows
    from features import FEATURE_COLUMNS, TARGET_COLUMNS, engineer_features, load_rows, summarize_features, write_rows

    config = load_config(args.config)
    target = args.target or config.get("dataset", {}).get("target", "next_15m_direction")
    if target not in TARGET_COLUMNS:
        raise ValueError(f"Unsupported target: {target}. Expected one of {TARGET_COLUMNS}")

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    rows = load_rows(args.input, config.get("data", {}).get("required_columns", []))
    rows = engineer_features(rows, config)
    summarize_features(rows, str(output_dir / "feature_summary.csv"))

    clean = usable_rows(rows, target)
    train_rows, validation_rows, test_rows = chronological_split(
        clean,
        train_fraction=float(config.get("dataset", {}).get("train_fraction", 0.7)),
        validation_fraction=float(config.get("dataset", {}).get("validation_fraction", 0.15)),
    )
    train_plus_validation = train_rows + validation_rows
    sequence_length = int(args.sequence_length or config.get("dataset", {}).get("sequence_length", 48))

    train_sequences, train_labels, _ = build_sequences(train_plus_validation, target, sequence_length, FEATURE_COLUMNS)
    test_sequences, test_labels, test_meta = build_sequences(test_rows, target, sequence_length, FEATURE_COLUMNS)

    metrics = {
        "status": "research_only",
        "target": target,
        "rows_loaded": len(rows),
        "usable_rows": len(clean),
        "train_rows": len(train_rows),
        "validation_rows": len(validation_rows),
        "test_rows": len(test_rows),
        "sequence_length": sequence_length,
        "features": FEATURE_COLUMNS,
        "safety": {
            "live_trading": False,
            "exchange_connection": False,
            "wallet_connection": False,
            "broker_connection": False,
            "money_at_risk": False,
        },
        "baselines": {
            "majority_class": majority_class_baseline(train_labels, test_labels),
            "sklearn": sklearn_baselines(flatten_last_step(train_sequences), train_labels, flatten_last_step(test_sequences), test_labels),
        },
        "lstm": {"status": "not_run"},
    }

    probabilities = []
    if args.dry_run:
        metrics["lstm"] = {"status": "not_run", "reason": "dry_run_requested"}
    else:
        try:
            metrics["lstm"], probabilities = train_lstm(train_sequences, train_labels, test_sequences, test_labels, config.get("model", {}))
        except RuntimeError as exc:
            metrics["lstm"] = {"status": "not_run", "reason": str(exc)}

    prediction_rows = []
    for index, meta in enumerate(test_meta):
        probability = probabilities[index] if index < len(probabilities) else ""
        predicted = 1 if isinstance(probability, float) and probability >= 0.5 else ""
        prediction_rows.append({**meta, "predicted": predicted, "probability": probability})

    write_rows(str(output_dir / "predictions.csv"), prediction_rows, ["timestamp", "symbol", "target", "actual", "predicted", "probability"])
    write_json(output_dir / "metrics.json", metrics)

    print(f"[WRAITH-LSTM] Research outputs written to {output_dir}")
    print("[WRAITH-LSTM] No exchange, wallet, broker, order, or money-at-risk path exists.")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Train the WRAITH-LSTM v0.1 research model on local CSV data.")
    parser.add_argument("--input", default="research/wraith_lstm/data/input.csv", help="Local CSV input path.")
    parser.add_argument("--config", default="research/wraith_lstm/config.json", help="Configuration JSON path.")
    parser.add_argument("--output-dir", default="research/wraith_lstm/outputs", help="Directory for research outputs.")
    parser.add_argument("--target", default=None, help="Target column to model, such as next_15m_direction.")
    parser.add_argument("--sequence-length", type=int, default=None, help="Number of rows per sequence.")
    parser.add_argument("--dry-run", action="store_true", help="Generate features and baselines without training the LSTM.")
    return parser


if __name__ == "__main__":
    raise SystemExit(run(build_parser().parse_args()))
