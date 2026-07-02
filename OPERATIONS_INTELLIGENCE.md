# THE GRID Operations Intelligence Layer

Current Version: v1.6.0

## Purpose

The Operations Intelligence Layer standardizes how every division reports operational KPIs to Mission Control.

The goal is executive clarity without vanity metrics. Missing values remain N/A until real records exist.

## Company Health

Mission Control now includes a Company Health panel with typed values:

- Mission
- Approvals Pending
- Active Experiments
- Revenue
- MRR Goal
- Days Remaining
- Mission Progress

Current source of truth:

- src/data/companyKpis.ts

## Division KPI Reports

Each division reports through the same structure:

```ts
export type DivisionKpiReport = {
  id: string;
  division: string;
  status: "On Track" | "Manual Only" | "Research" | "N/A";
  kpis: DivisionKpi[];
};
```

Current division reports:

- Income Division
- Commerce
- APEX
- CLU
- Operations

## KPI Doctrine

- No fake revenue.
- No fake users.
- No fake trades.
- No fabricated analytics.
- No fake conversion rates.
- Unknown values remain N/A.
- Every KPI cites its evidence source.
- Real values require records.

## Current Boundary

This layer is typed static reporting only. It does not read external systems, write records, connect accounts, run jobs, or automate decisions.

Future milestone work may connect real status publishers after the Mission Bus architecture is approved.
