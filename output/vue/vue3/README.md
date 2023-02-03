# @db-ui/v-components

A Vue library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ui/mono).

## Install

`npm i @db-ui/v-components`

## Dependencies (simple)

<details>
  <summary><strong>SCSS</strong></summary>

```scss
// style.scss
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
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

## Dependencies (advanced)

<details>
  <summary><strong>SCSS</strong></summary>

```scss
@use "@db-ui/foundations/build/scss/rollup.assets-paths" as *;
@use "@db-ui/foundations/build/scss/icon/icons" as *;
@use "@db-ui/foundations/build/scss/db-ui-foundations" as *;
```

</details>
<details>
  <summary><strong>CSS</strong></summary>

```tsx
// main.tsx
import "@db-ui/foundations/build/css/icon/icons.css";
import "@db-ui/foundations/build/css/db-ui-foundations.css";
```

</details>

## Usage

```ts
<script setup lang="ts">
	import { DBButton } from "@db-ui/v-components";
</script>

...
<DBButton icon="account">Test</DBButton>
...
```
