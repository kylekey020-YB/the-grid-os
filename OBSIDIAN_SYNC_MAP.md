# Obsidian Sync Map

Version: v3.2.0
Status: Obsidian-compatible routing map
Date: July 3, 2026

Doctrine source: [[GRID_SYSTEM_PROMPT]]

## Purpose

This document maps THE GRID systems and artifacts to their Obsidian destinations.

Do not duplicate doctrine here. Reference [[GRID_SYSTEM_PROMPT]].

## Core Map

| THE GRID System | Obsidian Folder |
| --- | --- |
| Inbox / unsorted notes | 00 Inbox |
| Executive briefs | 01 Executive |
| Daily Command Brief | 01 Executive |
| Command Brief templates | 01 Executive |
| Operations Hub | 01 Executive |
| Mission Inbox | 01 Executive |
| Mission Records | 02 Mission Records |
| Intelligence Corps reports | 03 Intelligence |
| Research Router assignments | 03 Intelligence |
| Venture Corps research | 04 Venture Corps |
| Revenue Scout reports | 04 Venture Corps |
| Trading Corps research | 05 Trading Corps |
| Alpha Lab | 05 Trading Corps |
| Alpha records / alpha hypotheses | 05 Trading Corps |
| ORION / WRAITH / PAIRFORGE / VOLTA / ATLAS notes | 05 Trading Corps |
| Engineering notes | 06 Engineering |
| Claude Code / Codex implementation notes | 06 Engineering |
| DealFlow notes | 07 DealFlow |
| Academy lessons | 08 Academy |
| Hall of Wins / Hall of Failures / Chronicle lessons | 08 Academy |
| Playbooks | 09 Playbooks |
| GRID_PLAYBOOKS.md | 09 Playbooks |
| PLAYBOOK_TEMPLATE.md | 09 Playbooks |
| Experiments | 10 Experiments |
| Customers | 11 Customers |
| Launches | 12 Launches |
| Backtests | 13 Backtests |
| Daily notes | 14 Daily Journal |
| Weekly Chronicle | 15 Chronicle |
| Archived records | 99 Archive |

## Examples

Mission Records

↓

02 Mission Records

Backtests

↓

13 Backtests

Launches

↓

12 Launches

Customers

↓

11 Customers

Playbooks

↓

09 Playbooks

## Routing Rules

- Every major artifact should be Markdown-compatible.
- Reports should be filed where they will be used, not where they were generated.
- If the destination is unclear, place it in 00 Inbox and link the likely destination.
- Do not store secrets, API keys, broker credentials, wallet material, or private customer data.
- Unknowns must stay marked as unknown.


## Playbook System

- GRID_PLAYBOOKS.md maps to 09 Playbooks/GRID_PLAYBOOKS.md.
- PLAYBOOK_TEMPLATE.md maps to 09 Playbooks/PLAYBOOK_TEMPLATE.md.
- Individual playbooks map to 09 Playbooks/[Playbook ID] [Title].md.
- Draft playbooks remain Draft until Evidence Ledger entries and Mission Records support promotion.

## Alpha Lab

- ALPHA_LAB_STATUS.md maps to 05 Trading Corps/Alpha Lab/ALPHA_LAB_STATUS.md.
- ALPHA_GENERATION_DOCTRINE.md maps to 05 Trading Corps/Alpha Lab/ALPHA_GENERATION_DOCTRINE.md.
- Individual alpha records map to 05 Trading Corps/Alpha Lab/[Alpha ID] [Title].md.
- Evidence-backed alpha promotions should also link to Evidence Ledger entries and backtest records in 13 Backtests.
