"""Baseline models and metrics for WRAITH-LSTM v0.1."""

from __future__ import annotations

from typing import Dict, Iterable, List, Sequence


def binary_metrics(actual: Sequence[int], predicted: Sequence[int], probabilities: Sequence[float] | None = None) -> Dict[str, float]:
    if not actual:
        return {"accuracy": 0.0, "precision": 0.0, "recall": 0.0, "f1": 0.0, "roc_auc": 0.0}

    tp = sum(1 for a, p in zip(actual, predicted) if a == 1 and p == 1)
    tn = sum(1 for a, p in zip(actual, predicted) if a == 0 and p == 0)
    fp = sum(1 for a, p in zip(actual, predicted) if a == 0 and p == 1)
    fn = sum(1 for a, p in zip(actual, predicted) if a == 1 and p == 0)
    accuracy = (tp + tn) / len(actual)
    precision = tp / (tp + fp) if tp + fp else 0.0
    recall = tp / (tp + fn) if tp + fn else 0.0
    f1 = 2 * precision * recall / (precision + recall) if precision + recall else 0.0
    roc_auc = simple_roc_auc(actual, probabilities or [float(p) for p in predicted])

    return {
        "accuracy": round(accuracy, 6),
        "precision": round(precision, 6),
        "recall": round(recall, 6),
        "f1": round(f1, 6),
        "roc_auc": round(roc_auc, 6),
        "true_positive": tp,
        "true_negative": tn,
        "false_positive": fp,
        "false_negative": fn,
    }


def simple_roc_auc(actual: Sequence[int], scores: Sequence[float]) -> float:
    positives = [score for label, score in zip(actual, scores) if label == 1]
    negatives = [score for label, score in zip(actual, scores) if label == 0]
    if not positives or not negatives:
        return 0.0
    wins = 0.0
    total = len(positives) * len(negatives)
    for pos in positives:
        for neg in negatives:
            if pos > neg:
                wins += 1.0
            elif pos == neg:
                wins += 0.5
    return wins / total if total else 0.0


def majority_class_baseline(train_labels: Sequence[int], test_labels: Sequence[int]) -> Dict[str, object]:
    if not train_labels or not test_labels:
        return {"status": "not_run", "reason": "insufficient_labels"}
    positive_rate = sum(train_labels) / len(train_labels)
    majority = 1 if positive_rate >= 0.5 else 0
    predictions = [majority for _ in test_labels]
    return {
        "status": "complete",
        "model": "majority_class",
        "majority_class": majority,
        "metrics": binary_metrics(list(test_labels), predictions, [positive_rate for _ in test_labels]),
    }


def sklearn_baselines(train_x: Sequence[Sequence[float]], train_y: Sequence[int], test_x: Sequence[Sequence[float]], test_y: Sequence[int]) -> Dict[str, object]:
    try:
        from sklearn.ensemble import RandomForestClassifier
        from sklearn.linear_model import LogisticRegression
    except ImportError:
        return {"status": "not_run", "reason": "scikit_learn_not_installed"}

    results: Dict[str, object] = {"status": "complete", "models": {}}
    if not train_x or not test_x:
        return {"status": "not_run", "reason": "insufficient_rows"}

    for name, estimator in {
        "logistic_regression": LogisticRegression(max_iter=1000),
        "random_forest": RandomForestClassifier(n_estimators=100, random_state=7),
    }.items():
        try:
            estimator.fit(train_x, train_y)
            predictions = list(estimator.predict(test_x))
            if hasattr(estimator, "predict_proba"):
                probabilities = [float(row[1]) for row in estimator.predict_proba(test_x)]
            else:
                probabilities = [float(value) for value in predictions]
            results["models"][name] = {"status": "complete", "metrics": binary_metrics(test_y, predictions, probabilities)}
        except Exception as exc:
            results["models"][name] = {"status": "failed", "reason": str(exc)}
    return results


def flatten_last_step(sequences: Iterable[Sequence[Sequence[float]]]) -> List[List[float]]:
    return [list(sequence[-1]) for sequence in sequences if sequence]
