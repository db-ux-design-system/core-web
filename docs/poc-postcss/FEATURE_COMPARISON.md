# SASS vs PostCSS Feature Comparison

This document compares SASS features with their PostCSS equivalents for the migration.

## Feature Comparison Matrix

| SASS Feature | PostCSS Equivalent | Conversion Difficulty | Notes |
| ------------ | ------------------ | --------------------- | ----- |
| `@use "file"` | `@import "file.css"` | ⚠️ Medium | Loses namespacing |
| `@forward` | `@import` | ⚠️ Medium | Different semantics |
| `@import` | `@import` | ✅ Easy | Direct replacement |
| `$variable` | CSS Custom Properties or postcss-simple-vars | ✅ Easy | CSS custom properties preferred |
| `@mixin name { }` | `@define-mixin name { }` | ✅ Easy | Different syntax |
| `@include mixin` | `@mixin mixin` | ✅ Easy | Simpler syntax |
| `@function` | JavaScript in config | ⚠️ Medium | Requires JS code |
| `@if/@else` | Multiple approaches | ❌ Hard | No direct equivalent |
| `@extend %placeholder` | postcss-extend-rule | ⚠️ Medium | Different behavior |
| Nesting with `&` | Native CSS nesting | ✅ Easy | Same syntax |
| Math operations | Native CSS `calc()` | ✅ Easy | More verbose |
| `sass:math` | CSS calc() or JS | ⚠️ Medium | Less convenient |
| `sass:map` | JavaScript | ❌ Hard | Major refactor needed |
| `sass:list` | JavaScript | ❌ Hard | Major refactor needed |
| Color functions | CSS color functions or plugins | ⚠️ Medium | Limited support |
| String interpolation | Template literals in JS | ⚠️ Medium | Different approach |

## Detailed Conversions

### Variables

#### SASS
```scss
$primary-color: #ec0016;
$spacing-sm: 8px;

.button {
  color: $primary-color;
  padding: $spacing-sm;
}
```

#### PostCSS Option 1: CSS Custom Properties (Recommended)
```css
:root {
  --primary-color: #ec0016;
  --spacing-sm: 8px;
}

.button {
  color: var(--primary-color);
  padding: var(--spacing-sm);
}
```

#### PostCSS Option 2: postcss-simple-vars
```css
$primary-color: #ec0016;
$spacing-sm: 8px;

.button {
  color: $primary-color;
  padding: $spacing-sm;
}
```

### Mixins

#### SASS
```scss
@mixin button-base($size) {
  padding: $size;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.8;
  }
}

.button {
  @include button-base(8px);
}
```

#### PostCSS
```css
@define-mixin button-base $size {
  padding: $size;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.8;
  }
}

.button {
  @mixin button-base 8px;
}
```

### Mixins with @content

#### SASS
```scss
@mixin hover {
  &:hover:not(:disabled) {
    @content;
  }
}

.button {
  @include hover {
    background: blue;
  }
}
```

#### PostCSS
```css
@define-mixin hover {
  &:hover:not(:disabled) {
    @mixin-content;
  }
}

.button {
  @mixin hover {
    background: blue;
  }
}
```

### Conditional Logic (@if)

#### SASS
```scss
@mixin divider($position: top) {
  &::before {
    content: "";
    position: absolute;
    
    @if $position == top {
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
    } @else if $position == bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
    }
  }
}
```

#### PostCSS Approach 1: Separate Mixins
```css
@define-mixin divider-top {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
  }
}

@define-mixin divider-bottom {
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
  }
}
```

#### PostCSS Approach 2: CSS Custom Properties
```css
.divider {
  --divider-top: auto;
  --divider-bottom: auto;
  --divider-height: 1px;
  
  &::before {
    content: "";
    position: absolute;
    top: var(--divider-top);
    bottom: var(--divider-bottom);
    left: 0;
    right: 0;
    height: var(--divider-height);
  }
}

.divider-top {
  --divider-top: 0;
}

.divider-bottom {
  --divider-bottom: 0;
}
```

### Functions

#### SASS
```scss
@function px-to-rem($px) {
  @return ($px / 16) * 1rem;
}

.element {
  padding: px-to-rem(24); // outputs: 1.5rem
}
```

