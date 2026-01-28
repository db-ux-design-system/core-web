# @db-ux/core-foundations

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A library containing all tokens (colors, spacings, font formatting, etc.) and assets (icons) of [DB UX Design System v3](https://github.com/db-ux-design-system/core-web).

## When to use this package

**⚠️ Looking for UI components?** You probably want [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components) instead, which **automatically includes** this package.

**Use this package if you:**

- Only need design tokens (colors, spacing, fonts) without any component styles
- Want to build custom components using the design system tokens
- Need just icons and fonts without pre-built components

**Use [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components) when you:**

- Want to use ready-made UI components (buttons, inputs, navigation, etc.)
- Need both design tokens AND component styles (most common use case)

We currently support:

- [CSS](https://design-system.deutschebahn.com/core-web/review/main/foundations/readme?current=css)
- [SCSS](https://design-system.deutschebahn.com/core-web/review/main/foundations/readme?current=scss)
- [Tailwind](https://design-system.deutschebahn.com/core-web/review/main/foundations/readme?current=tailwind)

## Install

```shell
npm i @db-ux/core-foundations
```

## Usage

You use this library if you need some colors, spacings etc.

> **tl;dr:** Use the default theme and the bundled styles by importing [relative|absolute|rollup|webpack].css`.

---

First of all you need to import a theme which contains all tokens (css-properties). We provide a `default-theme.css` which handles dark/light mode as well.

Afterward, you may import helper classes / placeholders to easily consume the tokens from your theme. There are some categories:

- **init**: Global styles which apply to all or a large group of selectors. Make sure to import `inits/required.css` to normalize tags like `body` etc. Furthermore, we provide some default styles.
- **icons**: Icons classes to load **woff2** files and adds `[data-icon]` and `[data-icon-trailing]` to enable icons for all tags and components.
- **helpers**: Use dividers or focus border
- **fonts**: Overwrite default `font-size`, `line-height` and `icon-size`
- **density**: Overwrite default density to scale adaptive components inside container using density
- **colors**: Sets an adaptive color to a container, which passes all required css-properties to children

You can import the complete **init** styles with `[relative|absolute|rollup|webpack].css` which apply the default:

- [Density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-3/principles/adaptive#:~:text=und%20Textfarben%20sicherstellt.-,Sizing,-Adaptive%20Sizing%20ist): `regular`
- [Adaptive Coloring](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-3/principles/adaptive#:~:text=Akzeptieren-,Coloring,-Adaptive%20Coloring%20bezieht): `neutral-bg-lvl-1`

### CSS

Default assets path for `relative.css` is `../assets`. Make sure to copy all used resources like icons and fonts into your `public` folder before build. **Or** you use a modern bundler which handles bundling for you. In this case use `[rollup|webpack].css`.

#### Import

Import the styles in your main `.js | .ts` file or in your main `.css` file.

CSS:

```css
/* index.css */
@import "@db-ux/core-foundations/build/styles/relative.css";

/* Optional: Use [data-divider] & [data-focus] everywhere */
@import "@db-ux/core-foundations/build/styles/helpers/classes/all.css";
/* Optional: Use [data-density] everywhere */
@import "@db-ux/core-foundations/build/styles/density/classes/all.css";
/* Optional: Use [data-font-size] everywhere */
@import "@db-ux/core-foundations/build/styles/fonts/classes/all.css";
/* Optional: Use [data-color] everywhere */
@import "@db-ux/core-foundations/build/styles/colors/classes/all.css";
```

JS/TS:

```ts
// main.[js|ts]
/* index.css */
import "@db-ux/core-foundations/build/styles/relative.css";

/* Optional: Use [data-divider] & [data-focus] everywhere */
import "@db-ux/core-foundations/build/styles/helpers/classes/all.css";
/* Optional: Use [data-density] everywhere */
import "@db-ux/core-foundations/build/styles/density/classes/all.css";
/* Optional: Use [data-font-size] everywhere */
import "@db-ux/core-foundations/build/styles/fonts/classes/all.css";
/* Optional: Use [data-color] everywhere */
import "@db-ux/core-foundations/build/styles/colors/classes/all.css";
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
<!-- With data attributes-->
<div
	class="my-container"
	data-density="functional"
	data-color="successful-bg-lvl-1"
></div>
```

<!-- With classes-->
<div
	data-density="functional"
	class="db-successful-bg-lvl-1 my-container"
></div>

> **Note:** In CSS you might to use the classes or data-attributes even more because you cannot use placeholders or mixins like we have it in **scss**. If you use a 3rd party library and cannot apply classes or data-attributes you might want to copy the content of our helper classes to apply it to the 3rd party class.

### SCSS

Default assets path for `relative.scss` is `../assets`. Make sure to copy all used resources like icons and fonts into your `public` folder before build. **Or** you use a modern bundler which handles bundling for you. In this case use `[rollup|webpack].scss`.

#### Import

Import the styles in your main `.js | .ts` file or in your main `.scss` file.

SCSS:

```scss
/* index.css */
@forward "@db-ux/core-foundations/build/styles/relative";

/* Optional: Use [data-divider] & [data-focus] everywhere */
@forward "@db-ux/core-foundations/build/styles/helpers/classes/all";
/* Optional: Use [data-density] everywhere */
@forward "@db-ux/core-foundations/build/styles/density/classes/all";
/* Optional: Use [data-font-size] everywhere */
@forward "@db-ux/core-foundations/build/styles/fonts/classes/all";
/* Optional: Use [data-color] everywhere */
@forward "@db-ux/core-foundations/build/styles/colors/classes/all";
```

> **Note:** Besides of forwarding the classes you can use placeholders to include only some specific styles.

JS/TS:

```ts
// main.[js|ts]
import "@db-ux/core-foundations/build/styles/relative.scss";

/* Optional: Use [data-divider] & [data-focus] everywhere */
import "@db-ux/core-foundations/build/styles/helpers/classes/all.scss";
/* Optional: Use [data-density] everywhere */
import "@db-ux/core-foundations/build/styles/density/classes/all.scss";
/* Optional: Use [data-font-size] everywhere */
import "@db-ux/core-foundations/build/styles/fonts/classes/all.scss";
/* Optional: Use [data-color] everywhere */
import "@db-ux/core-foundations/build/styles/colors/classes/all.scss";
```

#### Use

In SCSS:

```scss
@use "@db-ux/core-foundations/build/styles/variables";

.my-container {
	padding: variables.$db-spacing-fixed-md;
}
```

In SCSS with placeholder:

```scss
@use "@db-ux/core-foundations/build/styles/fonts";
@use "@db-ux/core-foundations/build/styles/colors";

.placeholder-container {
	@extend %db-overwrite-font-size-sm;
	@extend %db-successful-bg-lvl-1;
}
```

In HTML:

```html
<!-- With data attributes-->
<div
	class="my-container"
	data-density="functional"
	data-color="successful-bg-lvl-1"
></div>
```

<!-- With classes-->
<div
	data-density="functional"
	class="db-successful-bg-lvl-1 my-container"
></div>

### Tailwind

Check the required imports for [CSS](https://design-system.deutschebahn.com/core-web/review/main/foundations/readme?current=css) to enable all tokens and defaults.

#### Tailwind v4

```css
@import "tailwindcss";
@import "@db-ux/core-foundations/build/tailwind/theme/index.css";
```

#### Tailwind v3

> **Note:** In Tailwind v4 you can use the config with `@config "tailwind.config.[js|ts]";` inside your `.css` file as well.

After this you can extend your tailwind config like this:

##### JavaScript

```javascript
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
import tokens from "@db-ux/core-foundations/build/tailwind/tailwind-tokens.json";

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

##### TypeScript

```typescript
//tailwind.config.ts
import type { Config } from "tailwindcss";
import { CustomThemeConfig } from "tailwindcss/types/config";
import tokens from "@db-ux/core-foundations/build/tailwind/tailwind-tokens.json";
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

If you want to optimize the size of the loaded styles, you might want to skip loading `@db-ux/core-foundations/build/styles/[relative|absolute|rollup|webpack].css`. But there are some required styles for this Design System to work properly.

### Theme, Assets & Init

```css
/* The theme contains all prop required for components like spacings, colors, etc. You can replace it with your own theme. */
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css";
/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup). You can replace it with your own fonts. */
@import "@db-ux/core-foundations/build/styles/fonts/relative.css";
/* The icon include uses default icons based on your bundling paths (relative, absolute, webpack, rollup). You can replace it with your own icons. */
@import "@db-ux/core-foundations/build/styles/icons/relative.css";
/* The index file will add some additional styles to normalize html defaults and add some default settings like default density, etc. */
@import "@db-ux/core-foundations/build/styles/index.css";
```

#### Optimize index

You are able to optimize the initial settings as well:

```css
/* The required styles will normalize css and add focus and default font to body */
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css";
/* The default setting for :root, adds a color space (neutral-bg-basic-level-1) and a density (regular). */
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css";
/* Adds font-sizes & line-heights to headlines and paragraph tags. You probably need this, but you might strip some styles if you don't need the range of h1-h6. */
@import "@db-ux/core-foundations/build/styles/defaults/default-fonts.css";
/* Adds "[data-icon]" and other icon related styles. If you don't need icons in your application you could skip this. */
@import "@db-ux/core-foundations/build/styles/defaults/default-icons.css";
/* Adds "[data-elevation]" and other icon related styles. If you don't need elevation in your application you could skip this. */
@import "@db-ux/core-foundations/build/styles/defaults/default-elevation.css";
/* Adds defaults for `blockquote`, `code` and `pre`. If you don't need them in your application you could skip this. */
@import "@db-ux/core-foundations/build/styles/defaults/default-code.css";
```

## Font Preloading

To ensure optimal performance and reliability — especially in flaky or offline internet conditions — **you could preload or at least prefetch any fonts your application depends on**.

### How to Preload Fonts

After identifying the critical fonts required for your application's UI, use the following `<link>` tag in the `<head>` of your HTML to preload them:

```html
<link
	rel="preload"
	href="/media/dbneoscreensans-regular.woff2"
	as="font"
	type="font/woff2"
	crossorigin="anonymous"
/>
```

Otherwise, if the font is not initially required but would be requested later or by some dynamically inserted content, you could still [prefetch](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/prefetch) it. Prefetching works at a lower priority than `preload`:

```html
<link
	rel="prefetch"
	href="/assets/icons/fonts/default/db-ux.woff2"
	crossorigin="anonymous"
/>
```

### Tips for identifying fonts to preload

- Use browser dev tools to track font requests that are essential to your application
- Fonts that fail to load during unstable connections should be prioritized.

### Important notes

- Make sure the `href` path is correct and accessible at runtime.
- Always use `crossorigin="anonymous"` for fonts served from your domain or a CDN, unless your server requires credentials (rare for fonts).
- By preloading fonts this way, you improve perceived performance and avoid layout shifts or invisible text during initial rendering.

## Migration

We provide a [CLI tool](https://github.com/db-ux-design-system/core-web/blob/main/packages/migration/README.md) to auto migrate your source code.

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even if being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UX Design System products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

For any usage outside of Deutsche Bahn websites and applications you aren't allowed to use any Deutsche Bahn brand and
design assets as well as protected characteristics and trademarks, that for not including the DB Theme.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ux-design-system/core-web/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE).
