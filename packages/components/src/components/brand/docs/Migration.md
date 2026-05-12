## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before      | Status | After      | Description |
| ----------- | :----: | ---------- | ----------- |
| `cmp-brand` |   🔁   | `db-brand` |             |

### properties

> **Note**
> We removed all old properties, because brand hasn't a wrapping anchor tag (`<a>`) anymore.
> If you want to use a link around `db-brand`, do it by yourself.

| Before           | Status | After | Description |
| ---------------- | :----: | :---: | ----------- |
| `siteNameLink`   |   ❌   |  ❌   | see Note    |
| `alt`            |   ❌   |  ❌   | see Note    |
| `anchorRef`      |   ❌   |  ❌   | see Note    |
| `anchorTitle`    |   ❌   |  ❌   | see Note    |
| `anchorRelation` |   ❌   |  ❌   | see Note    |
| `src`            |   ❌   |  ❌   | see Note    |
