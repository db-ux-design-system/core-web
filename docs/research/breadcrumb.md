# DEV Research breadcrumb

The following investigation analyzes how different design systems implement the breadcrumb component. The goal of this document is to formulate architectural patterns, technical specifications, and UX best practices to develop a scalable and accessible roadmap for a breadcrumb component within our design system.

## Foundation and UX Principles of Breadcrumbs

A breadcrumb is a secondary navigation pattern that shows the user's current location within the hierarchy of a site or application and provides a quick way to move back up to parent levels. It never replaces the primary navigation; it supplements it. Breadcrumbs are most valuable in products with a deep, hierarchical information architecture (more than two levels), where they add orientation and reduce the number of clicks needed to move upward, while taking up very little vertical space.

Two conceptual variants recur across the industry:

- **Location-based** breadcrumbs mirror the static structure of the site's information architecture (Home > Category > Subcategory).
- **Path-based** (history-based) breadcrumbs are generated dynamically and reflect the actual route the user took to reach the current page.

Location-based is by far the more common and predictable variant; path-based trails are rare because they can confuse users when the same page is reachable via multiple routes.

## Overview 🔍

The following overview consolidates the basic data of the examined design systems. It specifies the exact naming of the breadcrumb component in the respective system, documents the underlying technological basis, and links to the canonical documentation. A ✅ marks systems that ship a dedicated breadcrumb component; ❌ marks systems where no dedicated component could be found.

