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

## Proposed model

Working model as agreed in the team discussion. It ships as **beta** first, so the open questions below are
deliberately left to be validated in real usage rather than settled up front.

| Component          | Renders | Job                                                    |
| ------------------ | ------- | ------------------------------------------------------ |
| `DBText`           | `span`  | inline text inside a sentence or next to other content |
| `DBParagraph`      | `p`     | block-level body copy                                  |
| `DBParagraphGroup` | `div`   | groups paragraphs and spaces them with a shared `gap`  |

| Property            | `DBText` | `DBParagraph` | `DBParagraphGroup` |
| ------------------- | :------: | :-----------: | :----------------: |
| `size`              |    x     |       x       |         x          |
| `alignment`         |    -     |       x       |         x          |
| `gap`               |    -     |       -       |         x          |
| `paragraphSpacing`  |    -     |       x       |         -          |
| measure (max width) |    -     |       x       |         x          |
| `visuallyHidden`    |    x     |       -       |         -          |

Content always comes through children. There is no `fontWeight` property.

### Why the properties sit where they do

- **`size` on all three, with no default anywhere.** `font-size` inherits natively in CSS, so a size set on
  `DBParagraphGroup` cascades downwards without any context or propagation logic, and a paragraph without an explicit
  size simply looks like body text. Primer and Polaris both ship `size` with no default. It also removes an
  asymmetry: an absolute default step on the paragraph would silently override the group. An explicit `inherit`
  value, as Porsche has it, can be added on top.
- **Measure only where a block box is guaranteed.** `max-width` does not apply to non-replaced inline boxes, so it
  would be inert on `DBText`. No precedence rule is needed when group and paragraph both set it: the boxes nest and
  the narrower one wins.
- **`visuallyHidden` on `DBText` only.** `%a11y-visually-hidden` positions absolutely and clips, so the
  block-versus-inline distinction becomes meaningless and the property would add nothing on the paragraph. The real
  gain is structural: since `DBText` has neither `paragraphSpacing` nor a measure, hidden text combined with spacing
  and a maximum width is impossible to express. Polaris does the same and forces `span` when the flag is set.
- **The group spaces its children with `gap`, not by propagating `paragraphSpacing`.** A gap applies only _between_
  items, so there is no trailing space to strip with `:last-child` and no margin collapsing to reason about, since
  flex and grid containers do not collapse margins. It also needs no propagation at all: the container owns the
  spacing, so nothing has to be written onto the children. `gap` is already shared as `GapSpacingProps` (`none`,
  `3x-small` to `3x-large`) and used by `DBStack`. `paragraphSpacing` stays on `DBParagraph` for the standalone case
  outside a group.
- **`alignment` not on `DBText`**, because aligning an inline box within a line is not what `text-align` does.
- **No `fontWeight`**, although 10 of 16 systems have one. Weight is already controlled twice here: semantically
  through the element (`strong`, `em`) and visually through the foundations' `[data-font]`. A third spelling would
  compete with both.
- **No `text` property.** The shared `TextProps` exists for components where text is a **label** competing with other
  structure such as an icon, and its own documentation warns that combining it with children produces a duplicate
  label. The components that
  [`text-or-children-required`](../../packages/eslint-plugin/src/rules/content/text-or-children-required.ts) covers
  are exactly those label-bearing cases, and `DBHeading` is not among them. In a text component the text is the
  entire content, so the property adds an either/or pitfall without adding capability.

### A dedicated group instead of a `DBStack` variant

`heading.md` proposed a `DBStack variant="paragraph"` for spacing between text blocks, and
[`stack/model.ts`](../../packages/components/src/components/stack/model.ts) shows it was never built, containing only
`simple` and `divider`. **That proposal is retired in favour of `DBParagraphGroup`** - it should not be built later
from the older document, or there would be two mechanisms for one effect.

The reason is the property surface. `DBStack` has `variant`, `direction`, `wrap`, `alignment`, `justifyContent` and
`gap`, and for body copy four of those six are meaningless or actively wrong: `direction="row"` places paragraphs
side by side, `justifyContent="space-between"` distributes them in space, `wrap` does nothing in a column, and
`alignment` wants to be `stretch` in practice. A component whose API is two thirds inapplicable is poor guidance, and
every future `DBStack` feature would have to be reasoned about for the prose case as well. Conversely, with only
`gap`, the measure and the typography defaults, `DBParagraphGroup` is small enough not to read as a competing layout
primitive.

### Structure and nesting

`DBParagraphGroup` renders a `div` because it is presentational. `section` would create a region and collide with the
existing `DBSection`, `hgroup` permits only `h1`-`h6` and `p` per spec, and `figure`, `blockquote` and `dl` each carry
a specific meaning. Anyone needing a labelled region uses `DBSection` and puts the group inside.

The group is intended for `DBParagraph` children. A heading stays outside it and keeps its own `paragraphSpacing`,
which is what makes the name accurate; the price is that spacing within one visual block then comes from two sources
and the heading's `1lh` has to match the group's `gap` by hand.

