# Modal / Dialog — Design Principles

Consolidated principles for composing a **modal / dialog** — a focused overlay that interrupts the
current screen for ONE short, self-contained task (confirm/cancel, acknowledge a message, a short
form). These are the design intent; the machine-readable enforcement (patterns, blocks, spacing
tokens, component keys) lives in
`skills/generate-figma-screen/assets/registries/modal/*.json`. Keep both in sync. Always-on rules
still apply: `../layout-guidelines.md` (spacing/grouping) and
`../../design-system/screen-guidelines.md` (visual rules), plus the component rule in
`../../design-system/component-guidelines/backdrop.md` (a backdrop is ONLY ever used behind a modal
overlay).

## 0. WHEN to use a modal — the decision (read this first)

A modal is chosen by **presentation and interaction shape, NOT by content**. Its content is often
form-like or message-like, so it overlaps with `form/` / `contentpage/` — the tie-breaker is
whether the task is a short, **blocking, self-contained** interlude on top of the current screen.

**Use `modal/` when ALL of these hold:**

1. The task is **short and self-contained** — a single decision or a handful of fields — and the
   user returns to exactly where they were afterwards.
2. It must **interrupt / block** the underlying screen (a backdrop dims it; the task is completed
   WITHOUT needing to see or scroll the page behind it — see `backdrop.md` rule 3).
3. It is triggered **from within another screen** (a button/action opens it), not reached by
   navigation.

Typical triggers in a prompt: "Dialog", "Modal", "Pop-up", "Bestätigung(sdialog)", "confirm/cancel",
"möchten Sie wirklich …", "löschen bestätigen", "einladen"/"hinzufügen (als Overlay)", "Drawer",
"Side-Sheet", "acknowledge / OK-Hinweis".

**Do NOT use `modal/` — pick another type — when:**

| Situation                                                                       | Correct type                                              |
| ------------------------------------------------------------------------------- | --------------------------------------------------------- |
| A full data-entry screen / long form the user navigates TO                      | `form/`                                                   |
| A task split into multiple ordered steps (Back/Next, wizard)                    | `process/`                                                |
| A whole informational / marketing page                                          | `contentpage/`                                            |
| An operational overview / KPIs                                                  | `dashboard/`                                              |
| A message that belongs INLINE on the page (context/error summary, not blocking) | a `Notification` inside the relevant type — never a modal |

**Rule of thumb:** _If the user can only continue by dealing with it first, and it's over in one
short interaction → modal. If it's a place they go to and work in → a full page type._ When a form
is long enough to need its own screen, it is a `form/`, not a modal.

## 1. Model: a backdrop overlay with a centered dialog surface

A modal is a **full-screen `Backdrop` (a dimmed layer) with a single dialog surface centered on
top** — a title, a compact body (a short message OR a few grouped fields), and a closing **action
row**. It is NOT a full page: no Header shell, no zebra sections, no bento grid. The backdrop
focuses attention and blocks the page behind; the dialog is the smallest complete unit that
resolves one task.

## 2. The DB structure: Backdrop (Beta) + a Card surface

The DB-native modal is composed of **two real components**:

1. **`Backdrop` (Beta)** — a screen-filling dimmed layer (the base of the overlay). It provides the
   separation/focus, so the dialog itself does NOT need a heavy shadow.
2. **`Card` (elevation `1`)** — the dialog surface, **centered** on the backdrop. Because the
   backdrop already lifts the dialog off the page, use **Level 1**, NOT Level 3 (Level 3 only piles
   on shadow and reads wrong on a backdrop).

This is rendered by the runtime's **overlay mode** (`overlay: true`): a fixed screen-sized frame
(default 1440×1024) with the `Backdrop` filling it and the `Card` centered at a fixed `cardWidth`.

**Side-sheet variant (`Drawer`) — deferred:** a side/bottom sheet uses the `Drawer` component, but
the runtime does not yet compose children into the `Drawer` slot, so drawer-style modals are a
documented follow-up (see `modal/template.json` → `_meta.rendering`). The centered dialog above is
the supported form today.

**Backdrop / open-close behavior** (click-outside-to-close, focus trap) is runtime/prototype
behavior and is intentionally **out of scope** (SKILL.md → NO PROTOTYPING): we deliver the static
overlay only.

## 3. Structure (the dialog surface)

A `Card` (elevation `1`), `spacing: "medium"`, whose single content column (`ContainerVertical`,
gap `md` = R — the **same step as the Card padding**, so the regions are not spaced further from
themselves than from the card edge; see §6) holds three regions in order:

1. **Header** — a `Heading` (`h2`, the dialog title, `color.text.strong`) + an optional one-line
   description (`Body`, **`color.text.strong`** — primary copy, not muted; see §7), grouped at
   `sm` (R−1).
2. **Body** — the task content: a short **message** (1–2 `Body` paragraphs, **`color.text.strong`**
   — the message is primary copy, not muted; see §7) for a confirm/acknowledge dialog, OR a few
   **grouped fields** reused verbatim from `form/blocks.json` (label-above, `fillWidth`) for an
   input dialog. A leading `Notification` (tinted via `semantic`)
   may carry a warning/status — set it **`closeable: false`** (no X inside a dialog; the dialog's
   own actions dismiss). Keep it short — a long form belongs on a `form/` screen.
