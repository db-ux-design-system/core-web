# DB UI to DB UX Design System – Generation 3 Component Migration

> "DB UI" is the former name of DB UX Design System – Generation 2; the two terms refer to the same generation.

Prefer JS framework packages: Angular `@db-ux/ngx-core-components` (`<db-button>`), React `@db-ux/react-core-components` (`<DBButton>`), Vue `@db-ux/v-core-components` (`<DBButton>`) in case that the user wants to build a JavaScript application with one of these frameworks. If it's still a JavaScript framework, but none of these apply, use `@db-ux/core-components` node package. In all other cases, use the HTML and CSS basis: `@db-ux/core-components`.

Legend: [replacement]=replacement exists, [new]=new component, [removed]=removed

## Direct Equivalents

**accordion** — New component

**accordion-item** — `cmp-accordion`->`db-accordion-item` (was single item, now multiple items wrapped in one `db-accordion`). Props: `summary`->`headline` (slot) or `headlinePlain` (string), `emphasis`->[removed], `size`->[removed] (use density). Body content goes in children/slot or the `text` prop. New: `disabled`, `defaultOpen`, `open`.

**badge** — New component

**brand** — `cmp-brand`->`db-control-panel-brand` (the former `db-brand` is deprecated). Use it inside the `db-control-panel-*` / `db-shell` family. Wrap with your own `<a>` if a link is needed.

**breadcrumb** — `cmp-breadcrumb`->`db-breadcrumb` (with `db-breadcrumb-item` children, or the `items` array prop). Props: `separator` (`chevron`/`slash`), `maxItems` (default 4), `expandText`, `size`. Each item uses `db-link`-style props (`href`, `text`, `icon`) plus `ariaCurrent`.

**button** — `elm-button`->`db-button`. Sizes: `large`->[removed], `regular`->[removed] (default is `medium`, use density). Variants (current `ButtonVariantList`: `outlined`, `brand`, `filled`, `ghost`): `primary`->[removed] (use `outlined`), `brand-primary`->`brand`, `secondary-outline`->`outlined`, `secondary-solid`->`filled`, `tertiary-plain`->`ghost`. Icons: `iconOnly`->`noText`. Leading and trailing icons are both supported (`iconLeading`/`icon` and `iconTrailing`).

**card** — `cmp-card`->`db-card`. Put the card content in children/slot (`header`/`content` sub-parts are gone). `behavior="interactive"` makes it act like a button (there is no `variant` prop). Props: `behavior` (`static`/`interactive`), `elevationLevel` (`1`/`2`/`3`), `spacing`, click events. No built-in image props - render your own `<img>` inside the card.

**checkbox** — `elm-checkbox`->`db-checkbox`. Map `input_id` to `id` (for React/Vue), but use `propOverrides` for Web Components and Angular.

**dialog** — `cmp-dialog`->`db-dialog` (native `<dialog>` based modal). Props: `open`, `backdrop` (`none`/`weak`/`strong`), `containerSize` (`small`/`medium`/`large`/`full`), `header`/`footer` slots (`db-dialog-header`/`db-dialog-footer`). Use `db-drawer` instead for side/edge panels.

**divider** — New component

**drawer** — New component

**footer** — `rea-footer`->`db-footer` (with `db-footer-content` / `db-footer-meta` sub-parts). Previously a custom `<footer>` + `db-link` composition was needed; the component now ships.

**header** — `rea-header`->`db-control-panel-desktop` / `db-control-panel-mobile` (the former `db-header` is deprecated). Render **both** as siblings inside `db-shell` for a responsive shell; the shell styles hide `db-control-panel-desktop` below the `sm` breakpoint and `db-control-panel-mobile` at and above it, so each one shows at the right viewport size. Both are part of the `db-shell` family.

**icon** — ->`db-icon`. Props: `icon` (name, see icon-migration), `variant` (custom icon font family), `weight` (`16`/`20`/`24`/`32`/`48`/`64`). Most consumers pass icons via the `icon` prop on other components rather than using `db-icon` directly.

**infotext** — New component

**input** — `elm-input`->`db-input`. Old variants removed: `semitransparent`,`white`,`solid`,`outline`->[removed]. `variant` now controls the label layout only (`above`/`floating`). Validation state is set via `validation` (`valid`/`invalid`/`no-validation`), not via colour variants. `description`->`message`. ⚠️ Behavior change: In Generation 2, `description` was hidden by default (tooltip/hint). In Generation 3, `message` is ALWAYS visible by default. To restore the Generation 2 hidden behavior, set `showMessage={false}` explicitly.

**link** — `elm-link`->`db-link`. `icon`,`icononly`,`iconVariant`->[removed] (use `content` for arrow icon).

**loading-indicator** — `elm-loadingindicator` and `elm-progress`->`db-loading-indicator`. Props: `variant` (`bar`/`circular`), `state` (`inactive`/`active`/`successful`/`critical`), `value`/`max`/`progressText`/`showProgressText` (determinate progress), `indeterminate`, `label`, `overlay`, `size`. Covers both the former loading spinner and the progress bar; no custom CSS spinner or native `<progress>` needed.

**navigation** — `cmp-mainnavigation`->`db-control-panel-navigation` (the former `db-navigation` is deprecated). `data`,`siteName`->[removed] (use `db-control-panel-navigation-item` children, features moved to the `db-control-panel-desktop`/`db-control-panel-mobile` shell).

