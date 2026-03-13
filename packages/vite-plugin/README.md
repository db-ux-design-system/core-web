# @db-ux/core-vite-plugin

Vite plugin for optimized DB UX Design System CSS imports. Automatically includes only the CSS you need based on components and classes used in your application.

## Installation

```shell
npm install @db-ux/core-vite-plugin --save-dev
```

## Usage

### Basic Usage

Add the plugin to your `vite.config.js` or `vite.config.ts`:

```js
import { defineConfig } from "vite";
import dbUxPlugin from "@db-ux/core-vite-plugin";

export default defineConfig({
	plugins: [dbUxPlugin()]
});
```

Then import the plugin in your CSS file:

```css
/* styles.css or main.css */
@import "@db-ux/core-vite-plugin/index.css";
```

The plugin will automatically detect which components you use and include only the necessary CSS.

### Advanced Usage

For more control, you can configure the plugin:

```js
import { defineConfig } from "vite";
import dbUxPlugin from "@db-ux/core-vite-plugin";

export default defineConfig({
	plugins: [
		dbUxPlugin({
			include: {
				components: ["button", "input"], // Force include specific components
				foundations: ["helpers", "animations", "icons"], // Force include foundation features
				colors: ["neutral", "brand"], // Force include color schemes
				densities: ["regular", "functional"], // Force include densities
				fontSizes: ["body-md", "headline-lg"] // Force include font sizes
			},
			exclude: {
				components: ["tooltip"], // Exclude specific components
				foundations: ["elevation"], // Exclude foundation features
				colors: ["critical"], // Exclude color schemes
				densities: ["expressive"], // Exclude densities
				fontSizes: ["body-3xs"] // Exclude font sizes
			},
			optimize: true, // Remove unused CSS variable declarations to reduce bundle size (default: true).
			theme: "db-theme", // Specify preferred theme package name (e.g., "db-theme")
			debug: false // Generate detection report for debugging (default: false)
		})
	]
});
```

## Configuration

### `include`

- **Type:** `{ components?: Component[], foundations?: FoundationFeature[], colors?: ColorScheme[], densities?: Density[], fontSizes?: FontSize[] }`
- Force include specific components, foundation features, color schemes, densities, or font sizes
- **Foundation features:** `icons`, `helpers`, `elevation`, `animations`, `code`

### `exclude`

- **Type:** `{ components?: Component[], foundations?: FoundationFeature[], colors?: ColorScheme[], densities?: Density[], fontSizes?: FontSize[] }`
- Exclude specific components, foundation features, color schemes, densities, or font sizes

### `optimize`

- **Type:** `boolean`
- **Default:** `true`
- Remove unused CSS variable declarations to reduce bundle size

### `theme`

- **Type:** `string`
- **Default:** `undefined`
- Specify a preferred theme package name (e.g., `"db-theme"`). The plugin automatically detects installed theme packages from `@db-ux/*-theme` or `@db-ux-inner-source/*-theme`. Use this option to select a specific theme when multiple are available.

### `debug`

- **Type:** `boolean`
- **Default:** `false`
- Generate a `db-ux-detection-report.json` file in the project root directory for debugging purposes. This report contains all detected components, colors, densities, and font sizes. Useful for troubleshooting optimization issues.

## How it works

The plugin analyzes your source files to detect:

- DB UX component usage (e.g., `class="db-button"`)
- Custom classes using design tokens
- Explicitly configured includes/excludes

It then generates an optimized CSS bundle containing only:

- Required foundation styles (theme, fonts, icons)
- Component styles for detected components
- Optional features based on configuration

## Troubleshooting

### Plugin Order with Tailwind CSS

If you're using Tailwind CSS alongside this plugin, **the order matters**. The `@db-ux/core-vite-plugin` must be placed **before** the Tailwind plugin in your Vite configuration:

```js
import { defineConfig } from "vite";
import dbUxPlugin from "@db-ux/core-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		dbUxPlugin(), // Must come before tailwindcss()
		tailwindcss()
	]
});
```

And in your CSS file:

```css
@import "tailwindcss";
@import "@db-ux/core-vite-plugin/index.css";
```

**Why?** The DB UX plugin needs to process and replace the `@import "@db-ux/core-vite-plugin/index.css"` statement with actual CSS before Tailwind processes the file. Tailwind will strip out unrecognized imports, so the DB UX plugin must run first to transform the import into valid CSS that Tailwind can then process.

### CSS `@property` Warnings

You may see warnings about "Unknown at rule: @property" in your build output or IDE. These are informational warnings from CSS parsers that don't yet fully support the CSS Houdini `@property` at-rule. These warnings don't affect functionality - the `@property` rule is valid CSS and works correctly in modern browsers. You can safely ignore these warnings or configure your CSS linter to suppress them.

## License

This project is licensed under [Apache-2.0](LICENSE).
