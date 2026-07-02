# THE GRID v0.4 Visual Identity Foundation

Current Version: v0.4.0

## Purpose

v0.4 establishes THE GRID's visual operating system. This milestone is presentation only. It does not add backend behavior, mission logic, data architecture, APEX changes, CLU changes, autonomous agents, or new business workflows.

## Decisions

- Use a Tron-inspired layered environment as the global background.
- Keep the perspective grid ambient and non-interactive.
- Standardize division glow colors in src/data/designTokens.ts.
- Use shared visual primitives for officer badges, division LEDs, glass panels, and the global design backdrop.
- Refine cards and navigation through shared primitives instead of page-by-page styling.
- Preserve dark-first contrast and responsive behavior.

## Reusable Primitives

- DesignBackdrop: global layered animated background.
- DivisionGlow: status LED primitive using division accents.
- OfficerBadge: officer identity badge with accent mapping.
- GlassPanel: accent-aware glass surface for future pages.
- divisionAccents: reusable RGB glow and Tailwind class mapping.
- officerProfiles: canonical officer identity map.

## Safety Boundaries

- No company page.
- No Morning Brief.
- No Mission Radar.
- No ticket engine.
- No council engine.
- No R&D engine.
- No startup sequence.
- No autonomous behavior.

## Future Use

Future milestones should consume these primitives instead of inventing new surface styles. If a future page needs a new visual pattern, document it here before implementation.