**navigation-item** — New component (`db-control-panel-navigation-item`; the former `db-navigation-item` is deprecated)

**notification** — `elm-notification`->`db-notification`. Semantic colour moves to the `semantic` prop (`adaptive`/`neutral`/`critical`/`informational`/`warning`/`successful`): `error`->`semantic="critical"`, `informative`->`semantic="informational"`, `warning`->`semantic="warning"`, `success`->`semantic="successful"`. The `variant` prop now controls layout only (`docked`/`standalone`/`overlay`), not colour.

**page** — `rea-page`->`db-shell` (the former `db-page` is deprecated). `db-shell` wraps the control panels and `db-shell-content`.

**pagination** — `cmp-pagination`->`db-pagination`. Props: `totalCount`, `pageSize`, `currentPage`, `siblingCount`, `boundaryCount`, `onPageChange`, `label`/`previousLabel`/`nextLabel`/`pageLabel`, or a composed `items` array. Accessible previous/next and page controls are built in; no custom `db-button` + ARIA composition needed.

**popover** — New component

**radio** — `elm-radio`->`db-radio`. Map `input_id` to `id` (for React/Vue), but use `propOverrides` for Web Components and Angular.

**section** — New component

**select** — `elm-select`->`db-select`. `multiple` is still supported but the native multi-select is unstyled - prefer `db-custom-select` for a styled multi-select. For a rich dropdown (search, tags, select-all) use `db-custom-select`.

**stack** — New component

**switch** — `elm-toggle`->`db-switch`. `htmlid`->`id`.

**tab-item** — `cmp-db-tab`->`db-tab-item`. `name`->[removed] (handled by parent `db-tabs`).

**tab-list** — New component

**tab-panel** — New component

**table** — `cmp-table`->`db-table` (with `db-table-head`/`db-table-body`/`db-table-footer`, `db-table-row`, `db-table-header-cell`/`db-table-data-cell`, `db-table-caption`, or the `data` prop). Props: `variant` (`flat`/`zebra`/`spaced`), `size` (`x-small`/`small`/`medium`/`large`), `divider`, `mobileVariant` (`table`/`list`), `stickyHeader`, `columnSizes`. Use a semantic `<table>` only for trivial static cases.

**tabs** — `cmp-tab-bar`->`db-tabs`.

**tag** — `elm-tag`->`db-tag`. Chip+tag merged into tag only. Interactive tags: wrap `db-button`,`db-link`,`db-checkbox`,`db-radio` inside `db-tag`. `small`->[removed] (use density; `emphasis="strong"` for emphasis). Semantic colour moves to the `semantic` prop: `error`->`semantic="critical"`, `informative`->`semantic="informational"`, `success`->`semantic="successful"`; `poi-*`->[removed], `track`->[removed]. Icons: use the leading `icon` prop; there is no trailing-icon prop.

**textarea** — `elm-textarea`->`db-textarea`. Old variants removed: `semitransparent`,`white`,`solid`,`outline`->[removed]. `variant` now controls the label layout only (`above`/`floating`). Validation state is set via `validation` (`valid`/`invalid`/`no-validation`), not via colour variants. `description`->`message`. ⚠️ Behavior change: In Generation 2, `description` was hidden by default (tooltip/hint). In Generation 3, `message` is ALWAYS visible by default. To restore the Generation 2 hidden behavior, set `showMessage={false}` explicitly.

**tooltip** — New component

## No Direct Equivalent

| Old                    |    Status     | Replacement                                               |
| ---------------------- | :-----------: | --------------------------------------------------------- |
| `rea-main`             | [replacement] | `db-shell-content` (renders the `<main>` region)          |
| `rea-grid`             |   [removed]   | CSS Grid or `db-stack`                                    |
| `elm-headline`         | [replacement] | Semantic headings (`db-heading-h-1`-`h-6`)                |
| `elm-headline` (pulse) |   [removed]   | Heading + CSS animation                                   |
| `elm-chip`             | [replacement] | `db-tag` with `db-button`/`db-checkbox`/`db-radio` inside |
| `cmp-sidenavi`         | [replacement] | `db-control-panel-desktop` with `orientation="vertical"`  |

## Key Migration Examples

`rea-main` -> `<db-shell-content>Content</db-shell-content>` (renders the page `<main>`; use `mainLabel`/`mainId` for the skip-navigation target)

`rea-grid` -> CSS Grid with `gap: var(--db-spacing-fixed-md)`

`elm-chip` -> `<db-tag><db-button variant="ghost">Text</db-button></db-tag>`

`elm-headline` -> `<db-heading-h-1>Title</db-heading-h-1>` + `<db-infotext>Subtitle</db-infotext>`

`cmp-sidenavi` -> `<db-shell controlPanelDesktopPosition="left"><db-control-panel-desktop><db-control-panel-navigation><db-control-panel-navigation-item><a href="/page">Item</a></db-control-panel-navigation-item></db-control-panel-navigation></db-control-panel-desktop><db-shell-content>…</db-shell-content></db-shell>` (desktop side navigation; the shell places the panel on the left and applies the vertical layout)

## A11y for Custom Solutions

For anything without a component equivalent, use semantic HTML, ARIA labels/roles/states, keyboard navigation, focus management, and screen reader support. Prefer the shipped components first: loading/progress -> `db-loading-indicator`, breadcrumb -> `db-breadcrumb`, pagination -> `db-pagination`, table -> `db-table`, dialog -> `db-dialog`/`db-drawer`.
