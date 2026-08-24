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

## 4. Progress indicator

There is no single Stepper COMPONENT in the library, but there IS a prepared TEMPLATE: the catalog
block **"Stepper" (`1716:21928`)**. Its shape is therefore not open to interpretation — reproduce
it, do not invent a marker system. Use one of:

- **Stepper** (`process.stepper`) — a row of icon/label items spanning the content column. Three
  item states, exactly as the template defines them:

    | State   | Marker              | Label                                                          |
    | ------- | ------------------- | -------------------------------------------------------------- |
    | Done    | `check` icon (16px) | `color.text.strong`                                            |
    | Active  | `pen` icon (16px)   | `color.text.strong`                                            |
    | Pending | none                | step NUMBER + name, `color.text.muted` ("3. Fahrbereitschaft") |

    **Exactly one item is active** — the step the frame shows. The number prefix is what marks a
    step as not yet reached; without it a pending step is indistinguishable from the active one.
    The row is **spread**: the template distributes its four items at 0/310/619/940 of 1024, so the
    steps mark progress along the full width. A fixed gap leaves the later steps floating in dead
    space and is reported as `stepper-not-spread`. Connector lines are omitted (no robust connector
    primitive); position and the icon change convey the sequence.

    **Each item hugs its GLYPHS.** An item is a hug container, but a `Body` left untouched carries
    its ~500px max width, so a hugging item silently becomes ~512px and five of them overflow the
    content column by more than double (measured: 2 588px in 1 024px, painted outside the frame).
    The runtime hugs the text of a hugging container for this reason; see
    `../layout-guidelines.md` → _Breiten-Sizing_. Keep the item count at what the column can
    carry — the wider the step names, the fewer fit.

- **ProgressBar + caption** (`process.progress`) — a lighter linear indicator: a "Schritt X von Y"
  caption above the Concept `ProgressBar`. Its `Value` stops (25/50/75%) are samples — pick the one
  nearest the step fraction and phrase the caption to match.

Every step frame shows the indicator with the CURRENT step marked, and the same indicator TYPE on
every frame of the flow — never a stepper on one step and a progress bar on the next.

## 5. Step content reuses the FORM blocks

A step that attaches files uses **`form.upload-field`**, which is built on the REAL `🧪 Upload`
component (Core Lab, Concept — needs the `concept_components` opt-in). Previews and the limit
counter go into its `End Slot`; see `../../design-system/screen-guidelines.md` → _Datei-Upload_.
Never substitute an Image grid plus a loose Button, and never rebuild a drop zone from a dashed
rectangle.

An input step's content is a **form fieldset** (fields from `form/blocks.json`): label-above,
`applyProps { "Show Label": true, "Label": … }`, required via `"Show Required Asterisk": true`,
`fillWidth: true`. Do not reinvent fields. A **review step** uses summary rows (label + value +
`Ändern` link, separated by `Divider`s). The final frame uses the **confirmation** block.

## 6. Action hierarchy

Exactly **one Brand action per frame**: the `Weiter` / commit / confirmation action. `Zurück` is
ghost (or outlined). On the first step there is nothing to go back to, so `Zurück` is dropped and
the row holds a SINGLE action — which is **right-aligned** (`align: "right"`, block
`process.navigation-first`), NOT `spread: true`. Spread distributes two ends; with one child Figma
parks it at the START, so the only action lands flush left with the whole content column empty
beside it (audit: `single-action-not-right`). See `screen-guidelines.md` → _Ausrichtung von
Aktionszeilen_ for the general rule. The last
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

- `color.text.strong` (emphasis-100) for the step title and for the DONE and ACTIVE step labels —
  both are steps the user has reached, so neither is de-emphasized.
- `color.text.muted` for captions, PENDING step labels and summary labels.
- Stepper marker state via the `Icon` component, per template `1716:21928`: DONE = `check`,
  ACTIVE = `pen`, PENDING = no icon at all but a NUMBER prefix in the label. Do not substitute
  `Badge` markers, number badges or an `opacity: 0.4` "disabled" treatment — the template
  distinguishes the states by icon and text emphasis, not by tinted chips.
- The confirmation success icon binds `color.icon` + `semantic: "Successful"`.

## 10. Delivering blocks vs the assembled flow

- "**module** / **block**" → render each process block as its OWN header-less frame
  (`module: true`), sized to the block (stepper ~680, step-nav ~680, confirmation ~600). One render
  per module → separate frames.
- "**wizard** / **process** / **flow** / **example**" → render the SEQUENCE of step frames (one per
  step + confirmation) as separate full frames WITH the Header shell, placed side by side. Static
  frames only — no prototype wiring.

See `skills/generate-figma-screen/SKILL.md` (Phase 1: module vs screen; NO PROTOTYPING) for the
render contract.
