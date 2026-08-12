# Form — Design Principles

Consolidated principles for composing a data-entry **form** (application, registration, booking
details, contact, settings). These are the design intent; the machine-readable enforcement
(patterns, blocks, spacing tokens, component keys) lives in
`skills/generate-figma-screen/assets/registries/form/*.json`. Keep both in sync. Always-on rules
still apply: `../layout-guidelines.md` (spacing/grouping) and
`../../design-system/screen-guidelines.md` (visual rules).

## 1. Model: one focused column, not sections or panels

A form is ONE narrow, centered single column — a form title on top, a vertical stack of titled
**fieldset** groups, and a closing **action** row. It is NOT a stack of full-width titled zebra
sections (content page) and NOT a bento grid of panels (dashboard). The user reads and fills
top-to-bottom, so everything sits in one column at `contentWidth: "Small (768)"`.

## 2. Structure

- **Header shell** (DB `Header`) first — logo = home, no "Startseite" nav item.
- **One form `Section`** (canvas, `contentWidth: "Small (768)"`, `spacing: "medium"`,
  `titleAs: "h1"`, title = form name, optional one-line description), whose children — stacked in a
  content `ContainerVertical` at gap `xl` — are:
    1. **Intro extras** (optional) — a form-level `Infotext` ("Pflichtfelder sind mit \* markiert")
       and/or a `Notification` (context / error summary).
    2. **Fieldsets** — 1–6 titled groups of related fields.
    3. **Action row** — the submit + optional cancel.

## 3. Single background, no zebra

The whole form sits on ONE `color.background.canvas`. Do NOT alternate surface/canvas per fieldset.
For a SHORT form you MAY wrap the fields in ONE elevation-1 `Card` (Gesetz der gemeinsamen Region);
long multi-fieldset forms stay plain with `xl` space (optionally a `Divider`) between fieldsets.

## 4. Group fields into titled fieldsets

Related fields belong together under a fieldset `Heading` (`h2`) with an optional description.
Never render one giant ungrouped list of inputs. Heading hierarchy: form title `h1` → fieldset
`h2` → a choice-group's question label (`Body` bold, or `h3` if it needs to be a heading). A very
short form MAY be a single fieldset with no `h2` (the form `h1` carries it).

## 5. Label-above fields, filling the column

- Form fields use the **label-ABOVE** variant (`label: "above"`), NOT floating. Floating is for
  compact action/filter rows (dashboard); a stacked data-entry form uses label-above so each field
  carries its own visible label (screen-guidelines.md → Komponentengrößen).
- Every field is `fillWidth` within the 768 column — do not hand-size field widths.
- Two SHORT related fields (Vorname/Nachname, PLZ/Ort, Von/Nach) MAY share a row via a **50-50
  Grid** (`form.field-row`). Never force a long field, or a field + button, into a Grid.

## 6. Field kinds

- **Text** → `Input` (single line). **Long text** → `Textarea`. **Closed list** → `Select`
  (long/secondary lists) or a **radio-group** (2–5 options that should all be visible).
- **Multi-select** → a **checkbox-group**. **On/off setting** → a **switch-row** (preferences) or a
  Checkbox (in-form choice). **Agreement** → a **consent** Checkbox near the end.
- **Component variant caveats (components.json):** `Textarea` ships ONLY the `Label Above – Filled`
  variant, so it always renders filled — use it as-is, never approximate an empty state. `Switch`
  ships only `{ trailing + small }` or `{ leading + medium }`. `Checkbox`/`Radio` use
  `{ size, width }` — a stacked full-width option uses `width: "full"`.

## 7. Required fields & helpers

Mark required `Input`/`Select`/`Textarea` with `applyProps { "Show Required Asterisk": true }`, and
state the convention once via a form-level `Infotext`. For a format hint or an inline error, group
the field with a helper `Infotext` at `sm` (R−1) inside a `ContainerVertical`.

## 8. Errors / context are inline

A form- or fieldset-level error/context summary is a `Notification` (tinted via `semantic`:
Critical / Warning / Informational) placed at the top of the intro or the affected fieldset — never
its own section. Its text props are `headline` (title) + `text` (body), NOT `description`.

## 9. Action hierarchy

The form **submit** is the page's single primary action → **Brand** (≤1 per page). The secondary
(Abbrechen / Zurück) is **ghost** or **outlined**. No mid-form Brand buttons, no per-fieldset
actions, no closing marketing CTA. The action row is a hug `ContainerHorizontal` (Brand first,
secondary after).

## 10. Spacing: a form inherits R from its product

A form has **no fixed R of its own**. It is part of a product, and the product sets the density —
so the form adopts the **R of the product it lives in**:

| Product the form lives in                        | R    | Feel                                    |
| ------------------------------------------------ | ---- | --------------------------------------- |
| Content / website product (public, e.g. bahn.de) | `lg` | airy, comfortable (like a content page) |
| Application / dashboard product (operational)    | `md` | compact (like a dashboard)              |
| Dense data-entry application                     | `sm` | tight, many fields per screen           |

The **ladder is identical at every R** — only R changes:

| Role                                                                               | R-relative |
| ---------------------------------------------------------------------------------- | ---------- |
| fields to each other within a fieldset; card inner padding                         | `R`        |
| fieldset title↔description; field↔helper Infotext; options within one choice group | `R−1`      |
| a fieldset's title-block → its fields region                                       | `R+1`      |
| fieldset ↔ fieldset; the form section header → the fieldset stack                  | `R+2`      |

Resolved to concrete gap tokens per product:

| Product (R)                  | R (fields) | R−1 (grouped) | R+1 (title→fields) | R+2 (groups/header) |
| ---------------------------- | ---------- | ------------- | ------------------ | ------------------- |
| content/website (`lg`)       | `lg`       | `md`          | `xl`               | `2xl`               |
| application/dashboard (`md`) | `md`       | `sm`          | `lg`               | `xl`                |
| dense data app (`sm`)        | `sm`       | `xs`          | `md`               | `lg`                |

Detect the product context from the prompt: a public/marketing form → content/website (`lg`); an
internal tool / admin / operational form → application (`md`); an explicitly dense data mask →
`sm`. When unclear, default to `lg` for a public-facing form and `md` for anything embedded in an
application. A field's OWN label↔control spacing is component-internal (the `Input`/`Select`
renders it) and is NEVER set here. The registry block fragments are written at the `md` reference —
substitute every gap by its role when the product's R differs (`2xs` is the smallest available
container gap, so R=sm still has a full ladder).

## 11. Color / emphasis

- `color.text.strong` (emphasis-100) is the default for the form title, fieldset headings and
  choice-question labels.
- Descriptions and helper/meta text = `color.text.muted` (80). Never Bold + muted.
- Field labels are rendered by the components themselves.

## 12. Delivering blocks vs the assembled screen

- "**module** / **block** / **field**" → render each as its OWN header-less frame (`module: true`),
  sized to the block (e.g. a single fieldset ~600, a field ~400). One render per module → separate
  frames.
- "**form** / **screen** / **example**" → one full frame WITH the Header shell (the assembled form
  above).

See `skills/generate-figma-screen/SKILL.md` (Phase 1: module vs screen) for the render contract.
