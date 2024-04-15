# How to develop components

## Styles

There are some important files where we include `SCSS mixins` and `SCSS placeholders` for easier development:

### Variables - Spacings/Elevation/etc

Main use-case margins, paddings, height, width, ... Example:

```scss
@use "@db-ui/foundations/build/scss/variables";

.db-xxx {
	padding-inline-start: variables.$db-spacing-fixed-2xs;
}
```

### Icons

Main use-case to set/overwrite an icon inside a component. Example:

```scss
@use "@db-ui/foundations/build/scss/icons";

.db-xxx {
	@include icons.set-icon("chevron_down", "after");
}
```

### Density/ Fonts

Main use-case to overwrite a default font-size/line-height. Example:

```scss
@use "@db-ui/foundations/build/scss/fonts";

.db-xxx {
	label {
		@extend %db-overwrite-font-size-xs;
	}
}
```

### Colors

Main use-case to overwrite a color or change colors by `data-variant`. Example:

```scss
@use "@db-ui/foundations/build/scss/colors";
@use "@db-ui/foundations/build/scss/helpers";

.db-xxx {
	@include helpers.hover {
		background-color: colors.$db-current-color-bg-transparent-hover;
	}

	@include helpers.active {
		background-color: colors.$db-current-color-bg-transparent-pressed;
	}

	@each $name in colors.$variant-colors {
		&[data-variant="#{$name}"] {
			--db-current-color-border: var(--db-#{$name}-contrast-low-enabled);
		}
	}
}
```

### Component

Main use-case for adaptive components. Example:

```scss
@use "styles/component";

.db-xxx {
	@extend %default-card;
	@extend %adaptive-neutral-component;
}
```

### Screen-sizes

Main use-case for media query. Example:

```scss
@use "@db-ui/foundations/build/scss/screen-sizes";

.db-xxx {
	display: grid;
	grid-template-columns: 1fr;

	@include screen-sizes.screen("md") {
		grid-template-columns: 1fr 1fr 1fr;
	}
}
```

### Helpers

Main use-case for converting `px` values or inserting UI styling like e.g. a divider. Example:

```scss
@use "@db-ui/foundations/build/scss/helpers";

.db-xxx {
	@include helpers.divider("top");
	text-decoration-thickness: helpers.to-rem($pxValue: 1);
}
```
