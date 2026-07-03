"""Evaluate WRAITH-LSTM v0.1 prediction outputs.

Research only. This script evaluates local prediction files and writes a local
Markdown report. It does not connect to exchanges, wallets, brokers, or live
data feeds.
"""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path


def read_predictions(path: str):
    file_path = Path(path)
    if not file_path.exists():
        return []
    with file_path.open("r", newline="", encoding="utf-8-sig") as handle:
        return [dict(row) for row in csv.DictReader(handle)]


def load_metrics(path: str):
    file_path = Path(path)
    if not file_path.exists():
        return {}
    return json.loads(file_path.read_text(encoding="utf-8"))


def write_report(path: str, metrics: dict, predictions: list[dict]) -> None:
    output_path = Path(path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    lstm = metrics.get("lstm", {})
    baseline = metrics.get("baselines", {}).get("majority_class", {})
    lines = [
        "# WRAITH-LSTM Evaluation Report",
        "",
        "Status: research only.",
        "",
        "This report evaluates local model outputs only. It does not authorize paper trading, live trading, exchange connections, wallet connections, broker connections, or money at risk.",
        "",
        "## Dataset",
        "",
        f"- Target: {metrics.get('target', 'Unknown')}",
        f"- Rows loaded: {metrics.get('rows_loaded', 'Unknown')}",
        f"- Usable rows: {metrics.get('usable_rows', 'Unknown')}",
        f"- Test rows: {metrics.get('test_rows', 'Unknown')}",
        f"- Prediction rows: {len(predictions)}",
        "",
        "## Baseline",
        "",
        f"- Majority baseline status: {baseline.get('status', 'Unknown')}",
        f"- Majority baseline metrics: {json.dumps(baseline.get('metrics', {}))}",
        "",
        "## LSTM",
        "",
        f"- LSTM status: {lstm.get('status', 'Unknown')}",
        f"- LSTM metrics: {json.dumps(lstm.get('metrics', {}))}",
        "",
        "## Doctrine",
        "",
        "LSTM is a signal generator, not a trading system.",
        "",
        "No model can advance unless it beats simple baselines out-of-sample.",
        "",
        "Profitability proxy should remain disabled unless realistic trade rules, fees, slippage, and risk controls are defined.",
    ]
    output_path.write_text("
".join(lines) + "
", encoding="utf-8")


def run(args: argparse.Namespace) -> int:
    predictions = read_predictions(args.predictions)
    metrics = load_metrics(args.metrics)
    write_report(args.report, metrics, predictions)
    print(f"[WRAITH-LSTM] Evaluation report written to {args.report}")
    print("[WRAITH-LSTM] Research only. No trading authorization exists.")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Evaluate WRAITH-LSTM v0.1 local prediction outputs.")
    parser.add_argument("--predictions", default="research/wraith_lstm/outputs/predictions.csv", help="Predictions CSV path.")
    parser.add_argument("--metrics", default="research/wraith_lstm/outputs/metrics.json", help="Metrics JSON path.")
    parser.add_argument("--report", default="research/wraith_lstm/outputs/evaluation_report.md", help="Markdown report output path.")
    return parser


if __name__ == "__main__":
    raise SystemExit(run(build_parser().parse_args()))
