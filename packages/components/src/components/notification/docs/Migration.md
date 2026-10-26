## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before             | Status | After             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | :----: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `elm-notification` |   🔁   | `db-notification` | The old notification component has been split into 2 different components [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) and [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) for more information (when and how to use it). |

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
