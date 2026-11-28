# DB UI → DB UX Review After the Migration

The other migration guides map classes, props, tokens and icons. This guide lists what a mapping cannot decide: layout decisions, behavior, accessibility and values the scanner does not detect yet. Go through it after every migrated file and report each open point to the user. Do not decide layout questions on your own.

## Decisions for the user

- **Control Panel:** `rea-header` becomes `db-control-panel-desktop` and `db-control-panel-mobile` inside `db-shell`. Use both: the shell shows one per viewport. Where they sit (`controlPanelDesktopPosition`: top or left, `controlPanelMobilePosition`: top or bottom) and whether the navigation uses `db-control-panel-flat-icon` for equally weighted top-level destinations are layout decisions. Ask the user.
- **Control Panel content:** Login, profile and language actions go into `actions2` with `db-control-panel-actions-2`, not into `meta`: `meta` is for a meta navigation. `db-control-panel-brand` shows the DB logo from the DB Theme, so drop the own logo image. If the Generation 2 logo was a link, wrap `db-control-panel-brand` in the link, as in the brand example "As Link".
- **Red brand labels:** A red label that is a highlight, not an error (for example "Saver fare" on an offer), has no matching `semantic`: `critical` means error. Suggest `informational` with `emphasis="strong"` and ask the user.
- **Hard-coded values:** Decide with the user whether a fixed value was a design decision or a workaround. Replace it with a token or a component prop, or drop it.
- **Running text:** Plain `<p>` elements may stay. `db-paragraph` and `db-text-group` are optional.
- **Footer:** Legal links and the copyright notice go into `db-footer-meta` (`copyright` prop), other links into `db-footer-content`. Use `db-link` with `variant="inline"` and `size="small"` in a plain `ul` without a class, as in the footer example. The footer styles the list and wraps the links, so remove the own list CSS (`display: flex`, `gap`, `list-style`) and don't set `wrap` on the links.
- **Icons on links:** `db-link` has no icon props. If the Generation 2 link showed an icon, for example a person icon on "Log in" or a pen on "Change search", use `db-custom-button` with `variant="ghost"` and `icon` around the `<a>`. Treat every icon link the same way, so the page stays consistent.
- **Repeated buttons:** Buttons with the same text in a list of cards ("Select", "Show trains") need `aria-describedby` pointing to the card heading, so screen readers can tell them apart.

## Defaults without a question

Apply these without asking. Mention them in "Open decisions and checks", so the user can change them.

- **Page width:** A fixed `max-width` with `margin-inline: auto` on a page container becomes `db-section` with the `width` prop (`small`, `medium`, `large`, `full`). Pick the width closest to the original `max-width` and give `db-footer` the same `width`. The content edges of section and footer can still differ by a few pixels. Don't add a workaround for it.
- **Tooltips on icon-only buttons:** An icon-only `db-button` keeps its text, sets `noText` and gets a `db-tooltip` with the same text and `variant="label"`, so the name is not announced twice. Generation 2 used the `tooltip` prop for this.

## Values the scanner does not detect yet

`scan_generation_2_migration` reports packages, classes, custom elements, wrappers, color tokens, icon names, self-built controls and hard-coded colors, sizes and shadows in single-line declarations. It does not report:

- `opacity` used as a lighter color, and values in multi-line declarations or computed in code
- Generation 2 prop and variant values, for example `variant="brand-primary"`, `size="large"`, `description`, `input_id`, `htmlid`
- Generation 2 helper classes such as `is-close` or `is-visually-hidden`
- self-built controls whose markup is split over several lines

Check these yourself with `general-migration`, `color-migration` and `component-migration`. Two values have no token and may stay: `font-weight` for bold text, and the breakpoint values inside `@media` queries (custom properties do not work there). Layout sizes such as a column width or an image height have no token either, see "Sizes without a token" in `general-migration`.

Keep logical CSS properties (`margin-block`, `padding-inline`, `inset-inline-start`, `text-align: start`) when you replace values. Don't turn them into physical ones (`margin-top`, `left`, `text-align: left`): they would break right-to-left layouts.

## Layout overrides by components

Several components set their own `display`. A layout class on the component itself is overridden, because the component selector is more specific than a single class.

- `db-card` is a flex column. Put a grid or row layout on a wrapper element inside the card, not on the card.
- Check every custom layout class on a component after the migration in the browser.

## Behavior