#### PostCSS with postcss-functions
```javascript
// In postcss.config.js
require('postcss-functions')({
  functions: {
    'px-to-rem': function(px) {
      return (parseFloat(px) / 16) + 'rem';
    }
  }
})
```

```css
.element {
  padding: px-to-rem(24); /* outputs: 1.5rem */
}
```

#### Pure CSS Alternative
```css
.element {
  /* Use calc() for simple math */
  padding: calc(24 / 16 * 1rem); /* outputs: 1.5rem */
  
  /* Or predefine common values as custom properties */
  padding: var(--spacing-md); /* 1.5rem */
}
```

### @extend and Placeholders

#### SASS
```scss
%button-base {
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 4px;
}

.button-primary {
  @extend %button-base;
  background: blue;
}

.button-secondary {
  @extend %button-base;
  background: gray;
}
```

#### PostCSS with postcss-extend-rule
```css
%button-base {
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 4px;
}

.button-primary {
  @extend %button-base;
  background: blue;
}

.button-secondary {
  @extend %button-base;
  background: gray;
}
```

#### CSS Alternative: Utility Classes
```css
.button-base {
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 4px;
}

.button-primary {
  background: blue;
}

.button-secondary {
  background: gray;
}
```

```html
<!-- HTML needs to include both classes -->
<button class="button-base button-primary">Primary</button>
<button class="button-base button-secondary">Secondary</button>
```

### Module System

#### SASS
```scss
// _colors.scss
$primary: #ec0016;
$secondary: #282d37;

// _variables.scss
$spacing-sm: 8px;

// button.scss
@use 'colors';
@use 'variables';

.button {
  color: colors.$primary;
  padding: variables.$spacing-sm;
}
```

#### PostCSS
```css
/* _colors.css */
:root {
  --primary: #ec0016;
  --secondary: #282d37;
}

/* _variables.css */
:root {
  --spacing-sm: 8px;
}

/* button.css */
@import '_colors.css';
@import '_variables.css';

.button {
  color: var(--primary);
  padding: var(--spacing-sm);
}
```

**⚠️ Note**: PostCSS `@import` doesn't provide namespacing like Sass `@use`, so variable names must be globally unique.

### Loops and Iteration

#### SASS
```scss
@each $size in (sm, md, lg) {
  .button-#{$size} {
    padding: #{$size}-padding;
  }
}
```

#### PostCSS
This is very difficult in PostCSS. Options:
1. **Write out each variant manually**
2. **Use a build script to generate CSS**
3. **Use JavaScript in postcss.config.js to generate rules**

**Manual approach:**
```css
.button-sm {
  padding: var(--sm-padding);
}

.button-md {
  padding: var(--md-padding);
}

.button-lg {
  padding: var(--lg-padding);
}
```

## Not Convertible

Some SASS features have no good PostCSS equivalent:

1. **Dynamic placeholder extension**: `@extend %db-#{$variant}-variables`
2. **Complex map operations**: `sass:map`
3. **Complex list operations**: `sass:list`
4. **Meta-programming features**: `@debug`, `@warn`, `@error`

These require either:
- Complete redesign of the pattern
- Keeping Sass for these specific files
- Using JavaScript build scripts

## Performance Comparison

| Tool | Parse Time (approx) | Transform Time | Total |
| ---- | ------------------- | -------------- | ----- |
| Sass (Dart) | Fast | Fast | ~1-2s for 192 files |
| PostCSS | Medium | Medium | ~2-4s for 192 files |
| Lightning CSS | Very Fast | Very Fast | ~0.1-0.2s |

**Note**: Lightning CSS is fastest but doesn't support mixins/functions, making it unsuitable for direct SASS replacement without major refactoring.

## Build Process Comparison

### Current (SASS)

```text
SCSS → Sass Compiler → CSS → PostCSS (minify) → Output CSS
```

### Proposed (PostCSS)

```text
CSS → PostCSS (import, mixins, nesting, minify) → Output CSS
```

### Alternative (Hybrid)

```text
CSS → PostCSS (process) → Lightning CSS (minify, prefix) → Output CSS
```

## Conclusion

- **Easy conversions**: Variables (to CSS custom props), simple mixins, nesting
- **Medium complexity**: Functions, @extend, file organization
- **Hard conversions**: Conditional logic, dynamic features, map/list operations

**Realistic assessment**: 60-70% of codebase could be converted with moderate effort. The remaining 30-40% would require significant refactoring or design changes.
