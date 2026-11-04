# @db-ux/core-theme-tools

Theme-driven adaptive-color CSS generator for the DB UX Design System – Generation 3.

This package turns a theme of color **values** (a Style Dictionary `theme.tokens.json`) into adaptive-color CSS — the `--db-bg-*`, `--db-text-*`, and `--db-border-*` material tokens, resolved to concrete `color-mix(in srgb, light-dark(hex, hex) …)` values. The bundler plugin and CLI additionally **optimize** the output: they scan your source for the adaptive colors and materials you actually use and emit only those (plus a small always-kept baseline), instead of the full matrix.

The work is strictly additive: `@db-ux/core-vite-plugin` and `@db-ux/core-postcss-plugin` remain standalone for the legacy coloring model, which coexists and migrates gradually.

## Entry points

| Entry                             | Purpose                                                                |
| --------------------------------- | ---------------------------------------------------------------------- |
| `@db-ux/core-theme-tools`         | Framework-agnostic core generator (programmatic API)                   |
| `@db-ux/core-theme-tools/cli`     | CLI (`db-ux-theme-tools`) for Java/Python/CI and any non-Node consumer |
| `@db-ux/core-theme-tools/vite`    | Vite bundler plugin                                                    |
| `@db-ux/core-theme-tools/webpack` | webpack bundler plugin                                                 |
| `@db-ux/core-theme-tools/esbuild` | esbuild bundler plugin                                                 |
| `@db-ux/core-theme-tools/rollup`  | Rollup bundler plugin                                                  |
| `@db-ux/core-theme-tools/rspack`  | Rspack bundler plugin                                                  |
| `@db-ux/core-theme-tools/farm`    | Farm bundler plugin                                                    |

## Install

```shell
npm install @db-ux/core-theme-tools --save-dev
```

## The theme

