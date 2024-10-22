# @db-ui/foundations

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A library containing all tokens (colors, spacings, font formatting, etc.) and assets (fonts, icons) of [DB UX Design System v3](https://github.com/db-ui/mono).

We currently support:

-   [CSS](https://db-ui.github.io/mono/review/main/foundations/readme?current=css)
-   [SCSS](https://db-ui.github.io/mono/review/main/foundations/readme?current=scss)
-   [Tailwind](https://db-ui.github.io/mono/review/main/foundations/readme?current=tailwind)

## Install

```shell
npm i @db-ui/foundations
```

## Usage

You use this library if you need some colors, spacings etc.

> **tl;dr:** Use the default theme and the bundled styles by importing `default-theme.css` && `db-ui-foundations[-absolute|-rollup|-webpack].css`.

---

First of all you need to import a theme which contains all tokens (css-properties). We provide a `default-theme.css` which handles dark/light mode as well.

Afterward, you may import helper classes / placeholders to easily consume the tokens from your theme. There are some categories:

-   **init**: Global styles which apply to all or a large group of selectors. Make sure to import `inits/required.css` to normalize tags like `body` etc. Furthermore, we provide some default styles.
-   **icons**: Icons classes to load **woff2** files and adds `[data-icon]` and `[data-icon-after]` to enable icons for all tags and components.
-   **helpers**: Use dividers or focus border
-   **fonts**: Overwrite default `font-size`, `line-height` and `icon-size`
-   **density**: Overwrite default density to scale adaptive components inside container using density
-   **colors**: Sets an adaptive color to a container, which passes all required css-properties to children

You can import the complete **init** styles with `db-ui-foundations[-absolute|-rollup|-webpack].css` which apply the default:

-   [Density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-3/principles/adaptive#:~:text=und%20Textfarben%20sicherstellt.-,Sizing,-Adaptive%20Sizing%20ist): `regular`
-   [Adaptive Coloring](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-3/principles/adaptive#:~:text=Akzeptieren-,Coloring,-Adaptive%20Coloring%20bezieht): `neutral-bg-lvl-1`

### CSS

Default assets path for `db-ui-foundations.css` is `../assets`. Make sure to copy all used resources like icons and fonts into your `public` folder before build. **Or** you use a modern bundler which handles bundling for you. In this case use `db-ui-foundations[-rollup|-webpack].css`.

#### Import

Import the styles in your main `.js | .ts` file or in your main `.css` file.

CSS:

```css
/* index.css */
@import "@db-ui/foundations/build/css/default-theme.css";
@import "@db-ui/foundations/build/css/db-ui-foundations.css";

/* Optional: Use [data-icon] everywhere */
@import "@db-ui/foundations/build/css/icons/include.css";
/* Optional: Use [data-divider] & [data-focus] everywhere */
@import "@db-ui/foundations/build/css/helpers/classes/all.css";
/* Optional: Use [data-density] everywhere */
@import "@db-ui/foundations/build/css/density/classes/all.css";
/* Optional: Use [data-font-size] everywhere */
@import "@db-ui/foundations/build/css/fonts/classes/all.css";
/* Optional: Use [data-color] everywhere */
@import "@db-ui/foundations/build/css/colors/classes/all.css";
```

JS/TS:

```ts
// main.[js|ts]
import "@db-ui/foundations/build/css/default-theme.css";
import "@db-ui/foundations/build/css/db-ui-foundations.css";

/* Optional: Use [data-icon] everywhere */
import "@db-ui/foundations/build/css/icons/include.css";
/* Optional: Use [data-divider] & [data-focus] everywhere */
import "@db-ui/foundations/build/css/helpers/classes/all.css";
/* Optional: Use [data-density] everywhere */
import "@db-ui/foundations/build/css/density/classes/all.css";
/* Optional: Use [data-font-size] everywhere */
import "@db-ui/foundations/build/css/fonts/classes/all.css";
/* Optional: Use [data-color] everywhere */
import "@db-ui/foundations/build/css/colors/classes/all.css";
```

#### Use

In CSS:

```css
.my-container {
	padding: var(--db-spacing-fixed-md);
}
```

In HTML:

```html
<!-- With classes-->
<div
	data-density="functional"
	class="db-successful-bg-lvl-1 my-container"
></div>

<!-- With data attributes-->
<div
	class="my-container"
	data-density="functional"
	data-color="successful-bg-lvl-1"
></div>
```

> **Note:** In CSS you might to use the classes or data-attributes even more because you cannot use placeholders or mixins like we have it in **scss**. If you use a 3rd party library and cannot apply classes or data-attributes you might want to copy the content of our helper classes to apply it to the 3rd party class.

### SCSS

Default assets path for `db-ui-foundations.scss` is `../assets`. Make sure to copy all used resources like icons and fonts into your `public` folder before build. **Or** you use a modern bundler which handles bundling for you. In this case use `db-ui-foundations[-rollup|-webpack].scss`.

#### Import

Import the styles in your main `.js | .ts` file or in your main `.scss` file.

SCSS:

```scss
/* index.css */
@forward "@db-ui/foundations/build/scss/default-theme";
@forward "@db-ui/foundations/build/scss/db-ui-foundations";

/* Optional: Use [data-icon] everywhere */
@forward "@db-ui/foundations/build/scss/icons/include";
/* Optional: Use [data-divider] & [data-focus] everywhere */
@forward "@db-ui/foundations/build/scss/helpers/classes/all";
/* Optional: Use [data-density] everywhere */
@forward "@db-ui/foundations/build/scss/density/classes/all";
/* Optional: Use [data-font-size] everywhere */
@forward "@db-ui/foundations/build/scss/fonts/classes/all";
/* Optional: Use [data-color] everywhere */
@forward "@db-ui/foundations/build/scss/colors/classes/all";
```

> **Note:** Besides of forwarding the classes you can use placeholders to include only some specific styles.

JS/TS:

```ts
// main.[js|ts]
import "@db-ui/foundations/build/scss/default-theme.scss";
import "@db-ui/foundations/build/scss/db-ui-foundations.scss";

/* Optional: Use [data-icon] everywhere */
import "@db-ui/foundations/build/scss/icons/include.scss";
/* Optional: Use [data-divider] & [data-focus] everywhere */
import "@db-ui/foundations/build/scss/helpers/classes/all.scss";
/* Optional: Use [data-density] everywhere */
import "@db-ui/foundations/build/scss/density/classes/all.scss";
/* Optional: Use [data-font-size] everywhere */
import "@db-ui/foundations/build/scss/fonts/classes/all.scss";
/* Optional: Use [data-color] everywhere */
import "@db-ui/foundations/build/scss/colors/classes/all.scss";
```

#### Use

In SCSS:

```scss
@use "@db-ui/foundations/build/scss/variables";

.my-container {
	padding: variables.$db-spacing-fixed-md;
}
```

In SCSS with placeholder:

```scss
@use "@db-ui/foundations/build/scss/fonts";
@use "@db-ui/foundations/build/scss/colors";

.placeholder-container {
	@extend %db-overwrite-font-size-sm;
	@extend %db-successful-bg-lvl-1;
}
```

In HTML:

```html
<!-- With classes-->
<div
	data-density="functional"
	class="db-successful-bg-lvl-1 my-container"
></div>

<!-- With data attributes-->
<div
	class="my-container"
	data-density="functional"
	data-color="successful-bg-lvl-1"
></div>
```

### Tailwind

Check the required imports for [CSS](https://db-ui.github.io/mono/review/main/foundations/readme?current=css) to enable all tokens and defaults.
After this you can extend your tailwind config like this:

#### Javascript

```javascript
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
import tokens from "@db-ui/foundations/build/tailwind/tailwind-tokens.json";

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [],
	theme: {
		...tokens,
		gap: ({ theme }) => ({
			...theme("spacing")
		}),
		space: ({ theme }) => ({
			...theme("spacing")
		})
	}
};
```

#### Typescript

```typescript
//tailwind.config.ts
import type { Config } from "tailwindcss";
import { CustomThemeConfig } from "tailwindcss/types/config";
import tokens from "@db-ui/foundations/build/tailwind/tailwind-tokens.json";
const customThemeConfig: CustomThemeConfig = tokens as any;

export default {
	content: [],
	theme: {
		...customThemeConfig,
		gap: ({ theme }) => ({
			...theme("spacing")
		}),
		space: ({ theme }) => ({
			...theme("spacing")
		})
	},
	plugins: []
} satisfies Config;
```

In your `tailwind.css` add this to enable default headlines:

```css
@layer base {
	h1 {
		@apply text-head-xl font-head;
	}
	h2 {
		@apply text-head-lg font-head;
	}
	h3 {
		@apply text-head-md font-head;
	}
	h4 {
		@apply text-head-sm font-head;
	}
	h5 {
		@apply text-head-xs font-head;
	}
	h6 {
		@apply text-head-2xs font-head;
	}
}
```

#### Use

```html
<div class="grid gap-fix-sm p-res-md"></div>
```

## Optimize dependencies

If you want to optimize the size of the loaded styles, you might skip loading `@db-ui/foundations/build/css/db-ui-foundations.css`.But there are some required styles for this Design-System to work properly.

```css
/* The theme contains all prop required for components like spacings, colors, ... */
@import "@db-ui/foundations/build/css/default-theme.css";
/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */
@import "@db-ui/foundations/build/css/fonts/include.css";
/* The required styles will normalize css and add focus and default font to body */
@import "@db-ui/foundations/build/css/init/required.css";
/* The default root adds a default color space (neutral) and a density (regular) */
@import "@db-ui/foundations/build/css/init/default-root.css";
```

## Migration

We provide a cli tool to auto migrate your source code. Use this command in your repository:

```shell
npx @db-ui/foundations migration --src=./src
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
