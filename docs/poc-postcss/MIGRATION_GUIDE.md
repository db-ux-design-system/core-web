# SASS to PostCSS Migration Implementation Guide

## Overview

This guide provides step-by-step instructions for migrating from SASS to PostCSS in the DB UX Design System Core Web repository.

## Prerequisites

- Node.js 24 (as specified in `.nvmrc`)
- npm 11.5.2 (as specified in `package.json`)
- Familiarity with both SASS and PostCSS
- Understanding of the codebase structure

## Phase 1: Infrastructure Setup

### 1.1 Install PostCSS Plugins

```bash
# In root package.json (devDependencies)
npm install --save-dev \
  postcss-import \
  postcss-nesting \
  postcss-mixins \
  postcss-functions \
  postcss-extend-rule

# Optional but recommended
npm install --save-dev lightningcss
```

**Estimated time**: 5 minutes

### 1.2 Update PostCSS Configuration

Update `/packages/foundations/postcss.config.cjs`:

```javascript
module.exports = {
	plugins: [
		// Import must be first
		require('postcss-import')({
			path: ['node_modules', 'build/styles'],
			// Maintain partial file convention
			resolve: (id) => {
				// Handle Sass-style partial imports (files starting with _)
				if (!id.startsWith('_')) {
					return `_${id}`;
				}
				return id;
			}
		}),

		// Mixins before nesting
		require('postcss-mixins')({
			mixinsDir: './build/styles/mixins'
		}),

		// Native CSS nesting support
		require('postcss-nesting')(),

		// Functions (if needed)
		require('postcss-functions')({
			functions: {
				'px-to-rem': (px) => `${parseFloat(px) / 16}rem`,
				'px-to-em': (px) => `${parseFloat(px) / 16}em`
			}
		}),

		// Already in use
		require('cssnano')({
			preset: [
				'default',
				{
					svgo: false
				}
			]
		})
	]
};
```

Do the same for `/packages/components/postcss.config.cjs`.

**Estimated time**: 15 minutes

### 1.3 Update Build Scripts

#### Foundations Package

Update `/packages/foundations/package.json`:

```json
{
  "scripts": {
    "build:03_css": "postcss build/styles/**/*.css --replace --base build/styles",
    "build:05_postcss": "echo 'Already processed in build:03_css'"
  }
}
```

#### Components Package

Update `/packages/components/package.json`:

```json
{
  "scripts": {
    "build-style:01_sass": "postcss build/**/*.css --replace --base build",
    "build-style:02_postcss": "echo 'Already processed in previous step'"
  }
}
```

**Estimated time**: 10 minutes

### 1.4 Update Stylelint Configuration

Update `/.stylelintrc.json`:

```json
{
  "extends": ["stylelint-config-standard"],
  "plugins": [
    "stylelint-use-logical",
    "@double-great/stylelint-a11y",
    "@db-ux/core-stylelint"
  ],
  "rules": {
    // Keep existing rules
    // Remove SCSS-specific rules
  }
}
```

**Estimated time**: 10 minutes

### 1.5 Update Lint Script

Update root `package.json`:

```json
{
  "scripts": {
    "lint:stylelint": "stylelint **/*.css"
  }
}
```

**Estimated time**: 2 minutes

## Phase 2: File Conversion Strategy

### 2.1 Conversion Priority Order

1. **Simple utility files first** (no logic)
   - `/packages/foundations/scss/_normalize.scss`
   - Simple variable files

2. **Helper functions** (requires JavaScript equivalents)
   - `/packages/foundations/scss/helpers/_functions.scss`

3. **Simple mixins** (no conditionals)
   - `/packages/foundations/scss/helpers/_display.scss`
   - `/packages/foundations/scss/helpers/_focus.scss`

4. **Complex mixins** (with conditionals)
   - `/packages/foundations/scss/helpers/_divider.scss`
   - `/packages/foundations/scss/_screen-sizes.scss`

5. **Variables and tokens**
   - `/packages/foundations/scss/_variables.scss`
   - Color files

6. **Component styles** (one at a time)
   - Start with simplest components
   - `/packages/components/src/components/divider/divider.scss`
   - Progress to more complex ones

7. **Showcase styles** (last)

### 2.2 File Naming Convention

**Keep the underscore convention** for partial files:
- `_variables.scss` → `_variables.css`
- `button.scss` → `button.css`

### 2.3 Conversion Checklist Per File

For each file, follow this process:

- [ ] Create backup of original `.scss` file
- [ ] Rename `.scss` to `.css`
- [ ] Convert `@use` to `@import`
- [ ] Convert Sass variables to CSS custom properties
- [ ] Convert `@mixin` to `@define-mixin`
- [ ] Convert `@include` to `@mixin`
- [ ] Convert `@function` to JavaScript function in config
- [ ] Handle `@if/@else` logic (separate mixins or CSS custom properties)
- [ ] Convert `@extend` to `@extend` (postcss-extend-rule)
- [ ] Update Sass comments (`//`) to CSS comments (`/* */`)
- [ ] Test the file builds correctly
- [ ] Verify visual output matches original
- [ ] Run stylelint
- [ ] Commit changes

