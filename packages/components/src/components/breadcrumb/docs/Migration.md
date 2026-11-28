## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before           | Status | After           | Description                                                                                                |
| ---------------- | :----: | --------------- | ---------------------------------------------------------------------------------------------------------- |
| `cmp-breadcrumb` |   🔁   | `db-breadcrumb` | A plain list of links becomes `db-breadcrumb` with one `db-breadcrumb-item` per link, or the `items` prop. |

### structure

| Before                     | Status | After         | Description                                     |
| -------------------------- | :----: | ------------- | ----------------------------------------------- |
| `aria-current="page"` link |   🔁   | `ariaCurrent` | Mark the current page on the last item.         |
|                            |   🆕   | `maxItems`    | Long trails collapse automatically (default 4). |
|                            |   🆕   | `separator`   | `chevron` or `slash`.                           |
