# @db-ux/core-postcss-plugin

PostCSS plugins for the DB UX Design System.

## Plugins

| Plugin        | Description                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `dbUxFlatten` | Flatten CSS custom properties by resolving `var()`, `@property`, `calc()`, `color-mix()`, and `light-dark()` |

## Install

```shell
npm install @db-ux/core-postcss-plugin --save-dev
```

## Imports

```ts
// Named import (recommended)
import { dbUxFlatten } from "@db-ux/core-postcss-plugin";

// Default import (backward compatible — exports dbUxFlatten)
import dbUxFlatten from "@db-ux/core-postcss-plugin";
```

## CSS Setup

Use `@layer` to ensure the theme overrides base component styles. The plugin detects `@import ... layer()` rules to assign the correct layer to each file:

```css
/* styles.css */
@layer db-ux, db-theme;
@import "@db-ux/db-theme/build/styles/rollup.css" layer(db-theme);
@import "@db-ux/core-components/build/styles/rollup.css" layer(db-ux);
```

## Framework Integration

### Vite (React, Vue, Svelte, etc.)

Configure the plugin directly in `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { dbUxFlatten } from "@db-ux/core-postcss-plugin";

export default defineConfig({
	css: {
		transformer: "postcss", // required for Vite 8+ (default: 'lightningcss')
		postcss: {
			plugins: [dbUxFlatten()]
		}
	}
});
```

> **Note**: Vite 8+ uses `lightningcss` as the default CSS transformer, which does not run PostCSS plugins. Set `css.transformer: 'postcss'` to enable PostCSS processing. Vite 7 and earlier use PostCSS by default and do not need this option.

Works in both dev and build mode.

### Angular

Create a `postcss.config.json` in your project root:

```json
{
	"plugins": {
		"@db-ux/core-postcss-plugin": {}
	}
}
```

Angular CLI (`@angular/build:application`) only supports JSON-based PostCSS configs and loads plugins by name via `require()`. Works in both `ng build` and `ng serve`.

### Next.js

Create a `postcss.config.mjs` in your project root:

```js
// postcss.config.mjs
import { dbUxFlatten } from "@db-ux/core-postcss-plugin";

export default {
	plugins: [dbUxFlatten()]
};
```

Works with both webpack and turbopack.

> **Note**: For CommonJS (`postcss.config.js`):
>
> ```js
> const { dbUxFlatten } = require("@db-ux/core-postcss-plugin");
> module.exports = { plugins: [dbUxFlatten()] };
> ```

### Webpack (standalone)

```js
// webpack.config.js
const { dbUxFlatten } = require("@db-ux/core-postcss-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [dbUxFlatten()]
							}
						}
					}
				]
			}
		]
	}
};
```

---

## `dbUxFlatten`

Flattens DB UX Design System CSS custom properties by resolving `var()`, `@property`, `calc()`, `color-mix()`, and `light-dark()`.

### What it does

1. **Collects** all `@property` declarations and their `initial-value` as a resolution cache
2. **Detects `@layer` priority** from `@layer` order declarations and `@import ... layer()` rules — theme values override base values regardless of processing order
3. **Detects dynamic variables** that must stay as `var()` references:
    - Variables re-declared in non-`:root`/`:host` selectors (e.g. `[data-density=functional]`)
    - Variables re-declared inside `@media` queries
    - Variables matching `dynamicPrefixes` (default: `--db-adaptive-*`)
4. **Resolves** all static `var()` references recursively — including nested `var()` with fallbacks like `var(--a, var(--b))`
5. **Evaluates** `calc()` expressions when all values are static
6. **Evaluates** `color-mix(in srgb, ...)` when all colors are resolved
7. **Collapses** `light-dark(x, y)` to `x` when both arguments are identical after resolution
8. **Removes** `@property` rules and unused intermediate declarations

### Options

| Option             | Type       | Default              | Description                                                             |
| ------------------ | ---------- | -------------------- | ----------------------------------------------------------------------- |
| `removeAtProperty` | `boolean`  | `true`               | Remove `@property` rules after resolving                                |
| `removeResolved`   | `boolean`  | `true`               | Remove declarations from `@property` that are no longer referenced      |
| `dynamicPrefixes`  | `string[]` | `['--db-adaptive-']` | Variable prefixes that are always treated as dynamic and never resolved |

