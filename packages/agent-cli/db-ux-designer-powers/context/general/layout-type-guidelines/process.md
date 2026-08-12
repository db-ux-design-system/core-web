# Process / Wizard — Design Principles

Consolidated principles for composing a multi-step **process / wizard** (booking, registration,
application, checkout). These are the design intent; the machine-readable enforcement (patterns,
blocks, spacing tokens, component keys) lives in
`skills/generate-figma-screen/assets/registries/process/*.json`. Keep both in sync. Always-on rules
still apply: `../layout-guidelines.md` (spacing/grouping) and
`../../design-system/screen-guidelines.md` (visual rules).

## 1. Model: a sequence of static step frames

A process is **one focused column, one step per screen**, delivered as a SEQUENCE of static
frames — one frame per step, plus a final confirmation frame. It is NOT wired as a clickable
prototype (see `SKILL.md` → NO PROTOTYPING): render each step as its own frame and note that the
flow between them is intentionally out of scope for now.

## 2. Structure (per step frame)

- **Header shell** (DB `Header`) first — logo = home, no "Startseite" nav item.
- **One `Section`** (canvas, `contentWidth: "Small (768)"`, `spacing: "medium"`), whose blocks —
  stacked at `R+2` — are:
    1. **Progress indicator** — the stepper (or ProgressBar), current step highlighted.
    2. **Step header + content** — grouped in a `ContainerVertical` at `R+1`: a `Heading` (step
       title, `h1`) + optional description, above the step's content.
    3. **Step nav** — a spread row: `Zurück` (ghost, left) + `Weiter` (Brand, right).
- The **confirmation frame** replaces (2)+(3) with a centered success block.

## 3. One narrow column, single background

`contentWidth: "Small (768)"`, one `color.background.canvas`, no zebra — like a form.

## 4. Progress indicator (no Stepper component)

There is **no Stepper component** in the DB UX Stable/Beta set. Use one of:

- **Composed stepper** (`process.stepper`) — a full-width spread row of `Badge` markers + short
  `Body` labels: the current step ACTIVE (an **adaptive** outlined number badge — the DEFAULT
  semantic, NOT Informational/blue — + a strong bold label, full opacity), earlier steps DONE (a
  Successful green **check-icon** badge — `content: "icon"` + `applyProps { "Icon Small": "check" }`,
  no number), later steps UPCOMING (the same adaptive number badge + label, but the WHOLE marker is
  **disabled at `opacity: 0.4`**). **Size matching:** an icon Badge at Size Small looks LARGER than
  a text Badge at Size Small — so the number (text) badges use `applyProps { "Size": "Medium" }`
  while the done icon badge stays Small (icon-Small ≈ text-Medium), so all markers line up. It is a
  **guideline-authored
  composition** of real components (Badge + Body), marked `origin: "guideline-authored"` and
  **temporary** — replace with a real Stepper once it ships. Connector lines are omitted (no robust
  connector primitive); spacing conveys the sequence.
- **ProgressBar + caption** (`process.progress`) — a lighter linear indicator: a "Schritt X von Y"
  caption above the Concept `ProgressBar`. Its `Value` stops (25/50/75%) are samples — pick the one
  nearest the step fraction and phrase the caption to match.

Every step frame shows the indicator with the CURRENT step highlighted.

## 5. Step content reuses the FORM blocks

An input step's content is a **form fieldset** (fields from `form/blocks.json`): label-above,
`applyProps { "Show Label": true, "Label": … }`, required via `"Show Required Asterisk": true`,
`fillWidth: true`. Do not reinvent fields. A **review step** uses summary rows (label + value +
`Ändern` link, separated by `Divider`s). The final frame uses the **confirmation** block.

## 6. Action hierarchy

Exactly **one Brand action per frame**: the `Weiter` / commit / confirmation action. `Zurück` is
ghost (or outlined). Drop `Zurück` on the first step (single right-aligned `Weiter`). The last
input step's primary is the commit (e.g. "Zahlungspflichtig buchen"). The confirmation frame has a
single primary action ("Zur Startseite" / "Buchung ansehen") and no Back/Next. No extra Brand
buttons, no marketing CTA.

## 7. Heading hierarchy

Step title = `h1` (the progress row is a status strip, not the page title). Sub-labels inside the
content (a choice-group question, a summary section) are `h3` or `Body` bold. The confirmation
title is `h1`.

## 8. Spacing: a process inherits R from its product

Like a form, a process has **no fixed R** — it adopts the R of the product it lives in:

| Product                                          | R    |
| ------------------------------------------------ | ---- |
| Content / website product (public, e.g. bahn.de) | `lg` |
| Application / dashboard product (operational)    | `md` |
| Dense data-entry application                     | `sm` |

Ladder (R-relative, same at every R): elements in a block = `R`; grouped bits (step-header
title↔description, summary label↔value, stepper marker↔label, progress caption↔bar) = `R−1`; a
header/title-block → its content = `R+1`; progress / content / nav blocks to each other and section
header → content = `R+2`. Resolve to tokens per product:

| Product (R)                  | R (elements) | R−1 (grouped) | R+1 (header→content) | R+2 (blocks) |
| ---------------------------- | ------------ | ------------- | -------------------- | ------------ |
| content/website (`lg`)       | `lg`         | `md`          | `xl`                 | `2xl`        |
| application/dashboard (`md`) | `md`         | `sm`          | `lg`                 | `xl`         |
| dense data app (`sm`)        | `sm`         | `xs`          | `md`                 | `lg`         |

The registry fragments are the `md` reference — substitute by role when the product's R differs.

## 9. Color / emphasis

- `color.text.strong` (emphasis-100) for the step title and the ACTIVE step's label/summary values.
- `color.text.muted` for captions, done/upcoming step labels, and summary labels.
- Stepper marker state via `Badge`: DONE = a green check-icon badge (`content: "icon"` + `applyProps
{ "Icon Small": "check" }` + `semantic: "Successful"`); ACTIVE = an adaptive number badge
  (`content: "text"`, DEFAULT semantic — no Informational/blue) + strong bold label; UPCOMING = the
  same adaptive number badge with the whole marker at `opacity: 0.4` (disabled). The confirmation
  success icon binds `color.icon` + `semantic: "Successful"`.

## 10. Delivering blocks vs the assembled flow

- "**module** / **block**" → render each process block as its OWN header-less frame
  (`module: true`), sized to the block (stepper ~680, step-nav ~680, confirmation ~600). One render
  per module → separate frames.
- "**wizard** / **process** / **flow** / **example**" → render the SEQUENCE of step frames (one per
  step + confirmation) as separate full frames WITH the Header shell, placed side by side. Static
  frames only — no prototype wiring.

See `skills/generate-figma-screen/SKILL.md` (Phase 1: module vs screen; NO PROTOTYPING) for the
render contract.
