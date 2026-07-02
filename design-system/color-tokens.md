# Color Tokens

Current Version: v0.3.0

THE GRID uses a dark operational palette with restrained neon accents. Colors should communicate state, division, and hierarchy without turning every surface into an alert.

## Base Surface Tokens

| Token | Purpose | Tailwind Reference |
| --- | --- | --- |
| grid-bg | Main application background | bg-background |
| grid-card | Standard card surface | bg-card |
| grid-panel | Nested evidence panel | bg-background/50 |
| grid-border | Default structural border | border-border/70 |
| grid-muted | Secondary text | text-muted-foreground |
| grid-primary-text | Main text | text-foreground |

## Accent Families

| Accent | Use | Tailwind Reference |
| --- | --- | --- |
| Cyan | Mission Control, live bridge, active system signal | cyan-300 |
| Blue | Stable information, GRID core, navigation context | blue-300 |
| Purple | ZENITH, architecture, R&D, strategy | purple-300 |
| Magenta | High-energy signal, rare emphasis | fuchsia-300 |
| Red | Safety locks, blocked actions, critical warnings | red-300 |
| Gold | Commerce, opportunity, margin review | amber-300 |
| Emerald | Connected, passed, healthy, verified | emerald-300 |

## Rules

- Use one dominant accent per card or panel.
- Use red only for safety, blocked actions, or real risk.
- Use emerald only when something is connected, verified, or passed.
- Do not imply success with color unless the underlying evidence supports it.
- Missing or unknown data should use amber or muted styling, not red unless it blocks a milestone.
