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
CSS-only path `.db-heading` with `data-size`, `data-font-weight`, `data-alignment` and `data-paragraph-spacing`. That
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
| `fontWeight`  |       x       |       -       |
| `alignment`   |       -       |       x       |
| `textSpacing` |       -       |       x       |

Content always comes through children. There is no component for inline text: a plain `span` covers that, and the
typography utility classes from the foundations apply to it if needed.

### Why the properties sit where they do

- **`size` (`lg`, `md`, `sm`) and `fontWeight` (`black`, `regular`) have no default.** Without the attribute the
  typography is inherited, which keeps a paragraph consistent with its surroundings instead of forcing a step.
  Primer and Polaris both ship `size` with no default. The sizes are a deliberate subset of the nine foundation
  steps.
- **`fontWeight` names font variants, not numeric weights**, resolving to 900 and 400. The values are numeric
  literals because the foundations have no font-weight tokens for text - only icon weights are tokenized - and
  `heading.scss` plus `default-fonts.scss` use literals too.
- **`alignment` sits on the group only.** The paragraphs inherit it, so it cannot drift between siblings of one
  block. `.db-paragraph` therefore sets no blanket `text-align`, because that would block exactly this inheritance.
- **`textSpacing` gives every child `0.5lh` above and below**, so two adjacent children end up `1lh` apart while the
  group keeps half a line height at its outer edges, which sets it against whatever precedes or follows. The value
  follows the computed line height rather than a spacing token, mirroring `paragraphSpacing` on `DBHeading`, and
  resolves against the group's typography, so the rhythm does not change with a child's `size`.
- **No `size` on the group.** The children set it themselves.
- **No `fontWeight` on the group**, and none on a text primitive beyond the two variants: emphasis is semantic and
  belongs to the element (`strong`, `em`), while the foundations' `[data-font]` covers the presentational case.
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

The group is intended for `DBParagraph` children. A heading stays outside it and keeps its own `paragraphSpacing`,
which is what makes the name accurate; the price is that spacing within one visual block then comes from two sources
and the heading's `1lh` has to match the group's rhythm by hand.

This is an intention, not a prohibition. It cannot be expressed in types across four framework outputs, and the
spacing applies to whatever the group contains, so the restriction can only ever be documentation or an advisory lint
rule, as in
[`custom-heading-single-heading`](../../packages/eslint-plugin/src/rules/heading/custom-heading-single-heading.ts).
Treating it as absolute would create a worse problem than it solves: a list between two paragraphs would have to
leave the group, which splits it in two and leaves the spacing around the list unmanaged.

`DBParagraph` renders flow content, valid in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`,
`label`, `summary` or `button`, which accept phrasing content only. A `span` covers those.

### CSS level, no property needed

The spacing must be expressible in CSS rather than through a framework context, which is not something to build on
across four Mitosis targets:

```scss
.db-text-group[data-text-spacing="true"] {
	row-gap: 1lh;
	padding-block: 0.5lh;
}
```

The two declarations express the same `0.5lh` per child: the gap is the sum of the two halves that meet between two
children, the padding the half that has no sibling to meet at the group's edges.

Spacing sits on the container, never as a margin on the children, which is what keeps it framework-neutral.
`wc-workarounds.scss` sets every custom-element host to `display: contents`, so in the Angular and Stencil output a
margin on the host would be silently ignored while the host itself is not the box being laid out. `display: contents`
is resolved before the flex items are determined, so gap and padding address the same elements in all four outputs,
without the stylesheet having to know how deep a framework wraps its content. The gap also applies to children that
carry no class of ours, so the group does not need to enumerate child types.

The reset `.db-paragraph { margin-block: 0 }` complements this: the margin the foundations give every `p` would add
to the gap. The group thus remains the only source of spacing, at the price of a standalone `DBParagraph` and a group
without `textSpacing` rendering flush.

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

- The size placeholders apply the `font` shorthand, which resets `font-weight`, and carry the same specificity as the
  weight rules. `@extend` emits them at the placeholder's definition site rather than at the extending block, which
  puts them above `.db-paragraph` in the compiled output no matter where the `@include` sits, so the variant survives.
  Source order would only start to matter if the sizes were switched to `fonts.set-font-size()`, which is why
  `heading.scss` argues over `:where()` specificity instead. The same collision exists between `data-size` and the
  foundations' `[data-font]`, and there the losing side is not ours to fix.
- Still an inconsistency in the repository: `DBHeading` uses `data-font-weight` with `black`/`light` while the
  foundations use `data-font` with `digital`/`regular`/`medium`/`semibold`/`bold`, and `DBParagraph` now adds
  `data-font-weight` with `black`/`regular`. Aligning them would break `DBHeading`.
- There are no font-weight tokens for text in the foundations, only icon weights. Introducing them belongs in the
  foundations and would let `heading.scss`, `default-fonts.scss` and `paragraph.scss` stop repeating literals.
- `DBHeading` mixes in `TextProps` while the paragraph components deliberately do not, so two neighbouring typography
  components differ in how content is passed. Acceptable, but it should be a recorded decision.
- How do the group's spacing and a heading's `paragraphSpacing` stay visually consistent, given the heading sits
  outside the group and the two values are set independently?
- The open-source fallback font has no 900 face for the body family, so `black` renders like bold without the DB
  theme fonts. Acceptable for DB products, but it makes the showcases misleading.

### Design

- Are `lg`, `md` and `sm` the right three steps for body copy? Porsche's ten-step scale is the widest in the field,
  everyone else offers three to six, so three is defensible - but the choice was made without a documented rationale.
- Is there a need for semantic text colours (`success`, `warning`, `error`, `subdued`), or is that `DBInfotext` and
  `DBBadge` territory?
- `font-variant-numeric: tabular-nums` appears in three systems and matters for tables and prices. Text concern or
  table concern?
