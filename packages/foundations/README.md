# @db-ui/foundations

A library containing all tokens of [DB UX Design System (technical components)](https://github.com/db-ui/mono).

We currently support:

-   [CSS](#css)
-   [SCSS](#scss)
-   [Tailwind](#tailwind)

## Install

`npm i @db-ui/foundations`

## Usage

### CSS

```ts
// main.ts / main.js
import "@db-ui/foundations/build/css/db-ui-foundations.css";
// optional: to use classes like e.g. db-ui-bg-success
import "@db-ui/foundations/build/css/color-classes.css";
```

```css
.my-container {
	padding: var(--db-spacing-fixed-md);
}
```

```html
<div class="db-ui-regular db-ui-bg-success my-container"></div>
```

### SCSS

Based on your technology/setup you need to change the paths of the assets folder:

-   Default: points to `../assets`
-   Webpack: points to `~@db-ui/foundations/assets`
-   Rollup: points to `@db-ui/foundations/assets`
-

```scss
// index.scss
@use "@db-ui/foundations/build/scss/rollup.assets-paths" as *;
@use "@db-ui/foundations/build/scss/icon/icons" as *;
@use "@db-ui/foundations/build/scss/db-ui-foundations" as *;
// optional: to use db-ui-bg-success
@import "@db-ui/foundations/build/scss/color-classes" as *;
// optional: to use use $db-spacing-fixed-md
@use "@db-ui/foundations/build/scss/variables.global" as *;

.my-container {
	padding: $db-spacing-fixed-md;
}
```

```html
<div class="db-ui-regular db-ui-bg-success my-container"></div>
```

### Tailwind

```javascript
//tailwind.config.cjs

const tokens = require("@db-ui/foundations/build/tailwind/tailwind-tokens.json");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [],
	theme: {
		screens: tokens.screens,
		spacing: tokens.spacing,
		boxShadow: tokens.elevation,
		gap: ({ theme }) => ({
			...theme("spacing")
		}),
		space: ({ theme }) => ({
			...theme("spacing")
		})
	}
};
```

```html
<div class="p-fix-md"></div>
```
