# DB UX Figma Generation Rules

> **Authority**: The SINGLE source of truth for AI agents that GENERATE Figma screens
> with the DB UX Design System v3. This one file governs BOTH:
>
> - **Part A — Composition** (WHAT to place and in WHAT structure): detect the page type,
>   then follow its captured Figma catalog (example + blocks + patterns). Plus the Action
>   Hierarchy and the candidate/human-review fallback.
> - **Part B — Visual rules** (HOW each element must look): components, color, typography,
>   spacing, layout.
>
> These rules are binding; if any element fails them, the task is NOT complete. It
> complements the render contract in `skills/generate-figma-screen/SKILL.md`. The
> machine-readable source of truth for concrete values lives in the registries under
> `skills/generate-figma-screen/assets/registries/`: `tokens.json` (colors/spacing/radius +
> text styles), `components.json` (components + variants), and one folder per page type —
> `dashboard/` and `landingpage/` — each holding `example.json`, `blocks.json` and (landingpage)
> `block-patterns.json`.

---

# Part A — Composition (WHAT to place & in what structure)

## Core principle

> **Designers get flexibility. AI follows the captured catalog per page type.**

Human designers author the reference screens and block catalogs in Figma. The AI must NOT
freely invent structure: AI-generated screens must be **guided, validatable and repeatable**.
For a known page type the AI composes **content-driven**: it splits the prompt into content
groups, maps each to a section via that page type's `sections.json` (intent table) ordered per
`template.json`, and fills each section from `block-patterns.json` / `blocks.json`.
`example.json` is only a density/style reference — never copied as a fixed skeleton. When
nothing fits, it STOPS and flags for human review (never approximates).

## The model

```
1. Tokens & Components   official DB instances + bound tokens (tokens.json, components.json) — never rebuilt
2. Block                 a captured, registry-valid plan fragment (per page type: blocks.json)
3. Block pattern         a section-level composition of blocks (block-patterns.json)
4. Section (selection)   maps a CONTENT SHAPE/INTENT to a pattern (per page type: sections.json)
5. Page Template         which sections are required/optional/forbidden + order (template.json)
6. Example               a DENSITY/STYLE reference only — NOT a skeleton to copy (example.json)
7. Composition Plan      the JSON the runtime renders (renderPlan)
8. Validation / Linting  registry resolution + this document's rules + runtime audit
```

The layout is **content-driven**: split the prompt into content groups, map each to a section
via `sections.json` → `whenToUse`, order them per `template.json`. This is what makes two
screens of the same page type differ when their content differs — see the Composition
workflow (section 5).

Everything is grounded 1:1 in Figma: each block/pattern/example carries a `source` node id and
uses only components from `components.json` and tokens/text styles from `tokens.json`.

## 1. Tokens & Components

Governed by **Part B** of this file. Buttons, Cards, Tags, Links, Inputs, Header, Navigation
etc. are official DB components (`components.json`); color/spacing/radius bind to Figma
Variables and text uses registered text styles (`tokens.json`). No raw HEX/RGB, no hand-drawn
components, no recolored instances. Layout frames (Section/Grid/Container) are allowed.
For component props/variants beyond what a block encodes, verify live via
`db-ux/get_component_props` rather than guessing.

## 2. Blocks & block patterns (per page type)

Each page type folder holds the captured catalog:

- **`blocks.json`** — atomic blocks (dashboard: metric card, content card, toolbar, data
  table; landingpage: teaser, teaser card, image teaser, media-text block, image, …). Each entry is a registry-valid Composition Plan fragment with
  `<placeholders>`, a `source` Figma node id, and (for composites) `{ "$ref": "block.id" }`
  references to its item block.
- **`block-patterns.json`** — section-level patterns (hero, feature-grid, media-text row,
  cta-centered, …). A pattern's `level` says whether it IS a full Section or is CONTENT to
  nest inside a titled Section.
- **`sections.json`** — the content-driven SELECTION layer: each section maps a content
  shape/intent (`whenToUse`) to a pattern + item block + cardinality. This is how the layout
  is chosen from the content.
