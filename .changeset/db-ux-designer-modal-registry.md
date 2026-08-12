---
"@db-ux/agent-cli": minor
---

feat: add a modal/dialog page-type registry to the db-ux-designer generate-figma-screen skill

Adds the `modal/` registry catalog (`template.json`, `sections.json`, `blocks.json`,
`block-patterns.json`, `examples.json`) plus `context/general/layout-type-guidelines/modal.md`, so
short blocking overlays (confirm/cancel, acknowledge/OK, a tiny form-as-overlay) compose from a
dedicated catalog alongside `contentpage/`, `dashboard/`, `form/` and `process/`. No runtime change
is needed.

- **WHEN to use it (the point of the type):** a modal is chosen by presentation/interaction SHAPE,
  not content. `modal.md` §0 and the SKILL Phase-2 detection add an explicit decision + tie-breaker:
  use `modal/` only when the task is short, self-contained and must BLOCK the current screen and is
  triggered from within it; a full data-entry screen the user navigates TO → `form/`, an ordered
  Back/Next flow → `process/`, a whole informational page → `contentpage/`, an operational overview
  → `dashboard/`, a non-blocking inline message → a `Notification` inside the relevant type. Rule of
  thumb: continue only by dealing with it first, over in one interaction → modal; a place they go to
  and work in → a full page type.
- **Structure:** ONE centered overlay surface — a `Card` (elevationLevel `3`, floats highest) with a
  header (Heading h2 + optional one-line description), a body (a short 1–2 paragraph message, or a
  few grouped fields reused verbatim from `form/blocks.json`), and a closing action row (Brand first
    - optional ghost/outlined secondary — same shape as `form.actions`). Kinds: `confirmation`,
      `acknowledge`, `input`.
- **Delivery (overlay mode):** a modal renders via a new runtime OVERLAY mode (`overlay: true`) — a
  screen-sized frame (default 1440×1024) with a `Backdrop` (Beta) filling it and the dialog `Card`
  (elevation 1) centered on top; `plan.layout` is just the Card. Added to the SKILL Phase-1
  delivery rule. The dimmed backdrop is rendered; its open/close interaction is out of scope (static
  frame only, per SKILL → NO PROTOTYPING). A side-sheet `Drawer` variant is deferred (the runtime
  does not yet fill the Drawer slot).
- **Surface:** the dialog is a `Card` **elevation 1** (the backdrop provides the separation — Level
  3 only piles on shadow). Registers the `Backdrop` (Beta) component in `components.json` and the
  runtime component map.
- **Action hierarchy:** ≤1 Brand per surface, **right-aligned** (dialog convention) — secondary
  (ghost/outlined) first, primary (Brand) rightmost. No danger button variant, so a destructive
  confirm is Brand + severe wording ("Endgültig löschen") with an optional leading `Notification`
  (semantic Critical, `closeable: false` — no X inside the dialog); never recolor a button.
- **Spacing:** a modal inherits R from its product (content/website → `lg`, application/dashboard →
  `md`, dense data app → `sm`) and skews compact — same product-R model as form/process, with a
  per-product resolution table; fragments are written at the `md` reference.
- **Runtime OVERLAY mode (new):** adds an `overlay: true` render path to `src/50-plan-renderer.js`
  — a fixed screen-sized frame with a `Backdrop` (Beta) absolute-filling it and the dialog `Card`
  centered (auto-layout center, fixed `cardWidth`). Rebuilt the runtime bundle + bootstrap
  snippets (`node build-runtime.cjs`, new sha). The centered-dialog form is fully supported; a
  `Drawer` side-sheet variant is deferred (the runtime does not yet compose children into the
  `Drawer` slot — documented in `modal/template.json` → `_meta.rendering`).
- Wires `modal/` into the SKILL asset manifest + `requires`, Phase-2 page-type detection, the
  Phase-1 overlay delivery rule, the layout-type-guidelines README and POWER.md.
