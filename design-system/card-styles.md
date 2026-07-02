# Card Styles

Current Version: v0.3.0

Cards are the main unit of repeated information in THE GRID. They should be compact, readable, and consistent.

## Standard Card

- Border: border-border/80
- Radius: existing Card radius, 8px or less
- Surface: bg-card/80
- Padding: p-4 to p-6
- Title: text-lg or text-xl
- Body: text-sm leading-6

## Mission Card

- Accent strip at top.
- Callsign eyebrow.
- Risk/status badge.
- Four or fewer key info rows before details.
- Truth or evidence block at the bottom.

## Status Card

- Status badge above title.
- One primary state icon.
- Three or fewer metric blocks.
- Missing state must be explicit.

## Rules

- Do not place UI cards inside other UI cards.
- Use nested panels only for evidence blocks, not full card layouts.
- Avoid decorative cards that do not contain actionable or reviewable information.
- Repeated cards should keep stable dimensions where possible.