- **`template.json`** — the page template: which sections are required/optional/forbidden,
  their order/position, and page-wide rules (zebra, contentWidth/spacing, action hierarchy,
  "avoid a mono-layout when content is heterogeneous").

**To use a block/pattern**: copy its `plan` fragment, expand any `$ref`, fill the
`<placeholders>` with real content, drop optional nodes (`<...?>`), and choose within a
`<a|b|c>` placeholder. Do NOT restructure a captured fragment. If a needed block is missing —
or exists only as a `plan: null` stub — STOP and report the gap (or capture it from its
`source` node first). Never approximate a block.

## 3. Action Hierarchy (drives which action a block gets)

The action kind is **never free**. First determine the _meaning_ of the action, then map it:

- **primary-button** — the single most important action of the page/flow (anmelden, buchen,
  Antrag starten, Bericht erstellen, Hauptmaßnahme). Variant `brand`. **Normally only ONE
  dominant brand action per page.** Never one per card in a grid.
- **equal-item-action** — several equivalent items each with their own action (Details,
  Auswählen, Öffnen, Zuweisen). Variant `filled` (or a Link). All equal items keep the SAME,
  visually equal action — never single one out with a brand button.
- **link** — the default for informative / editorial / navigational content (Mehr erfahren,
  Details anzeigen, Dokumentation öffnen, Zum Artikel). Use a Button only for a real
  action / transaction / conversion.
- **button-group** — several actions on the SAME object/context (Speichern + Abbrechen,
  Zuweisen + Zurückstellen). Max ONE primary in the group; the second is secondary
  (`ghost`/`outlined` sitting next to the stronger button). Not in every card of a large grid.
- **none** — read-only blocks (e.g. `dashboard.metric-card`, a data-table row).

The concrete button/link styling and the clickable-card constraints that enforce this
hierarchy are defined in **Part B → "Button usage"** and **"Clickable cards, buttons & links"**.

## 4. Page type detection (first step)

From the prompt, classify the intent, then pick the page type folder:

- operational / "Lage" / incidents / KPIs + actions / reporting / management overview →
  **`dashboard`** (`dashboard/`).
- product / marketing / event / internal-service / feature or benefit storytelling →
  **`landingpage`** (`landingpage/`).

If neither clearly fits (e.g. an article, a search-results flow, an entity detail page), STOP,
describe the gap, and propose a **new page-type catalog** for human review — never silently
force the screen into the wrong page type or invent structure.

## 5. Composition workflow (content-driven — NOT example-copying)

The layout must follow the CONTENT, not a fixed skeleton. Two screens of the same page type
should look different when their content differs, and alike only when their content is alike.
Achieve this by SELECTING sections per content group — never by copying `example.json`.

1. **Detect the page type** (above) and open its folder under `registries/<pageType>/`.
2. **Split the prompt into content groups.** List the distinct things the user wants to show
   (e.g. "a promise + CTA", "6 destinations with images", "3 fare tiers", "a how-it-works in
   3 steps", "headline KPIs", "a table of connections"). Each group becomes one section.
3. **Map each group to a section** via `sections.json` → `whenToUse` (the intent table).
   Pick the section whose intent fits the group's SHAPE (equal items with images →
   feature-grid; equal text options → card-grid; explanatory sequence → media-text-rows; one
   standout → highlight; KPIs → metric-row; tabular → data-table; …). Pick, never invent — if a
   group matches no section, STOP and flag `requiresHumanReview: true`.
