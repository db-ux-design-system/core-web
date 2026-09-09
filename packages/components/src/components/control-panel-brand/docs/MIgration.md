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

| Before           | Status | After | Description                                                                                             |
| ---------------- | :----: | :---: | ------------------------------------------------------------------------------------------------------- |
| `hideLogo`       |   ❌   |  ❌   | Removed. The default logo now automatically hides if you place an `<img>` element inside the component. |
| `icon`           |   ❌   |  ❌   | Removed. The logo is now rendered via CSS background image from the theme assets.                       |
| `showIcon`       |   ❌   |  ❌   | Removed. See `icon`.                                                                                    |
| `siteNameLink`   |   ❌   |  ❌   | see Note                                                                                                |
| `alt`            |   ❌   |  ❌   | see Note                                                                                                |
| `anchorRef`      |   ❌   |  ❌   | see Note                                                                                                |
| `anchorTitle`    |   ❌   |  ❌   | see Note                                                                                                |
| `anchorRelation` |   ❌   |  ❌   | see Note                                                                                                |
| `src`            |   ❌   |  ❌   | see Note                                                                                                |
