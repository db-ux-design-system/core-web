# @db-ux/wc-core-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A web-component library containing all components of [DB UX Design System (technical components)](https://github.com/db-ux-design-system/core-web).
We also provide more information about specific components. This information is in our [Design System documentation](https://design-system.deutschebahn.com/documentation/get-started/).

## Install

```shell
npm i @db-ux/wc-core-components @db-ux/core-components @db-ux/core-foundations
# or
pnpm i @db-ux/wc-core-components @db-ux/core-components @db-ux/core-foundations
```

## Styling Dependencies

Import the styles in your main CSS file:

```css
/* index.css */
@layer whitelabel-theme, db-ux;
/* You may want to include another theme here, this is a whitelabel theme! So instead of including the following line of code, please have a look at the DB Theme section */
@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);

@import "@db-ux/core-components/build/styles/bundle.css" layer(db-ux);
```

### Vite 8

Starting with Vite 8, the default CSS minifier was changed to [LightningCSS](https://lightningcss.dev/), which provides buggy transformations for modern CSS features used by the DB UX Design System (e.g. `light-dark()` CSS function). To keep CSS output stable, configure `vite.config.ts` like this:

```ts
// vite.config.ts
export default defineConfig({
	build: {
		cssMinify: "esbuild"
	}
});
```

> Alternatively, you could define a [browserslist](https://browsersl.ist/) based on your individual browser support strategy — which might be totally different from the list Vite 8 defines by default (targeting browsers from the early 2020s):

```ts
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
```

### DB Theme

In case that you're building a website or application for Deutsche Bahn, you'll additionally have to install the DB Theme via the [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) node package (even also available as an inner source node package, as described within that packages README).

## Usage

The components work in any HTML context. Register them once at your app entry point:

```js
// main.js
import { defineCustomElements } from "@db-ux/wc-core-components";
defineCustomElements();
```

Then use them anywhere in your HTML:

```html
<db-button variant="brand">Click me</db-button>
```

## VSCode autocomplete

If you don't have it already, add a VS Code settings folder and file at the root of your project - `.vscode/settings.json`. Then add or append the following code:

```json
{
	"html.customData": [
		"./node_modules/@db-ux/wc-core-components/dist/vscode.html-custom-data.json"
	]
}
```

## AI Agent Support

For developers using AI coding assistants like GitHub Copilot or Amazon Q, we provide the [`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli) tool that automatically adds DB UX Design System documentation to your repository.

### Quick Start

Run this command in your repository:

```shell
npx @db-ux/agent-cli
```

This will create or update `.github/copilot-instructions.md` with component documentation based on your installed `@db-ux` packages, helping AI agents provide better suggestions.

📖 **[Learn more about `@db-ux/agent-cli` node package](https://www.npmjs.com/package/@db-ux/agent-cli)**

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
