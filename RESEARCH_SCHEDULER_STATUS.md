# Research Scheduler Status

Version: v2.8.0
Status: Semi-autonomous research architecture / no external execution
Date: July 2, 2026

## Mission

THE GRID can now represent scheduled research missions for Revenue Corps and Quant Research Corps.

This is semi-autonomous research only. It creates report schedules and review queues. It does not connect accounts, publish, trade, spend, message customers, or perform irreversible actions.

## Doctrine

Scouts may research on schedule.
Scouts may create reports.
Scouts may rank opportunities.
Scouts may recommend experiments.
Scouts may not publish, trade, message, spend, or execute.

## Revenue Corps Scheduled Missions

- Etsy Scout Daily Scan
- Fiverr Scout Daily Scan
- Gumroad Scout Daily Scan
- YouTube / Shorts Scout Daily Scan
- Bounty Scout Daily Scan
- GitHub Opportunity Scout Daily Scan

## Quant Research Corps Scheduled Missions

- ORION SPY/QQQ ORB Research
- WRAITH ICT/FVG Mechanical Rules Research
- PAIRFORGE Pairs Strategy Research
- VOLTA Options Strategy Research
- ATLAS Portfolio Strategy Research

## Research Queue States

- Pending
- Running
- Completed
- Needs Review
- Archived

## Hard Rules

- No publishing.
- No trading.
- No broker connection.
- No customer messages.
- No spending.
- No account automation.
- No irreversible actions.
- Research reports only.
- Mission Commander approves experiments.

## Current Implementation

- src/data/researchScheduler.ts
- src/pages/ResearchScheduler.tsx
- RESEARCH_SCHEDULER_STATUS.md
- GIT_WORKFLOW.md

## Validation Target

Run:

- npm run check
- npm run build

If sandbox blocks npm commands, run TypeScript compiler fallback and report clearly.
