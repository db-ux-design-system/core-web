# @db-ui/stylelint

Validate the correct usage of DB UX in your CSS.

## Installation

```shell
npm install stylelint @db-ui/stylelint --save-dev
```

> **Note:** We recommend installing `stylelint-config-standard`, `stylelint-use-logical` & `@double-great/stylelint-a11y` as well.

````shell

## Usage

Add this to your `.stylelintrc.json`:

```json
{
	"plugins": [
		...
		"@db-ui/stylelint"
	]
}
````

## Rules

### `db-ui/use-spacings`

```json5
{
	rules: {
		"db-ui/use-spacings": [
			true,
			{
				allowCalc: true, // allow calc() function - they are hard to lint
				ignore: ["test.scss"], // ignore specific files
				allow: {
					// allow additional values e.g. for sass or exceptions/workarounds
					startsWith: ["map.get"],
					includes: ["--custom-gap"],
					exact: ["$custom-padding"]
				}
			}
		]
	}
}
```
