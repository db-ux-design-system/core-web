# @db-ux/react-core-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A React library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ux-design-system/core-web).

> **Note:** Find more information about specific components [here](https://design-system.deutschebahn.com/core-web/review/main)

## Install

```shell
npm i @db-ux/react-core-components
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

```tsx
// main.tsx
import "@db-ux/core-components/build/styles/rollup.css";
```

</details>

> **Note:** The `@db-ux/core-components/build/styles/relative` file contains optional and all components styles. If you consider performance issues see [@db-ux/core-components](https://www.npmjs.com/package/@db-ux/core-components) for more information.

### DB Theme

In case that you're building a website or application for Deutsche Bahn, you'll additionally have to install the DB Theme via the [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) node package (even also available as an inner source node package, as described within that packages README).

## Usage

```tsx
import { DBButton } from '@db-ux/react-core-components';
...
<DBButton icon="x_placeholder" onClick={()=>{console.log("Test")}}>Test</DBButton>
...
```

## AI Agent Support

For developers using AI coding assistants like GitHub Copilot or Amazon Q, we provide the [`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli) tool that automatically adds DB UX Design System documentation to your repository.

### Quick Start

Run this command in your repository:

```shell
npx @db-ux/agent-cli
```

This will create or update `.github/copilot-instructions.md` with component documentation based on your installed `@db-ux` packages, helping AI agents provide better suggestions.

📖 **[Learn more about `@db-ux/agent-cli` node package](packages/agent-cli/README.md)**

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
