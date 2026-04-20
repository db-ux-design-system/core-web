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

The plugin handles theme detection, component CSS, and foundation styles automatically.

#### Migration

If you're currently using the manual CSS layer imports, you can replace them with the plugin's single import:

```css
/* Before */
@layer whitelabel-theme, db-ux;
@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);
@import "@db-ux/core-components/build/styles/bundle.css" layer(db-ux);
```

```css
/* After */
@import "@db-ux/core-vite-plugin/index.css";
```

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
			additionalLayers: { after: ["ri-extension"] }, // Append custom layers to the auto-generated order
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

### `additionalLayers`

- **Type:** `{ before?: string[], after?: string[] }`
- **Default:** `undefined`
- Append custom CSS cascade layers before or after the auto-generated layer order. Useful when your project defines its own layers on top of DB UX.

```js
// Adds layers around the auto-generated ones
dbUxPlugin({
	additionalLayers: {
		before: ["reset"],
		after: ["ri-extension"]
	}
});
// → @layer reset, db-theme, db-ux, ri-extension;
```

### `overrideLayers`

- **Type:** `string[]`
- **Default:** `undefined`
- Fully replace the auto-generated `@layer` statement with a custom layer order. When set, `additionalLayers` is ignored.

```js
dbUxPlugin({
	overrideLayers: ["db-theme", "db-ux", "ri-extension"]
});
// → @layer db-theme, db-ux, ri-extension;
```

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

### Styles Not Loading in Dev Mode with `<link>` Tags

If you load your CSS via a `<link>` tag in `index.html`:

```html
<!-- ❌ This won't work with the plugin in dev mode -->
<link rel="stylesheet" href="/src/styles.css" />
```

The plugin's `transform` hook only runs for CSS that is part of Vite's module graph. Static `<link>` tags are served as-is by Vite's dev server, so the `@import "@db-ux/core-vite-plugin/index.css"` inside the CSS file is never processed.

**Solution:** Import the CSS from your JavaScript/TypeScript entry file instead:

```ts
// main.ts or main.tsx
import "./styles.css";
```

This pulls the CSS into Vite's module graph where the plugin can transform it. The production build is not affected by this issue.

## License

This project is licensed under [Apache-2.0](LICENSE).