4. **Order the sections** per `template.json` (required/optional/forbidden + position rules:
   e.g. hero first, CTA last; dashboard overview before detail). Respect its `rules`
   (zebra, contentWidth/spacing, action hierarchy, "avoid a mono-layout when content is
   heterogeneous").
5. **Fill each section** from its `pattern`/`itemBlock` (resolved in `block-patterns.json` /
   `blocks.json`): expand `$ref`, fill EVERY `<placeholder>` with real content, resolve each
   action via the **Action Hierarchy** (section 3). Drop an optional node ONLY when no content
   applies; never leave an empty Select/Icon/Button placeholder.
6. **Assemble one Composition Plan** (per the PLAN SCHEMA in `db-figma-runtime.js`): Header
   first, then the ordered sections. `example.json` is a **density/style reference only**
   (spacing, zebra, heading hierarchy) — do not copy its section sequence.
7. **Validate** (see the Validation / Linting section at the end), then render once via
   `renderPlan` (see SKILL.md).

### Output note (before rendering)

Briefly record: the detected page type, the content groups you identified, and the
section chosen for each (by id) with a one-line reason from `whenToUse`. Flag any group that
matched no section, or any block that had to be captured/adapted, as `requiresHumanReview: true`.

## 6. Fallback (controlled, human-reviewed)

Two situations require STOPPING and human review — never approximate:

- **No page type fits** → propose a new page-type catalog (name, purpose, which example +
  blocks it would need), mark `requiresHumanReview: true`.
- **A needed block is missing** from the page type's catalog (or is only a `plan: null` stub)
  → either capture it from its `source` Figma node into the catalog first, or report the exact
  gap. A newly captured block is NOT an established block until reviewed.

```json
{
	"mode": "block-candidate",
	"pageType": "dashboard",
	"useCase": "Comparison block for two alternative services",
	"whyNoExistingBlockFits": "The dashboard palette has metric/content cards, a toolbar and a data table, not a side-by-side comparison of two equivalent options.",
	"proposedBlockId": "dashboard.comparison-row",
	"actionHierarchy": {
		"actionType": "equal-item-action",
		"buttonVariant": "filled",
		"reason": "Each option is equally weighted; none should get a Primary/brand button."
	},
	"requiresHumanReview": true
}
```

---

# Part B — Visual rules (HOW each element must look)

## Render environment

- Screens are produced by handing a declarative **Composition Plan (JSON)** to the
  hardened render runtime (`skills/generate-figma-screen/assets/db-figma-runtime.js`),
  executed through the `figma` MCP **write** tool `use_figma` (official Figma Dev Mode MCP,
  wired in `mcp.json`). Requires the Figma desktop app with the Dev Mode MCP server enabled.
- NEVER hand-write imperative Figma node code. The runtime encapsulates every Figma
  Plugin API gotcha; bespoke orchestration reintroduces the flaky failures it prevents.

## Components (must be official DB instances)

- Buttons, Cards, Tags, Inputs, Menus, Navigation, Notifications → official DB components.
- NEVER draw a component-like element from frames / rectangles / text.
- NEVER override an instance's `fills` / `strokes` / `cornerRadius` to fake a variant.
- Every screen STARTS with the official DB `Header` (logo + app name) as the first child.
- Layout only through the approved primitives: Section, Grid, Container/Stack, Slot.

### Header rules

- The DB **logo / app name is the "home" link**. Do NOT add a `Startseite` / `Home` / `Start`
  navigation item — list only the OTHER pages (e.g. `Abfahrten`, `Wegeleitung`, `Service`).
- The Header's **meta-navigation** and the **Primary/Secondary action icon buttons are OFF
  by default**. Only enable them when there is a REAL, defined action (a named link or a
  concrete icon action). Never leave empty ✕ placeholder icons or a stray "External Link"
  in the Header — unused/undefined header elements must be hidden.

## Color (bound variables only)

- Bind every color to a Figma Variable — never raw RGB/HEX.
- `origin` / brand accent is ACCENT-ONLY (text, icon, border). NEVER a surface background.
- Large surfaces / Sections use only `color.background.canvas|surface|elevated`
  (bg level-1/2/3). Brand/inverted surfaces are exceptions requiring explicit approval.
- Zebra: the topmost section is `color.background.canvas` (level-1), then alternate.
- Text emphasis: default is `color.text.strong` (emphasis-100). Use `weak` (90) / `muted`
  (80) only for intentionally de-emphasized text. 70 is icons-only, never text.

## Typography (Heading/Text components; registered text styles only)

- **Prefer the official DB typography COMPONENTS** for content text — the Concept `Heading`
  (`As=h1…h6`) and `Text` (`Size=Small…3xLarge`) components — rather than raw text nodes.
  This is how the DB UX examples are authored. In the Composition Plan use node types
  `Heading` (hero=h1, section titles=h2, card titles=h4) and `Body` (caption/card=Small,
  section description=(Def) Medium, hero subline=Large). They require Concept opt-in.
- If a raw text node is used instead, it MUST use a registered DB text style (`display`,
  `headline*`, `body*`). Raw `fontName` / `fontSize` / `lineHeight` on text is FORBIDDEN.
- Color is bound separately via a color variable.
- **Heading hierarchy — no two same-size headlines in one Section.** The Section `title`
  is the section heading (`h2`). Any heading INSIDE that section (card title, media-text
  title) MUST be a lower level (`h3`/`h4`/`h5`). Never render two `h2`s in the same section.
  If a single media/text row already has its own headline, make the SECTION `title` be that
  headline (one Heading) instead of duplicating it as both a section title and an inner `h2`.
- **Section title↔description gap** is a small `xs` (handled by the runtime) — never `2xs`.
- **Weight and color-emphasis MUST agree** — never send opposing signals. Bold RAISES
  emphasis, so pair it with `color.text.strong` (100). A de-emphasized color (`weak` 90 /
  `muted` 80) LOWERS emphasis, so pair it with a Regular weight. FORBIDDEN combinations:
  `*.bold` + `muted`/`weak` (bold but faded), or a lone Regular in `strong` where a
  de-emphasis was intended. Meta / caption / timestamp text = Regular + `muted`; if such a
  label should instead stand out as a scannable anchor, use `*.bold` + `strong` — but pick
  ONE direction, don't mix.

## Spacing, radius, sizing

- Spacing (`itemSpacing`, padding) and border radius bind to registered DB variables.
- Sections HUG content vertically — never a fixed Section height.
- Card / Container content slots HUG too (the #1 overflow bug when left FIXED/FILL).
- **Section spacing by screen type**: DASHBOARDS and operational B2B screens set every
  Section to `spacing: "small"` for a denser, more scannable layout. Marketing / landing
  pages keep the default `medium` (or `large` for airy hero pages). Never mix — pick one
  spacing for the whole screen based on its type.

## Layout width & landing pages

- Default content Sections use the Section's default full width.
- **Landing pages**: every Section uses a narrow, centered column — never full-bleed text.
  Use `contentWidth: "Small (768)"` for text-dense pages, or `"Medium (1024)"` for
  media-led pages (the Figma 'Examples › Landingpage' uses a centered ~1024 column). Pick
  ONE width for the whole page and keep it consistent.
- **Hero and closing CTA** sections of a landing page are centered (`align: "center"`):
  the title/description text and the CTA button are horizontally centered.

## Section structure & Gestalt grouping

- A content Section MUST carry a heading: a `title` (and optional `description`) above its
  content. Never render a bare Grid/Card group with no section title.
- Do NOT leave a thin title-only section: the page title/hero and the first content group
  belong in the SAME top section. The runtime builds the styled section header from
  `title`/`description`.
- **Avoid single-block sections.** A Section should group MULTIPLE related blocks (a grid of
  cards, a list, several rows). Only self-contained modules justify a one-block section: the
  hero, the closing CTA, and a single media/text row. Do NOT wrap a lone heading, a single
  paragraph, or one stray card in its own Section — merge it into an adjacent section.
- **Card content is TOP-aligned.** A card's content stack uses `align: "top-left"` (never
  vertically centered), so cards in a row stay visually consistent regardless of text length.
  Only a trailing ACTION (Link/Button) may sit bottom-right — put it in its OWN
  `ContainerVertical` with `fillHeight: true` + `justify: "end"` (see the reference content
  card `707:6346`: text top-left, action bottom-right). Never center the whole card content
  to fake vertical balance.
- A Content Block is ONE ContainerVertical with a SINGLE uniform gap for all its direct
  children — default `lg` (calibrated against the reference block `651:6440`). Do NOT nest
  tighter `2xs`/`xs` vertical sub-groups inside a block; every element shares the same gap.
  When the block sits in a Card, set the Card `spacing` to match (block `lg` → Card
  `spacing: "large"`). The only nested containers inside a block are the horizontal
  `metaRow` (Tag + meta) and `spread` list rows — both single children of the uniform stack.
- In a multi-column grid of cards, set the shorter cards to `fillHeight: true` so all cards
  match the tallest card's height (the tallest hugs and defines the row height).
- List / timeline / status rows (an info block on the left, a status Badge/Tag or action on
  the right) MUST use the full card width, not pack everything into a narrow left column
  with dead whitespace. Mark the row's `ContainerHorizontal` with `spread: true` (full width
    - SPACE_BETWEEN) and the trailing status/action column with `hugWidth: true`, so the
      leading text block grows to the full width (single line, no cramping) and the status sits
      flush right.

