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

The component is a live region and announces its `label`. Which pattern fits depends on whether the indicator stays in the page:

| Before                        | Status | After                | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | :----: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| separate `role="status"` text |   ❌   | `label`              | The indicator stays rendered and changes its `state`, or sits inside a button. Remove the separate text, otherwise it is announced twice.                                                                                                                                                                                                                                                                             |
| separate `role="status"` text |   🔁   | keep the status text | The indicator is only rendered while loading. A live region that appears together with its text is not announced reliably, and an inactive indicator still shows its track and keeps its label. Keep a `role="status"` element that is always rendered. While loading, place the indicator inside it with `aria-hidden="true"` and a hidden label (`showLabel` set to `false`), and write the status text next to it. |

Keep behavior that the spinner did not provide itself, for example a disabled submit button that prevents a second search.
