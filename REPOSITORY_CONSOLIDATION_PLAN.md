# Repository Consolidation Plan

Version: v3.2.0

## Purpose

Prepare THE GRID for eventual repository consolidation without disrupting active Codex work or losing project history.

## Canonical Repository

Current canonical working tree:

`C:\Users\NovaI\Documents\Codex\2026-06-30\mission-create-the-first-version-of`

Canonical remote:

`kylekey020-YB/the-grid-os`

This repository contains the real Vite, React, TypeScript, Tailwind, documentation, and mission history for THE GRID. It should be treated as the source of truth until Mission Commander approves a relocation.

## Current State

- The working tree contains active uncommitted Codex work.
- The application is documented as THE GRID v3.2.0.
- The repository includes UI, typed data, operations documentation, Obsidian planning, ORION research artifacts, and mission governance records.
- `outputs/` is intentionally excluded from Git and may contain generated or user-facing export packages.

## Consolidation Doctrine

- Do not move the canonical repository while Codex or Claude Code is actively editing it.
- Do not graft the canonical history into a throwaway repository.
- Do not overwrite `OneDrive\GRID` or any existing GRID folder without a backup.
- Do not stage unrelated generated outputs, Commerce validation folders, private logs, secrets, raw market data, or account exports.
- Main branch remains stable reviewed work.
- Any consolidation must preserve Git history.

## Recommended Sequence

1. Finish the current Codex stabilization pass.
2. Run validation where possible.
3. Show `git status --short`.
4. Mission Commander reviews the exact changed files.
5. Commit or back up the current canonical work after approval.
6. Confirm remote, branch, and latest commit.
7. Create a backup of any target `OneDrive\GRID` folder.
8. Relocate or freshly clone the canonical repository into the approved GRID location.
9. Compare any throwaway or temporary GRID folders only for unique files.
10. Archive or remove old folders only after Mission Commander confirmation.

## Handoff Instruction For Claude / Claude Code

Before touching files, read:

- `GRID_SYSTEM_PROMPT.md`
- `AI_HANDOFF.md`
- `GIT_WORKFLOW.md`
- `STABILIZATION_STATUS.md`
- `REPOSITORY_CONSOLIDATION_PLAN.md`

If Codex has active uncommitted work, do not move, merge, reset, clean, stage, or commit the repository without Mission Commander approval.

## Target Outcome

THE GRID should eventually live in one clear root location while preserving:

- Git history
- GitHub remote connection
- Stable project documentation
- Obsidian handoff structure
- Research and operations records
- Engineering discipline

Repository consolidation is an operations task, not a feature milestone.
