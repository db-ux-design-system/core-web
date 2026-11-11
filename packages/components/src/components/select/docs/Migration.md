## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| `elm-select` |   🔁   | `db-select` |             |

### select

| Before     | Status | After      | Description                                                                                                     |
| ---------- | :----: | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `multiple` |   🔁   | `multiple` | Still supported, but the native multi-select is unstyled - prefer `db-custom-select` for a styled multi-select. |
| `size`     |   ❌   |            | We removed this attribute for now, there are no valid designs for this use case.                                |