Every surface reads the same input: a [Style Dictionary](https://styledictionary.com/) / [DTCG](https://www.designtokens.org/) token file (`theme.tokens.json`). Colors live under the fixed `db` prefix; each color carries the 15 palette steps `0`–`14`, an `origin` (`base` + `light`/`dark` `default`/`hovered`/`pressed`), and an `on.origin` (`light`/`dark` `default`). Every leaf is a DTCG token (`{ "$type": "color", "$value": "#hex" }`). You supply the color **values**; the generator derives the light/dark variants and emits the adaptive CSS.

```jsonc
{
	"$description": "…",
	"db": {
		"neutral": {
			"0": { "$type": "color", "$value": "#000000" },
			/* … steps 1–13 … */
			"14": { "$type": "color", "$value": "#ffffff" },
			"origin": {
				"base": { "$type": "color", "$value": "#646973" },
				"light": {
					"default": { "$type": "color", "$value": "#646973" },
					"hovered": { "$type": "color", "$value": "#545861" },
					"pressed": { "$type": "color", "$value": "#464a51" }
				},
				"dark": {
					"default": { "$type": "color", "$value": "#646973" },
					"hovered": { "$type": "color", "$value": "#545861" },
					"pressed": { "$type": "color", "$value": "#464a51" }
				}
			},
			"on": {
				"origin": {
					"light": {
						"default": { "$type": "color", "$value": "#f9f9fa" }
					},
					"dark": {
						"default": { "$type": "color", "$value": "#f9f9fa" }
					}
				}
			}
		}
		// … more colors (brand, red, blue, green, …), plus any custom color …
	}
}
```

How the loader reads the token file:

- **`neutral` → `grey`** — the `neutral` token is the DB baseline color, consumed internally as `grey`.
- **Alias colors are skipped** — tokens whose `$value` is a Style Dictionary reference (e.g. `informational` → `"{db.blue.0}"`) duplicate a base color and are not emitted; the component detector already maps a component's `semantic` to its base color.
- **Non-color groups are ignored** — anything without numeric palette steps (`border` radii, `font` families) is left untouched.
- **`origin.base` is ignored** — only the `light`/`dark` states feed the generator.

A project may add its own colors (e.g. `ocean`) under `db` alongside the required DB baseline; the generator picks them up automatically. The theme supplies values only — the settings (materials, opacity, roles) ship with the package and are not consumer-overridable.

## Bundler plugin

Each bundler entry (`/vite`, `/webpack`, `/esbuild`, `/rollup`, `/rspack`, `/farm`) wraps the core generator. The plugin scans your source for `data-adaptive-color` / `data-material` usage and serves the **optimized** adaptive CSS as a virtual module you import once from anywhere in your app:

```js
import "db-ux-theme-tools.css";
```

> The specifier is deliberately scheme-less (no `virtual:` prefix) so it resolves identically across every bundler, including webpack.

### Options

| Option         | Type                                                    | Default                                                                           | Description                                                                                                        |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `theme`        | `string`                                                | _(required)_                                                                      | Path to the `theme.tokens.json` carrying the color values.                                                         |
| `scan`         | `string[]`                                              | `**/*.{vue,jsx,tsx,ts,html}`                                                      | Source globs the detector scans for adaptive usage.                                                                |
| `include`      | `{ colors?: string[]; materials?: string[] }`           | —                                                                                 | Force-keep colors/materials even when the detector does not find them (e.g. runtime-only).                         |
| `exclude`      | `{ colors?: string[]; materials?: string[] }`           | —                                                                                 | Drop colors/materials even when detected or required by a used component (see below). The baseline is always kept. |
| `highContrast` | `"both" \| "media-query" \| "data-attribute" \| "none"` | auto — `"both"` if a `data-contrast="more"` opt-in is found, else `"media-query"` | Which high-contrast branch(es) to emit.                                                                            |
| `layer`        | `string \| false`                                       | `"db-ux-adaptive"`                                                                | CSS cascade layer the whole stylesheet is wrapped in (see [Cascade layers](#cascade-layers)); `false` to disable.  |
| `debug`        | `boolean`                                               | `false`                                                                           | Log what the detector found and what gets generated.                                                               |

### Vite

Vite has built-in CSS handling, so no extra loader is needed:

```js
// vite.config.js
import dbUxThemeTools from "@db-ux/core-theme-tools/vite";

export default {
	plugins: [
		dbUxThemeTools({
			theme: "./theme.tokens.json"
			// scan: ["src/**/*.{vue,tsx,html}"],
			// include: { colors: ["violet"] },
			// highContrast: "media-query",
		})
	]
};
```

Then import the virtual stylesheet once (e.g. in your entry module):

```js
// src/main.js
import "db-ux-theme-tools.css";
```

### webpack / rspack need a CSS loader

webpack and rspack have no built-in CSS handling, so the virtual `.css` module must pass through your project's own CSS chain — exactly like any other CSS import. Install and wire up `css-loader` (with `mini-css-extract-plugin` or `style-loader`):

```js
// webpack.config.js
import dbUxThemeTools from "@db-ux/core-theme-tools/webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		dbUxThemeTools({ theme: "./theme.tokens.json" }),
		new MiniCssExtractPlugin()
	]
};
```

```js
// src/main.js
import "db-ux-theme-tools.css";
```

`css-loader` / `mini-css-extract-plugin` are **not** peer dependencies of this package — Vite / Rollup / esbuild consumers do not need them, and a webpack project that imports any CSS already has them. If `css-loader` is missing, the webpack/rspack plugin fails fast with a message pointing you here rather than emitting a cryptic bundler error.

## CLI

For non-Node consumers (Java, Python, CI) or any build that is not driven by a JS bundler, use the `db-ux-theme-tools` binary. The CLI is **config-driven**: a committed config file is the single source of truth — there are no per-field flags.

```shell
# 1. Scan the project and write a starter config from detected usage
db-ux-theme-tools init

# 2. Generate the optimized CSS from the (auto-discovered) config
db-ux-theme-tools generate

# …or point at an explicit config file
db-ux-theme-tools generate --config ./config/db-ux-theme-tools.config.json
```

### `init`

Scans the project and writes a starter `db-ux-theme-tools.config.json` recording the detected `colors`, `materials`, and high-contrast mode, plus placeholder `theme` / `out` paths for you to fill in.

```shell
db-ux-theme-tools init                       # default framework-file globs
db-ux-theme-tools init --scan "src/**/*.tsx,public/**/*.html"
```

### `generate`

Resolves the config, loads the `theme.tokens.json`, and writes the optimized adaptive CSS to the configured `out` path. With no `--config`, the config is auto-discovered (see below).

```shell
db-ux-theme-tools generate
db-ux-theme-tools generate --config <path>
```

### Configuration

The config is discovered via [cosmiconfig](https://github.com/cosmiconfig/cosmiconfig) under the name `db-ux-theme-tools`, from a `"db-ux-theme-tools"` key in `package.json` or a `db-ux-theme-tools.config.*` file in the project root or a `.config/` folder. `.json`, `.yaml`, `.yml`, `.js`, `.cjs`, `.mjs`, and `.ts` are all supported.

```jsonc
// db-ux-theme-tools.config.json
{
	"theme": "theme.tokens.json", // path to the color-values theme (required)
	"out": "db-ux-theme.css", // where the generated CSS is written (required)
	"colors": ["blue", "green"], // optimize to these colors (+ baseline); omit => all
	"materials": ["filled-3", "vibrant"], // optimize to these materials (+ baseline); omit => all
	"exclude": { "colors": ["blue"] }, // drop these even if detected/required (baseline always kept)
	"highContrast": "both", // "both" | "media-query" | "data-attribute" | "none" (default "both")
	"layer": "db-ux-adaptive", // cascade layer to wrap the output in; false to disable (default "db-ux-adaptive")
	"scan": ["src/**/*.{tsx,html}"] // source globs for component-aware detection
}
```

`theme` and `out` are required; everything else is optional. There are three ways `generate` decides what to keep:

- **Explicit** — list `colors` and/or `materials`; the output is narrowed to those sets (plus the always-kept baseline: the theme's default color and `filled-1`).
- **Detected** — omit both and set `scan`; the CLI runs the same component-aware detector as the bundler plugin over those globs and keeps only what it finds (plus the baseline). This is the flow for Angular and other non-bundler-plugin builds.
- **Full** — omit all three; the entire matrix is emitted.

`exclude` is subtracted last in every mode.

### Angular (CLI-first)

Angular's application builder does not host a bundler plugin, so run the CLI **before** `ng build` and let Angular bundle the generated CSS. The clean, Angular-native wiring is an npm `prebuild` / `prestart` lifecycle script:

```jsonc
// package.json
{
	"scripts": {
		"generate:theme": "db-ux-theme-tools generate",
		"prebuild": "pnpm run generate:theme", // runs automatically before `build`
		"build": "ng build",
		"prestart": "pnpm run generate:theme", // runs automatically before `start`
		"start": "ng serve"
	}
}
```

Point the config at a generated file inside `src/` and scan the Angular templates:

```jsonc
// db-ux-theme-tools.config.json
{
	"theme": "theme.tokens.json",
	"out": "src/db-ux-theme.generated.css",
	"scan": ["src/**/*.html", "src/**/*.ts"]
}
```

Import the generated file from your global stylesheet (listed in `angular.json` `styles`), and gitignore it since it is a build artifact:

```css
/* src/styles.css */
@import "./db-ux-theme.generated.css";
```

`pnpm run build` now runs the CLI (scanning your components for adaptive usage), then `ng build` bundles the optimized result. A runnable example lives in [`test/fixtures/angular-app`](test/fixtures/angular-app).

## Programmatic (core) API

The core entry is framework-agnostic — useful for custom tooling or tests.

```ts
import {
	loadTheme,
	generate,
	generateThemeFromFile
} from "@db-ux/core-theme-tools";

// One-shot: load a theme file and generate (optionally optimized) CSS
const css = await generateThemeFromFile("./theme.tokens.json", {
	colors: ["blue", "green"],
	materials: ["filled-3", "vibrant"],
	highContrast: "media-query"
});

// Or load once and generate many times
const theme = await loadTheme("./theme.tokens.json");
const full = generate(theme); // full matrix, high-contrast "both"
const lean = generate(theme, { colors: ["blue"] }); // optimized subset
```

The generator emits compact CSS; the committed DB pipeline runs a Prettier pass over it afterward. `generate` throws a `ThemeValidationError` when an optimization option references a color/material the theme does not define.

## Cascade layers

The generated stylesheet is wrapped in a single named [CSS cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) — `db-ux-adaptive` by default — so you can order the adaptive colors against the DB UX component bundles. This mirrors the `db-ux` layer of [`@db-ux/core-vite-plugin`](../vite-plugin) and the `db-ux-adaptive` layer used in the showcases.

```css
/* the emitted file */
@layer db-ux-adaptive {
	/* …all the adaptive material CSS… */
}
```

The generator only wraps **its own** output in that one layer. The cross-bundle **order** is declared by you, in the entry file that imports every bundle — because only your app knows which other layers exist:

```css
/* your global stylesheet — adaptive colors sit ABOVE the component bundle */
@layer db-ux, db-theme, db-ux-adaptive;
@import "@db-ux/core-components/build/styles/bundle.css" layer(db-ux);
@import "@db-ux/db-theme/build/styles/rollup.css" layer(db-theme);
@import "./db-ux-theme.generated.css"; /* already carries layer(db-ux-adaptive) */
```

Set `layer` to a different string to rename it, or to `false` to emit the raw, un-layered matrix (for consumers that manage layering themselves):

```js
dbUxThemeTools({ theme: "./theme.tokens.json", layer: "my-adaptive" }); // custom name
dbUxThemeTools({ theme: "./theme.tokens.json", layer: false }); // no outer layer
```

## Component-aware detection

A literal scan for `data-adaptive-color` / `data-material` misses colors a component renders on its own. `<DBNotification semantic="critical">` paints itself `red`, and `<DBBadge>` can render `grey`/`blue`/`red`/`yellow`/`green` depending on its `semantic` — yet none of those colors appear as an attribute in your source.

So the detector also recognizes **used DB UX components** — by JSX tag (`<DBNotification>`), web-component tag (`<db-notification>`), or named import (`import { DBNotification } from '@db-ux/react-core-components'`) — and unions in every color/material that component's template can emit. The mapping is extracted directly from the component sources, so it stays in sync with what the components actually render.

Because a component is kept with **all** the variants it could render, a component you use for only one variant pulls in colors you may never show. That is what `exclude` is for:

```jsonc
// db-ux-theme-tools.config.json — keep DBNotification, but never the blue (informational) variant
{
	"theme": "theme.tokens.json",
	"out": "db-ux-theme.css",
	"exclude": { "colors": ["blue"] }
}
```

```js
// vite.config.js — same idea via the plugin
dbUxThemeTools({ theme: "./theme.tokens.json", exclude: { colors: ["blue"] } });
```

`exclude` is subtracted last, after detection and `include`, so it always wins. The one thing it can never drop is the **required baseline** (the theme's default color and `filled-1`) — `generate` re-adds those unconditionally, so excluding a baseline value is simply a no-op rather than a broken stylesheet.

## How optimization helps

The full material matrix (every color × material × state, plus alt-state and high-contrast layers) is large. Scanning for actual usage and keeping only the detected colors/materials plus the baseline typically shrinks the emitted CSS by an order of magnitude — e.g. a page using two colors and two materials drops from ~1.4 MB to ~130 KB unminified (a few KB gzipped). Use `include` for any color/material referenced only at runtime, so the detector cannot see it in source.
