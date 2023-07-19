# @db-ui/react-components

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A React library containing all styles & components of [DB UX Design System (technical components)](https://github.com/db-ui/mono).

## Install

`npm i @db-ui/react-components`

## Styling Dependencies

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

## Usage

```tsx
import { DBButton } from '@db-ui/react-components';
...
<DBButton icon="account" onClick={()=>{console.log("Test")}}>Test</DBButton>
...
```

## Custom Events

We do not provide every event on every component. If you are missing an event please [add an issue](https://github.com/db-ui/mono/issues).

As a workaround you can use the forwardRef:

### Ref on component

```tsx
import { DBButton } from "@db-ui/react-components";
import { useEffect, useRef } from "react";

const MyComponent = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.onmouseenter = (ev) => {
				console.log(ev);
			};
		}
	}, [buttonRef]);

	return <DBButton ref={buttonRef}>Test</DBButton>;
};
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
