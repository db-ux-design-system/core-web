# Icons

- We use icon fonts as **woff2** files for all our icons.
- We auto generate these files out of `.svg` files.
- A lot of our [components](../../components/readme) have an `icon` property you can pass in.
- Use the CSS Custom Property `--db-icon-color` to overwrite the icons color.

## How to include icons

For **CSS**, **SCSS** and **Tailwind** you don't have to include a specific file, just follow the documentation for [foundations](../README.md).

If you only want to use the icons from this library and not the full CSS, take a look at the "Edge case: Using only icons without the full CSS" section of this page.

### How to use

We're providing an [overview for all of our icons](./overview).

You can add an icon before or after a tag, by adding an `data-` attribute to your HTML code, like for example:

| Variant  |                   Data                    |
| -------- | :---------------------------------------: |
| `before` |     `data-icon="icon-from-overview"`      |
| `after`  | `data-icon-trailing="icon-from-overview"` |

### Icon weight

You can control the size/weight of icons by using the `data-icon-weight` attribute. Available weights are: `16`, `20`, `24`, `32`, `48`, `64`.

| Position |         Data attribute         | Example                                                                   |
| -------- | :----------------------------: | ------------------------------------------------------------------------- |
| `before` |    `data-icon-weight="24"`     | `<span data-icon="user" data-icon-weight="24">Text</span>`                |
| `before` | `data-icon-weight-before="32"` | `<span data-icon="user" data-icon-weight-before="32">Text</span>`         |
| `after`  | `data-icon-weight-after="20"`  | `<span data-icon-trailing="user" data-icon-weight-after="20">Text</span>` |

If you need to adjust the size of the icons more precisely, you can also set the `--db-icon-font-size` CSS custom property. Please bear in mind that you need to select an `icon-weight` to go with this icon font size from the available options, as each weight includes more or fewer details depending on the resulting size.

### Icon variant (family)

You can control the variant/family of icons by using the `data-icon-variant` attribute. Available variants are: `default`, `filled`.

| Position |           Data attribute            | Example                                                                        |
| -------- | :---------------------------------: | ------------------------------------------------------------------------------ |
| `before` |    `data-icon-variant="filled"`     | `<span data-icon="user" data-icon-variant="filled">Text</span>`                |
| `before` | `data-icon-variant-before="filled"` | `<span data-icon="user" data-icon-variant-before="filled">Text</span>`         |
| `after`  | `data-icon-variant-after="filled"`  | `<span data-icon-trailing="user" data-icon-variant-after="filled">Text</span>` |

### Combining weight and variant

You can combine both weight and variant attributes for precise icon control:

```html
<!-- 32px filled icon before text -->
<span data-icon="user" data-icon-weight="32" data-icon-variant="filled"
	>User Profile</span
>

<!-- 24px default icon after text -->
<span
	data-icon-trailing="arrow_right"
	data-icon-weight-after="24"
	data-icon-variant-after="default"
	>Next</span
>

<!-- Different styling for before and after icons -->
<span
	data-icon="star"
	data-icon-weight-before="20"
	data-icon-variant-before="filled"
	data-icon-trailing="arrow_right"
	data-icon-weight-after="16"
	data-icon-variant-after="default"
>
	Favorite Item
</span>
```

### Icons color

You could use the CSS Custom Property `--db-icon-color` to overwrite the icons color, be it icon fonts or when using the SVG files directly. Or `--db-icon-pulse-color` for the illustrative icons pulse color.

### Passing parameters into SVG icons (`link-parameters`)

How much of the embedding page's CSS reaches an SVG icon depends on _how_ you reference it:

- **Inline SVG and `<use href>`**: the referenced content is cloned into the host document (as a shadow tree) and the style cascade runs on it from the `<use>` site. Inherited values such as `currentColor` and CSS Custom Properties (e.g. `--db-icon-color`) therefore reach the icon, so `fill: var(--db-icon-color, currentColor)` just works — no `link-parameters` needed.
- **`<img>`, `background-image: url(…)`, `<object>`**: the SVG is loaded as an isolated, independent document. Nothing cascades in from the embedding page, so neither `currentColor` nor custom properties are visible inside the icon.

