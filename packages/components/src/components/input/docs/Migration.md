## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before      | Status | After      | Description |
| ----------- | :----: | ---------- | ----------- |
| `elm-input` |   🔁   | `db-input` |             |

### variants

| Before            | Status | After     | Description                                                                    |
| ----------------- | :----: | --------- | ------------------------------------------------------------------------------ |
| `semitransparent` |   ❌   | ❌        | Old look variants are removed; a semi-transparent look is the default now.     |
| `white`           |   ❌   | ❌        |                                                                                |
| `solid`           |   ❌   | ❌        |                                                                                |
| `outline`         |   ❌   | ❌        |                                                                                |
|                   |   🆕   | `variant` | `variant` now controls the label layout only: `above` (default) or `floating`. |

### validation

| Before | Status | After        | Description                                                                                              |
| ------ | :----: | ------------ | -------------------------------------------------------------------------------------------------------- |
|        |   🆕   | `validation` | Set the validation state with `validation`: `valid` (green), `invalid` (red), or `no-validation` (grey). |
