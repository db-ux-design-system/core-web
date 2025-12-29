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

| Feature                        | Count     | Migration Approach                            |
| ------------------------------ | --------- | --------------------------------------------- |
| `@use`                         | Many      | Replace with CSS `@import` via postcss-import |
| `@forward`                     | Many      | Replace with CSS `@import`                    |
| `@mixin` / `@include`          | ~31 files | postcss-mixins plugin                         |
| `@extend` / `%placeholder`     | ~67 files | postcss-extend-rule plugin                    |
| `@function`                    | ~7 files  | CSS `@function` (native)                      |
| `@if` / `@else`                | ~10 files | CSS `if()` function                           |
| `@each`                        | ~23 files | Pre-generated or CSS future syntax            |
| Sass variables `$var`          | Many      | CSS Custom Properties (already mapped)        |
| String interpolation `#{$var}` | Many      | CSS variable syntax                           |
| `sass:math` module             | Few       | CSS calc() or preprocessing                   |
| `sass:map` module              | Few       | Preprocessing required                        |

### Complex Features Requiring Special Handling

1. **`@each` loops**: Used to generate repetitive CSS (e.g., color variants, density classes)
    - Option A: Pre-generate these during build
    - Option B: Use PostCSS plugin for loops
    - Option C: Wait for CSS `@for` / `@each` proposals

2. **Sass `sass:map` functions**: Used for dynamic lookups
    - Will need preprocessing or manual expansion

3. **String interpolation**: `#{$variable}` syntax
    - Simple cases: Convert to CSS variable reference
    - Complex cases: May need preprocessing

## PostCSS Plugins Required

### Core Plugins

1. **`postcss-import`** - Handle `@import` statements (replaces `@use`/`@forward`)
2. **`postcss-mixins`** - Support `@define-mixin` and `@mixin`
3. **`postcss-extend-rule`** - Support `@extend` with placeholders

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

### 2. Mixins

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

**After (CSS/PostCSS):**

```css
@define-mixin cursor-pointer {
	cursor: var(--db-overwrite-cursor, pointer);
	@mixin-content;
}

.button {
	@mixin cursor-pointer {
		background: blue;
	}
}
```

### 3. Placeholders and @extend

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

**After (CSS/PostCSS):**

```css
%a11y-visually-hidden {
	clip: rect(0, 0, 0, 0) !important;
	position: absolute !important;
}

.sr-only {
	@extend %a11y-visually-hidden;
}
```

_Note: postcss-extend-rule maintains SCSS-like syntax_

### 4. Conditionals

**Before (SCSS):**

```scss
@if $hovered {
	background-color: #{$hovered};
}
```

**After (CSS/PostCSS):**

```css
/* For simple value conditionals: */
background-color: if(style(--hovered: true), var(--hovered-color), transparent);

/* Complex conditionals may need preprocessing */
```

### 5. Variables

**Before (SCSS):**

```scss
$db-sizing-md: var(--db-sizing-md);
color: #{$db-sizing-md};
```

**After (CSS/PostCSS):**

```css
/* Most SCSS variables already map to CSS Custom Properties */
color: var(--db-sizing-md);
```

### 6. Functions

**Before (SCSS):**

```scss
@function px-to-rem($pxValue) {
	@return ($pxValue * 0.0625) * 1rem;
}
```

**After (CSS):**

```css
@function --px-to-rem(--px-value) {
	result: calc(var(--px-value) * 0.0625 * 1rem);
}
```

_Note: CSS functions have limited support currently_

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
    - Only uses `postcss-import`, `postcss-mixins`, `postcss-extend-rule`
    - Preserves native CSS features (`if()`, `@function`, nesting)
    - For modern browsers only

2. **Legacy (`.css`)**:
    - Uses all plugins including `postcss-if-function`
    - Transforms modern CSS to compatible syntax
    - For broader browser support

### PostCSS Configuration Example

```javascript
// postcss.config.chromium.cjs
module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-mixins"),
		require("postcss-extend-rule"),
		require("cssnano")({ preset: ["default", { svgo: false }] })
	]
};

// postcss.config.cjs (legacy)
module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-mixins"),
		require("postcss-extend-rule"),
		require("postcss-if-function"),
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

1. Renames `.scss` files to `.css`
2. Converts `@use` to `@import`
3. Converts `@forward` to `@import`
4. Converts `@mixin name()` to `@define-mixin name`
5. Converts `@include name` to `@mixin name`
6. Converts SCSS comments `//` to CSS comments `/* */`
7. Updates file extensions in imports

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

The codebase uses `@each` for generating variants. Options:

- Pre-generate during build with a Node.js script
- Use `postcss-each` plugin (not standard)
- Manually expand loops (not recommended for maintainability)

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

1. `@each` loops that generate variant classes
2. Complex conditional logic in mixins
3. Sass math and map functions

A phased approach is recommended, starting with foundations and progressively migrating components. The migration script provides a foundation for automating repetitive transformations.