```ts
dbUxFlatten({
	removeAtProperty: true,
	removeResolved: true,
	dynamicPrefixes: ["--db-adaptive-", "--my-custom-dynamic-"]
});
```

### How it works

#### Static vs. dynamic variables

- **Static**: Only declared in `:root`/`:host` and `@property` — safe to inline everywhere
- **Dynamic**: Re-declared in class selectors, data attributes, `@media` queries, or matching `dynamicPrefixes` — must stay as `var()` references

```css
/* Static — will be resolved */
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}

/* Dynamic — stays as var() */
:root {
	--db-spacing-fixed-sm: 0.75rem;
}
[data-density="functional"] {
	--db-spacing-fixed-sm: 0.5rem; /* re-declared → dynamic */
}
```

#### `@layer` and `@import layer()` support

The plugin detects layer priority from two sources:

1. **`@layer` order declarations**: `@layer db-ux, db-theme;` — later in the list = higher priority
2. **`@import ... layer()` rules**: `@import "file.css" layer(db-theme);` — maps each imported file to its layer

This works even when the bundler processes each imported file independently (e.g. Angular), because the plugin sees the `@import` rules in the entry CSS file first and builds a file-to-layer mapping before the imported files are processed.

```css
@layer db-ux, db-theme;
@import "@db-ux/db-theme/build/styles/rollup.css" layer(db-theme);
@import "@db-ux/core-components/build/styles/rollup.css" layer(db-ux);
```

Unlayered CSS always wins over all layers, matching the CSS spec.

#### Nested `var()` with fallbacks

```css
/* Input */
font-family: var(--db-icon-font-family, var(--db-icon-default-font-family));

/* Output (--db-icon-font-family unknown, --db-icon-default-font-family resolved) */
font-family: var(--db-icon-font-family, "db-default", icon-font-fallback);
```

#### `light-dark()` collapsing

When both arguments resolve to the same value, the function is collapsed:

```css
/* Input */
--db-color: light-dark(
	var(--db-neutral-origin-light-default),
	var(--db-neutral-origin-dark-default)
);

/* Output (both resolve to #232529) */
--db-color: #232529;

/* Output (different values — kept) */
--db-color: light-dark(#232529, #f0f0f0);
```

### Example

**Input:**

```css
@layer db-ux, db-theme;

@layer db-theme {
	@property --db-brand-origin-light-default {
		syntax: "<color>";
		initial-value: #ec0016;
		inherits: true;
	}
	@property --db-brand-origin-dark-default {
		syntax: "<color>";
		initial-value: #ec0016;
		inherits: true;
	}
}

@layer db-ux {
	:root {
		--db-brand-origin-default: light-dark(
			var(--db-brand-origin-light-default),
			var(--db-brand-origin-dark-default)
		);
	}
	.button {
		color: var(--db-adaptive-on-bg-basic-emphasis-100-default);
		border-radius: var(--db-border-radius-xs);
	}
}
```

**Output:**

```css
:root {
	--db-brand-origin-default: #ec0016;
}
.button {
	color: var(--db-adaptive-on-bg-basic-emphasis-100-default);
	border-radius: 0.25rem;
}
```

- `--db-brand-origin-default`: both light/dark resolved to `#ec0016` (theme value) → `light-dark()` collapsed
- `--db-adaptive-*`: kept as `var()` (dynamic prefix)
- `--db-border-radius-xs`: resolved from `@property` (static)

---

## Package Structure

```text
src/
├── index.ts                              # barrel export
└── plugins/
    └── flatten/
        ├── index.ts                      # dbUxFlatten plugin
        ├── data.ts                       # types & constants
        └── helpers/
            ├── css-parser.ts             # generic CSS string parsing
            ├── resolve.ts                # var(), calc(), color-mix() resolution
            ├── collect.ts                # PostCSS AST collection (layers, vars, imports)
            └── transform.ts             # transformRoot + collapseLightDark
```
