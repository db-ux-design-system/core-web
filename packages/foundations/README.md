# @db-ui/foundations

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

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

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE).