## Button usage

- A card's action is ALWAYS a `filled` button (the page-level / hero / closing CTA uses
  `brand`). A lone `ghost` or `outlined` button in a card is FORBIDDEN — on its own it is
  too weak, "tips over" visually, and reads as disabled.
- `ghost`/`outlined` are ONLY valid as a SECONDARY action sitting directly next to a
  stronger (`filled`/`brand`) button — e.g. a `ghost` "Zurück" next to a `filled` "Weiter".
- Rule of thumb: if there is exactly one button, it is `filled` (or `brand` for the hero/CTA).
- The action's _kind_ (brand vs filled vs link vs group) is chosen via the **Action
  Hierarchy** in Part A → section 3.

## Clickable cards, buttons & links (interaction model)

- **A clickable card (link-card) MUST NOT contain a button or a separate link.** Nested
  interactive elements (`<a>`/`<button>` inside an `<a>`) are invalid and ambiguous for
  keyboard + screen reader. A clickable card is exactly ONE interactive element — or none.
- Decide by the **type** and **count** of actions:
    - **Command / state change** (Zuweisen, Senden, Löschen, Freigeben) → explicit `Button`,
      card NOT clickable. Navigation never goes on a button.
    - **More than one action**, or actions with own state (disabled/loading) → card NOT
      clickable, explicit `Button`/`Link` controls.
    - **Exactly one navigation target and the whole card describes it** (teaser, article,
      status card → detail) → make the WHOLE card the link. No inner control. Optionally add
      a visually link-styled cue ("Details →") that is part of the card link (decorative, not
      a second focusable element). In Figma mock-ups this cue is rendered with the `Link`
      component as the single affordance; the card itself carries the navigation.
    - **Navigation from a non-clickable card** (card also holds other interactive bits, or the
      link is tertiary) → use a real `Link`, not a heavy button. Navigation = Link,
      primary CTA / command = Button.

