# Animation Timing

Current Version: v0.3.0

Animations should make state changes legible. THE GRID should feel responsive, not theatrical.

## Timing Tokens

| Token | Duration | Use |
| --- | --- | --- |
| instant | 100ms | Small icon or badge response |
| fast | 150ms | Hover states and button feedback |
| standard | 300ms | Card hover, panel reveal, navigation motion |
| slow | 500ms | Major page transitions when needed |
| pulse | 1200ms+ | Status LEDs only |

## Easing

| Token | Use |
| --- | --- |
| ease-out | Default hover and reveal |
| ease-in-out | Repeating pulse or ambient system motion |
| linear | Scanning lines or purely mechanical effects |

## Rules

- Prefer subtle transitions over constant motion.
- Do not animate metrics in a way that implies live updates unless the data source is actually refreshing.
- Status LEDs may pulse, but cards should not pulse as a whole.
- Keep reduced-motion compatibility in mind for future implementation.