This is an intention, not a prohibition. It cannot be expressed in types across four framework outputs, and `gap`
spaces whatever it is given without knowing the child types, so the restriction can only ever be documentation or an
advisory lint rule, as in
[`custom-heading-single-heading`](../../packages/eslint-plugin/src/rules/heading/custom-heading-single-heading.ts).
Treating it as absolute would create a worse problem than it solves: a list between two paragraphs would have to
leave the group, which splits it in two and leaves the spacing around the list unmanaged.

`DBText` renders phrasing content, so it is valid inside `dt`, `dd`, `legend`, `figcaption`, `blockquote`, `li`,
`td`, `th`, `caption`, `label`, `summary` and `button`. `DBParagraph` renders flow content, valid in `dd`,
`figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`, which accept
phrasing content only.

### CSS level, no property needed

Whatever the group does must be expressible in CSS rather than through a framework context, which is not something to
build on across four Mitosis targets. `gap` satisfies that by itself, with no descendant selector and nothing written
onto the children:

```scss
.db-paragraph-group {
	display: flex;
	flex-direction: column;
}
```

One consequence to handle deliberately: in the Angular and Stencil outputs a text component is a custom-element host
wrapping the native element, so the host becomes the flex item. `heading.scss` already documents this for
`.db-custom-heading` and solves it with `display: contents`.

`text-wrap: pretty` becomes the default for the text styles, mirroring `text-wrap: balance` on headings - pure CSS,
progressive enhancement, no fallback needed, per the [shift-left rule](../shift-left-web-development.md).
`overflow-wrap: anywhere` should **not** be carried over from `DBHeading`, where it exists because headings are often
long compound nouns; body copy would lose readability.

### Deliberately out of scope for now

- **A custom wrapper (`DBCustomText`).** Dropped for the first iteration. It would have been the 1:1 styling wrapper
  for a consumer-authored element, in the vein of `DBCustomHeading`. What it costs: `text-wrap: pretty` only takes
  effect on a block container, and the measure and `paragraphSpacing` are inert on an inline box, so a `DBText`
  nested in a `dd`, `legend`, `figcaption` or `caption` inherits the typography but not the block-level behaviour.
  Component consumers therefore have no equivalent of simply putting the class on the `dd`, which the CSS-only path
  allows. Worth revisiting once there is demand.
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

- The measure property must **not** reuse `ContainerWidthProps` (`width?: 'full' | 'medium' | 'large' | 'small'`,
  used by `DBSection`). That is layout width, tied to grid and breakpoints; a typographic measure is tied to the font
  size and wants `ch`, and WCAG 1.4.8 (AAA) asks for no more than 80 characters per line. Sharing the name `width`
  would make one property mean two different things.
- `DBSection` is `GlobalProps + SpacingProps + ContainerWidthProps`, so spacing plus maximum width on a container -
  close to what `DBParagraphGroup` does. The distinction (page layout versus typesetting) is plausible but thin and
  needs to be written down, otherwise the group reads as a duplicate.
- Should the gap reuse the token values of `GapSpacingProps`, or be typography-relative? The tokens are consistent
  with `DBStack` but are fixed spacings that do not scale with the font size, whereas `DBHeading` deliberately uses
  `1lh` for `paragraphSpacing` so that the spacing follows the computed line height. For a text rhythm that coupling
  is the more valuable property.
- Is `paragraphSpacing` on `DBParagraph` still needed once the group handles spacing? Spacing is a relationship
  between siblings, which argues for the container owning it exclusively; a single element without siblings has
  nothing to space against. Keeping both means two mechanisms for one effect.
- One CSS class for both the inline and the block case, rather than a separate `.db-paragraph`? The typography is
  identical and block-only properties are inert on inline boxes. `DBHeading` uses a single `.db-heading` for all six
  levels. Against it: the component names no longer share a stem, so a single class name would fit neither well.

### Implementation

- The size mixin applies the `font` shorthand, which also resets `font-weight`. Dropping `fontWeight` does not remove
  the trap, it moves it: `data-size` and the foundations' `[data-font]` on the same element collide the same way.
- Still an inconsistency in the repository, though no longer this component's question: `DBHeading` uses
  `data-font-weight` (`black`, `light`) while the foundations use `data-font`. Aligning them would break `DBHeading`.
- `DBHeading` mixes in `TextProps` while the text components deliberately do not, so two neighbouring typography
  components differ in how content is passed. Acceptable, but it should be a recorded decision.
- Does `paragraphSpacing` on a `p` replace or add to the `margin-block` the foundations already apply to `p`?
- How do the group's `gap` and a heading's `paragraphSpacing` stay visually consistent, given the heading sits outside
  the group and the two values are set independently?

### Design

- Which of the nine size steps are legitimate for body copy? Porsche's scale is the widest in the field, everyone
  else offers three to six. A smaller sanctioned subset may be better guidance than exposing all nine.
- Is there a need for semantic text colours (`success`, `warning`, `error`, `subdued`), or is that `DBInfotext` and
  `DBBadge` territory?
- `font-variant-numeric: tabular-nums` appears in three systems and matters for tables and prices. Text concern or
  table concern?
