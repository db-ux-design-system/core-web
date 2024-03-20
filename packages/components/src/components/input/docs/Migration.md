## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ui/components).

## DB UI Core ➡ DB UI Components

### class

| Before      | Status | After      | Description |
| ----------- | :----: | ---------- | ----------- |
| `elm-input` |   🔁   | `db-input` |             |

### variants

| Before            | Status | After           | Description                                                                                           |
| ----------------- | :----: | --------------- | ----------------------------------------------------------------------------------------------------- |
| `semitransparent` |   ❌   | ❌              | old variants are removed a semi-transparent look is the default, new variants are chaniging the color |
| `white`           |   ❌   | ❌              |                                                                                                       |
| `solid`           |   ❌   | ❌              |                                                                                                       |
| `outline`         |   ❌   | ❌              |                                                                                                       |
|                   |   🆕   | `adaptive`      |                                                                                                       |
|                   |   🆕   | `neutral`       |                                                                                                       |
|                   |   🆕   | `critical`      |                                                                                                       |
|                   |   🆕   | `informational` |                                                                                                       |
|                   |   🆕   | `warning`       |                                                                                                       |
|                   |   🆕   | `successful`    |                                                                                                       |
