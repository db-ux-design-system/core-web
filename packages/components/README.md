# @db-ux/core-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A library containing all styles for components of [DB UX Design System v3](https://github.com/db-ux-design-system/core-web).

> **Note**
> Furthermore we currently support these additional JavaScript frameworks, with more coming soon:

- [Angular components](https://www.npmjs.com/package/@db-ux/ngx-core-components)
- [React components](https://www.npmjs.com/package/@db-ux/react-core-components)
- [Vue components](https://www.npmjs.com/package/@db-ux/v-core-components)
- [Web components](https://www.npmjs.com/package/@db-ux/wc-core-components)

Please take a look at your desired framework to retrieve more information.

For additional information besides the frameworks see our [Getting started](https://github.com/db-ux-design-system/core-web/tree/main/packages/components/docs/getting-started.md).

---

If you just need the styling follow this:

## Package Relationship

**✅ Do I need foundations if I install components?**

**No!** The `@db-ux/core-components` package **automatically includes** all the foundations (`@db-ux/core-foundations`) you need. You only need to install one package:

- **Use `@db-ux/core-components`** - If you want to use UI components (buttons, inputs, etc.)
- **Use `@db-ux/core-foundations`** - If you only need design tokens, colors, spacing, fonts, and assets without any component styles

## Install

`npm i @db-ux/core-components`

> **Note**: This automatically includes `@db-ux/core-foundations` as a dependency, so you don't need to install it separately.

## Styling Dependencies

Import the styles in `scss` or `css`. Based on your technology the file names could be different.

- `relative`: asset path point to `../assets`
- `webpack`: asset path point to `~@db-ux/core-foundations/assets`
- `rollup`: asset path point to `@db-ux/core-foundations/assets`

**Important**: These bundled files automatically include **all dependencies from [foundations](https://www.npmjs.com/package/@db-ux/core-foundations)** (design tokens, colors, fonts, etc.) **and all [components](https://github.com/db-ux-design-system/core-web/blob/main/packages/components/src/styles/db-ux-components.scss)** - everything you need in one import!

**SCSS**

```scss
// index.scss
@forward "@db-ux/core-components/build/styles/rollup";
```

**CSS**

Within HTML files directly:

```html
<!-- index.html //-->
<link rel="stylesheet" href="/styles/rollup.css" />
```

Or within your JavaScript files, with the related bundler as a prefix (in this case rollup and equivalents like Vite):

```js
// main.js
import "@db-ux/core-components/build/styles/rollup.css";
```

### DB Theme

In case that you're building a website or application for Deutsche Bahn, you'll additionally have to install the DB Theme via the [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) node package (even also available as an inner source node package, as described within that packages README).

### Optimize dependencies

If you only need some of the components or some features from [`@db-ux/core-foundations`](https://www.npmjs.com/package/@db-ux/core-foundations), you shouldn't include the bundled file.
In the case you want to include only some components, and you could do it like this:

```css
/* The theme contains all props required for components like spacings, colors, ... */
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css";
/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */
@import "@db-ux/core-foundations/build/styles/fonts/rollup.css";
/* The required styles will normalize css and add focus and default font to body */
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css";
/* The default setting for :root, adds a color space (neutral-bg-basic-level-1) and a density (regular). */
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css";

/* Optional: Add animations / transitions for components */
@import "@db-ux/core-components/build/styles/component-animations.css";

/* Optional: Add data-icon/data-icon-trailing to global attributes to enable icons for components */
@import "@db-ux/core-foundations/build/styles/icons/rollup.css";

/* Optional: Add components */
@import "@db-ux/core-components/build/components/button/button.css";
@import "@db-ux/core-components/build/components/input/input.css";
```

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
