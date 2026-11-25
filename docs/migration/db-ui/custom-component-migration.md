# Self-Built Components → DB UX Migration

Use this guide for controls that have no deterministic mapping: self-built buttons, selects, cards and similar, and components of other libraries. `scan_generation_2_migration` reports them as `candidate` findings, and their hard-coded colors, sizes and shadows as `value` findings. Do not guess a mapping. Classify each control, confirm the result with the user, then migrate.

## 1. Collect

- List every `candidate` finding of all scanned files.
- Add the self-built components the scan cannot see, for example a component file whose markup is split over several lines. Search for components that render native `button`, `select`, `input`, `a` or a clickable `div`.
- Group the usages by component. Migrate the component once, not every usage separately.

## 2. Classify

Answer these questions for each control. The answers decide the DB UX component.

| Question                        | Where to look                             | Typical result                                                                                                    |
| ------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| What does it do when activated? | Event handlers, `href`, form submit       | Action → `db-button`. Navigation → `db-link` or a navigation item                                                 |
| What can the user choose?       | Option lists, `value`, state              | One option from a list → `db-select`. Several options → `db-custom-select`. On/off → `db-switch` or `db-checkbox` |
| Does it group content?          | Children, image, heading, actions         | Content container → `db-card`. Short label → `db-badge` or `db-tag`, see below                                    |
| Which variants and sizes exist? | Props, modifier classes                   | Map variants to the `variant` prop of the component. Sizes usually become density, not a size prop                |
| Which states exist?             | `disabled`, `loading`, `selected`, `open` | Use the component props for each state                                                                            |

**Badge or tag:** Use `db-badge` for a short, non-interactive label next to or on another element, for example "Popular" on a card or a counter on a button (`placement="corner-*"`). It renders a `span`. A red highlight label that is not an error has no matching `semantic` (`critical` means error): suggest `informational` with `emphasis="strong"` in the table and ask the user. Use `db-tag` to categorize or filter content, also when the label contains a checkbox, radio, link or button, or can be removed. It renders a `div`.

Inspect the control in the running application if a browser tool is available, for example the Chrome DevTools MCP:

- `take_snapshot` with `verbose: true`: role, accessible name and state. The compact snapshot leaves out roles such as table, row and cell, so a table can look like plain text there. A clickable `div` without a role shows up as generic text, a self-built select often has no `combobox` or `listbox` role.
- `take_screenshot`: the look, to compare with `get_visual_reference` and the component examples.
- `evaluate_script` with `getComputedStyle(element)`: the real colors, spacing, radius and shadow, to pick matching tokens.

Take the screenshots before you change any code: after the migration the original is gone. Screenshots that stay only in the chat are lost when the context is compacted. If the tool can save to a file, use a temporary folder outside the repository and never commit it. Otherwise tell the user which pages you captured, so they can compare them in the browser later.

Without a browser tool, ask the user for a screenshot of each control.

## 3. Confirm with the user

Present one table before changing code:

| Control | Used in | DB UX component | Variant / props | Reason | Open questions |
| ------- | ------- | --------------- | --------------- | ------ | -------------- |

Wait for the user's confirmation. Open questions are typical where the look differs on purpose, where a control combines two components, or where no component fits.

## 4. Migrate

- Replace the component implementation and its usages. Remove the component file and its CSS once nothing uses it anymore. Delete them with the file system, not with `git rm`: the user reviews and commits the changes.
- Keep the behavior: event handlers, form values and `name` attributes, controlled state.
- Map colors to semantic tokens from `color-migration` and `get_design_tokens`. Generation 2 base colors (`var(--db-color-*)`) map through `color-migration`. Hex values need the closest semantic token: background and text use different tokens.
- Map spacing, font sizes, radii and shadows with `general-migration`.
- Do not keep self-built focus styles: the components bring their own focus ring.

## When no component fits

- Keep the self-built component, but replace every hard-coded value with tokens, so it follows density, Light Mode and Dark Mode.
- Add the missing accessibility: a native element instead of a clickable `div`, a role, keyboard support and an accessible name.
- Tell the user, so the case can be raised with the design system team.

## Accessibility

Self-built controls often lack keyboard support, a role or a visible focus. List each gap you found in "Open decisions and checks" (see `review-migration`), also when the DB UX component fixes it, so the user knows the behavior changed.
