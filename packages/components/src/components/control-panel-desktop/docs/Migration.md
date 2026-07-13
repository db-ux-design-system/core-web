## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UX v4 ➡ DB UX v5

`DBControlPanelDesktop` is the new component that replaces the desktop portion of the former `DBHeader`.

### class

| Before      | Status | After                      | Description                              |
| ----------- | :----: | -------------------------- | ---------------------------------------- |
| `db-header` |   🔁   | `db-control-panel-desktop` | Renamed to reflect the desktop-only role |

### properties

| Before            | Status | After                 | Description                                                     |
| ----------------- | :----: | --------------------- | --------------------------------------------------------------- |
| `burgerMenuLabel` |   ❌   | ❌                    | Moved to `DBControlPanelMobile`                                 |
| `drawerOpen`      |   ❌   | ❌                    | Moved to `DBControlPanelMobile`                                 |
| `width`           |   🔁   | `width`               | Still available                                                 |
| —                 |   🆕   | `expanded`            | Set the expanded/collapsed state initially for the left sidebar |
| —                 |   🆕   | `expandButtonTooltip` | Set the tooltip for the expand/collapse button                  |
| —                 |   🆕   | `orientation`         | Change the orientation (horizontal/vertical)                    |

### slots

| Before           | Status | After  | Description                         |
| ---------------- | :----: | ------ | ----------------------------------- |
| `metaNavigation` |   🔁   | `meta` | Shortened slot name for conciseness |
