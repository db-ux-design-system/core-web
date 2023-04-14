## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ui/components).

## DB UI Core ➡ DB UI Components

### class

| Before             | Status | After      | Description |
| ------------------ | :----: | ---------- | ----------- |
| `elm-notification` |   🔁   | `db-alert` |             |

### variant ➡ type

| Before   | Status | After    | Description                                            |
| -------- | :----: | -------- | ------------------------------------------------------ |
| `alert`  |   🔁   | `alert`  | Default alert with different look                      |
| `status` |   ❌   | ❌       | Status can be changed by `variants`                    |
|          |   🆕   | `inline` | New stling with shadow and rounded corners (like card) |

### type ➡ variants

| Before        | Status | After           | Description                                       |
| ------------- | :----: | --------------- | ------------------------------------------------- |
|               |   🆕   | `adaptive`      | Default: change colors based on background        |
| `error`       |   🔁   | `critical`      | 'Red' colored alert to show error messages        |
| `informative` |   🔁   | `informational` | 'Blue' colored alert to show information messages |
| `warning`     |   🔁   | `warning`       | 'Yellow' colored alert to show warning messages   |
| `success`     |   🔁   | `successful`    | 'Green' colored alert to show success messages    |
