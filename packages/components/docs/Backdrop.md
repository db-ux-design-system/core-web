# Backdrop

There is no `Backdrop` component.
If you need a backdrop like the one in `DBDrawer` you sould apply those styles:

## CSS

```css
.my-backdrop {
	background-color: color(
		from var(--db-adaptive-on-bg-basic-emphasis-100-default) srgb r g b /
			var(--db-opacity-lg)
	);
}

/* OR */

dialog::backdrop {
	background-color: color(
		from var(--db-adaptive-on-bg-basic-emphasis-100-default) srgb r g b /
			var(--db-opacity-lg)
	);
}
```

## SCSS

```scss
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/variables";

.my-backdrop {
	background-color: color(
		from #{colors.$db-adaptive-on-bg-basic-emphasis-100-default} srgb r g
			b / #{variables.$db-opacity-lg}
	);
}

/* OR */

dialog::backdrop {
	background-color: color(
		from #{colors.$db-adaptive-on-bg-basic-emphasis-100-default} srgb r g
			b / #{variables.$db-opacity-lg}
	);
}
```

> **NOTE:** If you want to use the `weak` variant you should use the `db-opacity-sm` variable.
