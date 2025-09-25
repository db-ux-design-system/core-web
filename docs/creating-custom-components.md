# Creating Custom Components with DB UX Design System

This guide provides comprehensive instructions for developers who want to create custom components in their applications using the DB UX Design System v3. Unlike contributing components to the design system itself, this focuses on building your own components that consume and extend the design system foundations.

## Table of Contents

- [Getting Started](#getting-started)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Design Principles](#design-principles)
- [Component Structure Guidelines](#component-structure-guidelines)
- [Styling with Design System Foundations](#styling-with-design-system-foundations)
- [Code Examples](#code-examples)
- [Best Practices](#best-practices)
- [Common Pitfalls](#common-pitfalls)
- [Framework-Specific Guidance](#framework-specific-guidance)

## Getting Started

The DB UX Design System v3 provides a comprehensive foundation for building consistent, accessible, and branded components. When creating custom components, you should leverage the design system's:

- **Design tokens**: Colors, spacing, typography, and sizing variables
- **Component patterns**: Reusable styling patterns and behaviors
- **Accessibility guidelines**: Built-in accessibility features and best practices
- **Brand compliance**: Deutsche Bahn's visual identity and guidelines

## Setting Up Your Environment

### 1. Install Core Dependencies

First, install the necessary packages for your framework:

```bash
# For basic CSS/HTML components
npm install @db-ux/core-foundations @db-ux/core-components

# For React applications
npm install @db-ux/react-core-components @db-ux/core-foundations

# For Angular applications
npm install @db-ux/ngx-core-components @db-ux/core-foundations

# For Vue 3 applications
npm install @db-ux/v-core-components @db-ux/core-foundations

# For Web Components
npm install @db-ux/wc-core-components @db-ux/core-foundations
```

### 2. Include Required Styles

Add the design system styles to your application:

```css
/* Essential: Theme and required styles */
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css";
@import "@db-ux/core-foundations/build/styles/fonts/rollup.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css";

/* Optional: Animations and icons */
@import "@db-ux/core-components/build/styles/component-animations.css";
@import "@db-ux/core-foundations/build/styles/icons/rollup.css";
```

## Design Principles

When creating custom components, adhere to these core principles:

### 1. Consistency
- Use design system tokens for all styling decisions
- Follow established patterns for layout, spacing, and interaction
- Maintain visual hierarchy consistent with other components

### 2. Accessibility
- Ensure keyboard navigation support
- Provide appropriate ARIA labels and roles
- Maintain sufficient color contrast
- Support screen readers and assistive technologies

### 3. Responsive Design
- Use responsive spacing and sizing tokens
- Implement mobile-first design approach
- Test across different screen sizes and orientations

### 4. Brand Compliance
- Use approved Deutsche Bahn colors and typography
- Follow brand guidelines for visual elements
- Maintain consistency with official design patterns

## Component Structure Guidelines

### Basic HTML Structure

```html
<div class="db-custom-component" data-variant="primary" data-size="medium">
  <label class="db-custom-component__label">Component Label</label>
  <div class="db-custom-component__content">
    <!-- Component content -->
  </div>
  <div class="db-custom-component__footer">
    <!-- Optional footer content -->
  </div>
</div>
```

### CSS Class Naming Convention

Follow the BEM (Block Element Modifier) methodology with `db-` prefix:

```scss
.db-custom-component {
  // Block styles
  
  &__element {
    // Element styles
  }
  
  &--modifier {
    // Modifier styles
  }
  
  &[data-variant="primary"] {
    // Data attribute modifiers
  }
}
```

## Styling with Design System Foundations

### 1. Using Variables and Spacing

```scss
@use "@db-ux/core-foundations/build/styles/variables";

.db-custom-component {
  padding: variables.$db-spacing-fixed-md;
  margin-bottom: variables.$db-spacing-responsive-lg;
  border-radius: variables.$db-border-radius-sm;
  min-height: variables.$db-sizing-md;
}
```

### 2. Implementing Colors

```scss
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/helpers";

.db-custom-component {
  background-color: colors.$db-adaptive-bg-basic-level-1-default;
  color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
  border: variables.$db-border-width-3xs solid colors.$db-adaptive-on-bg-basic-emphasis-60-default;
  
  @include helpers.hover {
    background-color: colors.$db-adaptive-bg-basic-transparent-full-hovered;
  }
  
  // Variant colors
  &[data-variant="informational"] {
    --db-custom-component-accent: var(--db-informational-on-bg-basic-emphasis-70-default);
    border-left: variables.$db-border-width-sm solid var(--db-custom-component-accent);
  }
}
```

### 3. Typography and Icons

```scss
@use "@db-ux/core-foundations/build/styles/fonts";
@use "@db-ux/core-foundations/build/styles/icons";

.db-custom-component {
  @extend %db-overwrite-font-size-md;
  
  &__title {
    @extend %db-overwrite-font-size-lg;
    font-weight: 700;
  }
  
  &__icon {
    @include icons.set-icon("information", "before");
  }
}
```

### 4. Responsive Design

```scss
@use "@db-ux/core-foundations/build/styles/screen-sizes";

.db-custom-component {
  display: grid;
  grid-template-columns: 1fr;
  gap: variables.$db-spacing-responsive-sm;
  
  @include screen-sizes.screen("md") {
    grid-template-columns: 1fr 2fr;
    gap: variables.$db-spacing-responsive-md;
  }
  
  @include screen-sizes.screen("lg") {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

## Code Examples

### Example 1: Custom Card Component

```html
<div class="db-custom-card" data-variant="elevated" data-spacing="large">
  <div class="db-custom-card__header">
    <h3 class="db-custom-card__title">Card Title</h3>
    <button class="db-button" data-variant="ghost" data-size="small">
      <span class="sr-only">More options</span>
    </button>
  </div>
  <div class="db-custom-card__content">
    <p>Card content goes here with proper spacing and typography.</p>
  </div>
  <div class="db-custom-card__footer">
    <button class="db-button" data-variant="outlined">Secondary Action</button>
    <button class="db-button" data-variant="filled">Primary Action</button>
  </div>
</div>
```

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/helpers";
@use "@db-ux/core-components/build/styles/internal/component";

.db-custom-card {
  @extend %default-card;
  
  display: flex;
  flex-direction: column;
  gap: variables.$db-spacing-fixed-md;
  
  &[data-variant="elevated"] {
    box-shadow: variables.$db-elevation-lg;
  }
  
  @include component.get-data-spacing(padding);
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__title {
    @extend %db-overwrite-font-size-lg;
    font-weight: 700;
    margin: 0;
  }
  
  &__content {
    flex: 1;
    
    p {
      margin: 0 0 variables.$db-spacing-fixed-sm 0;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  &__footer {
    display: flex;
    gap: variables.$db-spacing-fixed-sm;
    justify-content: flex-end;
  }
}
```

### Example 2: Custom Form Field

```html
<div class="db-custom-field" data-variant="floating" data-state="error">
  <div class="db-custom-field__input-container">
    <input type="text" class="db-custom-field__input" id="custom-input" placeholder=" " />
    <label for="custom-input" class="db-custom-field__label">Field Label</label>
  </div>
  <div class="db-custom-field__message" role="alert">
    Error message describing the validation issue
  </div>
</div>
```

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/fonts";
@use "@db-ux/core-components/build/styles/internal/form-components";

.db-custom-field {
  position: relative;
  
  &__input-container {
    position: relative;
  }
  
  &__input {
    @include form-components.set-default-form-component(input);
    width: 100%;
  }
  
  &__label {
    @extend %db-overwrite-font-size-sm;
    position: absolute;
    top: variables.$db-spacing-fixed-sm;
    left: variables.$db-spacing-fixed-sm;
    color: colors.$db-adaptive-on-bg-basic-emphasis-70-default;
    pointer-events: none;
    transition: all variables.$db-transition-duration-fast;
  }
  
  &[data-variant="floating"] {
    .db-custom-field__input:not(:placeholder-shown) + .db-custom-field__label,
    .db-custom-field__input:focus + .db-custom-field__label {
      @extend %db-overwrite-font-size-xs;
      top: variables.$db-spacing-fixed-3xs;
      color: colors.$db-adaptive-on-bg-basic-emphasis-80-default;
    }
  }
  
  &__message {
    @extend %db-overwrite-font-size-sm;
    margin-top: variables.$db-spacing-fixed-xs;
    color: colors.$db-adaptive-on-bg-basic-emphasis-70-default;
  }
  
  &[data-state="error"] {
    .db-custom-field__input {
      border-color: colors.$db-warning-on-bg-basic-emphasis-70-default;
    }
    
    .db-custom-field__message {
      color: colors.$db-warning-on-bg-basic-emphasis-70-default;
    }
  }
}
```

### Example 3: Custom Navigation Component

```html
<nav class="db-custom-navigation" role="navigation" aria-label="Main navigation">
  <ul class="db-custom-navigation__list">
    <li class="db-custom-navigation__item">
      <a href="#" class="db-custom-navigation__link" aria-current="page">Home</a>
    </li>
    <li class="db-custom-navigation__item">
      <a href="#" class="db-custom-navigation__link">Products</a>
    </li>
    <li class="db-custom-navigation__item">
      <a href="#" class="db-custom-navigation__link">Services</a>
    </li>
    <li class="db-custom-navigation__item">
      <a href="#" class="db-custom-navigation__link">Contact</a>
    </li>
  </ul>
</nav>
```

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/helpers";
@use "@db-ux/core-foundations/build/styles/screen-sizes";

.db-custom-navigation {
  &__list {
    display: flex;
    flex-direction: column;
    gap: variables.$db-spacing-fixed-xs;
    list-style: none;
    margin: 0;
    padding: 0;
    
    @include screen-sizes.screen("md") {
      flex-direction: row;
      gap: variables.$db-spacing-fixed-lg;
    }
  }
  
  &__item {
    // No specific styles needed
  }
  
  &__link {
    @extend %db-overwrite-font-size-md;
    color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
    text-decoration: none;
    padding: variables.$db-spacing-fixed-sm;
    border-radius: variables.$db-border-radius-xs;
    display: block;
    position: relative;
    
    @include helpers.hover {
      background-color: colors.$db-adaptive-bg-basic-transparent-full-hovered;
    }
    
    @include helpers.focus-visible {
      @include helpers.get-focus-placeholder;
    }
    
    &[aria-current="page"] {
      background-color: colors.$db-adaptive-bg-basic-transparent-semi-default;
      font-weight: 700;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: variables.$db-border-width-sm;
        background-color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
        border-radius: variables.$db-border-radius-xs;
      }
    }
  }
}
```

## Best Practices

### 1. Design Token Usage
- **Always use design tokens** instead of hardcoded values for colors, spacing, and typography
- **Leverage CSS custom properties** for component-specific theming
- **Use responsive tokens** (`$db-spacing-responsive-*`) for spacing that adapts to screen sizes

### 2. Accessibility
- **Include proper ARIA attributes** for complex components
- **Ensure keyboard navigation** works throughout your component
- **Test with screen readers** to verify accessibility
- **Maintain color contrast ratios** using the design system's color tokens

### 3. Component Architecture
- **Use semantic HTML** as the foundation for your components
- **Follow BEM naming conventions** for CSS classes
- **Implement data attributes** for variants and states
- **Keep components focused** on a single responsibility

### 4. Responsive Design
- **Use mobile-first approach** when writing media queries
- **Leverage design system breakpoints** via the `screen-sizes` mixin
- **Test across different devices** and screen sizes
- **Consider touch-friendly interactions** on mobile devices

### 5. Performance
- **Import only what you need** from design system packages
- **Use CSS-only solutions** when possible to avoid JavaScript overhead
- **Optimize for bundle size** by tree-shaking unused styles

## Common Pitfalls

### ❌ Don't: Use Hardcoded Values

```scss
.bad-component {
  padding: 16px;           // ❌ Hardcoded spacing
  color: #3c414c;          // ❌ Hardcoded color
  font-size: 14px;         // ❌ Hardcoded font size
  border-radius: 4px;      // ❌ Hardcoded border radius
}
```

### ✅ Do: Use Design Tokens

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@use "@db-ux/core-foundations/build/styles/colors";

.good-component {
  padding: variables.$db-spacing-fixed-md;                          // ✅ Design token
  color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;      // ✅ Adaptive color
  @extend %db-overwrite-font-size-sm;                               // ✅ Typography token
  border-radius: variables.$db-border-radius-sm;                    // ✅ Border radius token
}
```

### ❌ Don't: Ignore Accessibility

```html
<!-- ❌ Missing accessibility attributes -->
<div class="custom-button" onclick="doSomething()">Click me</div>
```

### ✅ Do: Include Proper Accessibility

```html
<!-- ✅ Proper button with accessibility -->
<button class="db-button" type="button" aria-describedby="button-help">
  Click me
</button>
<div id="button-help" class="sr-only">This button performs an important action</div>
```

### ❌ Don't: Override Design System Components Arbitrarily

```scss
.bad-override {
  .db-button {
    background: red !important;     // ❌ Breaking design system consistency
    border: none !important;       // ❌ Using !important unnecessarily
  }
}
```

### ✅ Do: Extend Components Properly

```scss
.good-extension {
  .db-button {
    &[data-variant="custom"] {     // ✅ Using data attributes for variants
      background-color: colors.$db-warning-bg-basic-level-1-default;
      color: colors.$db-warning-on-bg-basic-emphasis-100-default;
    }
  }
}
```

### ❌ Don't: Create Inconsistent Patterns

```scss
.inconsistent-spacing {
  .item-1 { margin-bottom: 8px; }     // ❌ Inconsistent spacing
  .item-2 { margin-bottom: 12px; }    // ❌ Random values
  .item-3 { margin-bottom: 20px; }    // ❌ Not following design system
}
```

### ✅ Do: Use Consistent Patterns

```scss
.consistent-spacing {
  .item {
    margin-bottom: variables.$db-spacing-fixed-sm;  // ✅ Consistent token usage
    
    &--large {
      margin-bottom: variables.$db-spacing-fixed-lg; // ✅ Systematic sizing
    }
  }
}
```

## Framework-Specific Guidance

### React Components

```tsx
import React from 'react';
import '@db-ux/core-components/build/components/button/button.css';
import './CustomCard.scss';

interface CustomCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
  spacing?: 'small' | 'medium' | 'large';
  onAction?: () => void;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  title,
  children,
  variant = 'default',
  spacing = 'medium',
  onAction
}) => {
  return (
    <div 
      className="db-custom-card" 
      data-variant={variant}
      data-spacing={spacing}
    >
      <div className="db-custom-card__header">
        <h3 className="db-custom-card__title">{title}</h3>
        {onAction && (
          <button 
            className="db-button" 
            data-variant="ghost" 
            data-size="small"
            onClick={onAction}
            aria-label="More options"
          >
            ⋯
          </button>
        )}
      </div>
      <div className="db-custom-card__content">
        {children}
      </div>
    </div>
  );
};
```

### Vue Components

```vue
<template>
  <div 
    class="db-custom-card" 
    :data-variant="variant"
    :data-spacing="spacing"
  >
    <div class="db-custom-card__header">
      <h3 class="db-custom-card__title">{{ title }}</h3>
      <button 
        v-if="onAction"
        class="db-button" 
        data-variant="ghost" 
        data-size="small"
        @click="onAction"
        aria-label="More options"
      >
        ⋯
      </button>
    </div>
    <div class="db-custom-card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  variant?: 'default' | 'elevated';
  spacing?: 'small' | 'medium' | 'large';
  onAction?: () => void;
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  spacing: 'medium'
});
</script>

<style scoped lang="scss">
@import '@db-ux/core-components/build/components/button/button.css';
@import './CustomCard.scss';
</style>
```

### Angular Components

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  template: `
    <div 
      class="db-custom-card" 
      [attr.data-variant]="variant"
      [attr.data-spacing]="spacing"
    >
      <div class="db-custom-card__header">
        <h3 class="db-custom-card__title">{{ title }}</h3>
        <button 
          *ngIf="onAction.observed"
          class="db-button" 
          data-variant="ghost" 
          data-size="small"
          (click)="onAction.emit()"
          aria-label="More options"
        >
          ⋯
        </button>
      </div>
      <div class="db-custom-card__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent {
  @Input() title!: string;
  @Input() variant: 'default' | 'elevated' = 'default';
  @Input() spacing: 'small' | 'medium' | 'large' = 'medium';
  @Output() onAction = new EventEmitter<void>();
}
```

## Testing Your Custom Components

### Accessibility Testing
- Use tools like `axe-core` or `@testing-library/jest-dom` for automated accessibility testing
- Test with keyboard navigation only
- Verify screen reader compatibility
- Check color contrast ratios

### Visual Regression Testing
- Take screenshots of your components in different states
- Test across multiple browsers and devices
- Verify responsive behavior at different breakpoints

### Unit Testing Example (React + Jest)

```tsx
import { render, screen } from '@testing-library/react';
import { CustomCard } from './CustomCard';

describe('CustomCard', () => {
  it('renders with correct accessibility attributes', () => {
    render(
      <CustomCard title="Test Card" onAction={() => {}}>
        <p>Test content</p>
      </CustomCard>
    );
    
    expect(screen.getByRole('button', { name: 'More options' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Card');
  });
  
  it('applies correct data attributes', () => {
    const { container } = render(
      <CustomCard title="Test Card" variant="elevated" spacing="large">
        <p>Test content</p>
      </CustomCard>
    );
    
    const card = container.querySelector('.db-custom-card');
    expect(card).toHaveAttribute('data-variant', 'elevated');
    expect(card).toHaveAttribute('data-spacing', 'large');
  });
});
```

## Conclusion

Creating custom components with the DB UX Design System requires careful attention to design consistency, accessibility, and brand guidelines. By following the patterns and best practices outlined in this guide, you can build components that seamlessly integrate with the design system while meeting your specific application needs.

Remember to:
- Always use design tokens instead of hardcoded values
- Follow accessibility best practices
- Test your components thoroughly
- Maintain consistency with the design system's visual language
- Consider performance implications of your implementation choices

For more advanced topics or specific questions, refer to the existing design system documentation or reach out to the design system team.