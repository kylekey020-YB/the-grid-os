# Obsidian Bridge

Current Version: v2.5.0

## Purpose

The Obsidian Bridge gives THE GRID a durable second-brain structure without introducing an API dependency or sync automation.

THE GRID remains the visual command center.
Hermes remains the institutional memory role.
Obsidian becomes the long-term knowledge vault.

## Architecture

Manual/export-only flow:

THE GRID records and documentation

-> scripts/exportObsidianVault.js

-> obsidian-vault Markdown folders

-> human-reviewed Obsidian knowledge base

## Folder Strategy

The vault is organized by institutional function:

- Command
- Doctrine
- Mission Records
- Decision Records
- Approval Records
- Revenue Corps
- Commerce
- Trading
- Academy
- Strategic Assets
- Officers

## Safety Boundary

The bridge must not export secrets, .env files, API keys, wallet data, raw logs, private customer data, or unsanitized operational dumps.

The script never deletes files.
The script backs up existing destination files before overwrite.

## Backlink Conventions

Use Obsidian backlinks to connect durable concepts:

- [[Operation First Revenue]]
- [[Mission Commander]]
- [[Revenue Architect]]
- [[Mission Records]]
- [[Decision Records]]
- [[Approval Records]]
- [[Scout Reports]]
- [[DealFlow]]
- [[THE_GRID_CONSTITUTION]]

## Future Work

A future milestone may add review queues, export manifests, sanitized log transforms, or controlled sync. None of those are active in v2.5.
