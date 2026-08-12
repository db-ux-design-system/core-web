import{n as e}from"./iframe-BtTBzCzm.js";import{i as t,r as n}from"./react-DLfG4Wvs.js";import{a as r,o as i,s as a}from"./blocks-J7sge3FI.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s;function c(){return(c=o((()=>{s=`# @db-ux/core-components

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

**No!** The \`@db-ux/core-components\` package **automatically includes** all the foundations (\`@db-ux/core-foundations\`) you need. You only need to include one package:

- **Use \`@db-ux/core-components\`** - If you want to use UI components (buttons, inputs, etc.)
- **Use \`@db-ux/core-foundations\`** - If you only need design tokens, colors, spacing, fonts, and assets without any component styles

## Install

\`npm i @db-ux/core-components\`

> **Note**: This automatically includes \`@db-ux/core-foundations\` as a dependency, if you use \`npm\`. If you use \`pnpm\` you need to install \`@db-ux/core-foundations\` as well.

## Styling Dependencies

Import the styles in \`css\`. Based on your technology the file names could be different.

- \`relative\`: asset path point to \`../assets\`
- \`webpack\`: asset path point to \`~@db-ux/core-foundations/assets\`
- \`rollup\`: asset path point to \`@db-ux/core-foundations/assets\`

**Important**: The component bundle includes the semantic foundation defaults and all component styles. Import a separate theme entry for palette tokens, fonts, and icons, as shown below.

### Import

Import the styles in your main \`.css\` file. The opt-in \`layered.css\` entry point keeps the complete DB UX bundle in the \`db-ux\` cascade layer without changing the priority of the existing entry points.

\`\`\`css
/* index.css */
@layer whitelabel-theme, db-ux;
/* You may want to include another theme here, this is a whitelabel theme! So instead of including the following line of code, please have a look at the DB Theme section */
@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);

@import "@db-ux/core-components/build/styles/layered.css";
\`\`\`

### Combining with third-party component libraries

The bundled foundation styles include global normalization rules. Keep DB UX in a named cascade layer so those rules don't override component libraries such as PrimeNG. Register the complete layer order in the first stylesheet loaded by the application, before any stylesheet creates one of these layers. Layers listed later have higher priority for normal declarations:

\`\`\`css
@layer whitelabel-theme, db-ux, primeng;

@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);
@import "@db-ux/core-components/build/styles/layered.css";
\`\`\`

PrimeNG 17 creates the \`primeng\` layer by default. In versions where PrimeNG's \`cssLayer\` option is disabled, its unlayered styles automatically take priority over the layered DB UX defaults. If \`cssLayer\` is enabled with a custom name, use that name instead of \`primeng\` in the order declaration. The layer order is reversed for \`!important\` declarations.

JavaScript cannot assign a layer to an arbitrary CSS import, but it can import the pre-layered entry point directly. Import the theme first so its palette tokens, fonts, and icons are available:

\`\`\`js
import "@db-ux/core-foundations/build/styles/theme/rollup.css";
import "@db-ux/core-components/build/styles/layered.css";
\`\`\`

Use a global CSS entry file instead when you need to register an explicit order for multiple named layers.

> **Vite 8 Note:** Starting with Vite 8, the default CSS minifier was changed to [LightningCSS](https://lightningcss.dev/), which provides buggy transformations for modern CSS features used by the DB UX Design System (e.g. \`light-dark()\` CSS function). We might provide a specific configuration necessary to mitigate those problems in the near future. To keep CSS output stable in the meantime, configure \`vite.config.ts\` like this:

\`\`\`ts
// vite.config.ts
export default defineConfig({
	build: {
		cssMinify: "esbuild"
	}
});
\`\`\`

> Alternatively, you could define a [browserslist](https://browsersl.ist/) based on your individual browser support strategy — which might be totally different from the list Vite 8 defines by default (targeting browsers from the early 2020s):

\`\`\`ts
// Note: You need to install the required packages first:
// npm install -D lightningcss browserslist

// vite.config.ts
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

export default defineConfig({
	css: {
		lightningcss: {
			targets: browserslistToTargets(
				browserslist(
					">= 0.5%, last 2 major versions, Firefox ESR, not dead"
				)
			)
		}
	}
});
\`\`\`

### DB Theme

In case that you're building a website or application for Deutsche Bahn, you'll additionally have to install the DB Theme via the [\`@db-ux/db-theme\`](https://www.npmjs.com/package/@db-ux/db-theme) node package (even also available as an inner source node package, as described within that packages README).

### Optimize dependencies

If you only need some of the components or some features from [\`@db-ux/core-foundations\`](https://www.npmjs.com/package/@db-ux/core-foundations), you shouldn't include the bundled file.
In the case you want to include only some components, and you could do it like this:

\`\`\`css
@layer db-ux;

/* The theme contains all props required for components like spacings, colors, ... */
@import "@db-ux/core-foundations/build/styles/bundle.css" layer(db-ux);
/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */
@import "@db-ux/core-foundations/build/styles/fonts/rollup.css" layer(db-ux);
/* The required styles will normalize css and add focus and default font to body */
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css"
	layer(db-ux);
/* The default setting for :root, adds a color space (neutral-bg-basic-level-1) and a density (regular). */
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css"
	layer(db-ux);

/* Optional: Add animations / transitions for components */
@import "@db-ux/core-components/build/styles/component-animations.css"
	layer(db-ux);

/* Optional: Add data-icon/data-icon-trailing to global attributes to enable icons for components */
@import "@db-ux/core-foundations/build/styles/icons/rollup.css" layer(db-ux);

/* Optional: Add components */
@import "@db-ux/core-components/build/components/button/button.css" layer(db-ux);
@import "@db-ux/core-components/build/components/input/input.css" layer(db-ux);
\`\`\`

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even if being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UX Design System products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

For any usage outside of Deutsche Bahn websites and applications you aren't allowed to use any Deutsche Bahn brand and
design assets as well as protected characteristics and trademarks, that for not including the DB Theme.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE).
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`Getting Started`}),`
`,(0,d.jsx)(r,{children:s})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=o((()=>{d=e(),n(),a(),c()})))()}f();export{u as default};