## Phase 3: Detailed Conversion Patterns

### 3.1 Variables Migration

#### Strategy: Convert to CSS Custom Properties

**Before** (`_variables.scss`):
```scss
$db-spacing-sm: 8px;
$db-spacing-md: 16px;
$db-spacing-lg: 24px;
```

**After** (`_variables.css`):
```css
:root {
  --db-spacing-sm: 8px;
  --db-spacing-md: 16px;
  --db-spacing-lg: 24px;
}
```

**Usage Before**:
```scss
@use 'variables';

.button {
  padding: variables.$db-spacing-sm;
}
```

**Usage After**:
```css
@import '_variables.css';

.button {
  padding: var(--db-spacing-sm);
}
```

### 3.2 Simple Mixin Migration

**Before** (`_display.scss`):
```scss
@mixin display($value) {
  &:not([hidden]) {
    display: $value;
  }
}
```

**After** (`_display.css`):
```css
@define-mixin display $value {
  &:not([hidden]) {
    display: $value;
  }
}
```

**Usage Before**:
```scss
@use 'display';

.element {
  @include display.display(flex);
}
```

**Usage After**:
```css
@import '_display.css';

.element {
  @mixin display flex;
}
```

### 3.3 Complex Mixin with Conditionals

**Approach 1: Separate Mixins** (Recommended)

**Before** (`_divider.scss`):
```scss
@mixin divider($position: "top") {
  @if $position == "top" {
    border-top: 1px solid black;
  } @else if $position == "bottom" {
    border-bottom: 1px solid black;
  }
}
```

**After** (`_divider.css`):
```css
@define-mixin divider-top {
  border-top: 1px solid black;
}

@define-mixin divider-bottom {
  border-bottom: 1px solid black;
}
```

**Approach 2: CSS Custom Properties** (Alternative)

**After** (`_divider.css`):
```css
@define-mixin divider {
  --divider-border-top: 0;
  --divider-border-bottom: 0;
  border-top: var(--divider-border-top);
  border-bottom: var(--divider-border-bottom);
}

/* Usage helpers */
.divider-top {
  @mixin divider;
  --divider-border-top: 1px solid black;
}

.divider-bottom {
  @mixin divider;
  --divider-border-bottom: 1px solid black;
}
```

### 3.4 Functions Migration

Functions need to be moved to PostCSS config.

**Before** (`_functions.scss`):
```scss
@function px-to-rem($px) {
  @return ($px / 16) * 1rem;
}

@function px-to-em($px) {
  @return ($px / 16) * 1em;
}
```

**After** (in `postcss.config.cjs`):
```javascript
require('postcss-functions')({
  functions: {
    'px-to-rem': (px) => {
      const value = parseFloat(px);
      return `${value / 16}rem`;
    },
    'px-to-em': (px) => {
      const value = parseFloat(px);
      return `${value / 16}em`;
    }
  }
})
```

**Usage remains similar**:
```css
.element {
  padding: px-to-rem(24); /* outputs: 1.5rem */
}
```

### 3.5 @use Namespace Migration

**Before**:
```scss
@use 'colors';
@use 'variables';

.button {
  color: colors.$primary;
  padding: variables.$spacing-sm;
}
```

**After**:
```css
@import '_colors.css';
@import '_variables.css';

.button {
  color: var(--primary);
  padding: var(--spacing-sm);
}
```

**⚠️ Warning**: Without namespaces, ensure variable names are unique across all imported files.

### 3.6 @extend Migration

**Before**:
```scss
%button-base {
  padding: 8px;
  border: 1px solid;
}

.button-primary {
  @extend %button-base;
  background: blue;
}
```

**After** (with postcss-extend-rule):
```css
%button-base {
  padding: 8px;
  border: 1px solid;
}

.button-primary {
  @extend %button-base;
  background: blue;
}
```

**Alternative** (utility classes):
```css
.button-base {
  padding: 8px;
  border: 1px solid;
}

.button-primary {
  background: blue;
}
```
```html
<button class="button-base button-primary">Button</button>
```

## Phase 4: Testing Strategy

### 4.1 Per-File Testing

After converting each file:

1. **Build test**:
   ```bash
   npm run build --workspace=@db-ux/core-foundations
   ```

2. **Lint test**:
   ```bash
   npm run lint:stylelint
   ```

3. **Visual test**: Compare output CSS
   ```bash
   # Before conversion (save original)
   cat build/styles/button.css > /tmp/button-original.css
   
   # After conversion
   cat build/styles/button.css > /tmp/button-new.css
   
   # Compare
   diff /tmp/button-original.css /tmp/button-new.css
   ```

