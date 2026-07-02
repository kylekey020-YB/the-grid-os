# Typography Scale

Current Version: v0.3.0

Typography should feel precise and operational. Large type is reserved for page identity and major command surfaces. Dense workstations should favor scanability over drama.

## Scale

| Role | Tailwind Reference | Use |
| --- | --- | --- |
| Page title | text-4xl md:text-6xl font-display font-semibold | First heading on major pages |
| Section title | text-2xl font-semibold | Section headers and high-level panels |
| Card title | text-lg or text-xl | Individual cards and repeated items |
| Body | text-sm leading-6 | Most operational copy |
| Supporting body | text-base leading-7 text-muted-foreground | Page intros and descriptions |
| Eyebrow | text-xs uppercase tracking-[0.14em] | Labels, categories, status groups |
| Metric value | text-sm text-right text-foreground/90 | Compact metric rows |

## Rules

- Do not scale font size with viewport width.
- Letter spacing should remain 0 except for uppercase labels.
- Avoid hero-scale type inside cards, sidebars, and dense panels.
- Text must not overlap icons, badges, or neighboring content.
- Long values should wrap instead of forcing layout shifts.
