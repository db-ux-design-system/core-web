# @db-ui/v-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A Vue library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ui/mono).

> **Note:** Find more information about specific components [here](https://db-ui.github.io/mono/review/main)

## Install

```shell
npm i @db-ui/v-components
```

> **Note:** This will install `@db-ui/foundations` and `@db-ui/components` as well which contains the `css`/`scss` files

## Styling Dependencies

Import the styles in scss or css. Based on your technology the file names could be different.

-   Default (db-ui-42): points to `../assets`
-   Webpack (db-ui-42-webpack): points to `~@db-ui/foundations/assets`
-   Rollup (db-ui-42-rollup): points to `@db-ui/foundations/assets`

<details>
  <summary><strong>SCSS</strong></summary>

```scss
// style.scss
@forward "@db-ui/components/build/styles/db-ui-42-rollup";
```

```ts
// main.ts
import "./style.scss";
import "@db-ui/v-components/dist/style.css";
```

</details>
<details>
  <summary><strong>CSS</strong></summary>

```ts
// main.ts
import "@db-ui/components/build/styles/db-ui-42-rollup.css";
import "@db-ui/v-components/dist/style.css";
```

</details>

## Usage

```vue
<script setup lang="ts">
import { DBButton } from "@db-ui/v-components";
</script>

<template>
	<DBButton icon="account">Test</DBButton>
</template>
```

### Events

We add `v-model` support which fires on every change.
But you can use normal `@` events as well.

Both Inputs in this example do the same:

```html
<script setup lang="ts">
	import { DbInput } from "@db-ui/v-components";
	import { ref } from "vue";
	const input = ref("");
</script>
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
		@change="e => input = e.target.value"
	></DBInput>
</template>
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
