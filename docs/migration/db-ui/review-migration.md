# DB UI → DB UX Review After the Migration

The other migration guides map classes, props, tokens and icons. This guide lists what a mapping cannot decide: layout decisions, behavior, accessibility and values the scanner does not detect yet. Go through it after every migrated file and report each open point to the user. Do not decide layout questions on your own.

## Decisions for the user

- **Control Panel variant:** `rea-header` becomes `db-control-panel-desktop` and `db-control-panel-mobile` inside `db-shell`. Whether the layout uses Control Panel Desktop, Mobile or Flat Icon, and where the desktop panel sits (`controlPanelDesktopPosition`), is a layout decision. Ask the user.
- **Hard-coded values:** Decide with the user whether a fixed value was a design decision or a workaround. Replace it with a token or a component prop, or drop it.
- **Page width:** A fixed `max-width` with `margin-inline: auto` on a page container becomes `db-section` with the `width` prop (`small`, `medium`, `large`, `full`). Use the same width as the footer, so content and footer line up.
- **Running text:** Plain `<p>` elements may stay. `db-paragraph` and `db-text-group` are optional.

## Values the scanner does not detect yet

`scan_generation_2_migration` reports packages, classes, custom elements, wrappers, color tokens and icon names. It does not report:

- hard-coded `px`/`rem` values, `#fff` and other hex colors, `box-shadow` and `opacity` in CSS
- inline `style` attributes
- Generation 2 prop and variant values, for example `variant="brand-primary"`, `size="large"`, `description`, `input_id`, `htmlid`
- Generation 2 helper classes such as `is-close` or `is-visually-hidden`

Check these yourself with `general-migration`, `color-migration` and `component-migration`. Two values have no token and may stay: `font-weight` for bold text, and the breakpoint values inside `@media` queries (custom properties do not work there).

## Layout overrides by components

Several components set their own `display`. A layout class on the component itself is overridden, because the component selector is more specific than a single class.

- `db-card` is a flex column. Put a grid or row layout on a wrapper element inside the card, not on the card.
- Check every custom layout class on a component after the migration in the browser.

## Behavior

- **DOM access:** Generation 2 Web Components exposed native inputs, so code often read or wrote values through the DOM (`querySelector(...).value`). With framework components, keep the values in state and use controlled props.
- **Form submit:** Check that the form still reads its values (for example with `FormData`) and that a disabled submit button still prevents a second submit.
- **Dialog:** `db-dialog` is controlled by the `open` prop. Replace `showModal()` and `close()` calls. Check that Escape, the backdrop, the close button of `db-dialog-header` and every footer button close the dialog and update the state through `onClose`.
- **Focus:** After the dialog closes, the focus must return to the element that opened it.
- **Workarounds:** Remove Generation 2 workarounds in the build config, for example a disabled CSS minification for `@db-ui/core` 3.3.7.

## Accessibility

- **Announcements:** `db-notification` and `db-loading-indicator` announce their state. Remove visually hidden prefixes like `<em>Information:</em>` and separate `role="status"` texts, otherwise screen readers announce them twice. Ask the user to confirm with a screen reader.
- **Accessible names:** Icon-only buttons keep their text and set `noText`. The close button of `db-dialog-header` needs `closeButtonText`.
- **State without color:** Selected filters must not depend on color alone. Use `showCheckState` on `db-tag` with a checkbox inside.
- **Headings:** Choose the heading level from the document outline. Use `visualSize` for the look.
- **Tables:** Keep the caption and the row headers (`scope="row"`).

## Expected visual changes

Tell the user that these differences in a before-and-after comparison are correct:

- Generation 2 capitalized every word of a chip label with CSS (`text-transform: capitalize`). In Generation 3 the label appears as written.
- Spacing, sizes and colors follow the tokens of the current density and the current color scheme.
- The DB look needs `@db-ux/db-theme`. Without it, the app shows the whitelabel theme. See `general-migration`.

## Report format

End the migration output with a section "Open decisions and checks". List every point from this guide that applies to the migrated file, with the place in the code, and mark which ones need a decision from the user and which ones need a manual check in the browser or with a screen reader.
