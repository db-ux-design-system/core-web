# DB UI to DB UX v3 Component Migration

Prefer JS framework packages: Angular `@db-ux/ngx-core-components` (`<db-button>`), React `@db-ux/react-core-components` (`<DBButton>`), Vue `@db-ux/v-core-components` (`<DBButton>`). CSS-only fallback: `@db-ux/core-components`.

Legend: [replacement]=replacement exists, [new]=new component, [removed]=removed, [planned]=planned

## Direct Equivalents

**accordion** — New component

**accordion-item** — `cmp-accordion`->`db-accordion-item` (was single item, now multiple items in one accordion). Props: `summary`->`headline`, `emphasis`->[removed], `size`->[removed] (use density). New: `disabled`, `content`.

**badge** — New component

**brand** — `cmp-brand`->`db-brand`. All anchor-related props removed (`siteNameLink`,`alt`,`anchorRef`,`anchorTitle`,`anchorRelation`,`src`->[removed]). Wrap with your own `<a>` if needed. New: `hideLogo`.

**button** — `elm-button`->`db-button`. Sizes: `large`->[removed], `regular`->[removed] (default is `medium`, use density). Variants: `primary`->[removed] (use `outlined`), `brand-primary`->`primary`, `secondary-outline`->`outlined`, `secondary-solid`->`solid`, `tertiary-plain`->`text`. Icons: `iconTrailing`->[removed] (only leading icons), `iconOnly`->`noText`.

**card** — `cmp-card`->`db-card`. Variant: `header`->[removed], `content`->[removed] (use children/slot), `variant="interactive"` makes it act like a button. Image: `alt`->`imgAlt`, `image`->`imgSrc`. New: `imgWidth`, `imgHeight`. Removed: `illustration`, `uiCoreIllustrationPath`.

**checkbox** — `elm-checkbox`->`db-checkbox`. `input_id`->`id`.

**divider** — New component

**drawer** — New component

**header** — `rea-header`->`db-header`. `mobile`->`forceMobile`.

**icon** — ->`db-icon`. `variant`->[removed] (controlled by `font-family:var(--db-icon-font-family)` and `font-weight:var(--db-icon-font-weight)`).

**infotext** — New component

**input** — `elm-input`->`db-input`. Old variants removed: `semitransparent`,`white`,`solid`,`outline`->[removed]. New variants: `adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`.

**link** — `elm-link`->`db-link`. `icon`,`icononly`,`iconVariant`->[removed] (use `content` for arrow icon).

**navigation** — `cmp-mainnavigation`->`db-navigation`. `data`,`siteName`->[removed] (use children/slot, features moved to `db-header`).

**navigation-item** — New component

**notification** — `elm-notification`->`db-notification`. Type: `notification`->`notification`, `status`->[removed] (use variants). New type: `inline`. Variants: `error`->`critical`, `informative`->`informational`, `warning`->`warning`, `success`->`successful`. New: `adaptive`.

**page** — `rea-page`->`db-page`.

**popover** — New component

**radio** — `elm-radio`->`db-radio`. `input_id`->`id`.

**section** — New component

**select** — `elm-select`->`db-select`. `multiple`->[removed], `size`->[removed].

**stack** — New component

**switch** — `elm-toggle`->`db-switch`. `htmlid`->`id`.

**tab-item** — `cmp-db-tab`->`db-tab-item`. `name`->[removed] (handled by parent `db-tabs`).

**tab-list** — New component

**tab-panel** — New component

**tabs** — `cmp-tab-bar`->`db-tabs`.

**tag** — `elm-tag`->`db-tag`. Chip+tag merged into tag only. Interactive tags: wrap `db-button`,`db-link`,`db-checkbox`,`db-radio` inside `db-tag`. `small`->[removed] (use density, `type="strong"` for emphasis). Variants: `poi-*`->[removed], `track`->[removed], `error`->`critical`, `informative`->`informational`, `success`->`successful`. `iconAfter`->[removed] (only leading icons).

**textarea** — `elm-textarea`->`db-textarea`. Old variants removed: `semitransparent`,`white`,`solid`,`outline`->[removed]. New: `adaptive`,`critical`,`informational`,`warning`,`successful`. `description`->`message`.

**tooltip** — New component

## No Direct Equivalent

| Old                    |    Status     | Replacement                                                       |
| ---------------------- | :-----------: | ----------------------------------------------------------------- |
| `rea-main`             |   [removed]   | `db-page` (includes `<main>`)                                     |
| `rea-grid`             |   [removed]   | CSS Grid or `db-stack`                                            |
| `rea-footer`           |   [planned]   | Semantic `<footer>` + `db-link`, planned Q4/2025                  |
| `elm-headline`         | [replacement] | Semantic headings + `db-infotext` for subtitles                   |
| `elm-headline` (pulse) |   [removed]   | Heading + CSS animation                                           |
| `elm-loadingindicator` |   [planned]   | Planned Q4/2025, use CSS spinner + `aria-live`                    |
| `elm-progress`         |   [planned]   | Planned Q4/2025, use `<progress>`                                 |
| `elm-chip`             | [replacement] | `db-tag` with `db-button`/`db-checkbox`/`db-radio` inside         |
| `cmp-breadcrumb`       |   [planned]   | Planned Q4/2025, use `db-link` in `<nav aria-label="Breadcrumb">` |
| `cmp-pagination`       |   [planned]   | Planned Q4/2025, use `db-button` with ARIA labels                 |
| `cmp-table`            |   [planned]   | Under research, use semantic `<table>`                            |
| `cmp-sidenavi`         | [replacement] | `db-navigation` inside `db-drawer`                                |
| `cmp-dialog`           | [replacement] | `db-drawer` or custom modal, planned Q4/2025                      |

## Key Migration Examples

`rea-main` -> `<db-page>Content</db-page>`

`rea-grid` -> CSS Grid with `gap: var(--db-spacing-fixed-md)`

`elm-chip` -> `<db-tag><db-button variant="ghost">Text</db-button></db-tag>`

`elm-headline` -> `<h1>Title</h1>` + `<db-infotext>Subtitle</db-infotext>`

`cmp-sidenavi` -> `<db-drawer><db-navigation><db-navigation-item><db-link href="/page">Item</db-link></db-navigation-item></db-navigation></db-drawer>`

## A11y for Custom Solutions

Use semantic HTML, ARIA labels/roles/states, keyboard navigation, focus management, screen reader support.

Temporary patterns: loading -> `<div role="status"><span class="visually-hidden">Loading...</span></div>`, progress -> `<progress value="70" max="100" aria-label="Upload progress: 70%">`, breadcrumb -> `<nav aria-label="Breadcrumb"><ol>...</ol></nav>`.
