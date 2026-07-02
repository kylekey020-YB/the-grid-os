# Status LED Styles

Current Version: v0.3.0

Status LEDs are small state indicators used beside labels, watcher cards, and live bridge panels. They should communicate state quickly without replacing text.

## LED States

| State | Color | Meaning |
| --- | --- | --- |
| Active | Cyan | System is visible or currently monitored |
| Connected | Emerald | Source is connected or verified |
| Waiting | Amber | Source is missing, incomplete, or pending |
| Blocked | Red | Safety lock, forbidden action, or milestone blocker |
| Manual | Blue | Human-initiated workflow |
| Research | Purple | Proposal, R&D, or architecture review |

## Styling

- Size: h-2 w-2 for inline labels.
- Shape: rounded-full.
- Glow: use a matching low-opacity shadow only when state is active.
- Pulse: allowed for active monitoring indicators only.

## Rules

- LED color must match the written state.
- Never use an LED without a nearby text label.
- Do not use pulsing red unless there is an actual critical blocker.
- Unknown data should use Waiting, not Connected.
