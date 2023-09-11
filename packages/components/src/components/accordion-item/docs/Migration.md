## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ui/components).

## DB UI Core ➡ DB UI Components

### class

| Before          | Status | After               | Description                                                                                                                      |
| --------------- | :----: | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cmp-accordion` |   🔁   | `db-accordion-item` | The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component) |

### props

| Before     | Status | After       | Description                                                 |
| ---------- | :----: | ----------- | ----------------------------------------------------------- |
| `summary`  |   🔁   | `title`     | The title/summary of the details element.                   |
| `emphasis` |   ❌   | ❌          | There is no emphasis anymore.                               |
| `size`     |   ❌   | ❌          | Controlled by the tonality.                                 |
|            |   🆕   | `disabled`  | Disable the component.                                      |
|            |   🆕   | `content`   | Pass in a simple string as fallback to normal children/slot |
|            |   🆕   | `slotTitle` | Pass in a custom title (only required for React)            |
