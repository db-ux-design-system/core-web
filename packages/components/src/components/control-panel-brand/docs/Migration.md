## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before                    | Status | After                    | Description |
| ------------------------- | :----: | ------------------------ | ----------- |
| `cmp-control-panel-brand` |   🔁   | `db-control-panel-brand` |             |

### properties

> **Note**
> We removed all old properties, because control-panel-brand hasn't a wrapping anchor tag (`<a>`) anymore.
> If you want to use a link around `db-control-panel-brand`, do it by yourself.

| Before           | Status | After | Description                                                                                           |
| ---------------- | :----: | :---: | ----------------------------------------------------------------------------------------------------- |
| `siteNameLink`   |   ❌   |  ❌   | see Note                                                                                              |
| `alt`            |   ❌   |  ❌   | see Note                                                                                              |
| `anchorRef`      |   ❌   |  ❌   | see Note                                                                                              |
| `anchorTitle`    |   ❌   |  ❌   | see Note                                                                                              |
| `anchorRelation` |   ❌   |  ❌   | see Note                                                                                              |
| `src`            |   ❌   |  ❌   | see Note                                                                                              |
| `hideLogo`       |   🆕   |  ❌   | If you want a custom image, you can hide the default one and pass anything into the `children`/`slot` |