- **DOM access:** Generation 2 Web Components exposed native inputs, so code often read or wrote values through the DOM (`querySelector(...).value`, `.checked = false`). With framework components, keep the values in state and use controlled props. Don't keep a DOM script next to the framework state.
- **Controlled fields in React:** `value` or `checked` without `onChange` makes a field read-only, and React warns about it. Pair them with `onChange`, or use `defaultValue` / `defaultChecked` for uncontrolled fields. Use `onChange`, not `onInput` with a type cast.
- **Form submit:** Check that the form still reads its values (for example with `FormData`) and that a disabled submit button still prevents a second submit.
- **Dialog:** `db-dialog` is controlled by the `open` prop. Replace `showModal()` and `close()` calls. Check that Escape, the backdrop, the close button of `db-dialog-header` and every footer button close the dialog and update the state through `onClose`.
- **Focus:** After the dialog closes, the focus must return to the element that opened it.
- **Workarounds:** Remove Generation 2 workarounds in the build config, for example a disabled CSS minification for `@db-ui/core` 3.3.7.

## Accessibility

- **Announcements:** `db-notification` and `db-loading-indicator` announce their state. Remove visually hidden prefixes like `<em>Information:</em>`, otherwise screen readers announce them twice. A live region is only announced reliably when it exists before its content changes. A `db-loading-indicator` that is rendered only while loading appears together with its text and may stay silent. In that case keep a status region that is always rendered and make the indicator inside it silent, so there is only one live region:

    ```tsx
    <div role="status">
    	{isLoading && (
    		<>
    			<DBLoadingIndicator
    				label="Searching…"
    				showLabel={false}
    				aria-hidden="true"
    			/>
    			Searching…
    		</>
    	)}
    </div>
    ```

    Without `aria-hidden` the indicator is a second live region with the same text. Ask the user to confirm with a screen reader.

- **Accessible names:** Icon-only buttons keep their text, set `noText` and get a tooltip (see "Defaults without a question"). The close button of `db-dialog-header` needs `closeButtonText`.
- **State without color:** Selected filters must not depend on color alone. Use `showCheckState` on `db-tag` with a checkbox inside.
- **Headings:** Choose the heading level from the document outline and check the order of the whole page: no skipped levels, for example cards with `h3` directly after the `h1`. The original can already contain such errors, so don't copy the levels. Use `visualSize` for the look.
- **Contrast:** Check the text contrast in Light and Dark Mode, for example with Lighthouse or axe. Lighter text made with `opacity` or a light `emphasis` token often misses 4.5:1. Use a stronger `emphasis` token.
- **Valid markup:** `db-tag`, `db-loading-indicator`, `db-notification` and `db-card` render a `div`. Don't place them inside a `<p>`: React logs "In HTML, `<div>` cannot be a descendant of `<p>`". Use a `div` as wrapper.
- **Tables:** Keep the caption and the row headers (`scope="row"`).

Some accessibility findings belong to Generation 2 components and disappear with the migration, for example `aria-required-children` on the tablist of `db-tab-bar`. Don't fix them in the original.

## Expected visual changes

Tell the user that these differences in a before-and-after comparison are correct:

- Generation 2 capitalized every word of a chip label with CSS (`text-transform: capitalize`). In Generation 3 the label appears as written.
- Generation 2 icon fonts put their glyph into the accessible name, for example "󡈡 Log in" or "🛈 Construction work …". Generation 3 icons are not part of the name, so screen readers read the plain text.
- Generation 2 form fields showed the label inside the field. Generation 3 shows it above the field by default. `variant="floating"` keeps the label inside, ask the user which one to use.
- Required fields turn green with a check once the user has filled them in correctly (`:user-valid`). `validation="no-validation"` turns this off for a field.
- Headings are larger by default than in Generation 2. Keep the semantic level and adjust the look with `visualSize`.
- Spacing, sizes and colors follow the tokens of the current density and the current color scheme.
- Generation 2 had no Dark Mode. Generation 3 follows the color scheme of the system, so the migrated app can appear dark next to a light original. Compare both in Light Mode.
- The DB look needs `@db-ux/db-theme`. Without it, the app shows the whitelabel theme. See `general-migration`.

## Report format

End the migration output with a section "Open decisions and checks". List every point from this guide that applies to the migrated file, with the place in the code, and mark which ones need a decision from the user and which ones need a manual check in the browser or with a screen reader.

Compare the migrated pages with the screenshots of the original you took before the first change. If you have none, ask the user to compare the pages in the browser.

Leave all changes unstaged and uncommitted, also deleted files: delete with the file system, not with `git rm`. The user reviews the diff and commits.
