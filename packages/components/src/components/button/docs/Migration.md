## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| `elm-button` |   🔁   | `db-button` |             |

### sizes

| Before    | Status | After | Description                                                                                                                                                                                   |
| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |
| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |

### variants

| Before              | Status | After      | Description                                                  |
| ------------------- | :----: | ---------- | ------------------------------------------------------------ |
| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |
| `brand-primary`     |   🔁   | `brand`    |                                                              |
| `secondary-outline` |   🔁   | `outlined` |                                                              |
| `secondary-solid`   |   🔁   | `filled`   |                                                              |
| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |

### icons

| Before         | Status | After          | Description                                           |
| -------------- | :----: | -------------- | ----------------------------------------------------- |
| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |
| `iconOnly`     |   🔁   | `noText`       |                                                       |