### 4.2 Component Testing

For each component:

1. **Run component builds**:
   ```bash
   npm run build --workspace=@db-ux/core-components
   ```

2. **Run framework outputs**:
   ```bash
   npm run build-outputs
   ```

3. **Visual regression testing**:
   ```bash
   npm run test
   ```

### 4.3 Integration Testing

1. **Build all packages**:
   ```bash
   npm run build
   ```

2. **Build all outputs**:
   ```bash
   npm run build-outputs
   ```

3. **Run showcases**:
   ```bash
   npm run dev
   # Select different frameworks and verify visually
   ```

4. **Run E2E tests**:
   ```bash
   npm run test
   ```

## Phase 5: Edge Cases and Gotchas

### 5.1 Dynamic Placeholders

**Problem**:
```scss
@extend %db-#{$variant}-variables;
```

**Solution**: This cannot be directly converted. Options:
1. Expand to explicit extends
2. Redesign using CSS custom properties
3. Keep this specific pattern in Sass

### 5.2 Sass Built-in Modules

**Problem**:
```scss
@use 'sass:math';
@use 'sass:map';
@use 'sass:list';

$value: math.div(100, 16);
$color: map.get($colors, 'primary');
```

**Solution**: Move to JavaScript in PostCSS config or use pure CSS alternatives.

### 5.3 Complex Functions

**Problem**: Functions with complex logic
```scss
@function get-icon-size($font-size) {
  @if $font-size < 20 {
    @return 16px;
  } @else if $font-size < 24 {
    @return 20px;
  }
  @return 24px;
}
```

**Solution**: JavaScript function in PostCSS config
```javascript
functions: {
  'get-icon-size': (fontSize) => {
    const size = parseFloat(fontSize);
    if (size < 20) return '16px';
    if (size < 24) return '20px';
    return '24px';
  }
}
```

### 5.4 Charset Declarations

**Before**:
```scss
@charset "utf-8";
```

**After**:
```css
@charset "utf-8";
```

Keep as-is, or remove (UTF-8 is default).

## Phase 6: Rollback Plan

If migration causes issues:

### 6.1 Per-File Rollback

```bash
# Restore from backup
git checkout HEAD -- path/to/file.scss
```

### 6.2 Full Rollback

```bash
# Revert all changes in a directory
git checkout HEAD -- packages/foundations/scss/
```

### 6.3 Keep Both During Transition

Temporarily support both:
- Keep original `.scss` files
- Create new `.css` files
- Update build to process both
- Gradually deprecate `.scss`

## Phase 7: Documentation Updates

After migration, update:

1. **README.md**: Update build instructions
2. **CONTRIBUTING.md**: Update style guide references
3. **Component docs**: Update mixin usage examples
4. **Build documentation**: Update build process docs
5. **Migration doc**: Document what was changed and why

## Timeline Estimates

Based on 192 SCSS files:

| Phase | Tasks | Time Estimate |
| ----- | ----- | ------------- |
| Phase 1 | Infrastructure setup | 1-2 days |
| Phase 2 | Simple files (40%) | 1 week |
| Phase 3 | Medium complexity (30%) | 1.5 weeks |
| Phase 4 | Complex files (30%) | 2 weeks |
| Phase 5 | Testing & fixes | 1 week |
| Phase 6 | Documentation | 2 days |
| **Total** | | **5-6 weeks** |

## Success Criteria

Migration is complete when:

- [ ] All `.scss` files converted to `.css`
- [ ] All builds pass without errors
- [ ] All tests pass
- [ ] Visual output matches original
- [ ] No Sass dependencies in package.json (except dev tools if needed)
- [ ] Documentation updated
- [ ] Team trained on new workflow

## Maintenance After Migration

### New File Checklist

When creating new styles:
- [ ] Use `.css` extension
- [ ] Use CSS custom properties for variables
- [ ] Use `@define-mixin` for mixins
- [ ] Use `@import` for file includes
- [ ] Avoid complex conditionals (use separate mixins)
- [ ] Test build process

### Common Mistakes to Avoid

1. **Using Sass syntax** in CSS files
2. **Forgetting namespaces** don't exist (variable conflicts)
3. **Complex logic in mixins** (not well supported)
4. **Not testing** in all output frameworks
5. **Breaking consuming applications** (provide migration guide)

## Support and Resources

- PostCSS Documentation: <https://postcss.org/>
- postcss-import: <https://github.com/postcss/postcss-import>
- postcss-mixins: <https://github.com/postcss/postcss-mixins>
- postcss-nesting: <https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting>
- Lightning CSS: <https://lightningcss.dev/>

## Conclusion

This migration is a significant undertaking that will:
- Modernize the CSS architecture
- Improve build flexibility
- Enable providing source CSS to consumers
- Reduce dependency on Sass-specific features

However, it requires careful planning, thorough testing, and team coordination to execute successfully.
