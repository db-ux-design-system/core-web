# Layout-Type Guidelines

Design principles **per layout type** (Dashboard, Contentpage, Process, …). These are the
human-readable, consolidated principles for composing a given kind of screen. They complement —
not replace — the always-on rules in `../layout-guidelines.md` (spacing/grouping/arrangement) and
`../../design-system/screen-guidelines.md` (visual rules).

## How this is used

When the `generate-figma-screen` skill detects the page type (Phase 2), it loads the matching
`<pageType>.md` here alongside the machine-readable catalog in
`skills/generate-figma-screen/assets/registries/<pageType>/*.json`. These docs are the SOURCE OF
TRUTH for the design intent; the registry `_meta`/patterns are the machine-consumed enforcement of
the same rules. Keep the two in sync.

## Files

| Layout type      | File                                                                   | Registry catalog                |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------- |
| Dashboard        | `dashboard.md`                                                         | `registries/dashboard/*.json`   |
| Contentpage      | _(principles live in `registries/contentpage/*.json` `_meta` for now)_ | `registries/contentpage/*.json` |
| Form             | `form.md`                                                              | `registries/form/*.json`        |
| Process / Wizard | `process.md`                                                           | `registries/process/*.json`     |
| Modal / Dialog   | `modal.md`                                                             | `registries/modal/*.json`       |

## Adding a new layout type

1. Add `<type>.md` here with the consolidated principles (model, structure, spacing, color,
   composition do/don't).
2. Add the machine-readable catalog under `registries/<type>/` (template/sections/blocks/
   block-patterns/examples).
3. Register the page-type in the skill's Phase 2 detection list and its `requires`.
