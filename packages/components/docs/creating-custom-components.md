# Creating Custom Components with DB UX Design System

This guide provides comprehensive instructions for developers who want to create custom components in their applications using the DB UX Design System v3. Unlike contributing components to the design system itself, this focuses on building your own components that consume and extend the design system foundations.

## Table of Contents

- [Getting Started](#getting-started)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Design Principles](#design-principles)
- [Styling with Design System Foundations](#styling-with-design-system-foundations)
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
/* Quick start */
@layer db-ux, theme;

@import "@db-ux/core-components/build/styles/rollup.css" layer(db-ux);

/* Optional: You'll might need a theme as well */
@import "@db-ux/db-theme/build/styles/rollup.css" layer(theme);
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
- Maintain sufficient color contrast - should be handled by design tokens if you use them right
- Support screen readers and assistive technologies

### 3. Responsive Design

- Use responsive spacing and sizing tokens
- Implement mobile-first design approach
- Test across different screen sizes and orientations

### 4. Brand Compliance - DB Apps

- Use approved Deutsche Bahn colors and typography
- Follow brand guidelines for visual elements
- Maintain consistency with official design patterns

## Styling with Design System Foundations

> **NOTE:** Use `@db-ux/core-stylelint` to ensure your styles comply with design system standards.

<details>

<summary>SCSS</summary>

### 1. Using Variables and Spacing

```scss
@use "@db-ux/core-foundations/build/styles/variables";

.db-custom-component {
	padding-inline: variables.$db-spacing-responsive-md;
	margin-bottom: variables.$db-spacing-fixed-lg;
	border-radius: variables.$db-border-radius-sm;
	min-height: variables.$db-sizing-md;
}
```

### 2. Implementing Colors

```scss
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/helpers";
@use "@db-ux/core-foundations/build/styles/variables";

.db-custom-component {
	/* Use `emphasis`-colors on `basic-level`-color background */
	background-color: colors.$db-adaptive-bg-basic-level-1-default;
	color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
	border: variables.$db-border-width-3xs solid
		colors.$db-adaptive-on-bg-basic-emphasis-60-default;

	&:hover {
		/* Use `*-hovered` for hover state */
		background-color: colors.$db-adaptive-bg-basic-level-1-hovered;
	}

	&:active {
		/* Use `*-pressed` for active state */
		background-color: colors.$db-adaptive-bg-basic-level-1-pressed;
	}
}
```

#### Background Colors

- **bg-basic**: Standard background colors in levels 1–3, used for page, section, or component backgrounds.
- **bg-basic-transparent**: Two transparent variants, only for component backgrounds.
- **bg-inverted & bg-vibrant (Alpha)**: Solid backgrounds mainly for components.
    - **bg-inverted**: Only for component backgrounds.
    - **bg-vibrant (Alpha)**: For component backgrounds and small accent areas. Ensure accessibility (e.g., add a border with on-bg-basic-emphasis-70) as contrast may be insufficient on bg-basic backgrounds.

#### Foreground Colors (On-Colors)

- Each background group (basic, inverted, vibrant) has defined on-colors for text, icons, and borders, with different contrast requirements.

##### Text Colors

- **On bg-basic**: Three tokens, always at least 4.5:1 contrast.
- **On bg-basic-transparent**: One recommended token, always at least 4.5:1 contrast. Some tokens only meet contrast in certain states or levels.
- **On bg-inverted/vibrant**: One token each, always at least 4.5:1 contrast.

##### Icon Colors

- **On bg-basic**: Four tokens, always at least 3:1 contrast.
- **On bg-basic-transparent**: Three tokens, always at least 3:1 contrast. Some tokens only meet contrast in certain states or levels.
- **On bg-inverted/vibrant**: One token each, always at least 3:1 contrast.

##### Border Colors

- **On bg-basic**: Tokens for lines/decorative elements, no guaranteed contrast.
- **On bg-inverted/vibrant**: Tokens for lines/decorative elements, no guaranteed contrast.

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
@use "@db-ux/core-foundations/build/styles/variables";

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

</details>

<details>

<summary>CSS</summary>

### 1. Using Variables and Spacing

```css
.db-custom-component {
	padding-inline: var(--db-spacing-responsive-md);
	margin-bottom: var(--db-spacing-fixed-lg);
	border-radius: var(--db-border-radius-sm);
	min-height: var(--db-sizing-md);
}
```

### 2. Implementing Colors

```css
.db-custom-component {
	/* Use `emphasis`-colors on `basic-level`-color background */
	background-color: var(--db-adaptive-bg-basic-level-1-default);
	color: var(--db-adaptive-on-bg-basic-emphasis-100-default);
	border: var(--db-border-width-3xs) solid
		var(--db-adaptive-on-bg-basic-emphasis-60-default);

	&:hover {
		/* Use `*-hovered` for hover state */
		background-color: var(--db-adaptive-bg-basic-level-1-hovered);
	}

	&:active {
		/* Use `*-pressed` for active state */
		background-color: var(--db-adaptive-bg-basic-level-1-pressed);
	}
}
```

#### Background Colors

- **bg-basic**: Standard background colors in levels 1–3, used for page, section, or component backgrounds.
- **bg-basic-transparent**: Two transparent variants, only for component backgrounds.
- **bg-inverted & bg-vibrant (Alpha)**: Solid backgrounds mainly for components.
    - **bg-inverted**: Only for component backgrounds.
    - **bg-vibrant (Alpha)**: For component backgrounds and small accent areas. Ensure accessibility (e.g., add a border with on-bg-basic-emphasis-70) as contrast may be insufficient on bg-basic backgrounds.

#### Foreground Colors (On-Colors)

- Each background group (basic, inverted, vibrant) has defined on-colors for text, icons, and borders, with different contrast requirements.

##### Text Colors

- **On bg-basic**: Three tokens, always at least 4.5:1 contrast.
- **On bg-basic-transparent**: One recommended token, always at least 4.5:1 contrast. Some tokens only meet contrast in certain states or levels.
- **On bg-inverted/vibrant**: One token each, always at least 4.5:1 contrast.

##### Icon Colors

- **On bg-basic**: Four tokens, always at least 3:1 contrast.
- **On bg-basic-transparent**: Three tokens, always at least 3:1 contrast. Some tokens only meet contrast in certain states or levels.
- **On bg-inverted/vibrant**: One token each, always at least 3:1 contrast.

##### Border Colors

- **On bg-basic**: Tokens for lines/decorative elements, no guaranteed contrast.
- **On bg-inverted/vibrant**: Tokens for lines/decorative elements, no guaranteed contrast.

### 3. Typography and Icons

```css
.db-custom-component {
	font: var(--db-type-body-md);

	&__title {
		font: var(--db-type-body-lg);
		font-weight: 700;
	}
}
```

```html
<div class="db-custom-component" data-icon="information">...</div>
```

### 4. Responsive Design

```css
.db-custom-component {
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--db-spacing-responsive-sm);

	@media screen and (width < 768) {
		grid-template-columns: 1fr 2fr;
		gap: var(--db-spacing-responsive-md);
	}

	@media screen and (width >= 768) {
		grid-template-columns: 1fr 1fr 1fr;
	}
}
```

</details>

## Common Pitfalls

### ❌ Don't: Use Hardcoded Values

```scss
.bad-component {
	padding: 16px; // ❌ Hardcoded spacing
	color: #3c414c; // ❌ Hardcoded color
	font-size: 14px; // ❌ Hardcoded font size
	border-radius: 4px; // ❌ Hardcoded border radius
}
```

### ✅ Do: Use Design Tokens

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@use "@db-ux/core-foundations/build/styles/colors";

.good-component {
	padding: variables.$db-spacing-fixed-md; // ✅ Design token
	color: colors.$db-adaptive-on-bg-basic-emphasis-100-default; // ✅ Adaptive color
	@extend %db-overwrite-font-size-sm; // ✅ Typography token
	border-radius: variables.$db-border-radius-sm; // ✅ Border radius token
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
<div id="button-help" class="sr-only">
	This button performs an important action
</div>
```

### ❌ Don't: Override Design System Components Arbitrarily

```scss
.bad-override {
	.db-button {
		background: red !important; // ❌ Breaking design system consistency
		border: none !important; // ❌ Using !important unnecessarily
	}
}
```

### ✅ Do: Extend Components Properly

```scss
@use "@db-ux/core-foundations/build/styles/colors";

.good-extension {
	.db-button {
		&[data-variant="custom"] {
			// ✅ Using data attributes for variants
			background-color: colors.$db-warning-bg-basic-level-1-default;
			color: colors.$db-warning-on-bg-basic-emphasis-100-default;
		}
	}
}
```

### ❌ Don't: Create Inconsistent Patterns

```scss
.inconsistent-spacing {
	.item-1 {
		margin-bottom: 8px;
	} // ❌ Inconsistent spacing
	.item-2 {
		margin-bottom: 12px;
	} // ❌ Random values
	.item-3 {
		margin-bottom: 20px;
	} // ❌ Not following design system
}
```

### ✅ Do: Use Consistent Patterns

```scss
@use "@db-ux/core-foundations/build/styles/variables";

.consistent-spacing {
	.item {
		margin-bottom: variables.$db-spacing-fixed-sm; // ✅ Consistent token usage

		&--large {
			margin-bottom: variables.$db-spacing-fixed-lg; // ✅ Systematic sizing
		}
	}
}
```

## Framework-Specific Guidance

### SCSS

```scss
// CustomCard.scss

@use "@db-ux/core-foundations/build/styles/variables";
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/fonts";

.db-custom-card {
	padding-inline: variables.$db-spacing-responsive-md;
	margin-bottom: variables.$db-spacing-fixed-lg;
	border-radius: variables.$db-border-radius-sm;
	min-height: variables.$db-sizing-md;

	background-color: colors.$db-adaptive-bg-basic-level-1-default;
	color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
	border: variables.$db-border-width-3xs solid
		colors.$db-adaptive-on-bg-basic-emphasis-60-default;

	&[data-variant="elevated"] {
		box-shadow: variables.$db-elevation-md;
	}

	&[data-spacing="small"] {
		padding-inline: variables.$db-spacing-responsive-sm;
	}

	&[data-spacing="large"] {
		padding-inline: variables.$db-spacing-responsive-lg;
	}

	.db-custom-card__title {
		@extend %db-overwrite-font-size-3xs;
		font-weight: 700;
	}
}
```

### React Components

```tsx
import React from "react";
import "./CustomCard.scss";
import { DBButton } from "@db-ux/react-core-components";

interface CustomCardProps {
	title: string;
	children: React.ReactNode;
	variant?: "default" | "elevated";
	spacing?: "small" | "medium" | "large";
	href?: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({
	title,
	children,
	variant = "default",
	spacing = "medium",
	href
}) => {
	return (
		<div
			className="db-custom-card"
			data-variant={variant}
			data-spacing={spacing}
		>
			<div className="db-custom-card__header">
				<h3 className="db-custom-card__title">{title}</h3>
			</div>
			<div className="db-custom-card__content">{children}</div>
			<div>
				{href && (
					<a
						className="db-button"
						data-variant="ghost"
						data-size="small"
						data-icon="brand"
						href={href}
					>
						⋯
					</a>
				)}
				<DBButton
					icon="cross"
					variant="brand"
					size="small"
					onClick={() => {}}
				>
					Cancel
				</DBButton>
			</div>
		</div>
	);
};
```

### Vue Components

```vue
<template>
	<div class="db-custom-card" :data-variant="variant" :data-spacing="spacing">
		<div class="db-custom-card__header">
			<h3 class="db-custom-card__title">{{ title }}</h3>
		</div>
		<div class="db-custom-card__content">
			<slot />
		</div>
		<div>
			<a
				v-if="href"
				class="db-button"
				data-variant="ghost"
				data-size="small"
				:href="href"
			>
				⋯
			</a>
			<DBButton icon="cross" variant="brand" size="small">
				Cancel
			</DBButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { DBButton } from "@db-ux/v-core-components";

interface Props {
	title: string;
	variant?: "default" | "elevated";
	spacing?: "small" | "medium" | "large";
	href?: string;
}

withDefaults(defineProps<Props>(), {
	variant: "default",
	spacing: "medium"
});
</script>

<style scoped lang="scss">
@import "./CustomCard.scss";
</style>
```

### Angular Components

```typescript
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DBButton } from "@db-ux/ngx-core-compoennts";

@Component({
	selector: "app-custom-card",
	imports: [DBButton],
	template: `
		<div
			class="db-custom-card"
			[attr.data-variant]="variant"
			[attr.data-spacing]="spacing"
		>
			<div class="db-custom-card__header">
				<h3 class="db-custom-card__title">{{ title }}</h3>
			</div>
			<div class="db-custom-card__content">
				<ng-content></ng-content>
			</div>
			<div>
				<a
					*ngIf="href"
					class="db-button"
					data-variant="ghost"
					data-size="small"
					[href]="href"
				>
					⋯
				</a>
				<db-button icon="cross" variant="brand" size="small">
					Cancel
				</db-button>
			</div>
		</div>
	`,
	styleUrls: ["./custom-card.component.scss"]
})
export class CustomCardComponent {
	@Input() title!: string;
	@Input() variant: "default" | "elevated" = "default";
	@Input() spacing: "small" | "medium" | "large" = "medium";
	@Input() href: string;
}
```

## Testing Your Custom Components

### Accessibility Testing

- Use tools like `axe-core` or `@testing-library/jest-dom` for automated accessibility testing
- Test with keyboard navigation only
- Verify screen reader compatibility
- Check color contrast ratios

## Conclusion

Creating custom components with the DB UX Design System requires careful attention to design consistency, accessibility, and brand guidelines.
By following the patterns and best practices outlined in this guide, you can build components that seamlessly integrate with the design system while
meeting your specific application needs.

Remember to:

- Always use design tokens instead of hardcoded values
- Follow accessibility best practices
- Maintain consistency with the design system's visual language
- Consider performance implications of your implementation choices

For more advanced topics or specific questions, refer to the existing design system documentation
or reach out to the design system team.
