---
"@db-ux/agent-cli": patch
---

refactor: library-only components and a three-file, CI-gated page-type registry

The `generate-figma-screen` power now composes screens exclusively from published DB UX library
components, and its page-type catalogs were rebuilt from the canonical Figma catalog pages behind
an enforced schema.

**Library components only.** The local resolver is gone — no `LOCAL` map with node-id hints, no
`figma.root` page scan, no name matching. `Grid` and `Container` come from the **DB UX - 🧪 Core
Lab** library by registry key, like `Heading` / `Body`. `localLayoutPrimitives` was removed from
`components.json`. The compliance audit now fails with `local-component` when an instance's main
component is local, so the rule is enforced rather than documented.

The Core Lab `Container` is one set with a `Direction` axis and carries no Gap/Align variant, so
the runtime binds the inner Slot's `itemSpacing` to a `space.*` variable and sets the Slot's axis
alignment. The plan-facing `gap`, `align`, `spread` and `justify` fields are unchanged. Added the
missing `space.none`, `space.3xs` and `space.2xs` tokens.

**Two more components stopped being faked.** `ProgressBar` was hand-drawn rectangles with an
arbitrary value; it now instantiates the real Core Lab progress component, which ships only 25,
50 and 75 percent — any other value is a hard stop instead of a silent approximation. Modals were
a frame plus an absolute Backdrop plus a centered Card; `plan.overlay` is removed and replaced by
a `Dialog` plan node that instantiates `🧪 Dialog (Concept)` and fills its Popover regions
(`title` → header, `children` → body, `actions` → footer). Registered `Dialog` and `Pagination`;
corrected the `Popover` entry, which pointed at a deprecated set with a stale key.

**Images are empty by contract.** A generated layout ships an empty Figma image on Fill: the
runtime creates a transparent asset in the target file from embedded bytes, so it is portable and
always resolves — the previously hardcoded hash no longer resolved at all. `imageHash` is for an
asset the user already placed in the file. `src` is rejected: `figma.createImageAsync` does not
exist in the `use_figma` sandbox, so the old "must supply a real HTTPS src" rule was unsatisfiable.

**Page-type registries: five files to three.** Measured drift drove this — three of six page types
never had a `sections` key (they invented `regions`/`steps`/`kinds`), `template.json` grew a
different set of top-level keys per type, patterns were unreachable from sections, and a
`gridLayout: "20-20-20-20-20"` shipped because validation was optional. Now `blocks.json`
(`db-ux/blocks/v2`), `patterns.json` (`db-ux/patterns/v1`, with `intent` / `whenToUse` / `level` /
`cardinality` / `alternatives` on the pattern) and `template.json` (`db-ux/template/v2`, fixed key
set). `sections.json`, `block-patterns.json` and `examples.json` are gone; reference compositions
live on the Figma `<PageType> / Example` pages. All five catalogs — dashboard, contentpage, form,
process, modal — were rebuilt from their catalog nodes. The unfinished `checkout` proposal was
deleted.

**One gate instead of a ceremony.** `assets/validate-registries.cjs` replaces the
`sync-figma-template-registry` skill and its SHA-guarded candidate/replace dance, and runs in CI
via `pnpm --filter @db-ux/agent-cli run registry:validate`. It checks the schema, `order`/`slots`
consistency, `$ref` resolution, cycles and reachability, plus every `type` against
`components.json`, every `props` combination against the real variant axes, tokens, icons,
`gridLayout` against the nine live Grid layouts with its slot count, and the narrow `ChartBar` /
`ProgressBar` / `Pagination` / `Image` contracts.

Also: removed the two disabled `preToolUse` hooks that gated every `use_figma` call with a prompt
of mostly exceptions; excluded the generated runtime and bootstrap chunks from Prettier and xo,
because formatting them inflated the runtime past the `use_figma` limit and corrupted the chunks;
and dropped the single-verbatim-paste render path, which no longer fits in one call.
