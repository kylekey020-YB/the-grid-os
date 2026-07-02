# THE GRID Mission Data Bridge

Current Version: v0.3.0

## Purpose

THE GRID v0.3 adds a read-only local mission data bridge. The bridge gives Mission Control visibility into local project state without creating a backend, control surface, autonomous agent, live trading integration, wallet signer, supplier outreach tool, or fake analytics layer.

The bridge follows the project doctrine:

- Reality before automation.
- Architecture before complexity.
- Evidence before expansion.
- Every module earns its place.
- Workstations precede Programs.
- Programs earn autonomy only after validated repeated workflows.

## How It Works

The script scripts/generateMissionSnapshot.js reads approved local files and writes a sanitized JSON snapshot to public/mission-snapshot.json. Mission Control fetches that snapshot every 5 seconds. If the snapshot is older than 60 seconds, the UI marks it as stale. If the file is missing or cannot be fetched, the UI reports that the mission data bridge is not running.

## Commands

npm run snapshot
npm run snapshot:watch

## Mission Bus Direction

The preferred long-term architecture is a Mission Bus. Each project should eventually publish a tiny status.json file with high-level state only. Mission Control should aggregate those status files instead of parsing every project log directly.

Example status fields:

- mission
- status
- phase
- last_update
- next_action
- tickets

The v0.3 bridge already looks for optional status.json files for APEX, CLU, Commerce, and Backtester. Log and Markdown parsing remain fallback support while those projects mature.

## Default Sources

- APEX: C:\Users\NovaI\APEX1v3\V4
- CLU: C:\Users\NovaI\OneDrive\CLU
- GRID root: COMMERCE_MISSION_STATUS.md, PROJECT_LOG.md, VERSION.md, and optional APEX_BACKTESTER_STATE.md
- Optional Mission Bus files: APEX/status.json, CLU/status.json, commerce/status.json, backtester/status.json

The APEX and CLU source directories can be overridden with THE_GRID_APEX_DIR and THE_GRID_CLU_DIR.

## Safety Boundaries

The bridge does not read .env files or secrets. It does not contact external services. It does not place trades, sign wallets, contact suppliers, buy inventory, start external control services, or run autonomous agents.

Missing values are shown as null, unknown, or explicit missing-data tickets. Unknown data must not be replaced with invented performance, revenue, user, trade, or agent activity.

## Snapshot Sections

- apex: paper/Beta trading research status and log-derived summaries when a compatible JSONL log exists.
- clu: paper shot status and log-derived summaries when clu_trade_log.jsonl exists.
- commerce: Commerce mission status from COMMERCE_MISSION_STATUS.md.
- backtester: optional backtester state from APEX_BACKTESTER_STATE.md if copied into the GRID root.
- grid: project documentation and version status.
- mission_bus: optional high-level status.json records from each department.
- open_tickets: generated gaps that need human resolution.
- research_and_development_proposals: evidence-based future work proposals.
- watcher_summaries: read-only watcher role summaries.
- council_briefing: read-only recommendations based on available evidence.
- safety_flags: constraints that keep v0.3 a visibility layer.

## Current Limitation

This is a local static-file bridge. It is intentionally not persistence, authentication, authorization, backend orchestration, live polling of external services, or a source of trading or commerce decisions.
