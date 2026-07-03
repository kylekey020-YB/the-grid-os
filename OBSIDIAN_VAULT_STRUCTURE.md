# Obsidian Vault Structure

Version: v3.0.0
Status: Canonical memory structure / no sync automation
Date: July 3, 2026

## Mission

Obsidian is the durable second brain for THE GRID. THE GRID visualizes operational state. Hermes may remember and file records. Other AI platforms may contribute. Obsidian stores the durable knowledge.

## Principle

Knowledge belongs to THE GRID, not to any individual AI.

If one platform is unavailable, another contributor should be able to continue from the records.

## Canonical Structure

- 00 - Command/
- 01 - Doctrine/
- 02 - Mission Records/
- 03 - Decision Records/
- 04 - Approval Records/
- 05 - Revenue Corps/
- 06 - Commerce/
- 07 - Trading/
- 08 - Academy/
- 09 - Strategic Assets/
- 10 - Officers/
- 11 - Intelligence Corps/

## Mission Record Fields

Every mission record should include:

- UUID
- Division
- Officer
- Scout
- Date
- Evidence
- Summary
- Recommendations
- Linked experiments
- Linked playbooks
- Linked mission records

## Current Implementation

- src/data/obsidianVault.ts
- src/data/obsidianBridge.ts
- docs/OBSIDIAN_BRIDGE.md
- scripts/exportObsidianVault.js

## Boundaries

- No Obsidian API yet
- No sync automation yet
- No secrets
- No .env files
- No API keys
- No broker credentials
- No wallet material
- No raw unsanitized logs
- No private customer data
