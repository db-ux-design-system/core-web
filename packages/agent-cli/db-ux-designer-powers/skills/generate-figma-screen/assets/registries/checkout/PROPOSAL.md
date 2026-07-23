# Page-type catalog proposal: `checkout` (transactional / flow)

> **Status: `requiresHumanReview: true` — NOT yet an established page type.**
> This folder is a **scaffold proposal** produced because a "Kaufprozess für DB Tickets"
> (a multi-step purchase/booking flow) does not fit either captured page type
> (`dashboard` or `landingpage`). The render runtime detects only `dashboard | landingpage`,
> so this catalog is **inert** until a human designer (1) captures the reference blocks from
> Figma, (2) fills the `plan: null` stubs, and (3) wires `checkout` into page-type detection.
>
> No screen was rendered. Nothing here may be used to generate a screen until reviewed.

## Why a new page type is needed

A checkout / booking flow is **transactional and form-driven**, not marketing (`landingpage`)
or operational-overview (`dashboard`). Its content shapes — a progress stepper, grouped form
fieldsets, a selectable fare/option list, an order summary with a price breakdown, and a
primary "continue / pay" action — have no matching section in either existing catalog. The
rules forbid forcing this content into the wrong page type or inventing structure ad-hoc, so
it must become its own captured catalog.

## What already exists vs. what's missing

**Components (already in `../components.json`, no gap):**
`Input`, `Select`, `CustomSelect`, `Checkbox`, `Radio`, `Switch`, `Textarea`, `Infotext`,
`Notification`, `Accordion`, `Divider`, `Badge`, `Tag`, `Card`, `Button`, `Link`, `Header`,
`Navigation`, plus layout primitives `Section`, `Grid`, `ContainerVertical`,
`ContainerHorizontal`.

**Gaps that block rendering:**

1. **No `Stepper` / `Progress` component** in the registry. The step indicator
   (`Verbindung → Reisende → Zahlung → Bestätigung`) has no official DB component captured.
   → Either a DB `Stepper` component must be added to `components.json`, or the step indicator
   must be captured as a composite block from a real Figma reference. **This is the primary
   blocker.** Do not fake it with Tags/Badges without design sign-off.
2. **No captured block plans.** Every block below is a `plan: null` stub with a `planSketch`
   (a non-authoritative hint) and a `source: "TO CAPTURE"` marker. A designer must author each
   block 1:1 from a real Figma node and record its `source` node id, exactly like
   `landingpage/blocks.json` does.
3. **Two-column form + sticky summary layout** must be validated against the `Grid` primitive
   (e.g. `gridLayout: "66-33"` or similar) — confirm the reference uses an approved layout.

## Designer capture checklist (to promote this to an established page type)

- [ ] Decide the step indicator: add an official DB `Stepper`/`Progress` to `components.json`
      **or** capture a composite block from Figma. Record component key(s) / `source` node id.
- [ ] Author a reference `checkout` **example** screen in Figma (like `landingpage/examples.json`
      source `362:1807`). Record its `source` node id → create `checkout/example.json`.
- [ ] For each block in `blocks.json`: capture the real node, fill the `plan` fragment, replace
      `source: "TO CAPTURE"` with the real node id, remove `planSketch` + `requiresHumanReview`.
- [ ] For each pattern in `block-patterns.json`: same — fill `plan`, set real `source`.
- [ ] Confirm the section→content mapping in `sections.json` (`whenToUse`) matches the captured
      reference and the checkout information architecture.
- [ ] Confirm `template.json` order/slots/rules against the reference (stepper first, action bar
      last, summary aside).
- [ ] Wire `checkout` into page-type **detection** (the skill currently hardcodes
      `dashboard | landingpage`; see `context/figma-generation.md` → Part A §4 and the SKILL
      Phase 2 detection). Add the detection intents listed in `sections.json._meta.detection`.
- [ ] Add `checkout` assets to the skill front-matter `requires:` list in
      `skills/generate-figma-screen/SKILL.md`.

## Action hierarchy for this page type (proposed)

- **primary-button (Brand, exactly one):** the flow's forward/conversion action —
  `Weiter`, `Zahlungspflichtig bestellen`, `Jetzt kaufen`.
- **button-group:** `Zurück` (`ghost`/`outlined`) sits next to the Brand forward button. ≤1
  primary in the group.
- **equal-item-action:** fare/option selection is a `Radio` group (or option cards with a
  single Radio), never one Brand button per option.
- **link:** "Ändern/Bearbeiten" affordances in the order summary; inline help.
- **none:** the order-summary price breakdown and the stepper are read-only.

## Files in this scaffold

| File                  | Role                                                           | State                     |
| --------------------- | -------------------------------------------------------------- | ------------------------- |
| `sections.json`       | content → section selection table (`whenToUse`) + detection    | proposed, review required |
| `template.json`       | section order / slots / page rules                             | proposed, review required |
| `block-patterns.json` | section-level patterns                                         | `plan: null` stubs        |
| `blocks.json`         | atomic form/summary blocks (components real, plans to capture) | `plan: null` stubs        |
| `example.json`        | (MISSING) density/style reference — capture from a real screen | to create                 |
