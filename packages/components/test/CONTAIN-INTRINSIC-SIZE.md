# CSS Contain-Intrinsic-Size Implementation for Test Pages

## Overview

This implementation evaluates and adds `contain-intrinsic-size` to test pages in the DB UX Design System to improve test performance, stability, and consistency.

## What is `contain-intrinsic-size`?

`contain-intrinsic-size` is a CSS property that allows developers to specify an intrinsic size to use for layout calculations when an element's content is not immediately available or when CSS containment is applied.

## Benefits for Test Pages

1. **Layout Stability**: Prevents layout shifts during test execution when content loads asynchronously
2. **Performance**: Reduces layout recalculations by containing layout changes to specific elements
3. **Consistency**: Ensures predictable sizing across different test environments and browsers
4. **Visual Regression Testing**: Provides more stable baseline for screenshot comparisons

## Implementation Details

### Files Modified

1. **`packages/components/test/playwright/boilerplate/index.html`**
   - Added `contain: layout size` and `contain-intrinsic-size: 800px 600px` to the `#root` element
   - Provides stable container for component testing

2. **`packages/components/test/import-styles/simple-button/test.css`**
   - Added `contain: layout` and `contain-intrinsic-size: 1200px 800px` to the body element
   - Ensures consistent rendering for component import tests

3. **`showcases/showcase-styles.css`**
   - Updated `.variants-card` containers to use `contain: layout` and `contain-intrinsic-size`
   - Replaced `min-block-size` with intrinsic sizing for better performance

4. **`packages/components/test/test-optimizations.css`** (New file)
   - Created reusable CSS classes for different test container types
   - Provides standardized containment patterns for various test scenarios

### CSS Classes Available

- `.test-container`, `#root`, `.component-test-wrapper`: General test containers (1024x768)
- `.form-test-container`: Form testing (600x400)
- `.button-test-container`: Button testing (300x200)
- `.showcase-test-container`: Component showcases (800x600)
- `.small-component-test`: Small components (200x100)
- `.full-page-test`: Full page testing (1200x900)

## Browser Support

`contain-intrinsic-size` is supported in:
- Chrome 83+
- Firefox 107+
- Safari 15.4+

This covers all modern browsers used in our testing environment.

## Usage Guidelines

### For New Test Pages

```html
<div id="root" class="test-container">
  <!-- Your test content -->
</div>
```

### For Specific Component Tests

```html
<div class="button-test-container">
  <button class="db-button">Test Button</button>
</div>
```

### For CSS-only Implementation

```css
.my-test-element {
  contain: layout;
  contain-intrinsic-size: 400px 300px;
}
```

## Migration Guide

Existing test pages will automatically benefit from the updated showcase styles. For new test pages:

1. Import `test-optimizations.css` if creating custom test pages
2. Use appropriate container classes based on test content size
3. Adjust intrinsic sizes if default values don't fit your use case

## Performance Impact

- **Positive**: Reduced layout thrashing during tests
- **Positive**: Faster initial rendering of test pages
- **Minimal**: Small CSS overhead for containment styles
- **None**: No impact on runtime functionality of components

## Future Enhancements

- Consider adding `contain: style` for further isolation if needed
- Evaluate `content-visibility: auto` for larger test suites
- Add viewport-based intrinsic sizes for responsive testing