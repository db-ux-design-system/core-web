# @db-ux/core-stylelint

Validate the correct usage of DB UX in your (S)CSS code.

## Installation

```shell
npm install stylelint @db-ux/core-stylelint --save-dev
```

> **Note:** We recommend installing `stylelint-config-standard`, `stylelint-use-logical` & `@double-great/stylelint-a11y` as well.

````shell

## Usage

Add this to your `.stylelintrc.json` configuration file:

```json
{
	"plugins": [
		...
		"@db-ux/core-stylelint"
	]
}
````

## Rules

Enable rules inside your `.stylelintrc.json` with:

```json5
{
	rules: {
		"db-ux/use-spacings": [true], // margins, paddings, gaps
		"db-ux/use-border-width": [true], // border-width & border
		"db-ux/use-border-radius": [true], // border-radius
		"db-ux/use-border-color": [true] // border-color & border
	}
}
```

### Additional settings

There are some additional settings for every rule which can be applied to the `.stylelintrc.json`:

```json5
{
	rules: {
		"db-ux/use-xxx": [
			true,
			{
				allowCalc: true, // allow all calc() functions - they are hard to lint
				ignore: ["test.scss"], // ignore specific files
				allow: {
					// allow additional values e.g. for SASS or exceptions/workarounds
					startsWith: ["map.get"],
					includes: ["--custom-gap"],
					exact: ["$custom-padding"]
				}
			}
		]
	}
}
```
