# @db-ui/stylelint

Validate the correct usage of DB UX in your (S)CSS code.

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

Enable rules inside your `.stylelintrc.json` with:

```json5
{
	rules: {
		"db-ui/use-spacings": [true], // margins, paddings, gaps
		"db-ui/use-border-height": [true], // border-width & border
		"db-ui/use-border-radius": [true], // border-radius
		"db-ui/use-border-color": [true] // border-color & border
	}
}
```

### Additional settings

There are some additional settings for every rule which can be applied to the `.stylelintrc.json`:

```json5
{
	rules: {
		"db-ui/use-xxx": [
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
