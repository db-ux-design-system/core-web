## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ui/components).

## DB UI Core ➡ DB UI Components

### class

| Before               | Status | After                | Description |
| -------------------- | :----: | -------------------- | ----------- |
| `cmp-mainnavigation` |   🔁   | `db-main-navigation` |             |

### children

| Before     | Status | After | Description                                                                   |
| ---------- | :----: | ----- | ----------------------------------------------------------------------------- |
| `data`     |   ❌   | ❌    | pass data via `children` / `slot`, moved a lot of the features to `db-header` |
| `siteName` |   ❌   | ❌    |                                                                               |
