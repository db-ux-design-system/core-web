## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before             | Status | After             | Description                                                                                             |
| ------------------ | :----: | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `cmp-notification` |   🔁   | `db-notification` | `@db-ui/core` 3.x styles the notification as `cmp-notification`. Older docs name it `elm-notification`. |

### data-type ➡ semantic

Generation 2 set the status colour with `data-type` on the element. It becomes the `semantic` prop (see the table below).

### wrapper ➡ variant

Generation 2 framed an in-content notification with a wrapping `<section data-variant="hovering">`. Drop the wrapper and use `variant="standalone"`. The default `docked` is meant for global alerts between header and main content.

A visually hidden prefix such as `<em>Information:</em>` is no longer needed: the component announces its semantic. Confirm this with a screen reader.

### variant (layout)

The `variant` prop now controls the layout only. Status colours moved to the `semantic` prop (see below).

| Before | Status | After        | Description                                                       |
| ------ | :----: | ------------ | ----------------------------------------------------------------- |
|        |   🆕   | `docked`     | Docked notification, e.g. between header and main content.        |
|        |   🆕   | `standalone` | Standalone notification, e.g. inside a form for a specific field. |
|        |   🆕   | `overlay`    | Absolute, floating notification (snackbar style).                 |

### type ➡ semantic

Status colours are set via the `semantic` prop, not via `variant`.

| Before        | Status | After                      | Description                                              |
| ------------- | :----: | -------------------------- | -------------------------------------------------------- |
|               |   🆕   | `semantic="adaptive"`      | Default: change colors based on background               |
| `error`       |   🔁   | `semantic="critical"`      | 'Red' colored notification to show error messages        |
| `informative` |   🔁   | `semantic="informational"` | 'Blue' colored notification to show information messages |
| `warning`     |   🔁   | `semantic="warning"`       | 'Yellow' colored notification to show warning messages   |
| `success`     |   🔁   | `semantic="successful"`    | 'Green' colored notification to show success messages    |
