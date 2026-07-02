# Glow System

Current Version: v0.3.0

Glow is part of THE GRID's visual identity, but it should remain controlled. It marks energy, focus, and system state. It should not be used as generic decoration.

## Glow Tiers

| Tier | Use | Example |
| --- | --- | --- |
| subtle | Normal card hover, quiet system presence | shadow-[0_0_34px_rgba(34,211,238,0.16)] |
| active | Connected bridge, active mission, selected workstation | shadow-[0_0_58px_rgba(34,211,238,0.20)] |
| critical | Safety lock or blocked state | shadow-[0_0_44px_rgba(248,113,113,0.14)] |
| hero | First-screen Mission Control command surface only | shadow-[0_0_80px_rgba(34,211,238,0.12)] |

## Accent Mapping

- Cyan glow: live system visibility.
- Purple glow: architecture and strategic coordination.
- Amber glow: Commerce review and unresolved opportunity.
- Red glow: safety lock or blocked execution.
- Emerald glow: verified connection or pass state.

## Rules

- Use glow on containers, not text.
- Use one glow color per component.
- Reduce glow strength on dense repeated lists.
- Do not stack multiple glow effects inside the same card.
