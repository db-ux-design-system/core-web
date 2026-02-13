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
@import "@db-ux/core-vite-plugin";
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
				foundations: ["helpers"], // Force include foundation features
				colors: ["neutral", "brand"], // Force include color schemes
				densities: ["regular", "functional"], // Force include densities
				fontSizes: ["body-md", "headline-lg"] // Force include font sizes
			},
			exclude: {
				components: ["tooltip"], // Exclude specific components
				foundations: ["elevation"], // Exclude foundation features
				colors: ["critical"] // Exclude color schemes
			},
			animations: true, // Include component animations (default: true)
			icons: true, // Include icon fonts (default: true)
			optimize: true // Enable automatic optimization (default: true)
		})
	]
});
```

## Configuration

### `include`

- **Type:** `{ components?: string[], foundations?: string[], colors?: string[], densities?: string[], fontSizes?: string[] }`
- Force include specific components, foundation features, color schemes, densities, or font sizes

### `exclude`

- **Type:** `{ components?: string[], foundations?: string[], colors?: string[], densities?: string[], fontSizes?: string[] }`
- Exclude specific components, foundation features, color schemes, densities, or font sizes

### `animations`

- **Type:** `boolean`
- **Default:** `true`
- Include component animations

### `icons`

- **Type:** `boolean`
- **Default:** `true`
- Include icon fonts

### `optimize`

- **Type:** `boolean`
- **Default:** `true`
- Enable automatic detection of used components

## How it works

The plugin analyzes your source files to detect:

- DB UX component usage (e.g., `class="db-button"`)
- Custom classes using design tokens
- Explicitly configured includes/excludes

It then generates an optimized CSS bundle containing only:

- Required foundation styles (theme, fonts, icons)
- Component styles for detected components
- Optional features based on configuration

## License

This project is licensed under [Apache-2.0](LICENSE).
