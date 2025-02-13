## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### tag vs. chip

We simplified the components by reducing the amount from tag + chip to only tag.

You can use different types of tags by adding another component into it:

```html
<db-tag><db-button>Tag as Button</db-button></db-tag>
<db-tag><db-link>Tag as Link</db-link></db-tag>
<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>
<db-tag><db-radio>Tag as Radio</db-radio></db-tag>
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
