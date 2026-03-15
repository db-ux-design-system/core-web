# SASS to PostCSS Migration Specification

## Overview

This document outlines the evaluation and migration plan for moving from SASS (SCSS) to PostCSS, enabling modern CSS features while maintaining backwards compatibility.

## Benefits of Migration

1. **Modern CSS Support**: Write "modern" CSS that can be used directly by chromium-based browsers
2. **Simpler Build Process**: No SASS compilation step needed during development, enabling instant soft-reload
3. **Native CSS Features**: Leverage native CSS features like:
    - [CSS nested selectors](https://caniuse.com/css-nesting) (already well-supported)
    - [CSS `if()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
    - [CSS custom functions (`@function`)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@function)
4. **Dual Output**: Provide both modern (chromium-only) and legacy CSS bundles

## Current SCSS Features Analysis

### Features Found in Codebase

| Feature                        | Count     | Migration Approach                                                                                                              |
| ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `@use`                         | Many      | Replace with CSS `@import` via postcss-import                                                                                   |
| `@forward`                     | Many      | Replace with CSS `@import`                                                                                                      |
| `@mixin` / `@include`          | ~31 files | [CSS `@mixin` & `@apply`](https://drafts.csswg.org/css-mixins-1/) (native, emerging standard)                                   |
| `%placeholder` / `@extend`     | ~67 files | [CSS `@macro` & `@apply`](https://github.com/nickvdh/csswg-drafts/blob/css-macro-apply/css-mixins-1/Overview.bs) (native draft) |
| `@function`                    | ~7 files  | [CSS `@function`](https://developer.mozilla.org/en-US/docs/Web/CSS/@function) (native)                                          |
| `@if` / `@else`                | ~10 files | [CSS `if()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions/if) function (native)                               |
| `@each`                        | ~23 files | [`postcss-each`](https://www.npmjs.com/package/postcss-each) plugin (until native support)                                      |
| Sass variables `$var`          | Many      | CSS Custom Properties (already mapped)                                                                                          |
| String interpolation `#{$var}` | Many      | CSS variable syntax                                                                                                             |
| `sass:math` module             | Few       | CSS `calc()` (native)                                                                                                           |
| `sass:map` module              | Few       | Preprocessing required                                                                                                          |

### Native CSS Features for Mixins and Macros

The CSS Working Group is developing native equivalents for Sass mixins and placeholders:

1. **CSS `@mixin` & `@apply`** ([CSS Mixins specification](https://drafts.csswg.org/css-mixins-1/)):
    - `@mixin` defines reusable style blocks (like Sass `@mixin`)
    - `@apply` applies a mixin's styles (like Sass `@include`)

2. **CSS `@macro` & `@apply`** (emerging proposal):
    - `@macro` defines reusable style blocks that can be "inlined" (like Sass `%placeholder`)
    - Works with `@apply` for applying the styles (like Sass `@extend`)

These native CSS features are emerging and will eventually replace the need for PostCSS plugins. During the transition period, [`postcss-transform-mixins`](https://www.npmjs.com/package/postcss-transform-mixins) can be used to transform native syntax for older browsers.

### Complex Features Requiring Special Handling

1. **`@each` loops**: Used to generate repetitive CSS (e.g., color variants, density classes)
    - Use [`postcss-each`](https://www.npmjs.com/package/postcss-each) PostCSS plugin for loop support

2. **Sass `sass:map` functions**: Used for dynamic lookups
    - Will need preprocessing or manual expansion

3. **String interpolation**: `#{$variable}` syntax
    - Simple cases: Convert to CSS variable reference
    - Complex cases: May need preprocessing

## PostCSS Plugins Required

### Core Plugins (Transition Period)

These plugins are needed during the transition period until native CSS features reach broader browser support:

1. **`postcss-import`** - Handle `@import` statements (replaces `@use`/`@forward`)
2. **`postcss-transform-mixins`** - Transform native CSS `@mixin`/`@macro`/`@apply` for legacy browsers
3. **[`postcss-each`](https://www.npmjs.com/package/postcss-each)** - Support `@each` loops (no native CSS equivalent yet)

### Plugins to Phase Out

As native CSS support improves, these plugins can be removed:

- `postcss-mixins` → replaced by native CSS `@mixin` & `@apply`
- `postcss-extend-rule` → replaced by native CSS `@macro` & `@apply`

### Compatibility Plugins (for legacy output)

1. **`postcss-if-function`** - Transform CSS `if()` to compatible CSS

### NOT Required

- `postcss-nesting` - Native CSS nesting is well-supported
- `postcss-functions` - Use native CSS `@function` instead

## Migration Syntax Changes

### 1. Module Imports

**Before (SCSS):**

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@use "../../styles/internal/component";
@forward "defaults/default-root";
```

**After (CSS/PostCSS):**

```css
@import "@db-ux/core-foundations/build/styles/variables.css";
@import "../../styles/internal/component.css";
@import "defaults/default-root.css";
```

### 2. Mixins (`@mixin` & `@apply`)

**Before (SCSS):**

```scss
@mixin cursor-pointer() {
	cursor: var(--db-overwrite-cursor, pointer);
	@content;
}

.button {
	@include cursor-pointer {
		background: blue;
	}
}
```

**After (Native CSS):**

```css
@mixin --cursor-pointer {
	cursor: var(--db-overwrite-cursor, pointer);
}

.button {
	@apply --cursor-pointer;
	background: blue;
}
```

_Note: Native CSS `@mixin` uses dashed-ident names (starting with `--`). The `@apply` rule applies the mixin styles._

### 3. Placeholders and @extend (`@macro` & `@apply`)

**Before (SCSS):**

```scss
%a11y-visually-hidden {
	clip: rect(0, 0, 0, 0) !important;
	position: absolute !important;
}

.sr-only {
	@extend %a11y-visually-hidden;
}
```

**After (Native CSS):**

```css
@macro --a11y-visually-hidden {
	clip: rect(0, 0, 0, 0) !important;
	position: absolute !important;
}

.sr-only {
	@apply --a11y-visually-hidden;
}
```

_Note: Native CSS `@macro` is similar to Sass placeholders. The `@apply` rule applies the macro's styles inline._

### 4. Conditionals (`if()` function)

**Before (SCSS):**

```scss
@if $hovered {
	background-color: #{$hovered};
}
```

**After (Native CSS):**

```css
/* For simple value conditionals using native CSS if() function: */
background-color: if(style(--hovered: true), var(--hovered-color), transparent);

/* Complex conditionals may need preprocessing */
```

_Note: The native CSS `if()` function evaluates conditions inline. For legacy browser support, use `postcss-if-function` to transform._

### 5. Variables

**Before (SCSS):**

```scss
$db-sizing-md: var(--db-sizing-md);
color: #{$db-sizing-md};
```

**After (Native CSS):**

```css
/* Most SCSS variables already map to CSS Custom Properties */
color: var(--db-sizing-md);
```

### 6. Functions (`@function`)

**Before (SCSS):**

```scss
@function px-to-rem($pxValue) {
	@return ($pxValue * 0.0625) * 1rem;
}
```

**After (Native CSS):**

```css
@function --px-to-rem(--px-value) {
	result: calc(var(--px-value) * 0.0625 * 1rem);
}
```

_Note: Native CSS `@function` uses dashed-ident names and the `result` descriptor to return values._

### 7. Comments

**Before (SCSS):**

```scss
// Single line comment
/* Multi-line comment */
```

**After (CSS):**

```css
/* All comments must be CSS-style */
/* Multi-line comment */
```

## Build Configuration

### Dual Output Strategy

Generate two CSS bundles:

1. **Modern (`.chromium.css`)**:
    - Minimal PostCSS plugins (only `postcss-import`, `postcss-each`)
    - Preserves native CSS features (`@mixin`, `@macro`, `@apply`, `if()`, `@function`, nesting)
    - For modern browsers (Chromium-based)

2. **Legacy (`.css`)**:
    - Full PostCSS transformation pipeline
    - Transforms native CSS features for compatibility
    - For broader browser support

### PostCSS Configuration Example

```javascript
// postcss.config.chromium.cjs (modern browsers - minimal transformation)
module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-each"), // until @each has native CSS support
		require("cssnano")({ preset: ["default", { svgo: false }] })
	]
};

// postcss.config.cjs (legacy browsers - full transformation)
module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-each"),
		require("postcss-transform-mixins"), // transforms @mixin/@macro/@apply for legacy browsers
		require("postcss-if-function"), // transforms if() for legacy browsers
		require("cssnano")({ preset: ["default", { svgo: false }] })
	]
};
```

## Migration Script

A migration script has been added to `@db-ux/core-migration` package with type `sass_to_postcss`.

### Usage

```bash
npx @db-ux/core-migration migration --type sass_to_postcss --src ./packages/foundations/scss --dryRun
```

### What the Script Does

1. Converts `@use` to `@import`
2. Converts `@forward` to `@import`
3. Converts Sass `@mixin name()` to native CSS `@mixin --name`
4. Converts Sass `@include name` to native CSS `@apply --name`
5. Converts Sass `%placeholder` to native CSS `@macro --placeholder`
6. Converts Sass `@extend %placeholder` to native CSS `@apply --placeholder`
7. Converts SCSS comments `//` to CSS comments `/* */`
8. Updates file extensions in imports (`.scss` → `.css`)
9. Converts namespace variable references to CSS custom properties

## Phased Migration Approach

### Phase 1: Setup (Current)

- [x] Document migration specification
- [x] Create migration script prototype
- [ ] Add PostCSS plugins to dependencies

### Phase 2: Foundation Migration

- [ ] Migrate `packages/foundations/scss` to CSS
- [ ] Update build scripts
- [ ] Test both output bundles

### Phase 3: Components Migration

- [ ] Migrate `packages/components/src` styles to CSS
- [ ] Update component build process
- [ ] Verify all components render correctly

### Phase 4: Showcase Updates

- [ ] Update showcase applications
- [ ] Verify development workflow (soft-reload)

### Phase 5: Documentation

- [ ] Update consumer documentation
- [ ] Provide migration guide for downstream projects

## Challenges and Considerations

### 1. `@each` Loops

The codebase uses `@each` for generating variants. This can be handled using the [`postcss-each`](https://www.npmjs.com/package/postcss-each) plugin which provides similar loop functionality to Sass.

### 2. Sass Functions with Logic

Some functions use conditionals and math. These may need:

- Conversion to CSS `@function` where supported
- Preprocessing with Node.js
- Manual refactoring

### 3. Namespace References

Current code uses namespaced variables like `variables.$db-sizing-md`. PostCSS imports don't support namespaces - variables become global after import.

### 4. Build Time

PostCSS is generally faster than Sass, but the dual-output strategy doubles the build.

## Conclusion

Migration from SASS to PostCSS is feasible and beneficial. The main challenges are:

1. Complex conditional logic in mixins
2. Sass math and map functions

A phased approach is recommended, starting with foundations and progressively migrating components. The migration script provides a foundation for automating repetitive transformations.
