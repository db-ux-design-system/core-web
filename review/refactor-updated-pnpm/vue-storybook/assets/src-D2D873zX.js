import{i as e}from"./preload-helper-gn-pAYu9.js";import{I as t,S as n,a as r,o as i,s as a,z as o}from"./blocks-BWaSSuJH.js";var s=e((()=>{t()})),c,l=e((()=>{c=`# @db-ux/v-core-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A Vue library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ux-design-system/core-web).
We also provide more information about specific components. This information is in our [Design System documentation](https://design-system.deutschebahn.com/documentation/get-started/).

## Install

\`\`\`shell
pnpm add @db-ux/v-core-components @db-ux/core-components @db-ux/core-foundations --save-dev
\`\`\`

## Styling Dependencies

### Vite Plugin

If you're using Vite, you can use the [\`@db-ux/core-vite-plugin\`](https://www.npmjs.com/package/@db-ux/core-vite-plugin) which simplifies the CSS setup to a single import.

\`\`\`shell
pnpm add @db-ux/core-vite-plugin --save-dev
\`\`\`

Add the plugin to your \`vite.config.ts\`:

\`\`\`ts
import { defineConfig } from "vite";
import dbUxPlugin from "@db-ux/core-vite-plugin";

export default defineConfig({
	plugins: [dbUxPlugin()]
});
\`\`\`

Then import the plugin in your CSS file:

\`\`\`css
/* style.css */
@import "@db-ux/core-vite-plugin/index.css";
\`\`\`

📖 **[Learn more about \`@db-ux/core-vite-plugin\` node package](https://www.npmjs.com/package/@db-ux/core-vite-plugin)**

### PostCSS Plugin (recommended)

We recommend using the [\`@db-ux/core-postcss-plugin\`](https://www.npmjs.com/package/@db-ux/core-postcss-plugin) to reduce your bundle size. It flattens CSS custom properties by resolving \`var()\`, \`calc()\`, \`color-mix()\`, and \`light-dark()\` at build time, removing unused declarations.

\`\`\`shell
pnpm add @db-ux/core-postcss-plugin --save-dev
\`\`\`

Configure it in \`vite.config.ts\`:

\`\`\`ts
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
\`\`\`

📖 **[Learn more about \`@db-ux/core-postcss-plugin\` node package](https://www.npmjs.com/package/@db-ux/core-postcss-plugin)**

### Manual CSS Setup

If you're not using Vite or prefer manual setup, import the styles in your main CSS file:

\`\`\`css
/* style.css */
@layer whitelabel-theme, db-ux;
/* You may want to include another theme here, this is a whitelabel theme! So instead of including the following line of code, please have a look at the DB Theme section */
@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);

@import "@db-ux/core-components/build/styles/bundle.css" layer(db-ux);
\`\`\`

\`\`\`ts
// main.ts
import "./style.css";
\`\`\`

### Vite 8

Starting with Vite 8, the default CSS minifier was changed to [LightningCSS](https://lightningcss.dev/), which provides buggy transformations for modern CSS features used by the DB UX Design System (e.g. \`light-dark()\` CSS function). To keep CSS output stable, configure \`vite.config.ts\` like this:

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

## Usage

\`\`\`vue
<script setup lang="ts">
import { DBButton } from "@db-ux/v-core-components";
<\/script>

<template>
	<DBButton variant="brand">Add item to cart</DBButton>
</template>
\`\`\`

### Events

We add \`v-model\` support which fires on every change.
But you can use normal \`@\` events as well.

Both inputs in this example do the same:

\`\`\`vue
<script setup lang="ts">
import { DBInput } from "@db-ux/v-core-components";
import { ref } from "vue";
const input = ref("");
<\/script>

<template>
	<DBInput
		label="Inputfield"
		name="input-name"
		v-model:value="input"
	></DBInput>
	<DBInput
		label="Inputfield"
		name="input-name"
		:value="input"
		@change="(e) => (input = e.target.value)"
	></DBInput>
</template>
\`\`\`

## AI Agent Support

For developers using AI coding assistants like GitHub Copilot or Amazon Q, we provide the [\`@db-ux/agent-cli\`](https://www.npmjs.com/package/@db-ux/agent-cli) tool that automatically adds DB UX Design System documentation to your repository.

### Quick Start

Run this command in your repository:

\`\`\`shell
npx @db-ux/agent-cli
\`\`\`

This will create or update \`.github/copilot-instructions.md\` with component documentation based on your installed \`@db-ux\` packages, helping AI agents provide better suggestions.

📖 **[Learn more about \`@db-ux/agent-cli\` node package](https://www.npmjs.com/package/@db-ux/agent-cli)**

## Code Quality

To enforce correct usage of DB UX Design System components in your Vue project, we provide the [\`@db-ux/core-eslint-plugin\`](https://www.npmjs.com/package/@db-ux/core-eslint-plugin) ESLint plugin.

### Installation

\`\`\`shell
pnpm add eslint @db-ux/core-eslint-plugin vue-eslint-parser @typescript-eslint/parser --save-dev
\`\`\`

### Setup

\`\`\`js
// eslint.config.js
import dbUx from "@db-ux/core-eslint-plugin";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
\`\`\`

📖 **[Learn more about \`@db-ux/core-eslint-plugin\` node package](https://www.npmjs.com/package/@db-ux/core-eslint-plugin)**

## Stylelint

To validate correct usage of DB UX Design System tokens in your CSS/SCSS, use the [\`@db-ux/core-stylelint\`](https://www.npmjs.com/package/@db-ux/core-stylelint) plugin.

### Installation

\`\`\`shell
pnpm add stylelint @db-ux/core-stylelint --save-dev
\`\`\`

### Setup

Add to your \`.stylelintrc.json\`:

\`\`\`json
{
	"plugins": ["@db-ux/core-stylelint"],
	"rules": {
		"db-ux/use-spacings": [true],
		"db-ux/use-sizing": [true],
		"db-ux/use-border-width": [true],
		"db-ux/use-border-radius": [true],
		"db-ux/use-border-color": [true]
	}
}
\`\`\`

📖 **[Learn more about \`@db-ux/core-stylelint\` node package](https://www.npmjs.com/package/@db-ux/core-stylelint)**

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
`}));function u(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{title:`Getting Started`}),`
`,(0,f.jsx)(r,{children:c})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),s(),a(),l()}))();export{d as default};