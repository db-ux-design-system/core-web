## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ui/components).

## DB UI Core ➡ DB UI Components

### class

| Before       | Status | After         | Description |
| ------------ | :----: | ------------- | ----------- |
| `cmp-db-tab` |   🔁   | `db-tab-item` |             |

### name

| Before | Status | After | Description                                                                                         |
| ------ | :----: | :---: | --------------------------------------------------------------------------------------------------- |
| `name` |   ❌   |  ❌   | It should be used with `db-tabs` which will add a the `name` from `db-tabs` to all tabs all at one. |
