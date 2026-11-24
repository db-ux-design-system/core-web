## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before                 | Status | After                  | Description                                                           |
| ---------------------- | :----: | ---------------------- | --------------------------------------------------------------------- |
| `elm-loadingindicator` |   🔁   | `db-loading-indicator` | Use `variant="circular"` with `indeterminate` for the former spinner. |
| `elm-progress`         |   🔁   | `db-loading-indicator` | Use `variant="bar"` with `value` and `max` for determinate progress.  |

### announcement

Generation 2 rendered the spinner as an SVG and needed a separate status text, for example a paragraph with `role="status"`.

| Before                        | Status | After   | Description                                                                                                          |
| ----------------------------- | :----: | ------- | -------------------------------------------------------------------------------------------------------------------- |
| separate `role="status"` text |   ❌   | `label` | The component is a live region and announces its `label`. Remove the separate text, otherwise it is announced twice. |

Keep behavior that the spinner did not provide itself, for example a disabled submit button that prevents a second search.
