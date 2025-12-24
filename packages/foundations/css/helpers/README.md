# CSS Migration - Pilot Implementation

This directory contains migrated CSS files using modern CSS features available in Chromium-based browsers.

## Migration Patterns

### 1. Sass Placeholders → Container Style Queries

**Before (SASS):**
```scss
%clearfix::after {
  clear: both;
  content: " ";
  display: table;
}

// Usage
.element {
  @extend %clearfix;
}
```

**After (CSS):**
```css
@container style(--use-clearfix: true) {
  &::after {
    clear: both;
    content: " ";
    display: table;
  }
}

/* Usage */
.element {
  container-type: inline-size;
  --use-clearfix: true;
}
```

### 2. Sass Mixins with Parameters → Container Style Queries + CSS Custom Properties

**Before (SASS):**
```scss
@mixin display($value) {
  &:not([hidden]) {
    display: $value;
  }
}

// Usage
.element {
  @include display(flex);
}
```

**After (CSS):**
```css
@container style(--use-display: true) {
  &:not([hidden]) {
    display: var(--display-value, block);
  }
}

/* Usage */
.element {
  container-type: inline-size;
  --use-display: true;
  --display-value: flex;
}
```

## Migrated Files

- `_clearfix.css` - Clearfix pattern (was Sass placeholder)
- `_a11y.css` - Visually hidden pattern (was Sass placeholder)  
- `_display.css` - Display mixin with parameter (was Sass mixin)

## Browser Support

These features require Chromium-based browsers with support for:
- CSS Nesting (Chrome 112+)
- Container Style Queries (Chrome 111+)
- CSS Custom Properties (Universal support)

For non-Chromium browsers, PostCSS plugins will be used in a later phase to generate fallback files.

## Usage Notes

When using container style queries, elements need:
1. `container-type: inline-size` (or other container type)
2. Appropriate CSS custom property set to `true` to trigger the pattern
3. Additional custom properties for parameters (if needed)

## Next Steps

- Migrate more helper utilities
- Update consuming files to use CSS patterns
- Configure build system for CSS processing
- Add PostCSS plugins for browser compatibility layer
