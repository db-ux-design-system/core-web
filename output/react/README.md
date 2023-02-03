# @db-ui/react-components

A React library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ui/mono).

## Install

`npm i @db-ui/react-components`

## Dependencies (simple)

Import the styles in scss or css. Based on your technology the file names could be different.

-   Default (db-ui-42): points to `../assets`
-   Webpack (db-ui-42-webpack): points to `~@db-ui/foundations/assets`
-   Rollup (db-ui-42-rollup): points to `@db-ui/foundations/assets`

<details>
  <summary><strong>SCSS</strong></summary>

```scss
// index.scss
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
```

</details>
<details>
  <summary><strong>CSS</strong></summary>

```tsx
// main.tsx
import "@db-ui/components/build/styles/db-ui-42-rollup.css";
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

```tsx
import { DBButton } from '@db-ui/react-components';
...
<DBButton icon="account" onClick={()=>{console.log("Test")}}>Test</DBButton>
...
```
