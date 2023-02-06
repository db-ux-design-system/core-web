# @db-ui/web-components

A web-component library containing all components of [DB UX Design System (technical components)](https://github.com/db-ui/mono).

## Install

`npm i @db-ui/web-components`

## Dependencies

```json
# package.json
"copy:assets": "cpr node_modules/@db-ui/foundations/assets ./public/assets  -o",
"copy:styles": "cpr node_modules/@db-ui/components/build/styles/db-ui-42.css ./public/styles/db-ui-42.css  -o",
"copy:components": "cpr node_modules/@db-ui/components/build/components ./public/components  -o",
```

```html
# index.html

<head>
	...
	<link rel="stylesheet" href="styles/db-ui-42.css" />
	...
</head>
```

## Usage

```javascript
import "node_modules/@db-ui/web-components/components/button/button.js";

...
<db-button variant="primary" icon="account">Test</db-button>
...

```
