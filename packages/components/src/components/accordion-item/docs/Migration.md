## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before          | Status | After               | Description                                                                                                                      |
| --------------- | :----: | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cmp-accordion` |   🔁   | `db-accordion-item` | The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component) |

### props

| Before     | Status | After                        | Description                                                                  |
| ---------- | :----: | ---------------------------- | ---------------------------------------------------------------------------- |
| `summary`  |   🔁   | `headline` / `headlinePlain` | The title/summary, as a slot (`headline`) or plain string (`headlinePlain`). |
| `emphasis` |   ❌   | ❌                           | There is no emphasis anymore.                                                |
| `size`     |   ❌   | ❌                           | Controlled by the density.                                                   |
|            |   🆕   | `disabled`                   | Disable the component.                                                       |
|            |   🆕   | `text`                       | Pass in a simple string as fallback to normal children/slot                  |
