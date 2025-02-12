# @db-ux/wc-core-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A web-component library containing all components of [DB UX Design System (technical components)](https://github.com/db-ux-design-system/core-web).

## Install

```shell
npm i @db-ux/wc-core-components
```

> **Note:** This will install [`@db-ux/core-foundations`](https://www.npmjs.com/package/@db-ux/core-foundations) and [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components) as well which contains the `css`/`scss` files

## Styling Dependencies

Import the styles in scss or css. Based on your technology the file names could be different.

-   Default (relative): points to `../assets`
-   Rollup (rollup): points to `@db-ux/core-foundations/assets`
-   Webpack (webpack): points to `~@db-ux/core-foundations/assets`

<details>
  <summary><strong>SCSS</strong></summary>

```scss
// index.scss
@forward "@db-ux/core-components/build/styles/rollup";
```

</details>
<details>
  <summary><strong>CSS</strong></summary>

```js
// main.js
import "@db-ux/core-components/build/styles/rollup.css";
```

</details>

> **Note:** The `@db-ux/core-components/build/styles/relative` file contains optional and all components styles. If you consider performance issues see [@db-ux/core-components](https://www.npmjs.com/package/@db-ux/core-components) for more information.

## Usage

```js
// main.js
import { defineCustomElements } from "@db-ux/wc-core-components";
defineCustomElements();
```

```html
...
<db-button icon="x_placeholder">Test</db-button>
...
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


## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ux-design-system/core-web/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE).