| Design System               | Component Name                                  | Tech Stack                                 | Link                                                                                         | Comments / Key Infos                                                                                                                                                                  |
| --------------------------- | ----------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Atlassian Design System** | `Breadcrumbs` ✅                                | React                                      | [Atlassian](https://atlassian.design/components/breadcrumbs/examples)                        | Supports truncation with an expandable "…" button (`maxItems`, `itemsBeforeCollapse`, `itemsAfterCollapse`). Item children are rendered as `BreadcrumbsItem`.                         |
| **Bootstrap**               | `Breadcrumb` ✅                                 | HTML/CSS, SCSS                             | [Bootstrap](https://getbootstrap.com/docs/5.3/components/breadcrumb/)                        | Pure semantic `<nav>` + `<ol>` markup. Divider is a CSS pseudo-element controlled by the `--bs-breadcrumb-divider` custom property (and `$breadcrumb-divider` Sass variable).         |
| **GitHub Primer**           | `Breadcrumbs` ✅                                | React, Rails, CSS                          | [Primer](https://primer.style/product/components/breadcrumbs/)                               | Renders links inside a `<nav>` with an implicit navigation landmark, labelled "Breadcrumbs" by default. Marks the final item as `selected` (current page).                            |
| **GitLab Pajamas**          | `Breadcrumb` ✅                                 | Vue.js / Rails (ViewComponent)             | [Pajamas](https://design.gitlab.com/components/breadcrumb)                                   | Takes all available width and automatically collapses overflowing items into a `…` dropdown, starting with the first item. Separator implemented as a CSS pseudo-class.               |
| **HPE Grommet**             | — ❌                                            | React                                      | [Grommet](https://v2.grommet.io/components)                                                  | No dedicated breadcrumb component; trails are composed manually from `Anchor` / `Box`.                                                                                                |
| **IBM Carbon**              | `Breadcrumb` / `BreadcrumbItem` ✅              | React, Web Components, Angular, Vue        | [Carbon](https://carbondesignsystem.com/components/breadcrumb/usage/)                        | Explicitly documents location-based vs. path-based types. Supports an overflow menu (`overflowThreshold`) and an optional trailing-slash toggle. Placed above the page title.         |
| **KoliBri**                 | `kol-breadcrumb` ✅                             | Web Components (StencilJS)                 | [KoliBri](https://public-ui.github.io/)                                                      | Renders a `<nav>`/`<ol>` structure with a configurable separator icon.                                                                                                                |
| **Material UI**             | `Breadcrumbs` ✅                                | React                                      | [MUI](https://mui.com/material-ui/react-breadcrumbs/)                                        | Collapses via `maxItems`, `itemsBeforeCollapse`, `itemsAfterCollapse` with an accessible expand button (`expandText`, default "Show path"). Custom separators supported.              |
| **MongoDB LeafyGreen**      | — ❌                                            | React / TypeScript                         | [LeafyGreen](https://www.mongodb.design/)                                                    | No dedicated breadcrumb component in the public component set.                                                                                                                        |
| **Porsche Design System**   | `Crumbtrail` (`p-crumbtrail`) ✅                | Web Components (`<p-crumbtrail>`)          | [Porsche](https://designsystem.porsche.com/v3/components/introduction/)                      | Named "Crumbtrail" rather than "Breadcrumb". Handles responsive collapsing.                                                                                                           |
| **SBB Lyne**                | `sbb-breadcrumb` / `sbb-breadcrumb-group` ✅    | Web Components (Lit) / Angular             | [SBB Lyne](https://digital.sbb.ch/en/design-system/lyne/components/breadcrumb/)              | Collapses to first + last with an ellipsis crumb when width is exceeded; expanding is one-way. Sets `accessibility-current="page"` on the last item; recommends a group `aria-label`. |
| **Shopify Polaris**         | part of `Page` / `s-page` ⚠️                    | Web Components / React                     | [Polaris](https://polaris.shopify.com/components/structure/page/)                            | No standalone breadcrumb; a single "back" breadcrumb is exposed as a prop of the `Page` header rather than a full trail component.                                                    |
| **SNCF WCS**                | `wcs-breadcrumb` / `wcs-breadcrumb-item` ✅     | Web Components (StencilJS), Angular, React | [SNCF WCS](https://wcs.dev.sncf/?path=/docs/components-breadcrumb--documentation)            | Separates visual representation from item data.                                                                                                                                       |
| **Telefonica Mistica**      | `Breadcrumbs` ✅                                | React                                      | [Mistica](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/breadcrumbs)    | Presentational component relying on external routing/state. Themed per brand skin (e.g. Movistar).                                                                                    |
| **Telekom Scale**           | `scale-breadcrumb` / `scale-breadcrumb-item` ✅ | Web Components (StencilJS)                 | [Telekom Scale](https://telekom.github.io/scale/?path=/docs/components-breadcrumb--standard) | Web-component pair with a "standard" story. Separator and current-page handling are built in.                                                                                         |
| **Washington Post WPDS**    | — ❌                                            | React                                      | [WPDS](https://build.washingtonpost.com/)                                                    | No dedicated breadcrumb component in the public component set.                                                                                                                        |

---

## Cross-Sectional Analysis and Identified Best Practices

Several abstract architectural patterns can be derived and considered as practices for developing a scalable breadcrumb component.

The dominant markup pattern is remarkably consistent across systems: a `<nav>` landmark wrapping an ordered list (`<ol>` / `<li>`), with links for the ancestor pages and a plain (non-link) final item for the current page. The ordered list is important because the sequence of items carries meaning (least specific to most specific). Separators are almost universally rendered via CSS pseudo-elements (`::before` / empty `content`) rather than as real DOM nodes, so assistive technology does not announce them as content. Bootstrap exposes this as a themeable custom property (`--bs-breadcrumb-divider`), which is a clean pattern worth adopting.

### Separators and Direction

The separator is typically a greater-than symbol (`>`), a forward slash (`/`), or a chevron icon. Whatever the choice, it should be decorative (`aria-hidden`) or CSS pseudo content (see previous paragraph) and not part of the accessible name. RTL support matters: Bootstrap ships a flipped divider (`$breadcrumb-divider-flipped`) for right-to-left layouts, which is a good reminder that a chevron or slash must mirror in RTL contexts.

### Truncation and Responsive Collapsing

Long trails and narrow viewports are the central layout challenge. Two strategies dominate:

- **Static/prop-driven collapse:** Material UI and Atlassian collapse to a fixed number of leading and trailing items with a `maxItems` / `itemsBeforeCollapse` / `itemsAfterCollapse` scheme and an expand affordance (a "…" button that reveals the hidden items).
- **Width-aware collapse:** GitLab Pajamas and SBB Lyne measure available space and move overflowing items into an ellipsis element, starting from the first item, keeping at least the first and last crumb visible.

A notable UX detail: in SBB Lyne, expanding the collapsed ellipsis is deliberately one-way (it does not re-collapse). Whichever approach is chosen, horizontal scrolling within a breadcrumb is considered a UX problem — the trail must collapse before it breaks the layout.

### Current Page Semantics

Marking the current page with `aria-current="page"` on the final item is the single most consistent accessibility requirement across every system that ships the component. The final item is usually rendered as plain text (not a link), since linking to the page the user is already on adds no value.

### Accessibility

Beyond `aria-current="page"`, the recurring requirements are:

- Wrap the trail in a `<nav>` and give it a distinguishing `aria-label` (e.g. "Breadcrumbs" or "You are here:") so it is differentiated from other navigation landmarks in the same document.
- Use an ordered list so the hierarchical order is conveyed structurally.
- Keep separators out of the accessibility tree (decorative pseudo-elements or `aria-hidden`).
- When items collapse behind an expander, the expander must be a real, focusable, labelled control, and the revealed items must be reachable by keyboard.

### State Management

Like pagination, breadcrumbs are best designed as stateless, presentational components. The trail data (labels + hrefs) is owned by the application (routing layer or server), and the component renders it. Systems such as Mistica and SNCF WCS explicitly separate the visual component from the data/state, and framework-oriented systems provide a way to inject framework-specific link components (e.g. router links) without breaking styling.

---

## Conclusion 🏁

Across the examined design systems the breadcrumb is a small but well-standardized component, and the agreement on fundamentals is strong:

**Technical architecture:** The near-universal structure is a `<nav>` landmark around an ordered list of links, with the current page as a non-interactive final item. Web-component-based systems (Porsche "Crumbtrail", SBB Lyne, Telekom Scale, SNCF WCS, KoliBri) and CSS/React systems (Bootstrap, MUI, Primer, Atlassian) converge on the same semantics. Naming is almost always "Breadcrumb(s)"; Porsche is the notable outlier with "Crumbtrail".

**Accessibility:** A labelled `<nav>`, an ordered list, decorative separators kept out of the accessibility tree, and `aria-current="page"` on the last item are the shared baseline.

**Responsive and interactive behavior:** Truncation is the defining hard problem. Systems split between prop-driven collapse (`maxItems`, MUI/Atlassian) and width-aware collapse into an ellipsis (GitLab, SBB Lyne), both preserving the first and last crumb and offering an accessible way to reveal the hidden middle.

A handful of systems (Grommet, MongoDB LeafyGreen, Washington Post WPDS) do not ship a dedicated breadcrumb at all, and Shopify Polaris only exposes a single back-link as part of its `Page` header rather than a full trail.

---

## Possible roadmap based on implementation complexity 📍

To transfer an enterprise-level breadcrumb component into a custom design system, a step-by-step rollout increasing in complexity is recommended.

### 🟢 Phase 1 - Simple and basic features

The first phase focuses on establishing a static, semantic, and accessible breadcrumb.

- **Structure and Semantics:** Implementation as a `<nav>` element with a configurable, dynamic `aria-label`. Internal use of an ordered list (`<ol>` / `<li>`) to convey the hierarchical order of items.
- **Current Page:** Render the last item as plain text (not a link) and mark it with `aria-current="page"`.
- **Separators:** Decorative separator rendered via a CSS pseudo-element, kept out of the accessibility tree. Expose the separator glyph as a themeable custom property, and provide an RTL-flipped variant.
- **Links:** Ancestor items rendered as anchors; support the standard link properties (`href`, `target`, `rel`, `download`).
- **Micro-Interactions:** Subtle hover and focus indicators for keyboard use; sufficiently large touch targets (minimum 24x24 pixels).
- **Internationalization (i18n):** Translatable labels for all screen-reader text and controls (e.g. the navigation `aria-label`).

### 🔵 Phase 2 - Intermediate features

The second phase adds manual collapse and framework integration.

- **Truncation (Collapse):** Consumer-driven collapse. The consumer explicitly wraps the crumbs to hide in a collapse container (see the `DBBreadcrumbCollapseItem` decision below), and the component renders an accessible, focusable control that reveals them. There is no prop-driven automatic selection of hidden crumbs and no width-aware measurement; the markup is the configuration. Always keep the first and last crumb visible.
- **Icons in Items:** Optional leading icon per item (e.g. a "home" icon for the root), following SBB Lyne's icon/label slots.
- **Routing and Framework Integration:** Slot/`as`-style injection so consumers can use framework-specific link components (router links) for SEO-friendly, SSR-compatible URLs without breaking styling.

### 🔴 Phase 3 - Advanced features

The final phase targets richer presentation and content modes, still within the manual-collapse model.

- **Collapse Presentations:** Offer the collapse control in more than one presentation (inline `<details>` disclosure and native popover overlay), including a responsive model that switches presentation per breakpoint (see the "Responsive angle" below). The consumer still chooses _which_ crumbs collapse; this only varies _how_ the hidden group is revealed.
- **Overflow Menu:** Expose the collapsed items through an accessible dropdown/menu rather than only expanding inline, for very deep hierarchies.
- **Path- vs. Location-based Modes:** Optional support for dynamically generated path-based trails in addition to the default location-based structure, following Carbon's documented distinction.

> **Note on automatic truncation.** An earlier draft of this roadmap proposed prop-driven (`maxItems`) and width-aware automatic collapse in these phases. That direction was superseded by the manual-collapse decision below, which rules out automatic truncation. The width-aware / `ResizeObserver` approach and why it was dropped are documented in "Explored but not adopted" further down.

---

## Idea: native collapse via `<details>` and a proposed component API 💡

While prototyping the collapse behavior we explored a low-JS approach that leans on native HTML primitives instead of a scripted expander. This follows the repo's "Shift-left: HTML -> CSS -> JS" principle: prefer the platform, add JavaScript only where the platform falls short.

### Two presentations of the same "hidden crumbs" concept

Both variants treat the hidden middle crumbs as a distinct grouped set behind a single control. The difference is only how that set is revealed.

- **Variant A - inline collapse with `<details>` / `<summary>`.** The `...` is the `<summary>` itself (styled, not hidden), and the hidden crumbs live in a nested `<ol>` inside the `<details>`. Advantages: no JavaScript for the toggle (the element owns its open/closed state), and browser "find in page" (Ctrl+F) can auto-expand a closed `<details>` when a match is inside it. The `<summary>` must stay visible and operable and carry an accessible label - hiding it (e.g. `display: none` or moving it off-screen) breaks keyboard operation and the find-in-page auto-expand, which are the very reasons to choose `<details>`.
- **Variant B - overlay via the native Popover API.** The trigger is a `<button popovertarget="...">` that opens a popover listing the hidden crumbs. The visible `...` glyph must be decorative (CSS pseudo content or an `aria-hidden` span), and the button must carry a translatable accessible label such as "Show hidden breadcrumbs"; otherwise its accessible name is punctuation, which tells a screen-reader user nothing about what the control reveals (the same labelling requirement applies to the `<summary>` in Variant A). This stays low-JS (the browser manages open state, light-dismiss, and focus) but trades away the Ctrl+F auto-expand, since the crumbs live in a closed popover.

### Accepted trade-off: grouped screen-reader reading

Because `<details>` (and a popover) introduce their own region in the accessibility tree, the hidden crumbs are announced as a **separate list** from the outer trail rather than one flat list of all items. For a collapsed breadcrumb this grouping is acceptable and arguably honest - the disclosure boundary communicates "these were hidden." It also keeps both variants conceptually consistent. Flattening a `<details>` back into its parent list while keeping the native toggle is not reliably possible across screen-reader/browser combinations, so we accept the grouping instead of fighting it.

### Proposed component API

A compositional API where the collapse container is a first-class child, so consumers declare which crumbs collapse:

```html
<DBBreadcrumb>
	<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem>
	<DBBreadcrumbCollapseItem>
		<DBBreadcrumbItem><a href="/item">Item 1</a></DBBreadcrumbItem>
	</DBBreadcrumbCollapseItem>
	<DBBreadcrumbItem aria-current="page">Current</DBBreadcrumbItem>
</DBBreadcrumb>
```

The final `Current` item is plain text (not a link) and carries `aria-current="page"`, matching the accessibility baseline established above - linking to the page the user is already on adds no value.

Mapping to rendered markup:

- `DBBreadcrumb` -> `<nav aria-label="..."><ol>`
- `DBBreadcrumbItem` -> `<li>` (consumer slots the `<a>`; the current page renders as plain text with `aria-current="page"`)
- `DBBreadcrumbCollapseItem` -> the hidden crumbs stay in their own `<li>` elements inside the outer `<ol>`; the collapse control itself is rendered as chrome that is kept out of the breadcrumb count (see "Avoiding an inflated item count" below). It is not itself a crumb; it only reveals the hidden crumbs, whether via an inline `<details>` disclosure (Variant A) or a popover overlay (Variant B).

### Avoiding an inflated item count

The collapse control must not be counted as a breadcrumb. If the collapse container is emitted as a plain `<li>` child of the outer `<ol>`, assistive technology counts it as an outer item - a three-crumb trail is then announced as "list, four items" (three crumbs plus the disclosure chrome), recreating the inflated-count problem described in "Explored but not adopted" below. Two structures avoid this, each with a support risk to verify on a real screen reader:

- **Control inside the `<ol>` with `role="presentation"` on its `<li>`**, so the disclosure `<li>` is not counted while the hidden crumbs remain real `<li>` items. Risk: AT support for a presentational `<li>` dropping from the count has historically varied.
- **Control outside the `<ol>`** (a sibling inside the `<nav>`), so the `<ol>` contains exactly the crumbs. Risk: relies on the `<nav>` for structure and needs care so the control stays visually inline with the trail.

Either way, the announced count must equal the number of crumbs (the hidden ones included, since they stay in the accessibility tree), never the number of crumbs plus the control. The grouped reading of the hidden set (from the `<details>` / popover region) is the separate, accepted trade-off discussed above.

### Open questions to resolve with design

- **Naming:** `DBBreadcrumbCollapseItem` describes a group container rather than a single crumb; consider `DBBreadcrumbCollapse` / `DBBreadcrumbCollapsible`. Renaming after release is a breaking change, so decide early.
- **Current-page default:** whether `DBBreadcrumbItem` gets a `current` prop that drops the link and sets `aria-current="page"`, or the consumer handles it. Baking it into the component is recommended.
- **Separator around the `...` boundary:** confirm the exact visual for the separator immediately before/after the collapse control in both the collapsed and expanded states.
- **Default open state:** starting collapsed is required for the Ctrl+F auto-expand to be meaningful; expose an optional `open` / `defaultOpen` prop if consumer control is needed.
- **Mitosis output parity:** since components are authored once and compiled to Angular, React, Vue, and Web Components, verify the `<details>` toggle and any label wiring behave consistently across all four outputs.

### Responsive angle: popover as the mobile default

The popover variant is also attractive as the **mobile** presentation. On narrow viewports, inline crumbs cause the horizontal-scroll problem every system warns against; collapsing everything behind a single `...` popover sidesteps it and keeps touch targets large. A plausible responsive model is therefore: inline `<details>` expansion on desktop, popover overlay on mobile - ideally switched with CSS at a breakpoint so the markup stays identical.

The obstacle is that the two variants use **different trigger elements** (`<summary>` for the inline disclosure vs. `<button popovertarget>` for the popover), and CSS cannot morph one into the other. So "popover on mobile always" resolves to one of:

1. **Always use the popover trigger**, varying only the popover's presentation per breakpoint. Simplest and most consistent, but drops the `<details>` Ctrl+F auto-expand on all viewports.
2. **Render both triggers, reveal one per breakpoint.** Keeps Ctrl+F on desktop and popover on mobile, but requires two controls in the DOM with the inactive one fully removed from the tab order and accessibility tree (use `hidden`, not just visual hiding).
3. **Expose a `variant` prop** (`collapse` | `popover`) and let the consumer (or a thin responsive wrapper) choose per breakpoint.

This is a design decision to settle with the designer, since it changes the component's internals and its accessibility wiring.

### Explored but not adopted: automatic truncation from a flat list + CSS

> **Status: explored, not adopted.** This automatic-truncation approach was prototyped but dropped in favor of the manual `DBBreadcrumbCollapseItem` model (see the decision below). It is kept here because its caveats document _why_ automatic truncation is harder than it looks and informed the final decision.

A different approach avoids the nested list (and its grouped screen-reader reading) entirely. The consumer authors **one flat `<ol>`** of all crumbs plus a single toggle `<li>` - no wrapper element. CSS lays the items out as a row (`display: flex`, or `display: grid` if a track-based layout is wanted later) and handles the truncation purely visually.

No named areas are needed. The collapse rule is **"hide every item that is neither the first crumb, the last crumb, nor the toggle"** - the middle crumbs, by definition.

The selector must not rely on the structural `:first-child` / `:last-child` pseudo-classes, though. As caveat 3 explains, the component can only emit the toggle as the **first or last** DOM child, and flex `order` merely moves it visually without changing its structural position. If the toggle is the first DOM child, `:first-child` matches the toggle rather than the leading crumb, so the actual first crumb falls into the "middle" set and is wrongly hidden (the trailing case is symmetrical). The rule therefore has to key off explicit markers on the edge crumbs and the toggle, not their DOM position:

```css
/* .is-first / .is-last mark the actual edge crumbs; .toggle marks the control.
   Position-based :first-child/:last-child would break, because the toggle can
   itself be the first or last DOM child. */
.breadcrumb.is-collapsed > li:not(.is-first):not(.is-last):not(.toggle) {
	/* clip visually, keep in the a11y tree */
}
```

Because there is no wrapper and no nested list, the accessibility tree is a single flat list and the screen reader reads all crumbs as one sequence. Reading order follows DOM order; flex `order` only changes the visual sequence, so the class-based rule keeps visual and semantic order aligned regardless of which edge the toggle is emitted at.

This is appealing but not free; the prototype surfaces three caveats:

1. **Layout, not shared areas.** An early attempt assigned every middle crumb to one named grid area ("rest"); grid items in the same area stack and overlap (the middle `<li>` stretched across the full row in the inspector). The fix is to let the items flow in a single row (flex, or grid auto-flow) so each sits in its own column - do not collapse them into one shared cell.
2. **Hiding visually only keeps the collapsed anchors focusable - a concrete accessibility failure.** To preserve the flat-list benefit, the collapsed middle crumbs would be hidden **visually only** (clip / off-screen / zero-size) rather than with `display: none` or `visibility: hidden`, so they stay in the accessibility tree. But an off-screen anchor is still in the **keyboard tab order**: a sighted keyboard user tabbing through the trail lands on invisible links _before_ the visible crumbs, with no focus indicator to show where focus went. That is a real WCAG failure (2.4.3 Focus Order, 2.4.7 Focus Visible), not merely noise, and it is the decisive reason this automatic approach was not adopted.
    - Removing the links from the tab order while collapsed (`tabindex="-1"`, or `inert` on the group) fixes the focus problem - but then the links are not keyboard-reachable until the disclosure is expanded, which is exactly the disclosure-gated behavior the `<details>` / popover model provides natively. No benefit is left in the flat-list variant.
    - **The toggle itself must stay a real, operable control** - it must not be given `tabindex="-1"` or `aria-hidden`. A keyboard-only sighted user (not on a screen reader) has to be able to Tab to it and expand the crumbs; a focusable `aria-hidden` element is also an anti-pattern (focus lands on a control with no name/role, failing WCAG 4.1.2). Note that `aria-hidden` does **not** separate "screen-reader users" from "keyboard users" - it separates the accessibility tree from the focus order, so a screen-reader user who is also a keyboard user (most are) would still land on the hidden button and hear nothing.
    - **Residual redundancy even if focus is handled:** if the collapsed crumbs stay both in the a11y tree and in the tab order, a screen-reader user reaches all the anchors directly, so the toggle is redundant for them - they encounter one extra "Show hidden breadcrumbs, button" that does nothing they need. That redundancy is the minor cost; the focusable-invisible-links problem above is the disqualifying one. Whichever presentation is chosen, keep the toggle fully accessible: a real `<button>` with an `aria-label` (e.g. "Show hidden breadcrumbs") and `aria-expanded` reflecting its state.
3. **The toggle inflates the list item count, and the component can only emit it at an edge.** In a component the consumer slots the crumbs as children of the `<ol>`; the component renders its own chrome and therefore can only place the toggle as the **first or last** child - it cannot interleave the toggle between two consumer crumbs. A toggle wrapped in a counted `<li>` makes AT announce "list, 6 items" for 5 crumbs (verified in the prototype).
   Getting the toggle to _appear_ between the first crumb and the rest is a visual-order-vs-DOM-order problem, solved by **flex `order`** (or `grid-area` - `order` is simpler for a single row and grid buys nothing extra here). Two ways to keep the count correct, each with its own risk to verify on a real screen reader:
    - **Toggle inside the `<ol>` with `role="presentation"` on its `<li>`** so it is not counted. Everything stays a flex sibling, so `order` works with no `display: contents`. Risk: AT support for a presentational `<li>` dropping from the count has historically varied.
    - **Toggle outside the `<ol>`** (a sibling inside the `<nav>`), so the `<ol>` contains exactly the crumbs. To let `order` mix the button among the crumbs, the `<ol>` needs `display: contents`. Risk: `display: contents` has a history of AT bugs on lists.
4. **CSS cannot decide when to collapse.** CSS cannot count items or detect overflow. A fixed rule (always collapse between first and last, like Porsche's deterministic model) is CSS-only; width-aware collapse still needs JS / container queries / `ResizeObserver`.

### Decision: manual collapse only, driven by the presence of `DBBreadcrumbCollapseItem`

There is **no automatic-truncation variant** and therefore **no `variant` prop needed to choose between auto and manual**. The behavior is derived purely from the markup - the component checks whether a `DBBreadcrumbCollapseItem` is present among its children:

- **No `DBBreadcrumbCollapseItem`** -> a plain breadcrumb: all crumbs are shown, nothing is truncated, and no toggle is rendered.
- **`DBBreadcrumbCollapseItem` present** -> the consumer has explicitly chosen which crumbs collapse and where; the component renders the collapse control for that group.

This keeps the API declarative (the markup is the configuration), removes the auto-truncation logic entirely (which was the part that needed JS / `ResizeObserver`), and always leaves the consumer in control of exactly which crumbs collapse.

```html
<DBBreadcrumb>
	<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem>
	<DBBreadcrumbItem><a href="/a">Section</a></DBBreadcrumbItem>
	<DBBreadcrumbItem><a href="/a/b">Subsection</a></DBBreadcrumbItem>
	<DBBreadcrumbCollapseItem>
		<DBBreadcrumbItem><a href="/a/b/c">Hidden 1</a></DBBreadcrumbItem>
		<DBBreadcrumbItem><a href="/a/b/c/d">Hidden 2</a></DBBreadcrumbItem>
	</DBBreadcrumbCollapseItem>
	<DBBreadcrumbItem aria-current="page">Current</DBBreadcrumbItem>
</DBBreadcrumb>
```

The `DBBreadcrumbCollapseItem` wraps the crumbs to hide and reveals them behind a single control - either the inline `<details>` collapse (find-in-page friendly, low-JS) or a popover overlay. Its wrapped crumbs form a distinct group in the accessibility tree, which is the accepted grouped reading discussed above.

#### Open decisions

- **Collapse presentation:** whether the `DBBreadcrumbCollapseItem` presents as an inline `<details>` collapse, a popover, or both (selectable by a small prop on the collapse item itself, e.g. `variant="details" | "popover"`). This prop would only choose the _presentation_ of the collapse - it is not the auto/manual switch, since manual is the only mode.
- **Naming:** `DBBreadcrumbCollapseItem` describes a group container rather than a single crumb; `DBBreadcrumbCollapse` / `DBBreadcrumbCollapsible` may read better. Renaming after release is breaking, so settle early.
- **Current-page default:** whether `DBBreadcrumbItem` gets a `current` prop that drops the link and sets `aria-current="page"`, or the consumer handles it.
- **Mitosis output parity:** verify the collapse control (`<details>` toggle and/or popover) and any label wiring behave consistently across Angular, React, Vue, and Web Components.

The collapse presentations (inline `<details>` collapse and native popover) were validated during exploration with a static, throwaway HTML prototype for screen-reader testing; that scratchpad is intentionally not committed to the repository. The accessibility observations noted above (grouped reading, item-count behavior, focus order) should be re-verified against the real component once it is implemented.