## Media / Text modules

- In an Image + Text row (a 2-cell Grid), the text block is vertically centered against
  the image: give the text `ContainerVertical` `fillHeight: true` and `align: "left"`
  (left = horizontally left, vertically centered).
- The Grid for a Media/Text row uses `gridLayout: "50-50"` and **`gridGap: "xl"`**.
  Never use the default gap for media/text rows — the larger gap creates the necessary
  breathing room between image and copy.
- Rounded image corners MUST bind a DB radius token (`radius: "radius.lg"` etc.), never a
  raw pixel value. Pass `radius: "none"` for square corners.

## Images

- An `Image` node MUST use one of the three design-system aspect ratios — `ratio: "1:1"`,
  `"3:4"`, or `"16:9"` (from the 'Image Ratios' example `653:15777`). The width fills the
  container and the height derives from the ratio. A free pixel height (`imageHeight`) is
  FORBIDDEN — it produces the odd, off-grid image formats we want to avoid.

## Icons

- A functional/illustrative icon in content is the real DB `Icon` component (node type
  `Icon`) — NEVER an image rectangle, a recolored shape, or an emoji. Use `visual: "icon"`
  (which compiles to the `Icon` node), not an `Image`. The icon's size is INTRINSIC to its
  `Size` variant: the instance HUGS both width and height and is never force-resized. Pass an
  optional `size` (e.g. 16/20/24/32) to pick the `Size` variant; omit it for the default.
