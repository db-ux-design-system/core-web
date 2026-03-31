# DB-UI to DB-UX Design System General Migration Guide

## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## File Types to Check

A migration must scan **all** of the following file extensions for DB-UI usage:

| Extension | Typical content to migrate                               |
| --------- | -------------------------------------------------------- |
| `.css`    | CSS custom properties (`var(--db-color-*)`)              |
| `.scss`   | SCSS variables (`$db-color-*`) or CSS custom properties  |
| `.html`   | Inline styles, class names, component tags               |
| `.tsx`    | React/JSX components, inline styles                      |
| `.jsx`    | React/JSX components, inline styles                      |
| `.ts`     | Angular component templates (inline), style references   |
| `.js`     | Dynamic styles, programmatic color references            |
| `.vue`    | Vue SFC `<template>`, `<style>`, and `<script>` sections |

## Typography Migration

Instead of hardcoded `font-size` values (rem, px, named sizes like `small`, `large`, etc.), use the `font` shorthand with a DB UX typography token. These tokens set `font-size`, `line-height`, `font-weight`, and `font-family` all at once.

### Available tokens

**Body** (for regular text content):

| Token                     | Use for            |
| ------------------------- | ------------------ |
| `var(--db-type-body-3xs)` | Smallest body text |
| `var(--db-type-body-2xs)` |                    |
| `var(--db-type-body-xs)`  |                    |
| `var(--db-type-body-sm)`  | Small body text    |
| `var(--db-type-body-md)`  | Default body text  |
| `var(--db-type-body-lg)`  | Large body text    |
| `var(--db-type-body-xl)`  |                    |
| `var(--db-type-body-2xl)` |                    |
| `var(--db-type-body-3xl)` | Largest body text  |

**Headline** (for headings and display text):

| Token                         | Use for                    |
| ----------------------------- | -------------------------- |
| `var(--db-type-headline-3xs)` | Smallest headline          |
| `var(--db-type-headline-2xs)` |                            |
| `var(--db-type-headline-xs)`  |                            |
| `var(--db-type-headline-sm)`  | Small headline             |
| `var(--db-type-headline-md)`  | Default headline           |
| `var(--db-type-headline-lg)`  | Large headline             |
| `var(--db-type-headline-xl)`  |                            |
| `var(--db-type-headline-2xl)` |                            |
| `var(--db-type-headline-3xl)` | Largest headline / display |

SCSS equivalents use the `$db-type-*` prefix, e.g. `$db-type-body-md`.

### Important: `font` is a shorthand — remove redundant properties

Because `font: var(--db-type-body-md)` already sets `font-size`, `line-height`, `font-weight`, and `font-family`, you must **remove** any separate `font-size`, `line-height`, `font-weight`, or `font-family` declarations that were only there to replicate what the token now provides.

### Do not use `font-size` alone as a replacement

```css
/* ❌ WRONG: still a hardcoded size */
.my-element {
	font-size: var(--db-type-body-md);
}

/* ✅ CORRECT: use the font shorthand */
.my-element {
	font: var(--db-type-body-md);
}
```

### Examples

#### CSS

```css
/* ❌ Before */
.body-text {
	font-size: 0.875rem;
	line-height: 1.5;
}

.small-label {
	font-size: small;
}

h2 {
	font-size: 1.5rem;
	font-weight: bold;
}

/* ✅ After */
.body-text {
	font: var(--db-type-body-sm);
}

.small-label {
	font: var(--db-type-body-xs);
}

h2 {
	font: var(--db-type-headline-md);
}
```

#### SCSS

```scss
// ❌ Before
.body-text {
	font-size: 0.875rem;
}

// ✅ After
.body-text {
	font: $db-type-body-sm;
}
```

#### React / TSX

```tsx
// ❌ Before
<p style={{ fontSize: '0.875rem' }}>

// ✅ After
<p style={{ font: 'var(--db-type-body-sm)' }}>
```

### Approximate size mapping

This table gives a rough guide for mapping common hardcoded sizes to tokens. Always verify visually — the token also changes weight and line-height.

