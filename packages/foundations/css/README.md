# SCSS to CSS Migration - Pilot Implementation

This directory contains a pilot implementation of migrating from SASS to modern CSS using features available in Chromium-based browsers.

## Overview

This pilot migration demonstrates the feasibility of using modern CSS features to replace SASS functionality:

- **Container Style Queries** - Replace Sass placeholders (`@extend`) and mixins without parameters
- **CSS Custom Properties** - Replace Sass variables and provide mixin parameters
- **CSS Nesting** - Already supported, direct replacement for Sass nesting

## Migrated Files

### Helpers (`/css/helpers/`)
- `_clearfix.css` - Clearfix pattern using `@container style(--use-clearfix: true)`
- `_a11y.css` - Visually hidden pattern using `@container style(--use-a11y-visually-hidden: true)`
- `_display.css` - Display mixin pattern using container query + CSS custom property for parameter
- `_index.css` - Index file importing all helpers
- `README.md` - Detailed migration patterns and usage examples

### Defaults (`/css/defaults/`)
- `default-icons.css` - Example of migrated icon defaults showing practical usage

## Migration Patterns

### Pattern 1: Sass Placeholder → Container Style Query

```scss
// BEFORE (SASS)
%clearfix::after {
  clear: both;
  content: " ";
  display: table;
}

.element {
  @extend %clearfix;
}
```

```css
/* AFTER (CSS) */
@container style(--use-clearfix: true) {
  &::after {
    clear: both;
    content: " ";
    display: table;
  }
}

.element {
  container-type: inline-size;
  --use-clearfix: true;
}
```

### Pattern 2: Sass Mixin with Parameters → Container Style Query + CSS Custom Properties

```scss
// BEFORE (SASS)
@mixin display($value) {
  &:not([hidden]) {
    display: $value;
  }
}

.element {
  @include display(flex);
}
```

```css
/* AFTER (CSS) */
@container style(--use-display: true) {
  &:not([hidden]) {
    display: var(--display-value, block);
  }
}

.element {
  container-type: inline-size;
  --use-display: true;
  --display-value: flex;
}
```

## Browser Support

**Chromium-based browsers only (initial phase):**
- Chrome 111+ (Container Style Queries)
- Chrome 112+ (CSS Nesting)
- Edge 111+
- Opera 97+

**Future phase:** PostCSS plugins will generate fallback files for non-Chromium browsers.

## Key Differences from SASS

1. **Container Type Required**: Elements using container style queries must have `container-type` set
2. **Explicit Triggering**: Patterns are triggered by setting CSS custom properties to `true`
3. **Parameter Passing**: Uses CSS custom properties instead of function/mixin parameters
4. **No Conditional Logic**: CSS `if()` and `@function` are used where available in Chromium

## Usage Example

```html
<style>
  @import "css/helpers/_index.css";
  
  .my-component {
    /* Apply clearfix pattern */
    container-type: inline-size;
    --use-clearfix: true;
  }
  
  .my-flex-component {
    /* Apply display pattern with parameter */
    container-type: inline-size;
    --use-display: true;
    --display-value: flex;
  }
  
  .visually-hidden-text {
    /* Apply a11y visually hidden pattern */
    container-type: inline-size;
    --use-a11y-visually-hidden: true;
  }
</style>
```

## Implementation Status

✅ **Completed:**
- 3 helper utilities migrated
- 1 defaults file migrated
- Migration patterns documented
- Usage examples created

🚧 **In Progress:**
- Full migration of remaining files
- Build system updates
- PostCSS plugin configuration for browser fallbacks

⏳ **Planned:**
- Migrate remaining helpers
- Migrate core styles (colors, variables, etc.)
- Migrate component styles
- Add comprehensive testing
- Configure build pipeline
- Create browser compatibility layer

## Next Steps

1. Review pilot implementation
2. Test in Chromium-based browsers
3. Gather feedback on approach
4. Expand migration to more files
5. Configure build system for CSS processing
6. Add PostCSS plugins for browser compatibility

## Notes

- This is a **pilot implementation** for evaluation
- **Not production-ready** - requires testing and build system updates
- Demonstrates feasibility of modern CSS approach
- Full migration would affect 192 SCSS files across the codebase
- Requires coordination with consuming applications

## Related Documentation

- Original evaluation: `/docs/SASS_TO_POSTCSS_EVALUATION.md`
- Feature comparison: `/docs/poc-postcss/FEATURE_COMPARISON.md`
- Migration guide: `/docs/poc-postcss/MIGRATION_GUIDE.md`
