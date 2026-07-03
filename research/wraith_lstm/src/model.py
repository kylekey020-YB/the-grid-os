"""Optional PyTorch LSTM model for WRAITH-LSTM v0.1."""

from __future__ import annotations


def require_torch():
    try:
        import torch
        from torch import nn
    except ImportError as exc:
        raise RuntimeError("PyTorch is not installed. Install torch to train the LSTM, or use --dry-run for feature/baseline checks.") from exc
    return torch, nn


def create_lstm_model(input_size: int, hidden_size: int, num_layers: int, dropout: float):
    torch, nn = require_torch()

    class WraithLstmClassifier(nn.Module):
        def __init__(self) -> None:
            super().__init__()
            effective_dropout = dropout if num_layers > 1 else 0.0
            self.lstm = nn.LSTM(input_size=input_size, hidden_size=hidden_size, num_layers=num_layers, batch_first=True, dropout=effective_dropout)
            self.head = nn.Linear(hidden_size, 1)

        def forward(self, batch):
            output, _ = self.lstm(batch)
            final_hidden = output[:, -1, :]
            return self.head(final_hidden).squeeze(-1)

    return WraithLstmClassifier(), torch
