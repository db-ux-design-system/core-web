## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After       | Description                                                                                      |
| ------------ | :----: | ----------- | ------------------------------------------------------------------------------------------------ |
| `cmp-dialog` |   🔁   | `db-dialog` | Header and footer move into `db-dialog-header` and `db-dialog-footer` (`header`/`footer` slots). |

### behavior

Generation 2 used a native `<dialog>` with the `cmp-dialog` class and opened it with `showModal()`, often in an effect.

| Before                       | Status | After              | Description                                                                                                  |
| ---------------------------- | :----: | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `showModal()` / `close()`    |   🔁   | `open`             | The `open` prop controls the dialog. Keep the state in your code and set it back in `onClose`.               |
| close button with `is-close` |   🔁   | `db-dialog-header` | The header renders the close button. Set `closeButtonText` so the icon-only button keeps an accessible name. |
|                              |   🆕   | `backdrop`         | `none`, `weak` or `strong`. `none` uses `dialog.show()` instead of `dialog.showModal()`.                     |
|                              |   🆕   | `containerSize`    | `small`, `medium`, `large` or `full`.                                                                        |

After the migration, check that Escape, the backdrop, the close button and every footer button close the dialog, and that the focus returns to the element that opened it.