| Hardcoded value                 | Suggested token              |
| ------------------------------- | ---------------------------- |
| `0.625rem` / `10px` / `x-small` | `var(--db-type-body-3xs)`    |
| `0.75rem` / `12px`              | `var(--db-type-body-2xs)`    |
| `0.875rem` / `14px` / `small`   | `var(--db-type-body-sm)`     |
| `1rem` / `16px` / `medium`      | `var(--db-type-body-md)`     |
| `1.125rem` / `18px`             | `var(--db-type-body-lg)`     |
| `1.25rem` / `20px` / `large`    | `var(--db-type-body-xl)`     |
| `1.5rem` / `24px` / `x-large`   | `var(--db-type-headline-sm)` |
| `2rem` / `32px` / `xx-large`    | `var(--db-type-headline-md)` |
| `2.5rem` / `40px`               | `var(--db-type-headline-lg)` |
| `3rem` / `48px` / `xxx-large`   | `var(--db-type-headline-xl)` |

## Color Migration

Refer to [db-ui-color-migration.md](./db-ui-color-migration.md) for the full token mapping table.

### How to read the color migration table

The migration table lists each old DB-UI token (e.g. `db-color-red-300`) with two replacement columns:

- **BG Color** — use this when the token is applied as a **background** color
- **FG Color** — use this when the token is applied as a **foreground** color (text, borders, outlines, etc.)

The token names in the table are listed **without** any syntax wrapper (no `var(--)`, no `$` prefix) because the correct syntax depends on the technology:

| Technology | Syntax                                  |
| ---------- | --------------------------------------- |
| CSS        | `var(--db-brand-bg-vibrant-default)`    |
| SCSS       | `$db-brand-bg-vibrant-default`          |
| Tailwind   | Check your Tailwind config for mappings |

### Important: Do not use opacity or elevation tokens as color replacements

When migrating colors, **never** substitute a DB-UI color token with:

- `opacity` — e.g. `opacity: 0.5` to simulate a lighter color
- `--db-elevation-*` tokens — these are for shadows/depth, not for color values

Always use the actual color tokens from the **BG Color** or **FG Color** columns in the [color migration table](./db-ui-color-migration.md).

```css
/* ❌ WRONG: using opacity to fake a lighter color */
.my-element {
	background-color: var(--db-brand-bg-vibrant-default);
	opacity: 0.3;
}

/* ❌ WRONG: using elevation token as a color */
.my-element {
	background-color: var(--db-elevation-sm);
}

/* ✅ CORRECT: use the matching color token */
.my-element {
	background-color: var(--db-brand-bg-basic-level-3-default);
}
```

### Choosing BG Color vs. FG Color

Match the replacement token to the **CSS property** being used:

| CSS property            | Use column |
| ----------------------- | ---------- |
| `background-color`      | BG Color   |
| `background`            | BG Color   |
| `color`                 | FG Color   |
| `border-color`          | FG Color   |
| `border` (shorthand)    | FG Color   |
| `outline-color`         | FG Color   |
| `text-decoration-color` | FG Color   |
| `fill` (SVG)            | FG Color   |
| `stroke` (SVG)          | FG Color   |
| `caret-color`           | FG Color   |
| `column-rule-color`     | FG Color   |

