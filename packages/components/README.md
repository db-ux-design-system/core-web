# @db-ui/components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A library containing the technical components of [DB UX Design System v3](https://github.com/db-ui/mono).

> **Note**
> Furthermore we currently support these additional JavaScript frameworks, with more coming soon:

-   [Angular components](https://www.npmjs.com/package/@db-ui/ngx-components)
-   [React components](https://www.npmjs.com/package/@db-ui/react-components)
-   [Vue components](https://www.npmjs.com/package/@db-ui/v-components)

Please take a look at your desired framework to retrieve more information.

For additional information besides the frameworks see our [Getting started](https://github.com/db-ui/mono/tree/main/packages/components/docs/getting-stated.md).

---

If you just need the styling follow this:

## Install

`npm i @db-ui/components`

## Dependencies

Import the styles in `scss` or `css`. Based on your technology the file names could be different.

-   Default (db-ui-42): asset path point to `../assets`
-   Webpack (db-ui-42-webpack): asset path point to `~@db-ui/foundations/assets`
-   Rollup (db-ui-42-rollup): asset path point to `@db-ui/foundations/assets`

`db-ui-42` bundles all dependencies from [foundations](https://www.npmjs.com/package/@db-ui/foundations) + all [components](https://github.com/db-ui/mono/blob/main/packages/components/src/styles/db-ui-components.scss) available.

**SCSS**

```scss
// index.scss
@forward "@db-ui/components/build/styles/db-ui-42-rollup";
```

**CSS**

Within HTML files directly:

```html
<!-- index.html //-->
<link rel="stylesheet" href="/styles/db-ui-42.css" />
```

Or within your JavaScript files, with the related bundler as a prefix (in this case rollup and equivalents like Vite):

```js
// main.js
import "@db-ui/components/build/styles/db-ui-42-rollup.css";
```

### Optimize dependencies

If you only need some of the components or some features from [`@db-ui/foundations`](https://www.npmjs.com/package/@db-ui/foundations), you shouldn't include `db-ui-42`.
In the case you want to include only some components, and you could do it like this:

```css
/* The theme contains all prop required for components like spacings, colors, ... */
@import "@db-ui/foundations/build/css/default-theme.css";
/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */
@import "@db-ui/foundations/build/css/fonts/include-rollup.css";
/* The required styles will normalize css and add focus and default font to body */
@import "@db-ui/foundations/build/css/init/required.css";
/* The default root adds a default color space (neutral) and a density (regular) */
@import "@db-ui/foundations/build/css/init/default-root.css";

/* Optional: Add animations / transitions for components */
@import "@db-ui/components/build/styles/component-animations.css";

/* Optional: Add data-icon/data-icon-after to global attributes to enable icons for components */
@import "@db-ui/foundations/build/css/icons/include-rollup.css";

/* Optional: Add components */
@import "@db-ui/components/build/components/button/button.css";
@import "@db-ui/components/build/components/input/input.css";
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
