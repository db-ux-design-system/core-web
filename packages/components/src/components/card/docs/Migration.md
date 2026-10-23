## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before     | Status | After     | Description |
| ---------- | :----: | --------- | ----------- |
| `cmp-card` |   🔁   | `db-card` |             |

### behavior

| Before    | Status |   After    | Description                                                                                             |
| --------- | :----: | :--------: | ------------------------------------------------------------------------------------------------------- |
| `variant` |   🔁   | `behavior` | There is no default `header`/`content` anymore. Use `behavior="interactive"` to make the card a button. |
| `header`  |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |
| `content` |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |

### image

There are no built-in image props anymore. Render your own `<img>` inside the card via children/slot.

| Before                   | Status | After | Description                              |
| ------------------------ | :----: | ----- | ---------------------------------------- |
| `alt`                    |   ❌   | ❌    | Render your own `<img>` inside the card. |
| `image`                  |   ❌   | ❌    | Render your own `<img>` inside the card. |
| `illustration`           |   ❌   | ❌    |                                          |
| `uiCoreIllustrationPath` |   ❌   | ❌    |                                          |
