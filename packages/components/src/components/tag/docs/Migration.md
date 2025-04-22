## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### tag vs. chip

We simplified the components by reducing the amount from tag + chip to only tag.

You can use different types of tags by adding another component into it:

```html
<db-tag><button type="button">Tag as Button</button></db-tag>
<db-tag><a href="#">Tag as Link</a></db-tag>
<db-tag
	><label for="checkbox01">
		<input id="checkbox01" type="checkbox" />Tag as Checkbox</label
	></db-tag
>
<db-tag
	><label for="radio01"
		><input name="radio01" id="radio01" type="radio" />Tag as Radio</label
	></db-tag
>
<db-tag>Static Tag</db-tag>
```

### class

| Before    | Status | After    | Description |
| --------- | :----: | -------- | ----------- |
| `elm-tag` |   🔁   | `db-tag` |             |

### sizes

| Before  | Status | After | Description                                                                                                                             |
| ------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------- |
| `small` |   ❌   |  ❌   | We removed small tags because of density. But you can use `type` property with value `strong` to emphasize a tag for a differentiation. |

### variants

| Before        | Status | After           | Description                                      |
| ------------- | :----: | --------------- | ------------------------------------------------ |
| `poi-*`       |   ❌   | ❌              | We removed all point of interest colors for now. |
| `track`       |   ❌   | ❌              | We removed track for now.                        |
| `error`       |   🔁   | `critical`      |                                                  |
| `informative` |   🔁   | `informational` |                                                  |
| `success`     |   🔁   | `successful`    |                                                  |

### icons

| Before      | Status | After | Description                                                    |
| ----------- | :----: | ----- | -------------------------------------------------------------- |
| `iconAfter` |   ❌   | ❌    | not valid anymore, for tags only icons before text are allowed |
