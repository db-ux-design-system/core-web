# @db-ux/db-theme-icons

We provide db-theme-icons for DB Apps in this package. Because of legal concern some files are encrypted. To decrypt them you need to go to [Marketingportal](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/resources/db-theme). **Note:** Deep links aren't working, you need to click the link again after login.

You will find two environment variables on the page:

- `ASSET_PASSWORD`
- `ASSET_INIT_VECTOR`

Before you install `@db-ux/db-theme-icons` you need to create a `.env` file and add it to your `.gitignore`. Afterward, you add those two variables to the `.env` file.

```env
ASSET_PASSWORD=db-theme-icons
ASSET_INIT_VECTOR=db-theme-icons
```

The `postintall` script inside `@db-ux/db-theme-icons` will decrypt the files for you.

> **Note:** You can use `process.env.` local or in CI/CD to pass the required environment variables to `postinstall`.

## Install

> **Note:** Read the disclaimer above :)

```shell
npm i @db-ux/db-theme-icons
```

## Version Export

The package now exports a `version` constant that allows you to programmatically access the package version without needing to import package.json:

```typescript
import { version } from "@db-ux/db-theme-icons";

console.log(`Using @db-ux/db-theme-icons version ${version}`);
```

This provides a cleaner API and avoids bundler issues with deep-importing package.json.

## Usage plain svg

- You can copy assets from `node_modules/@db-ux/db-theme-icons/build/assets`

## Usage with `@db-ux/core-components`

### Import

There are different ways to include the icons via a font-face. Therefore, you need to import the correct `.css` file. There are multiple files depending on the bundler you use:

- `relative.css`: No bundler
- `absolute.css`: No bundler
- `rollup.css`: `vite`, `rollup`
- `webpack.css`: `webpack`

#### JS/TS

```javascript
// main.[js|ts]
import "@db-ux/db-theme-icons/build/styles/rollup.css";
```

#### CSS

```css
/* main.css */
@import "@db-ux/db-theme-icons/build/styles/rollup.css";
```

#### Vite

You might need to add an additional `resolve` in `vite.config.[js|ts]`:

```javascript
import * as path from "node:path";

export default defineConfig({
    ...
    resolve: {
        alias: {
            "@db-ux": path.resolve("node_modules/@db-ux"),
        },
    },
});
```

### Overwrite default icons

To overwrite the default icons from `@db-ux/core-components` or `@db-ux/core-foundations` you need to import `default-font.css`:

#### JS/TS

```javascript
// main.[js|ts]
import "@db-ux/db-theme-icons/build/styles/default-font.css";
```

#### CSS

```css
/* main.css */
@import "@db-ux/db-theme-icons/build/styles/default-font.css";
```

#### TypeScript Autocomplete

To get TypeScript autocomplete you need to include the types:

```json
{
  "compilerOptions": {
    ...,
    "types": [..., "@db-ux/db-theme-icons"]
  },
  "include": [
    ...,
    "node_modules/@db-ux/db-theme-icons/build/types/overwrite.d.ts"
  ]
}
```

If you have multiple overwrites you can also copy the `overwrite.d.ts` into your `src` folder and add additional types.

### Use Font-Family

If you want to use the font family you can do it like this:

#### HTML

```html
<button class="db-button" data-icon="my_icon" data-icon-variant="db">
	Test
</button>
```

#### Angular

```html
<db-button icon="my_icon" data-icon-variant="db">Test</db-button>
```

#### React & Vue

```tsx
<DBButton icon="my_icon" data-icon-variant="db">
	Test
</DBButton>
```

You can add additional TypeScript support by including generated types to `tsconfig.json`:

```json
React:
{
  "compilerOptions": ...,
  "include": [..., "node_modules/@db-ux/db-theme-icons/build/types/react.d.ts"],
}

Vue:
{
  "compilerOptions": ...,
  "include": [..., "node_modules/@db-ux/db-theme-icons/build/types/vue.d.ts"],
}
```

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even if being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UX products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

You aren't allowed to use this package or any of its contents (like e.g. design assets as well as protected characteristics and trademarks) for any usage outside of Deutsche Bahn websites and applications.

## License

This project is licensed under special Apache-2.0, see the LICENCE file in this package.
