# Icons

- We use icon fonts as **woff2** files for all our icons.
- We auto generate these files out of `.svg` files.
- A lot of our [components](../../components/readme) have an `icon` property you can pass in.
- Use the CSS Custom Property `--db-icon-color` to overwrite the icons color.

## How to include icons

For **CSS**, **SCSS** and **Tailwind** you don't have to include a specific file, just follow the documentation for [foundations](../../foundations/readme).

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

If you want to use only the icons from this library without including the complete CSS, you can import just the icon-related files:

```css
@import "node_modules/@db-ux/core-foundations/build/styles/defaults/default-icons.css";
@import "node_modules/@db-ux/db-theme-icons/build/styles/relative.css";
```

You need to import the correct `.css` file (or move it to your project). There are multiple files depending on the bundler you use:

- `relative.css`: No bundler (as shown in the previous code block)
- `absolute.css`: No bundler
- `rollup.css`: vite, rollup
- `webpack.css`: webpack

**Important for non-bundlers:** If you're moving `relative.css` CSS file to your project, you need to copy the `fonts` folder from `node_modules/@db-ux-inner-source/db-theme-icons/build/fonts` to the same directory next to the folder where you store the `relative.css` file (e.g., next to your `styles` folder), because we're using the reference to e.g. `src: url("../fonts/default_12/db.woff2")` out of the `relative.css` CSS file.
