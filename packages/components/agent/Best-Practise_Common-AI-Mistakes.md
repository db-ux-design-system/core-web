# Best Practise / Common AI mistakes

## `DBButton` or `db-button`

- available variants are `outlined`, `brand`, `filled`, `ghost`
- always use variant `outlined` as default
- use variant `brand` as CTA or primary action
- if `noText`/`no-text` property is used add a `DBTooltip` or `db-tooltip` inside the Button
- if `noText`/`no-text` property is used, an icon attribute (`icon`, `iconLeading`, or `iconTrailing`) is also required
- always add a `type` as property as best practise (`button`, `submit`, or `reset`)
- there is no `size=large` button
- only use one icon attribute at a time: `icon`, `iconLeading`, or `iconTrailing` — never combine them

## `DBStack` or `db-stack`

- there is no property `gap="fix-md"`, available values are `small`, `medium`, etc.
- there is no property `direction="horizontal"`, available values are `row`, `column`, etc.

## `DBAccordion` or `db-accordion`

- never nest a `DBAccordion`/`db-accordion` inside another `DBAccordion`/`db-accordion` — it confuses users

## `DBAccordionItem` or `db-accordion-item`

- always provide either a `headline`, `headlinePlain` attribute, or a headline slot
- must have children content (text or child elements)

## `DBBadge` or `db-badge`

- when using corner placement (`corner-top-left`, `corner-top-right`, `corner-bottom-left`, `corner-bottom-right`), text/children must be max 3 characters
- when using corner placement, a `label` attribute is required for accessibility
- inside interactive elements (`DBButton`, `DBLink`, `button`, `a`), do not use `placement="inline"` — use corner placement instead
- when no `placement` is set, the default is `inline`

## `DBLink` or `db-link`

- when using `content="external"`, always add `target="_blank"` and `referrerPolicy` (e.g. `"no-referrer"`)
- when using `target="_blank"`, always set `content="external"`

## `DBInput` or `db-input`

- always add a `type` attribute (e.g. `text`, `email`, `password`, `file`) for better developer experience
- when `type="file"`, always add an `accept` attribute (e.g. `".pdf"`, `"image/*"`)
- `multiple` and `accept` attributes are only valid for `type="file"` — do not use them with other types

## `DBSelect` or `db-select`

- must have either an `options` property or `<option>` children — never leave it empty

## `DBCustomSelect` or `db-custom-select`

- always provide `mobileCloseButtonText` for accessibility
- when using `selectedType="tag"`, always provide `removeTagsTexts` attribute for accessibility

## `DBNotification` or `db-notification`

- always provide `closeButtonText` attribute for accessibility
- must have children content (text or child elements)

## `DBDrawer` or `db-drawer`

- always provide `closeButtonText` attribute for accessibility

## `DBHeader` or `db-header`

- always provide `burgerMenuLabel` attribute for accessibility

## `DBNavigationItem` or `db-navigation-item`

- always provide `backButtonText` attribute for accessibility
- must have children content (text or child elements)

## `DBTag` or `db-tag`

- when using `behavior="removable"`, always provide `removeButton` attribute for accessibility

## `DBTooltip` or `db-tooltip`

- must not contain interactive elements (buttons, links, inputs, etc.) — use `DBPopover` for interactive content
- must be a child of an interactive element (`button`, `a`, `DBButton`, `DBLink`, `DBNavigationItem`, `DBTabItem`, `input`, `select`, `textarea`, etc.) for accessibility

## `DBIcon` or `db-icon`

- prefer using the `icon` attribute on the parent component (`DBButton`, `DBInput`, `DBLink`, `DBTag`, etc.) instead of nesting a `DBIcon`/`db-icon` child

## Form components (`DBInput`, `DBTextarea`, `DBSelect`, `DBCustomSelect`, `DBCheckbox`, `DBRadio`, `DBSwitch`)

- always provide a `label` attribute for accessibility (for `DBCheckbox`, `DBRadio`, `DBSwitch` children text content also counts as label)
- when using validation attributes (`required`, `minLength`, `maxLength`, `min`, `max`, `pattern`), always provide an `invalidMessage` attribute for better UX (exception: `DBRadio` with `required` does not need `invalidMessage`)

## Content components (`DBButton`, `DBLink`, `DBBadge`, `DBIcon`, `DBInfotext`, `DBNavigationItem`, `DBNotification`, `DBAccordionItem`)

- must have either a `text` property or children content — never leave them empty
