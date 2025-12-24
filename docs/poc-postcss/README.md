# PostCSS Migration Proof of Concept

This directory contains example conversions from SASS to PostCSS to demonstrate the migration approach.

## Files Converted

1. `_display.css` - Simple mixin conversion (from `helpers/_display.scss`)
2. `_divider.css` - Complex mixin with conditionals (from `helpers/_divider.scss`)

## Key Findings

### What Works Well

1. **Simple Mixins**: Direct conversion using `@define-mixin`
2. **CSS Nesting**: Already supported, syntax identical
3. **CSS Custom Properties**: Can replace most Sass variables

### Challenges Identified

1. **Conditional Logic in Mixins**: `@if` statements inside mixins require:
   - Creating separate mixins for each condition, OR
   - Redesigning to use CSS custom properties, OR
   - Using JavaScript-based PostCSS plugins for build-time logic

2. **Sass Functions**: Need JavaScript equivalents in PostCSS config

3. **@use Namespacing**: PostCSS `@import` doesn't provide namespacing
   - Risk of naming collisions
   - Need to be more careful with file organization

4. **@extend with Dynamic Names**: Very difficult to replicate
   ```scss
   @extend %db-#{$variant}-variables;
   ```

## PostCSS Configuration Required

```javascript
module.exports = {
	plugins: [
		require('postcss-import')({
			// Handle @import
		}),
		require('postcss-mixins')({
			// Handle @define-mixin and @mixin
		}),
		require('postcss-nesting')({
			// Handle CSS nesting
		}),
		require('cssnano')({
			// Minification (already in use)
		})
	]
};
```

## Migration Effort Estimate for These Files

- `_display.scss`: **5 minutes** (trivial)
- `_divider.scss`: **30-60 minutes** (requires design decision on approach)

## Recommendations

Based on this PoC:

1. **Simple utility mixins**: Easy to convert (< 5 min per file)
2. **Complex mixins with logic**: Require architectural decisions
3. **Full migration**: Would need 4-6 weeks for all 192 files
4. **Alternative**: Consider keeping Sass but using more CSS custom properties
