# Icons

- We use icon fonts as **woff2** files for all our icons.
- We auto generate these files out of `.svg` files.
- A lot of our [components](../../components/readme) have an `icon` property you can pass in.
- Use the CSS Custom Property `--db-icon-color` to overwrite the icons color.

## How to include icons

For **CSS**, **SCSS** and **Tailwind** you don't have to include a specific file, just follow the documentation for [foundations](../../foundations/readme).

### How to use

We're providing an [overview for all of our icons](./overview).

You can add an icon before or after a tag, by adding an `data-` attribute to your HTML code, like for example:

| Variant  |                  Data                  |
| -------- | :------------------------------------: |
| `before` |    `data-icon="icon-from-overview"`    |
| `after`  | `data-icon-after="icon-from-overview"` |

### Icons color

You could use the CSS Custom Property `--db-icon-color` to overwrite the icons color, be it icon fonts or when using the SVG files directly. Or `--db-icon-pulse-color` for the illustrative icons pulse color.

## Custom Icons

If you have custom icons and want to use them for foundations and/or in components, you need to generate a **woff2** file.

[More information](./CustomIcons.md)

## TypeScript Autocomplete

To get TypeScript autocomplete you need to include a `*.d.ts` file, where you add some icons to the whitelabel base icons:

```ts
//
import "@db-ui/foundations";
import { BaseIconTypes } from "@db-ui/foundations";

declare module "@db-ui/foundations" {
	interface OverwriteIcons {
		types: BaseIconTypes | "my-custom-icon1" | "my-custom-icon2";
	}
}
```

_**OR:**_ If you use another library which provides some overwrite you can do it like this:

```ts
//
import "@db-ui/foundations";
import "@db-ux/core-icons";
import { IconTypes } from "@db-ux/core-icons";

declare module "@db-ui/foundations" {
	interface OverwriteIcons {
		types: IconTypes;
	}
}
```

You can combine it as well like this:

```ts
//
import "@db-ui/foundations";
import "@db-ux/core-icons";
import "@db-ux/pv-icons";
import { IconTypes } from "@db-ux/core-icons";
import { IconTypes as PvIconTypes } from "@db-ux/pv-icons";

declare module "@db-ui/foundations" {
	interface OverwriteIcons {
		types: IconTypes | PvIconTypes | "my-custom-icon1" | "my-custom-icon2";
	}
}
```
