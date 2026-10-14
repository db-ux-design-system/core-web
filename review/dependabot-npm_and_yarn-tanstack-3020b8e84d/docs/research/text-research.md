# DEV Research text (detailed)

Companion document to [`text.md`](text.md), to be merged into it. All 16 design systems listed in
[`design-systems.js`](../scripts/component-research/design-systems.js) were checked in September 2026 against the
current documentation and, where the docs were ambiguous, against the published source. Several entries in `text.md`
point at releases that are years old, so the table below supersedes them.

## Overview

| Design System                                                                           |                                                   Component                                                    | Comment                                                                                                                                                                              |
| --------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                      [text](https://atlassian.design/components/primitives/text/examples)                      | `as`: `span` (default), `p`, `strong`, `em`; plus `size`, `weight`, `color` (token-based, auto-inverts), `align`, `maxLines`                                                         |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                      [text utilities](https://getbootstrap.com/docs/5.3/utilities/text/)                       | only classes (5.3.8): `.fs-*`, `.fw-*`, `.text-truncate`, `.visually-hidden`                                                                                                         |
| [GitHub Primer](https://github.com/primer/react)                                        |                             [text](https://primer.style/product/components/text/)                              | `as` (any element, default `span`), `size`, `weight`, `whiteSpace`; no color/align; React alpha, no Web Component                                                                    |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-ui)                               |              [type-fundamentals](https://design.gitlab.com/product-foundations/type-fundamentals)              | no component; `gl-text-100`-`800`, `gl-font-*`, `gl-sr-only`; separate `GlTruncate`, `GlTruncateText`                                                                                |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                       [text](https://v2.grommet.io/text)                                       | `as` (default `span`, `tag` deprecated), `size`, `color`, `weight`, `textAlign`, `truncate`, `wordBreak`, `skeleton`, `a11yTitle`                                                    |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                     [typography](https://carbondesignsystem.com/elements/typography/code/)                     | `Text` exists but only sets `dir` (bidi); typography via Sass `type-style()`; separate `TruncatedText`                                                                               |
| [KoliBri](https://github.com/public-ui/kolibri)                                         |                                                       ❌                                                       | no text component; only `kol-heading` with `_level` `0`-`6`                                                                                                                          |
| [Material UI](https://github.com/mui/material-ui)                                       |                           [Typography](https://mui.com/material-ui/api/typography/)                            | `variant` (default `body1`, 14 values) plus `component`, `color`, `align`, `noWrap`, `gutterBottom`; no weight property                                                              |
| [MongoDB.design](https://github.com/mongodb/leafygreen-ui)                              |                  [typography](https://www.mongodb.design/component/typography/live-example/)                   | component set instead of variants: `Body`, `Subtitle`, `Overline`, `Disclaimer`, `InlineCode`; `as`, `weight`, `baseFontSize` `13`/`16`                                              |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                       [p-text](https://designsystem.porsche.com/v4/components/text/api/)                       | `tag` (9 values, default `p`), `size` (`2xs`-`5xl`, breakpoint objects), `color`, `weight`, `align`, `ellipsis`, `hyphens`; docs prefer `.prose-text-*` classes                      |
| [SBB Lyne](https://github.com/sbb-design-systems/lyne-components)                       |                    [title](https://digital.sbb.ch/en/design-system/lyne/components/title/)                     | no text component; `.sbb-text-xxs`-`xl`, `.sbb-text--bold`; `sbb-title` sets `role="heading"` with `level`/`visual-level`                                                            |
| [Shopify Polaris](https://github.com/Shopify/polaris-react-archive)                     | [s-text](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/typography-and-content/text) | React `Text` archived (`as` required, `variant`, `tone`, `fontWeight`, `alignment`, `truncate`, `visuallyHidden`, `numeric`); `s-text` dropped `size`, has `accessibilityVisibility` |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                                                       ❌                                                       | no component (`wcs-core` 7.8.1); tokens per brand; the Bootstrap fork declares itself deprecated                                                                                     |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |                                    [text](https://mistica-web.vercel.app/)                                     | richest API: `as` (default `span`), `size`, `weight`, `color`, `textAlign`, `transform`, `decoration`, `truncate` (`boolean \| number`), `hyphens`; presets `Text1`-`Text10`         |
| [Telekom Scale](https://github.com/telekom/scale)                                       |                                                       ❌                                                       | `scale-text` existed in v1 and was removed; tokens only, `.scl-font-variant-*` deprecated                                                                                            |
| [Washington Post Design System](https://github.com/washingtonpost/wpds-ui-kit)          |                     [typography](https://build.washingtonpost.com/foundations/typography)                      | no component; tokens plus polymorphic `Box`; separate `VisuallyHidden`                                                                                                               |

## Conclusion

- Eight of sixteen ship a text primitive, the other eight solve typography with tokens, utility classes or heading
  components only.
- **Element control is the only near-universal property**, named `as` (7 systems) or `tag` (2), almost always
  defaulting to `span`. Value sets are either open (any element type) or a small allow-list: Atlassian 4 elements,
  Porsche 9, Polaris 12. `del` and `ins` appear in none of them, and `code` is never handled by the text primitive.
- **Size is where systems disagree most**: t-shirt scale, semantic variant names, or no size property at all. The
  newest decisions trend towards fewer options, with Polaris removing `size` entirely.
- **Weight is usually a four-step scale** but the names are inconsistent across systems. **No system has a
  font-style/italic property** - emphasis is expressed through the element.
- **Truncation carries an accessibility obligation that only GitLab and Grommet honour**, providing a tooltip or the
  full value for assistive technology. Everyone else truncates visually and leaves the consequence to the consumer.
- Porsche and Shopify are actively moving typography out of components, towards utility classes and slimmer Web
  Components respectively.
- Corrections to `text.md`: Material UI has `Typography` (listed as `❌`); Grommet defaults to `span`, not `div`, and
  `tag` is deprecated; Porsche `p-text` is a full component, not "only classes"; Polaris React is archived; Carbon's
  `Text` is bidi-only; Lyne has `sbb-title`; Scale removed `scale-text`; KoliBri was missing entirely.

## Alignment with our own foundations

Several properties other systems expose would be duplicates here.

- The **type scale exists and is nine steps**, separately for body and headline: `--db-type-body-3xs` to
  `--db-type-body-3xl` ([`fonts/_variables.scss`](../../packages/foundations/scss/fonts/_variables.scss)).
- **`%a11y-visually-hidden` exists** ([`helpers/_a11y.scss`](../../packages/foundations/scss/helpers/_a11y.scss)).
- **`text-wrap: balance` is already in use** for headings, so `pretty` for body text is the consistent counterpart.
- **`p` already carries `margin-block: $db-spacing-fixed-md`** from the foundations defaults.

`DBHeading` is the precedent to follow, and it deliberately did **not** ship the `as` property that `heading.md`
proposed, because Mitosis could not handle a dynamic element. Instead: one component per element
(`DBHeadingH1`-`DBHeadingH6`), plus `DBCustomHeading` as a styling wrapper for a consumer-authored element, plus the
CSS-only path `.db-heading` with `data-visual-size` and `data-font-weight`. That
same constraint is what makes the split into several components below necessary rather than a single component with
`as`.

## Implemented model

Shipped as **beta**, so the open questions below are deliberately left to be validated in real usage.

| Component     | Renders | Job                                   |
| ------------- | ------- | ------------------------------------- |
| `DBParagraph` | `p`     | block-level body copy                 |
| `DBTextGroup` | `div`   | groups block-level text and spaces it |

| Property      | `DBParagraph` | `DBTextGroup` |
| ------------- | :-----------: | :-----------: |
| `size`        |       x       |       -       |
| `alignment`   |       -       |       x       |
| `textSpacing` |       -       |       x       |

Content always comes through children. There is no component for inline text: a plain `span` covers that, and the
typography utility classes from the foundations apply to it if needed.

### Why the properties sit where they do

- **`size` (`lg`, `md`, `sm`) has no default.** Without the attribute the typography is inherited, which keeps a
  paragraph consistent with its surroundings instead of forcing a step. Primer and Polaris both ship `size` with no
  default. The sizes are a deliberate subset of the nine foundation steps. Note that inheriting is not visually
  distinct from `md` in a default context, because `defaults/default-required.scss` puts the root on the medium step:
  measured against theme and foundations, an unset paragraph and `size="md"` both come out at 16px with a 24px line
  height. The distinction only matters inside a container that changed the type scale.
- **No `fontWeight`.** An earlier revision had one with `black` (900) and `regular` (400). It is gone for two
  reasons. The design has no weight property on a paragraph at all - weight is part of the text style itself - and
  it has no `black` either, only `bold` and `regular`, so the 900 value was never backed by a token. On top of that
  `regular` was measurably a no-op: a paragraph without the attribute and one with `regular` both computed to weight
  400, leaving a property where only one of two values did anything. Emphasis is semantic and belongs to the element
  (`strong`, `em`), which also works at any size because the weight sits on the inner element.
- **The removal has one cost, worth recording.** The foundations' global `[data-font]` covers `digital` (300) through
  `bold` (700) and is forwarded like any other `data-*` attribute, but it loses against `data-size`:
  `.db-paragraph[data-size="sm"]` is (0,2,0) and applies the `font` shorthand, which resets the weight, while
  `[data-font]` is only (0,1,0). Measured, `data-font="bold"` alone computes to 700 and combined with `data-size="sm"`
  falls back to 400. So a whole paragraph can be given a weight only at the inherited size; for anything else the
  weight has to sit on an inner `strong`. The former `fontWeight` property did not have this limitation, because its
  rule carried the same specificity as the size rules and was emitted after them.
- **`alignment` sits on the group only.** The paragraphs inherit it, so it cannot drift between siblings of one
  block. `.db-paragraph` therefore sets no blanket `text-align`, because that would block exactly this inheritance.
- **`textSpacing` only sets an attribute.** It renders `data-text-spacing`, which the foundations turn into a
  `margin-block` of half a line height on every `h1`-`h6` and `p` below it. The component ships no spacing rule, so
  the value cannot drift from the rest of the system, and `data-text-spacing="false"` opts a subtree back out.
- **No `size` on the group.** The children set it themselves.
- **No `text` property.** The shared `TextProps` exists for components where text is a **label** competing with other
  structure such as an icon, and its own documentation warns that combining it with children produces a duplicate
  label. The components that
  [`text-or-children-required`](../../packages/eslint-plugin/src/rules/content/text-or-children-required.ts) covers
  are exactly those label-bearing cases, and `DBHeading` is not among them. In a text component the text is the
  entire content.
- **No `visuallyHidden`.** The global `data-visually-hidden` annotation in
  [`styles/visually-hidden.scss`](../../packages/components/src/styles/visually-hidden.scss) is the single
  mechanism and needs no property, since all `data-*` attributes are forwarded to the rendered element. Scoping a
  global concept to one component would have been the outlier - seven of the researched systems solve
  screen-reader-only as a sibling concern, and only Polaris has it as a property.

### A dedicated group instead of a `DBStack` variant

`heading.md` proposed a `DBStack variant="paragraph"` for spacing between text blocks, and
[`stack/model.ts`](../../packages/components/src/components/stack/model.ts) shows it was never built, containing only
`simple` and `divider`. **That proposal is retired in favour of `DBTextGroup`** - it should not be built later from
the older document, or there would be two mechanisms for one effect.

The reason is the property surface. `DBStack` has `variant`, `direction`, `wrap`, `alignment`, `justifyContent` and
`gap`, and for body copy four of those six are meaningless or actively wrong: `direction="row"` places paragraphs
side by side, `justifyContent="space-between"` distributes them in space, `wrap` does nothing in a column, and
`alignment` wants to be `stretch` in practice. A component whose API is two thirds inapplicable is poor guidance, and
every future `DBStack` feature would have to be reasoned about for the prose case as well. Conversely, with only
`alignment` and `textSpacing`, `DBTextGroup` is small enough not to read as a competing layout primitive.

### Structure and nesting

`DBTextGroup` renders a `div` because it is presentational. `section` would create a region and collide with the
existing `DBSection`, `hgroup` permits only `h1`-`h6` and `p` per spec, and `figure`, `blockquote` and `dl` each carry
a specific meaning. Anyone needing a labelled region uses `DBSection` and puts the group inside.

**The two components live in separate folders.** An earlier revision put them together, following the Heading
family, and that was wrong: the Heading family members are seven variants of one concept, while a text element and a
layout container are two concepts. Only `heading` and `control-panel-actions` share a folder in the whole repository,
so the precedent is thin, and a shared folder forces one `model.ts`, one stylesheet and one documentation page onto
two independent APIs.

The group takes any child, and every `h1`-`h6` and `p` below it is spaced by the foundations rule, whether it carries
one of our classes or not. Plain markup and components therefore mix freely, which is what the "With components" and
"Mixed content" examples show. Only elements outside that list - a `ul`, `ol` or `blockquote` - keep the margin they
bring.

Restricting the children to paragraphs by type is not possible across four framework outputs, and it would create a
worse problem than it solves: a list between two paragraphs would have to leave the group, which splits it in two and
leaves the spacing around the list unmanaged.

`DBParagraph` renders flow content, valid in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`,
`label`, `summary` or `button`, which accept phrasing content only. A `span` covers those.

### CSS level, no property needed

The spacing must be expressible in CSS rather than through a framework context, which is not something to build on
across four Mitosis targets. It is, and it does not even belong to the component: the foundations' required
`defaults/default-required.scss` drives block spacing through an inheriting custom property.

```scss
[data-text-spacing="true"] {
	--db-text-spacing: 0.5;
}

:where(h1, h2, h3, h4, h5, h6, p) {
	margin-block: calc(1lh * var(--db-text-spacing, 0));
}
```

`DBTextGroup` therefore ships no spacing rule at all. `textSpacing` renders `data-text-spacing`, and the foundations
do the rest. An earlier revision put `row-gap` and `padding-block` on the container instead, which worked but was
redundant once the foundations rule landed in [#8352](https://github.com/db-ux-design-system/core-web/pull/8352).

Two properties of the custom-property approach are worth recording, because a descendant selector would have neither.
Inheritance passes through `display: contents`, so the margin reaches the paragraph inside the Angular and Stencil
custom-element hosts, where a selector like `> :where(p)` would miss it. And the nearest `data-text-spacing` ancestor
wins by proximity rather than source order, which is what lets `false` opt a subtree back out and lets the attribute
sit on a single element without a group.

Because the margin sits on the text element, `1lh` resolves against that element's own line height. Measured at the
default density, a `24px` child gets `12px` and an `18px` child `9px`, so two children of different sizes end up
`21px` apart rather than `24px`. A standalone `DBParagraph` and a group without `textSpacing` render flush only when nothing above them opted in.
The property is a three-state one in practice: `true` opts in, `false` opts out, and omitting it inherits. The
Patternhub sets the attribute on `<body>`, so an unset group is spaced there - which is why the showcase example
demonstrates `false` explicitly rather than relying on the absence of the property.

Only `h1`-`h6` and `p` are covered. A `ul`, `ol` or `blockquote` in the group keeps the margin it brings; reading the
same custom property opts it into the rhythm.

`text-wrap: pretty` is the default for body copy, mirroring `text-wrap: balance` on headings - pure CSS, progressive
enhancement, no fallback needed, per the [shift-left rule](../shift-left-web-development.md). Firefox ESR is a
Browserslist target and drops the declaration, which is accepted. `overflow-wrap: anywhere` is **not** carried over
from `DBHeading`, where it exists because headings are often long compound nouns; body copy would lose readability.

### Deliberately out of scope for now

- **A custom wrapper (`DBCustomText`).** It would have been the 1:1 styling wrapper for a consumer-authored element,
  in the vein of `DBCustomHeading`. What it costs: `text-wrap: pretty` only takes effect on a block container, so a
  `span` nested in a `dd`, `legend`, `figcaption` or `caption` inherits the typography but not the block-level
  behaviour. Component consumers therefore have no equivalent of simply putting the class on the `dd`, which the
  CSS-only path allows. Worth revisiting once there is demand.
- **A measure (max width).** `max-width` would belong on the paragraph and the group, never on inline text, where it
  does not apply. Left out because the name and unit are unresolved, see the open questions.
- **A per-element spacing property.** Spacing is a relationship between siblings, which argues for the container
  owning it exclusively. Adding it later is additive; shipping and removing it would be breaking.
- **`color`/`tone`** - semantic text colour touches contrast requirements and the adaptive colour system, so it needs
  its own design decision.
- **Truncation** - cheap in CSS, but it creates the accessibility obligation only GitLab and Grommet honour. Without
  a tooltip or the full value for assistive technology it ships a WCAG problem, so it should arrive with that
  mechanism or not at all.
- **`skeleton`** - only Grommet puts it on the text component.
- **Responsive size objects** - density tokens already solve this.

## Beta and the road to stable

`DBHeading` ships as beta today, documented as "API and visual design may change before the stable release", and the
text components follow the same route. The criteria for going stable:

- no open findings from the community
- no further breaking changes, the API is settled and stays as it is

Everything under "Open questions" is therefore explicitly revisable while the components are beta, and should be
closed before the stable release rather than carried into it.

## Open questions

### Naming and boundaries

- A measure property must **not** reuse `ContainerWidthProps` (`width?: 'full' | 'medium' | 'large' | 'small'`, used
  by `DBSection`). That is layout width, tied to grid and breakpoints; a typographic measure is tied to the font size
  and wants `ch`, and WCAG 1.4.8 (AAA) asks for no more than 80 characters per line. Sharing the name `width` would
  make one property mean two different things.
- `DBSection` is `GlobalProps + SpacingProps + ContainerWidthProps`, so spacing plus maximum width on a container -
  close to what `DBTextGroup` does. The distinction (page layout versus typesetting) is plausible but thin and needs
  to be written down, otherwise the group reads as a duplicate.
- `textSpacing` is a boolean, so there is exactly one rhythm. If a second one is ever needed, it has to become an
  enum without breaking the boolean, or a separate property.
- One CSS class for both the paragraph and inline text, rather than only `.db-paragraph`? Against it: the inline case
  has no component, so there is nothing to name consistently, and the block-only properties would be inert on an
  inline box anyway.

### Implementation

- Still an inconsistency in the repository, now on the Heading side alone: `DBHeading` carries
  `data-font-weight` with `black`/`light` while the foundations use `data-font` with
  `digital`/`regular`/`medium`/`semibold`/`bold`. `DBParagraph` no longer adds a third spelling. Aligning Heading
  would be a breaking change.
- `DBHeading` mixes in `TextProps` while the paragraph components deliberately do not, so two neighbouring typography
  components differ in how content is passed. Acceptable, but it should be a recorded decision.

### Design

- Are `lg`, `md` and `sm` the right three steps for body copy? Porsche's ten-step scale is the widest in the field,
  everyone else offers three to six, so three is defensible - but the choice was made without a documented rationale.
- Is there a need for semantic text colours (`success`, `warning`, `error`, `subdued`), or is that `DBInfotext` and
  `DBBadge` territory?
- `font-variant-numeric: tabular-nums` appears in three systems and matters for tables and prices. Text concern or
  table concern?
