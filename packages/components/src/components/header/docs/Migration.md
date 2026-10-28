## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After                                                  | Description                                                                                                                   |
| ------------ | :----: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `rea-header` |   🔁   | `db-control-panel-desktop` / `db-control-panel-mobile` | `db-header` is deprecated. Render both as siblings inside `db-shell`; the shell shows the matching one per breakpoint (`sm`). |

### mobile

| Before   | Status | After         | Description                        |
| -------- | :----: | ------------- | ---------------------------------- |
| `mobile` |   🔁   | `forceMobile` | forces the burger menu for desktop |