`link-parameters` closes that second gap. Our SVG icon files declare their customizable values as [custom environment variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env) using the `env()` function, for example `fill: env(--db-icon-color, currentColor);`. The second argument is a fallback that keeps the icon rendering correctly when no value is passed in.

From the embedding page you supply those values with the [`link-parameters` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/link-parameters) (or the equivalent `param()` directive inside the URL fragment / `url()` modifier). The parameter name matches the environment variable the SVG reads:

```html
<img
	src="@db-ux/db-theme-icons/.../user.svg"
	alt="user"
	class="icon"
	width="…"
	height="…"
/>
```

```css
.icon {
	/* Pass the color into the referenced SVG's env(--db-icon-color) */
	link-parameters: param(
		--db-icon-color,
		var(--db-adaptive-icon-color, currentColor)
	);
}
```

This gives isolated SVG icons (`<img>`, `background-image`, `<object>`) the same color customization that `--db-icon-color` already provides for the icon fonts, for inline SVGs, and for `<use href>` references.

> **Progressive enhancement:** `link-parameters` is a newer web feature that is not yet available in all evergreen browsers (see [Browser Support](./BrowserSupport.md)). Because the `env()` declarations in the SVG files always carry a fallback value, icons stay correctly colored in browsers without support — the custom color is simply applied once the feature is available.

## Custom Icons

If you have custom icons and want to use them for foundations and/or in components, you need to generate a **woff2** file.

[More information](./CustomIcons.md)

## Additional functionality

### TypeScript Autocomplete

To get TypeScript autocomplete you need to include a `*.d.ts` file, where you add some icons to the whitelabel base icons:

```ts
//
import "@db-ux/core-foundations";
import { BaseIconTypes } from "@db-ux/core-foundations";

declare module "@db-ux/core-foundations" {
	interface OverwriteIcons {
		types: BaseIconTypes | "my-custom-icon1" | "my-custom-icon2";
	}
}
```

_**OR:**_ If you use another library which provides some overwrite you can do it like this:

```ts
//
import "@db-ux/core-foundations";
import "@db-ux/db-theme-icons";
import { IconTypes } from "@db-ux/db-theme-icons";

declare module "@db-ux/core-foundations" {
	interface OverwriteIcons {
		types: IconTypes;
	}
}
```

You can combine it as well like this:

```ts
//
import "@db-ux/core-foundations";
import "@db-ux/db-theme-icons";
import { IconTypes } from "@db-ux/db-theme-icons";

declare module "@db-ux/core-foundations" {
	interface OverwriteIcons {
		types: IconTypes | "my-custom-icon1" | "my-custom-icon2";
	}
}
```

### Edge case: Using only icons without the full CSS

If you want to use only the icons from this library without including the complete CSS, you can copy or reference just the icon-related files:

```css
/* bundler.css */
@import "@db-ux/core-foundations/build/styles/defaults/default-icons.css";
@import "@db-ux/db-theme-icons/build/styles/default-font.css";
@import "@db-ux/db-theme-icons/build/styles/[rollup|webpack|relative].css";
```

or

```bash
cp "node_modules/@db-ux/core-foundations/build/styles/defaults/default-icons.css" …;
cp "node_modules/@db-ux/db-theme-icons/build/styles/default-font.css" …;
cp "node_modules/@db-ux/db-theme-icons/build/styles/[relative|absolute].css" …;
```

You need to copy or reference the correct `.css` file out of your project. There are multiple files depending on the bundler you use:

- `relative.css`: No bundler (as shown in the previous code block)
- `absolute.css`: No bundler
- `rollup.css`: vite, rollup
- `webpack.css`: webpack

**Important for non-bundlers usage:** If you're moving `relative.css` CSS file to your project, you need to copy the `fonts` folder from `node_modules/@db-ux/db-theme-icons/build/fonts` to the same directory next to the folder where you store the `relative.css` file (e.g., next to your `styles` folder), because we're using the reference to e.g. `src: url("../fonts/default_12/db.woff2")` out of the `relative.css` CSS file.