> **Note**: For `box-shadow`, do **not** use color tokens. Use `--db-elevation-*` tokens instead — see [box-shadow → elevation tokens](#box-shadow--use-elevation-tokens) below.

### box-shadow → use elevation tokens

Do **not** use color tokens for `box-shadow`. Instead, use the `--db-elevation-*` tokens which provide complete, pre-defined shadow values:

| Token | CSS                      | SCSS               | Use for                       |
| ----- | ------------------------ | ------------------ | ----------------------------- |
| `sm`  | `var(--db-elevation-sm)` | `$db-elevation-sm` | Subtle shadow (e.g. pressed)  |
| `md`  | `var(--db-elevation-md)` | `$db-elevation-md` | Default shadow (e.g. cards)   |
| `lg`  | `var(--db-elevation-lg)` | `$db-elevation-lg` | Prominent shadow (e.g. hover) |

```css
/* ❌ WRONG: hardcoded box-shadow */
.my-card {
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* ❌ WRONG: color token in box-shadow */
.my-card {
	box-shadow: 0 2px 4px var(--db-brand-on-bg-basic-emphasis-70-default);
}

/* ✅ CORRECT: use elevation token */
.my-card {
	box-shadow: var(--db-elevation-md);
}
```

For interactive elevation (hover/active states), use the `data-interactive="elevation"` attribute or the `.db-interactive-elevation` class, which automatically applies `md` → `lg` on hover → `sm` on active.

### Color Examples

#### CSS

```css
/* ❌ Before */
.my-element {
	background-color: var(--db-color-red-300);
	color: var(--db-color-red-300);
	border-color: var(--db-color-red-300);
}

/* ✅ After */
.my-element {
	background-color: var(--db-brand-bg-vibrant-default);
	color: var(--db-brand-on-bg-basic-emphasis-50-default);
	border-color: var(--db-brand-on-bg-basic-emphasis-50-default);
}
```

#### SCSS

```scss
// ❌ Before
.my-element {
	background-color: $db-color-red-300;
	color: $db-color-red-300;
}

// ✅ After
.my-element {
	background-color: $db-brand-bg-vibrant-default;
	color: $db-brand-on-bg-basic-emphasis-50-default;
}
```

#### Vue SFC

```vue
<!-- ❌ Before -->
<template>
	<div
		style="background-color: var(--db-color-red-300); color: var(--db-color-red-300)"
	>
		Content
	</div>
</template>

<!-- ✅ After -->
<template>
	<div
		style="background-color: var(--db-brand-bg-vibrant-default); color: var(--db-brand-on-bg-basic-emphasis-50-default)"
	>
		Content
	</div>
</template>
```

#### React / TSX

```tsx
// ❌ Before
<div style={{ backgroundColor: 'var(--db-color-red-300)', color: 'var(--db-color-red-300)' }}>

// ✅ After
<div style={{ backgroundColor: 'var(--db-brand-bg-vibrant-default)', color: 'var(--db-brand-on-bg-basic-emphasis-50-default)' }}>
```

## Inline Styles Migration

All inline `style` attributes should be replaced wherever possible. Move styles into CSS/SCSS files or use DB UX component props instead.

Inline styles bypass the design system's theming, density, and responsive behavior. They also make it harder to maintain consistency across the application.

### Why remove inline styles

- They **override** design system tokens and component styles
- They **break** dark mode, density switching, and responsive adaptations
- They **cannot** be linted or statically analyzed for design system compliance

### How to migrate

1. **If a DB UX component prop exists** — use it instead of the style (e.g. `variant`, `size`)
2. **If a design token exists** — move the declaration to a CSS/SCSS class using the token
3. **If neither exists** — move the declaration to a CSS/SCSS class, but still use tokens for colors, spacing, and typography

```tsx
// ❌ WRONG: inline styles with hardcoded values
<div style={{ padding: '16px', margin: '8px', color: '#ec0016', fontSize: '14px' }}>
	Content
</div>

// ✅ CORRECT: use a CSS class with design tokens
<div className="my-element">
	Content
</div>
```

```css
/* ✅ The CSS class uses tokens */
.my-element {
	padding: var(--db-spacing-fixed-md);
	margin: var(--db-spacing-fixed-xs);
	color: var(--db-brand-on-bg-basic-emphasis-70-default);
	font: var(--db-type-body-sm);
}
```

## Spacing Migration

All hardcoded `px` and `rem` values for spacing properties must be replaced with `--db-spacing-fixed-*` or `--db-spacing-responsive-*` tokens.

### Affected CSS properties

| CSS property                                  | Replace hardcoded values with spacing tokens |
| --------------------------------------------- | -------------------------------------------- |
| `padding`                                     | `var(--db-spacing-fixed-*)`                  |
| `padding-block`                               | `var(--db-spacing-fixed-*)`                  |
| `padding-inline`                              | `var(--db-spacing-fixed-*)`                  |
| `margin`                                      | `var(--db-spacing-fixed-*)`                  |
| `margin-block`                                | `var(--db-spacing-fixed-*)`                  |
| `margin-inline`                               | `var(--db-spacing-fixed-*)`                  |
| `gap`                                         | `var(--db-spacing-fixed-*)`                  |
| `row-gap`                                     | `var(--db-spacing-fixed-*)`                  |
| `column-gap`                                  | `var(--db-spacing-fixed-*)`                  |
| `inset` / `top` / `right` / `bottom` / `left` | `var(--db-spacing-fixed-*)`                  |

### Available fixed spacing tokens (regular density)

| Token                         | Value (regular)  |
| ----------------------------- | ---------------- |
| `var(--db-spacing-fixed-3xs)` | `0.125rem` (2px) |
| `var(--db-spacing-fixed-2xs)` | `0.25rem` (4px)  |
| `var(--db-spacing-fixed-xs)`  | `0.5rem` (8px)   |
| `var(--db-spacing-fixed-sm)`  | `0.75rem` (12px) |
| `var(--db-spacing-fixed-md)`  | `1rem` (16px)    |
| `var(--db-spacing-fixed-lg)`  | `1.5rem` (24px)  |
| `var(--db-spacing-fixed-xl)`  | `2rem` (32px)    |
| `var(--db-spacing-fixed-2xl)` | `3rem` (48px)    |
| `var(--db-spacing-fixed-3xl)` | `5rem` (80px)    |

> **Note**: The actual pixel values depend on the active density (regular, functional, expressive). The tokens automatically adapt — hardcoded values do not.

SCSS equivalents use the `$db-spacing-fixed-*` prefix, e.g. `$db-spacing-fixed-md`.

For spacing that should scale with breakpoints, use `--db-spacing-responsive-*` tokens instead.

### Examples

#### CSS

```css
/* ❌ Before */
.my-element {
	padding: 16px;
	margin-block: 0.5rem;
	gap: 24px;
}

/* ✅ After */
.my-element {
	padding: var(--db-spacing-fixed-md);
	margin-block: var(--db-spacing-fixed-xs);
	gap: var(--db-spacing-fixed-lg);
}
```

#### SCSS

```scss
// ❌ Before
.my-element {
	padding: 1rem;
	margin: 0.5rem;
}

// ✅ After
.my-element {
	padding: $db-spacing-fixed-md;
	margin: $db-spacing-fixed-xs;
}
```

#### React / TSX

```tsx
// ❌ WRONG: inline style with hardcoded spacing
<div style={{ padding: '16px', gap: '8px' }}>

// ✅ CORRECT: CSS class with tokens (preferred)
<div className="my-layout">

// ✅ ACCEPTABLE: inline style with tokens (if class is not possible)
<div style={{ padding: 'var(--db-spacing-fixed-md)', gap: 'var(--db-spacing-fixed-xs)' }}>
```

### Approximate spacing mapping

Pick the closest token. If a value falls between two tokens, round to the nearest one.

| Hardcoded value    | Suggested token               |
| ------------------ | ----------------------------- |
| `2px` / `0.125rem` | `var(--db-spacing-fixed-3xs)` |
| `4px` / `0.25rem`  | `var(--db-spacing-fixed-2xs)` |
| `8px` / `0.5rem`   | `var(--db-spacing-fixed-xs)`  |
| `12px` / `0.75rem` | `var(--db-spacing-fixed-sm)`  |
| `16px` / `1rem`    | `var(--db-spacing-fixed-md)`  |
| `24px` / `1.5rem`  | `var(--db-spacing-fixed-lg)`  |
| `32px` / `2rem`    | `var(--db-spacing-fixed-xl)`  |
| `48px` / `3rem`    | `var(--db-spacing-fixed-2xl)` |
| `80px` / `5rem`    | `var(--db-spacing-fixed-3xl)` |