3. **Footer** — the closing **action row**, **right-aligned** as is conventional for dialogs: a
   `ContainerHorizontal` with `align: "right"`, the **secondary (ghost/outlined) first, the primary
   (Brand) rightmost**.

## 4. Sizing — narrow dialog centered on a screen-sized backdrop

The overlay frame is screen-sized (default 1440×1024); the centered dialog `Card` is a fixed width
(`cardWidth`) chosen by kind:

| Dialog kind                               | `cardWidth` | Use                             |
| ----------------------------------------- | ----------- | ------------------------------- |
| Confirmation / acknowledge (message only) | ~`400`      | one decision, a sentence or two |
| Standard (short message + a field or two) | ~`520`      | the default                     |
| Form dialog (a small fieldset)            | ~`640`      | a handful of grouped fields     |

Never wider than ~640 — beyond a small fieldset it is a `form/` screen. The body fields are
`fillWidth` within the surface; do not hand-size fields.

## 5. Action hierarchy — ≤1 Brand, right-aligned

- Exactly **one primary action** (the confirm / submit / acknowledge) → **Brand** (≤1 per surface).
- The secondary (Abbrechen / Zurück / Schließen) is **ghost** or **outlined**.
- **Right-aligned**, secondary first → **Brand rightmost** (dialog convention).
- An **acknowledge/info** dialog has a **single** primary ("OK" / "Verstanden") and no secondary.
- A **destructive** confirm (Löschen) keeps the primary as the DB `Button` Brand variant (there is
  no dedicated danger button variant — do NOT recolor one); the wording carries the severity
  ("Endgültig löschen"), and a `Notification` (semantic Critical, `closeable: false`) may lead the
  body.
- Never two Brand buttons; never a marketing CTA.

## 6. Spacing: a modal inherits R from its product (compact by default)

Like a form/process, a modal has **no fixed R of its own** — it adopts the R of the product it
lives in, and dialogs skew **compact** (they are dense focused surfaces):

| Product the modal lives in                       | R    |
| ------------------------------------------------ | ---- |
| Content / website product (public, e.g. bahn.de) | `lg` |
| Application / dashboard product (operational)    | `md` |
| Dense data-entry application                     | `sm` |

**Key rule (per `../layout-guidelines.md` → Spacing-Hierarchie):** inside a single card, the inner
**padding** and the **elements-to-each-other** both use the step `R` — they **match**. The `R+1`
step is only for _separate_ cards/sections next to each other on a page; do NOT use it between
regions inside one dialog (that spaces the content further from itself than from the card edge —
exactly the 16-vs-24 mismatch to avoid).

Ladder (R-relative, same at every R): **Card inner padding = `R`** AND the **three regions
(header / body / footer) to each other = `R`** (they match); elements within a region (message
paragraphs, fields) = `R`; grouped bits (title↔description, field↔helper, choice options, the
footer button pair) = `R−1`. Resolve to tokens per product (the registry fragments are written at
the **R = md** application reference — dialogs are usually application-context):

| Product (R)                  | Card padding = regions (R) | grouped (R−1) |
| ---------------------------- | -------------------------- | ------------- |
| content/website (`lg`)       | `lg` (24)                  | `md` (16)     |
| application/dashboard (`md`) | `md` (16)                  | `sm` (12)     |
| dense data app (`sm`)        | `sm` (12)                  | `xs` (8)      |

A field's own label↔control spacing is component-internal (the `Input`/`Select` renders it) and is
NEVER set here.

## 7. Color / emphasis

- `color.text.strong` (emphasis-100) is the **default for ALL of the dialog's primary copy** — the
  title, the one-line description, AND the body message/question, plus any choice-question labels.
  In a dialog that text IS the primary content, so it is NOT muted (this differs from a content
  page, where a description under a big hero heading may be de-emphasized).
- `color.text.muted` (80) is reserved for genuinely secondary **helper/meta** text (rare in a
  dialog) — e.g. a small format hint under a field. Never mute the description or the message.
  Never Bold + muted.
- The surface is a `Card` (elevation 1) on the default adaptive background — do NOT recolor it. A
  semantic tint belongs on a leading `Notification`, not the dialog surface. The `Backdrop`
  provides the dim; do NOT fake it with a recolored rectangle.

## 8. Delivering the modal

A modal is a backdrop overlay, so it is delivered via the runtime's **overlay mode**
(`overlay: true`) — a screen-sized frame (default 1440×1024) with the `Backdrop` filling it and the
dialog `Card` centered at `cardWidth` (per §4) — regardless of whether the prompt says "dialog",
"modal", "screen" or "example". There is no Header shell and no page-zebra check. Multiple dialog
states (e.g. an empty form dialog and its error state) are separate overlay frames placed side by
side. The click-outside / open-close interaction is out of scope for now (static frame only).

See `skills/generate-figma-screen/SKILL.md` (Phase 1: overlay delivery; NO PROTOTYPING) for the
render contract.
