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

The defaults for `db-ui-foundations.css` are:

-   [Tonality](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/tonalities): `regular`
-   [Adaptive Coloring](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/adaptive-styles): `neutral-0`

### CSS

Default assets path for `db-ui-foundations.css` is `../assets`. Make sure to copy all used resources like icons and fonts into your `public` folder before build.

```ts
// main.ts / main.js
import "@db-ui/foundations/build/css/db-ui-foundations.css";
// optional: to use classes like e.g. db-ui-bg-success
import "@db-ui/foundations/build/css/colors/classes/all.css";
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

## Icons

We use icon fonts as `woff2` files for all our icons.
We auto generate these files out of `.svg` files.

### Custom Icons

If you have custom icons and want to use them for foundations and/or in components, you need to generate a `woff2` file.

For this run:

```shell
node node_modules/@db-ui/foundations/scripts/generate-icon-fonts/index.js --src ./my-path-to/icons --fontName my-name
```

We search for all `**/*.svg` files inside the `src` directory and create a new icon font with the provided name.

> **_NOTE:_** We use 3 different sizes for components (16,20,24) to show more or less details. You can do the same by providing another file with a size postfix for example "icon_file_name_16.svg".

In your app you need to include some of the generated files:

`./my-path-to/icons/fonts/my-name.woff2`

`./my-path-to/icons/fonts/font-face.css`

Now you can use your icons with your `font-family: my-name`, e.g.:

```html
<!--example.html-->
<i class="my-name">icon_file_name</i>
```

### data-icon

If you like to use a custom icon in one of our components you can do it by overwriting the default font-family like this:

```html
<!--example.html-->

<p class="icon-family-my-name" data-icon="icon_file_name">Test</p>
<!-- or -->
<p data-icon-family="my-name" data-icon="icon_file_name">Test</p>
```

### Foundation Developer

If you update a `svg` inside `assets/icons/functional/images` you need to recreate the `woff2` file.

For this you just need to run

```shell
npm run generate:icon-fonts
```

Your new icon should be inside `assets/icons/functional/fonts/info.json` and you should see it inside `assets/icons/functional/fonts/index.html` in the browser.

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
