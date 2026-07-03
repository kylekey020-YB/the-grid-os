# Git Workflow

Version: v2.8.0

## Purpose

Define how THE GRID should use Git as the project becomes a larger operating system with research, UI, docs, and future experiments.

## Branch Doctrine

- main branch equals stable reviewed work.
- Feature branches are used for experiments, prototypes, research tools, and milestone development.
- Codex may commit to feature branches when Mission Commander approves.
- Main branch merges require Mission Commander approval.
- Do not auto-merge into main.

## Commit Rules

- Commit only files related to the approved mission.
- Do not stage unrelated untracked files.
- Do not commit secrets.
- Do not commit .env files.
- Do not commit API keys.
- Do not commit broker credentials.
- Do not commit wallet material.
- Do not commit private customer data.

## Research Output Rules

Research outputs can be gitignored unless Mission Commander explicitly approves preserving them in the repository.

Examples that usually should not be committed without approval:

- raw market data
- generated backtest output
- unsanitized logs
- marketplace scrape exports
- account exports
- private customer records

Examples that may be committed when useful:

- research specifications
- sanitized summary reports
- report templates
- reproducible scripts
- documentation
- empty output folder placeholders such as .gitkeep

## Main Merge Gate

Before merging to main:

1. Confirm scope matches the mission.
2. Run npm run check when possible.
3. Run npm run build when possible.
4. Show git status --short.
5. Confirm unrelated files are not staged.
6. Wait for Mission Commander approval.


## Repository Consolidation

Repository consolidation is governed by REPOSITORY_CONSOLIDATION_PLAN.md.

Do not move, merge, reset, clean, or replace the canonical working tree while Codex or Claude Code has active uncommitted work. Preserve Git history and confirm the GitHub remote before any relocation.