- Functional UI icons come from DB Theme Icons; illustrative icons from DB Theme
  Illustrative Icons.
- **Pick a specific glyph by name**: `{ "type": "Icon", "name": "arrow_right" }`. Names are
  resolved through `registries/icons.json` (name → DB Theme Icons component key); lookup is
  case-insensitive and treats `_`, `-`, and spaces as equivalent. Without a `name`/`key` the
  Icon renders the generic placeholder — so always name the glyph when one is meaningful.
- If the icon you need is not in `icons.json`, resolve it via `search_design_system` (query
  the hyphenated icon name, e.g. `arrow-right`, scoped to library "DB UX DS v3 - DB Theme
  Icons"), then add it to BOTH `registries/icons.json` and the `ICON_KEYS` map in
  `db-figma-runtime.js` and rebuild (`node build-runtime.cjs`). A raw `key` still works and
  wins over `name`.

## Stop conditions (report, never approximate)

- A required component / variant / token / text style is missing from the registries.
- A surface needs a button variant that does not exist (e.g. on a brand-red banner).
- A required Concept component without user opt-in.

---

# Validation / Linting (self-check before "done")

**Registry resolution** (hard stops — report the exact gap, never approximate):

- Every component + variant resolves in `components.json`.
- Every color/spacing/radius token and text style resolves in `tokens.json`.
- Every block/pattern id used exists in the page type's `blocks.json` / `block-patterns.json`.

**Composition rules** (Part A) — content-driven:

- Page type detected (`dashboard` | `landingpage`).
- The prompt was split into content groups, and EACH group maps to a section whose
  `sections.json` → `whenToUse` fits it (record the id + one-line reason). No group was forced
  into an ill-fitting section; unmatched groups → `requiresHumanReview: true`.
- Sections are ordered per `template.json` (required present, forbidden absent, positions
  respected: e.g. hero first / CTA last; dashboard overview before detail).
- **No mono-layout**: heterogeneous content groups use DIFFERENT patterns (e.g. a benefit
  story as media-text-rows AND a set of options as a card-grid) — not the same grid twice.
  Uniform content may legitimately repeat one pattern.
- Every block/pattern came from that page type's `blocks.json` / `block-patterns.json` — no
  invented or restructured fragments; `<placeholders>` filled with real content; optional
  nodes dropped cleanly (never an empty Select/Icon/Button placeholder).
- `example.json` used only as a density/style reference, not copied as a skeleton.
- Any newly captured block, adapted fragment, or unmatched page type → output flags
  `requiresHumanReview: true`.

**Visual rules** (Part B) — all must hold; do not re-derive them, apply the sections above:

- Action hierarchy + button usage + clickable-card model (Part B → "Button usage",
  "Clickable cards"): at most one dominant `brand` button per page; equal items in a grid
  share one action kind; no `brand` button per card; button-group has ≤1 primary; a
  link-card has exactly one interactive element (or none).
- Typography (Part B → "Typography"): weight and color-emphasis agree (no bold + muted/weak;
  meta/caption = Regular + muted); heading hierarchy (section `title` = h2, inner = h3/h4/h5).
- Section structure (Part B → "Section structure"): every content Section has a title;
  uniform block gap (`lg`, Card `spacing` matches; list/status rows use `spread` + trailing
  `hugWidth`); no single-block sections except hero / closing CTA / one media-text row; card
  content top-aligned.
- Color / density / width (Part B → "Color", "Spacing", "Layout width"): Header is the first
  child; first section is `color.background.canvas` and backgrounds alternate (zebra);
  dashboards → every Section `spacing: "small"`; landing pages → one consistent centered
  `contentWidth`, hero + closing CTA centered.
- Components / images / icons: every Button/Card/Tag/Input/Nav is a non-detached official
  instance; every color/spacing/radius is a bound variable; images use a ratio (1:1/3:4/16:9);
  icons use the `Icon` component.

**Runtime audit**: `renderPlan(...).audit.valid === true`.
