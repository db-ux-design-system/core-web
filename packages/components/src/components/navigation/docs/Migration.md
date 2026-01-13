## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before               | Status | After           | Description |
| -------------------- | :----: | --------------- | ----------- |
| `cmp-mainnavigation` |   🔁   | `db-navigation` |             |

### children

| Before     | Status | After | Description                                                                                  |
| ---------- | :----: | ----- | -------------------------------------------------------------------------------------------- |
| `data`     |   ❌   | ❌    | pass data via `children` / `slot`, moved a lot of the features to `db-control-panel-desktop` |
| `siteName` |   ❌   | ❌    |                                                                                              |
