# @db-ux/ngx-core-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

An Angular library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ux-design-system/core-web).
We also provide more information about specific components. This information is in our [Design System documentation](https://design-system.deutschebahn.com/documentation/get-started/).

## Install

```shell
pnpm add @db-ux/ngx-core-components @db-ux/core-components @db-ux/core-foundations --save-dev
```

## Styling Dependencies

Import the styles in your main CSS file:

```css
/* styles.css */
@layer whitelabel-theme, db-ux;
/* You may want to include another theme here, this is a whitelabel theme! So instead of including the following line of code, please have a look at the DB Theme section */
@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);

@import "@db-ux/core-components/build/styles/bundle.css" layer(db-ux);
```

### PostCSS Plugin (recommended)

We recommend using the [`@db-ux/core-postcss-plugin`](https://www.npmjs.com/package/@db-ux/core-postcss-plugin) to reduce your bundle size. It flattens CSS custom properties by resolving `var()`, `calc()`, `color-mix()`, and `light-dark()` at build time, removing unused declarations.

```shell
pnpm add @db-ux/core-postcss-plugin --save-dev
```

Create a `postcss.config.json` in your project root:

```json
{
	"plugins": {
		"@db-ux/core-postcss-plugin": {}
	}
}
```

> Angular CLI (`@angular/build:application`) only supports JSON-based PostCSS configs and loads plugins by name via `require()`. Works in both `ng build` and `ng serve`.

📖 **[Learn more about `@db-ux/core-postcss-plugin` node package](https://www.npmjs.com/package/@db-ux/core-postcss-plugin)**

### Resolve assets

The current default development config in `angular.json` doesn't use output hashing. This may cause an issue loading the fonts. Look at [this](https://github.com/angular/angular-cli/issues/26347) for more information.

As a solution add `"outputHashing": "media"` to `configurations/development` in `angular.json`.

### DB Theme

In case that you're building a website or application for Deutsche Bahn, you'll additionally have to install the DB Theme via the [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) node package (even also available as an inner source node package, as described within that packages README).

## Usage

```ts
// app.component.ts
import { DBButton } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBButton
	],
	standalone: true
	// ...
})
```

```html
<!-- app.component.html -->
<db-button variant="brand">Button</db-button>
```

### Events

There are 3 ways to use Events in Angular:

**[ngModel](https://angular.dev/api/forms/NgModel)**

```html
<db-input
	label="Inputfield"
	name="input-name"
	[(ngModel)]="inputModel"
></db-input>
```

**[FormControl](https://angular.dev/api/forms/FormControl)**

```html
<db-input
	label="Inputfield"
	name="input-name"
	[formControl]="inputControl"
></db-input>
```

**[change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)**

```html
<db-input
	label="Inputfield"
	name="input-name"
	(change)="inputModel = $event.target.value"
></db-input>
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

## Code Quality

To enforce correct usage of DB UX Design System components in your Angular templates, we provide the [`@db-ux/core-eslint-plugin`](https://www.npmjs.com/package/@db-ux/core-eslint-plugin) ESLint plugin.

### Installation

```shell
pnpm add eslint @db-ux/core-eslint-plugin @angular-eslint/template-parser --save-dev
```

### Setup

```js
// eslint.config.js
import dbUx from "@db-ux/core-eslint-plugin";
import angularTemplateParser from "@angular-eslint/template-parser";

export default [
	{
		files: ["**/*.html"],
		languageOptions: {
			parser: angularTemplateParser
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

📖 **[Learn more about `@db-ux/core-eslint-plugin` node package](https://www.npmjs.com/package/@db-ux/core-eslint-plugin)**

## Stylelint

To validate correct usage of DB UX Design System tokens in your CSS/SCSS, use the [`@db-ux/core-stylelint`](https://www.npmjs.com/package/@db-ux/core-stylelint) plugin.

### Installation

```shell
pnpm add stylelint @db-ux/core-stylelint --save-dev
```

### Setup

Add to your `.stylelintrc.json`:

```json
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
```

📖 **[Learn more about `@db-ux/core-stylelint` node package](https://www.npmjs.com/package/@db-ux/core-stylelint)**

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
