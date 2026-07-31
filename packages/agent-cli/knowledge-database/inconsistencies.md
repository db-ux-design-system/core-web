# Inconsistencies

Tracking von Unterschieden zwischen Figma und Code sowie bekannte Gaps.

## Figma-only tokens (no CSS custom property equivalent)

### Opacity

- **`db-opacity/none`** — Value is 0. In code use `opacity: 0` directly. Figma Key: `f06e98ba2930b3e2c2ce64024ef407bacaee89c2`

### Spacing

- **`db-spacing/fixed/none`** — Value is 0. In code use `gap: 0` / `padding: 0` directly. Figma Key: `1bc966c4ce29569a4d65020e0fc9439341553db7`

## Code-only tokens (no Figma variable equivalent)

### Transition

- **`--db-transition-duration-*`** — All duration tokens (extra-fast, fast, medium, slow, extra-slow)
- **`--db-transition-timing-*`** — All timing tokens (emotional, functional, show, hide)
- **`--db-transition-straight-*`** — All composed shorthand transitions

### Colors

- **`--db-adaptive-on-origin-hovered`** — No Figma equivalent. Accessibility (contrast) cannot be guaranteed for this state.
- **`--db-adaptive-on-origin-pressed`** — No Figma equivalent. Accessibility (contrast) cannot be guaranteed for this state.

## Structural differences

### Elevation

- In Figma: Effect Styles (not variables). In Code: CSS custom properties (`--db-elevation-sm/md/lg`). Different mechanism, same intent.

### Theme collection

- In Figma: Palette primitives (0–14 steps), internal. In Code: CSS custom properties (`--db-{variant}-0` to `-14`). Theme collection is internal in Figma, not for direct design use.

## Component Gaps

### Custom Select

- **Custom Select List** — No dedicated subcomponent in Figma. Review during refactoring.

## Icons

- **Format** — Figma: SVG-Instanzen (Component Instances). Code: Icon Font (woff2).
- **Library** — Figma: Separate Library `DB UX DS v3 - DB Theme Icons` (fileKey: `5qAIAjuseE3tpqGbtwglSN`). Code: Package `@db-ux/core-foundations` (assets/).
- **Referenzierung** — Figma: Instance Swap auf Icon-Komponente. Code: String-Name über `icon`-Prop.
- **Größensteuerung** — Figma: Property heißt `size`. Code: Property heißt `weight` (steuert font-weight).

Assets sind Inner Source und nicht in diesem Repository enthalten.
