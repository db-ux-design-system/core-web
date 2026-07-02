# DB UX Figma Generation Guidelines

> **Authority**: Single source of truth for AI agents that GENERATE Figma screens with
> the DB UX Design System v3. Complements `guidelines.md` (which governs code). These
> rules are binding; if any element fails them, the task is NOT complete.

---

## Render environment

- Screens are produced by handing a declarative **Composition Plan (JSON)** to the
  hardened render runtime (`skills/generate-figma-screen/assets/db-figma-runtime.js`),
  executed through the host Figma design MCP **write** tool (e.g. `use_figma`).
- NEVER hand-write imperative Figma node code. The runtime encapsulates every Figma
  Plugin API gotcha; bespoke orchestration reintroduces the flaky failures it prevents.

## Components (must be official DB instances)

- Buttons, Cards, Tags, Inputs, Menus, Navigation, Notifications → official DB components.
- NEVER draw a component-like element from frames / rectangles / text.
- NEVER override an instance's `fills` / `strokes` / `cornerRadius` to fake a variant.
- Every screen STARTS with the official DB `Header` (logo + app name) as the first child.
- Layout only through the approved primitives: Section, Grid, Container/Stack, Slot.

## Color (bound variables only)

- Bind every color to a Figma Variable — never raw RGB/HEX.
- `origin` / brand accent is ACCENT-ONLY (text, icon, border). NEVER a surface background.
- Large surfaces / Sections use only `color.background.canvas|surface|elevated`
  (bg level-1/2/3). Brand/inverted surfaces are exceptions requiring explicit approval.
- Zebra: the topmost section is `color.background.canvas` (level-1), then alternate.
- Text emphasis: default is `color.text.strong` (emphasis-100). Use `weak` (90) / `muted`
  (80) only for intentionally de-emphasized text. 70 is icons-only, never text.

## Typography (registered text styles only)

- Every content text node uses a registered DB text style (`display`, `headline*`,
  `body*`). Raw `fontName` / `fontSize` / `lineHeight` on text is FORBIDDEN.
- Color is bound separately via a color variable.

## Spacing, radius, sizing

- Spacing (`itemSpacing`, padding) and border radius bind to registered DB variables.
- Sections HUG content vertically — never a fixed Section height.
- Card / Container content slots HUG too (the #1 overflow bug when left FIXED/FILL).

## Layout width & landing pages

- Default content Sections use the Section's default full width.
- **Landing pages**: every Section uses `contentWidth: "Small (768)"` so the content sits
  in a narrow, centered column — never full-bleed text.
- **Hero and closing CTA** sections of a landing page are centered (`align: "center"`):
  the title/description text and the CTA button are horizontally centered.

## Section structure & Gestalt grouping

- A content Section MUST carry a heading: a `title` (and optional `description`) above its
  content. Never render a bare Grid/Card group with no section title.
- Do NOT leave a thin title-only section: the page title/hero and the first content group
  belong in the SAME top section. The runtime builds the styled section header from
  `title`/`description`.
- Do NOT give every element the same gap. Group related content in NESTED containers with
  DIFFERENT spacings (e.g. tag separated by a larger gap; title+value+meta tight `2xs`).
  Uniform spacing flattens hierarchy and is a smell.

## Button usage

- A card's action is ALWAYS a `filled` button (the page-level / hero / closing CTA uses
  `brand`). A lone `ghost` or `outlined` button in a card is FORBIDDEN — on its own it is
  too weak, "tips over" visually, and reads as disabled.
- `ghost`/`outlined` are ONLY valid as a SECONDARY action sitting directly next to a
  stronger (`filled`/`brand`) button — e.g. a `ghost` "Zurück" next to a `filled` "Weiter".
- Rule of thumb: if there is exactly one button, it is `filled` (or `brand` for the hero/CTA).

## Media / Text modules

- In an Image + Text row (a 2-cell Grid), the text block is vertically centered against
  the image: give the text `ContainerVertical` `fillHeight: true` and `align: "left"`
  (left = horizontally left, vertically centered).
- The Grid for a Media/Text row uses `gridLayout: "50-50"` and **`gridGap: "xl"`**.
  Never use the default gap for media/text rows — the larger gap creates the necessary
  breathing room between image and copy.
- Rounded image corners MUST bind a DB radius token (`radius: "radius.lg"` etc.), never a
  raw pixel value. Pass `radius: "none"` for square corners.

## Icons

- Functional UI icons come from DB Theme Icons; illustrative icons from DB Theme
  Illustrative Icons. NEVER use an emoji as a UI icon.

## Stop conditions (report, never approximate)

- A required component / variant / token / text style is missing from the registries.
- A surface needs a button variant that does not exist (e.g. on a brand-red banner).
- A required Concept component without user opt-in.

## Self-check before "done"

Every Button/Card/Tag/Input/Nav is a non-detached official instance; every
color/spacing/radius is a bound variable; every text node uses a registered text style;
the render runtime's `audit` returns `{ valid: true }`.
