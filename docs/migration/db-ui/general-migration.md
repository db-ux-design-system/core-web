# DB UI → DB UX General Migration

Scan files: `.css`, `.scss`, `.html`, `.tsx`, `.jsx`, `.ts`, `.js`, `.vue`

## Typography

Replace hardcoded `font-size` with `font` shorthand using `--db-type-*` tokens. Use `font:` not `font-size:`. Remove redundant `line-height`/`font-weight`/`font-family` — the token sets all four.

Body tokens: `--db-type-body-3xs` through `--db-type-body-3xl`. Headline tokens: `--db-type-headline-3xs` through `--db-type-headline-3xl`. SCSS: `$db-type-body-md`, etc.

Size mapping: `10px`/`0.625rem`→`body-3xs`, `12px`/`0.75rem`→`body-2xs`, `14px`/`0.875rem`/`small`→`body-sm`, `16px`/`1rem`/`medium`→`body-md`, `18px`/`1.125rem`→`body-lg`, `20px`/`1.25rem`/`large`→`body-xl`, `24px`/`1.5rem`→`headline-sm`, `32px`/`2rem`→`headline-md`, `40px`/`2.5rem`→`headline-lg`, `48px`/`3rem`→`headline-xl`.

## Colors

See `db-ui-color-migration.md` for full mapping. Token names are bare (no `var(--)` / `$`). CSS: `var(--token)`, SCSS: `$token`.

BG column for: `background-color`, `background`. FG column for: `color`, `border-color`, `border`, `outline-color`, `text-decoration-color`, `fill`, `stroke`, `caret-color`, `column-rule-color`.

NEVER use `opacity` to simulate lighter colors. NEVER use `--db-elevation-*` as color values.

## box-shadow → elevation tokens

Do NOT use color tokens for `box-shadow`. Use: `--db-elevation-sm` (subtle/pressed), `--db-elevation-md` (default/cards), `--db-elevation-lg` (prominent/hover). SCSS: `$db-elevation-sm`/`md`/`lg`. Interactive: `data-interactive="elevation"` or `.db-interactive-elevation` (auto `md`→`lg` hover→`sm` active).

## Inline Styles

Replace all inline `style` attributes, as they bypass theming, density, and dark mode. Follow this strict priority: 1) use component props, 2) use external CSS/SCSS classes with tokens, 3) use inline styles with tokens only as an absolute last resort.

## Required CSS Imports & Token Architecture

v3 uses a layered CSS architecture. All four imports are required in this exact order:

```tsx
// main.tsx — order matters!
import "@db-ux/core-foundations/build/styles/theme/rollup.css"; // Layer 1: Palette tokens (@property definitions, e.g. #16181b)
import "@db-ux/core-foundations/build/styles/bundle.css"; // Layer 2: Semantic tokens (light-dark mappings on :root)
import "@db-ux/core-foundations/build/styles/icons/rollup.css"; // Layer 3: Icon fonts (@font-face declarations)
import "@db-ux/core-components/build/styles/rollup.css"; // Layer 4: Component styling
```

**Layer 1 – Palette tokens:** Defines raw color values as CSS `@property` registrations. These are the primitive building blocks (hex values, numeric scales).

**Layer 2 – Semantic tokens:** Maps palette tokens to semantic meanings using `light-dark()` on `:root`. Provides spacing, typography, elevation, and color intent tokens.

**Layer 3 – Icon fonts:** Registers `@font-face` declarations for the icon font. Without this, icon names render as plain text instead of symbols.

**Layer 4 – Component styling:** The actual component CSS rules. Depends on all three foundation layers above.

Missing any layer causes specific failures:

- No Layer 1/2 → components render without colors/spacing (broken layout)
- No Layer 3 → icons display as text strings
- No Layer 4 → components have no styling at all

## Spacing

Replace hardcoded `px`/`rem` in `padding`, `margin`, `gap`, `inset`, `top`/`right`/`bottom`/`left` with `--db-spacing-fixed-*` tokens. For responsive spacing use `--db-spacing-responsive-*`.

Fixed tokens (regular density): `3xs`=2px, `2xs`=4px, `xs`=8px, `sm`=12px, `md`=16px, `lg`=24px, `xl`=32px, `2xl`=48px, `3xl`=80px. Values adapt to active density automatically. SCSS: `$db-spacing-fixed-md`, etc.
