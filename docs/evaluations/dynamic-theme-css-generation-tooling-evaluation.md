# Evaluation: Tooling for Dynamic-Theme CSS Generation

## TL;DR

Turn the hard-coded adaptive-color output (`generated-colors.css`) into a
**theme-driven** pipeline, delivered as **one new package** with multiple entry
points.

- **New package: `@db-ux/core-theme-tools`** (one npm package, published with all
  entry points inside it — not a package per bundler):
    - `.` — framework-agnostic **core generator** (theme JSON -> adaptive CSS)
    - `/cli` — a **CLI** (bin `db-ux-theme-tools`, cosmiconfig + `init`) for
      Java/Python/CI and any non-Node consumer
    - `/vite`, `/webpack`, `/esbuild`, … — an **unplugin** plugin for all bundlers
- **Two consumer journeys:**
    - **A (optimized):** Theme-Builder -> `theme.json` (Style-Dictionary-like) ->
      CLI or bundler plugin + config -> optimized CSS.
    - **B (zero-config):** import a **prebuilt "everything" CSS**. Every theme
      package ships a matched pair — `theme.json` + prebuilt CSS
      (`packages/foundations/scss/theme` ships a `whitelabel-theme.json`;
      `@db-ux/db-theme` ships its own).
- **Automatic optimization** = a **required baseline** (default-color/`filled-1`
  roles every component needs) that is never dropped, plus a **detected set**
  scanned from both `data-material`/`data-adaptive-color` attributes **and** the
  `material`/`color` component props. High-contrast is a single on/off that drops
  both the `[data-contrast="more"]` and `prefers-contrast: more` branches.
- **Custom colors** are first-class: the theme's `colors` map is open, and
  `ColorType` is opened with the `LooseAutocomplete` pattern from
  `packages/foundations/src/icon-types.ts` (**already implemented** in
  `packages/components/src/shared/model.ts`).
- **No PostCSS flatten stage in the new pipeline:** the generator **pre-flattens**
  its output (concrete hex, collapsed `light-dark()`); only runtime-dynamic tokens
  (`--db-adaptive-*`, `--db-emphasis-transparency`, `--db-pride-*`) stay as
  `var()`. The existing `@db-ux/core-vite-plugin` and `@db-ux/core-postcss-plugin`
  **stay standalone** for the legacy coloring model, which coexists and migrates
  gradually — the new work is **additive**.
- **unplugin: recommended** (new, standalone plugin). **CLI: highest-priority** —
  the only option serving non-Node consumers. **Style Dictionary / DTCG:** borrow
  the input schema, don't replace the bespoke selector/material generator.

## Overview

This document evaluates how to turn the current hard-coded adaptive-color output
(`generated-colors.css`, produced by `generate-css/`) into a **theme-driven**
pipeline: a consumer supplies a theme definition (a JSON object describing custom
colors, materials, etc. — authored with a dedicated **Theme-Builder** tool, not
by hand), and our tooling emits a CSS file — ideally an **optimized** one that
only contains what the consumer actually uses (e.g. skip `burgundy` if it is
never referenced).

It covers:

1. Where we are today and why the current generator is not consumable.
2. The shape of the problem (build-tool plugins vs. a framework-agnostic CLI).
3. An assessment of [`unplugin`](https://unplugin.unjs.io/) and token tooling
   (Style Dictionary, Terrazzo) against building something bespoke.
4. A recommended architecture with a staged implementation plan.

> **Scope note:** This is a tooling/architecture evaluation, not an
> implementation. No code is changed by this document.

## Consumer Journeys

There are two ways a consumer gets adaptive-color CSS, and the tooling should
support **both**:

### Journey A — themed & optimized (the main path)

1. **Theme-Builder** → produce a **Style-Dictionary-like JSON** (`theme.json`)
   describing the colors (including custom ones), materials, etc. The consumer
   never hand-writes palettes.
2. **CLI _or_ bundler plugin** → point it at the `theme.json` plus a small config
   (which colors/materials to keep, high-contrast on/off). It emits an
   **optimized**, already-pre-flattened CSS file containing only what the project
   uses — no separate flatten step needed.

```text
Theme-Builder ──► theme.json ──►  CLI (config + JSON)      ──► optimized .css
                  (SD-like)   └►  bundler plugin (config)  ──► optimized .css
```

### Journey B — prebuilt, ship-everything CSS (the zero-config fallback)

For consumers who don't want a build step or any generator, **every theme package
we maintain ships a prebuilt CSS file that contains everything** — all that
theme's colors, all materials, all states, high-contrast included. The consumer
just imports it.

This pairs with a second deliverable: **each theme package also ships its
`theme.json`** (the Style-Dictionary-like input), so the _same_ package serves
both journeys — a consumer either imports the prebuilt CSS directly (Journey B)
or feeds the shipped `theme.json` to the CLI/bundler plugin to get an optimized
build (Journey A). Concretely:

- **`packages/foundations/scss/theme`** ships the prebuilt CSS **and** a
  **`whitelabel-theme.json`** — the unbranded base theme.
- **`@db-ux/db-theme`** (and every other theme package we maintain) ships **its
  own `theme.json` plus its own prebuilt CSS**, following the same convention.

```text
packages/foundations/scss/theme ──► whitelabel-theme.json + prebuilt .css
@db-ux/db-theme                 ──► db theme.json        + prebuilt .css
                                     │                      │
                                     ▼                      ▼
                             CLI / bundler (Journey A)   import (Journey B)
```

The trade-off is size: the prebuilt CSS is the largest output and cannot drop
unused colors or high-contrast. It is the convenience/escape-hatch option;
Journey A is the recommended path for production.

> For any given theme package, both journeys render **the same output** when a
> consumer uses that theme with no optimization — because the prebuilt file is
> just the generator run on that package's `theme.json` with no filtering. That
> equivalence is the snapshot gate described later, applied per theme package.

## Current State

### `generate-css/` — a build-time script, not a consumer tool

`generate-css/index.ts` calls `generateMaterialsCss()` and writes the result to
`generated-colors.css` at the repo root. The generator is well-structured but is
**internal and fully static**:

- **`generate-css/materials/color.ts`** — hard-codes a `colors` record of 12
  palettes (`red`, `grey`, `brand`, `green`, `yellow`, `orange`, `burgundy`,
  `pink`, `violet`, `blue`, `cyan`, `turquoise`). Each palette is a fixed set of
  `[light, dark]` pairs for steps `0–14` plus origin/on-origin/transparent roles.
- **`generate-css/materials/material.ts`** — hard-codes 8 materials
  (`filled-1..3`, `vibrant`, `origin`, `inverted`, `semi-transparent`,
  `transparent`) as palette-index maps, plus high-contrast overrides.
- **`generate-css/materials/index.ts`** — emits every color × every material ×
  every state into `@layer material` / `@layer material-high-contrast`, including
  `[data-adaptive-color]` / `[data-material]` selector permutations and the
  `prefers-contrast: more` branch.

The output is consumed only inside this repo — every showcase imports it by
relative path, e.g.:

```text
showcases/react-showcase/src/db-ux-adaptive.css
@import "./../../../generated-colors.css" layer(db-ux-adaptive);
```

There is no input parameter: changing a color means editing TypeScript in this
repo and re-running the script. A consumer cannot define their own theme, and the
output always contains **all** colors and materials whether used or not.

### The two existing plugins solve a _different_ problem

| Package                      | What it does                                                                                                                                   | Relationship to this task                                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `@db-ux/core-vite-plugin`    | Scans source for used components/colors/densities/font-sizes, then emits and tree-shakes `@import`s of **pre-built** foundation/component CSS. | Does **usage detection + optimization**, but imports static package CSS. It does not _generate_ color CSS from a theme.            |
| `@db-ux/core-postcss-plugin` | Flattens `var()`/`@property`/`calc()`/`color-mix()`/`light-dark()` in **already-generated** CSS.                                               | An **optional** post-processor for value resolution. Not needed for optimization (the generator selects directly); off by default. |

So neither plugin ingests a theme JSON. But both are highly reusable building
blocks: the Vite plugin already contains the **usage-detection and
unused-stripping** logic (`detector.ts`, `optimizer.ts`) we want for "don't emit
burgundy", and the PostCSS plugin remains useful for an **optional** flatten
stage (see next section).

### Do we still need the PostCSS post-processor?

Mostly **no for the core use case**, because generation and flattening act on two
different axes:

- **Generation is _selection_** — it decides _which_ rules exist (which colors,
  materials, whether high-contrast). When the generator emits directly from the
  theme, unused colors are simply **never produced**, so there is nothing left
  for a post-processor to strip. The old Vite-plugin model needed a stripping
  pass only because it imported _pre-built, everything-included_ package CSS and
  had to remove rules afterwards. A theme-driven generator makes that
  `removeUnusedStyles` step obsolete — the optimization is the generation.
- **Flattening is _value resolution_** — `dbUxFlatten` rewrites
  `var()`/`color-mix()`/`light-dark()`/`calc()` into concrete values and removes
  `@property`. That is about the _form the values take_, not which rules exist.
  The generator already emits the final
  `color-mix(in srgb, light-dark(#.., #..) …)` form, so flattening is a
  **purely optional output-shape optimization** (smaller file, no `@property`,
  broader browser support) — never a correctness requirement.

There is also a hard limit on how far flattening could ever go: our output
**intentionally keeps some tokens dynamic** and they must stay as `var()`:
`--db-adaptive-transparency` and `--db-emphasis-transparency` (driven by
`[data-emphasis]` / `%disabled`), the `--db-pride-*` stops (driven by
`[data-pride="true"]`), and the whole `--db-adaptive-*` family — which is exactly
why `dbUxFlatten` has a `dynamicPrefixes` option and never resolves them. So even
with flatten enabled the file is never fully static.

**Conclusion:** the theme-driven generator removes the need for a PostCSS
_optimization/stripping_ pass entirely — we generate exactly what is wanted — and
it should also **pre-flatten its own values** (concrete hex, collapsed
`light-dark()`) so the adaptive output needs no flatten pass either. The PostCSS
_flatten_ plugin therefore stays only as an **opt-in** extra, and mainly for the
**legacy** CSS; on the adaptive output it is essentially a no-op. It is off by
default and not part of the required pipeline for the new system.

#### The generator should pre-flatten its output, not defer to PostCSS

Because the generator owns the output **and** knows the theme's concrete values,
it should emit the adaptive tokens **already flattened as far as possible** —
rather than emitting resolvable `var()`/`@property` chains for a later PostCSS
pass to collapse. The flatten work splits into what the generator can do up front
and what must stay dynamic:

- **Pre-flatten at generation time (do this in the core):**
    - Emit **concrete hex** for every palette reference. The palette values in
      `color.ts` are already literals, so the generator never needs to route them
      through a `@property` / `var(--db-neutral-x)` indirection that would later
      require resolution — it writes the final color straight into the
      `color-mix()` / `light-dark()`.
    - **Collapse `light-dark(a, b)` to a single value when `a === b`** (the
      generator knows the pair). This is the same collapse `dbUxFlatten` does, but
      done once at generation with no AST round-trip.
    - Avoid introducing any intermediate `--db-*` token that exists only to be
      resolved away; compute it in TypeScript and emit the result.
- **Must stay as `var()` (never flatten, by anyone):** the runtime-dynamic tokens
  the consumer flips at runtime — `--db-adaptive-transparency` /
  `--db-emphasis-transparency` (driven by `[data-emphasis]` / `%disabled`), the
  `--db-pride-*` stops (driven by `[data-pride="true"]`), and the whole
  `--db-adaptive-*` family. The per-`[data-material][data-adaptive-color]`
  re-declaration of the role tokens is also intentional and stays.

The consequence is twofold:

1. **The new output barely needs the PostCSS flatten plugin at all** — the only
   things left unresolved are the ones that _must_ stay dynamic. So for the
   adaptive system, flatten is essentially a no-op and should not be run on it by
   default.
2. **If a consumer _does_ run flatten** (e.g. they pipe the whole stylesheet,
   adaptive + legacy, through one PostCSS config), the generated adaptive role
   tokens must still be protected: they are re-declared per
   `[data-material=…][data-adaptive-color=…]` selector, so `dbUxFlatten` already
   marks them dynamic via its `isRootSelector` check (`collect.ts`) — but relying
   on that implicit path is fragile. **Add the generated adaptive role prefixes to
   the plugin's `dynamicPrefixes`** (default `['--db-adaptive-']`) so the skip is
   explicit and survives future changes to how the rules are emitted.

In short: flatten the parts we can at **generation** time (concrete hex,
`light-dark` collapse), and explicitly **exclude** the parts that must remain
dynamic — so the runtime behavior is never broken and the optional PostCSS pass
has essentially nothing left to do on the adaptive output.

## Problem Shape

We actually need **two** capabilities, and it is worth separating them:

1. **Generation** — `theme.json` → full adaptive CSS. This is a pure function of
   the theme input. It has no dependency on a bundler and must run anywhere
   (Node for JS consumers, but also invokable from Java/Python build steps via a
   shell call). **This is the core new primitive.**
2. **Optimization** — full CSS → minimal CSS for a specific project (drop unused
   colors/materials, drop high-contrast if not wanted). This is
   project-context-dependent. It should be **automatic** wherever we can see
   enough signal (bundlers see all source files), and **config/flag-driven**
   everywhere else (the CLI). Value flattening is **not** a step here — the
   generator pre-flattens its output (see the PostCSS section below).

The key design decision: **keep generation framework-agnostic and let the new
bundler plugin be a thin wrapper around it**, so Java/Python/CI consumers get the
exact same output as Vite/webpack users. This new plugin is **separate** from the
existing `@db-ux/core-vite-plugin` / `@db-ux/core-postcss-plugin`, which continue
to serve the legacy coloring model (see "A′. The existing plugins stay
standalone").

### What "used" means here — a required baseline plus a detected set

Optimization only works if we know what is safe to drop. Reading the component
styles, the adaptive output splits cleanly into two tiers:

- **Required baseline (never drop).** Every component in `@db-ux/core-components`
  opts into adaptive coloring through a single global hook,
  `[data-adaptive-coloring="true"]`, and the shared placeholders in
  `packages/components/src/styles/adaptive/_component.scss`
  (`%adaptive-coloring-container`, `%adaptive-coloring-interactive-container`,
  `%adaptive-coloring-text`, and their `alt-state` variants). Those placeholders
  read the **role** tokens — `--db-bg-*`, `--db-text-*`, `--db-border-*`, and the
  `--db-alt-state-*` set — resolved from the **default color + `filled-1`**
  material. So the default-color / `filled-1` / state and `alt-state` rules, plus
  the role tokens the placeholders touch, are a hard requirement for _any_ project
  that renders _any_ component with adaptive coloring on. This baseline is a
  property of our own components and can be computed **once, by us**, not
  rediscovered per consumer.
- **Detected set (droppable).** A specific color or material only matters to a
  consumer when they actually request it. Detection must therefore cover **two
  surfaces**, because the same choice appears as either:
    - **Raw data attributes** on hand-written markup — `data-material="vibrant"`,
      `data-adaptive-color="cyan"` (and the `alt-state` prefixed
      `data-alt-state-material` / `data-alt-state-adaptive-color`).
    - **Component props**, which every component exposes via the shared
      `MaterialProps` (`material`, `color`) and binds onto those same
      `data-material` / `data-adaptive-color` attributes on its root. A scan has
      to catch the prop as written per framework: JSX
      (`material="vibrant"` / `color="cyan"` / `color={"cyan"}`), Angular
      (`color="cyan"` / `[color]="'cyan'"`), and Vue (`color="cyan"` /
      `:color="'cyan'"`), on both `<DBButton …>` and `<db-button …>` forms. The
      existing `vite-plugin/src/detector.ts` already matches component usage,
      `db-color-*` classes, and `data-color` attributes — it needs extending to
      also read the `material`/`color`/`data-material`/`data-adaptive-color`
      prop-and-attribute pairs.

    Everything in the generated matrix that is neither in the required baseline nor
    in the detected set is a candidate for removal. This is exactly the per-project
    signal a bundler can harvest automatically, and the same scan backs the CLI's
    `init` / `--scan`.

This two-tier split is what makes automatic optimization both safe and
aggressive: we protect the baseline unconditionally and tree-shake the rest.

## Option Analysis

### A. `unplugin` for the bundler integration layer

[`unplugin`](https://unplugin.unjs.io/) is a unified plugin API: you write one
plugin against a Rollup-like interface and it adapts to multiple build tools.
Per the project, it currently targets **Vite, Rollup, webpack, esbuild, Rspack,
Rsbuild, Rolldown, Farm, and Bun** ([unjs/unplugin
README](https://github.com/unjs/unplugin),
[unplugin.unjs.io](https://unplugin.unjs.io/)). It exposes per-bundler entry
points (`unplugin-x/vite`, `/webpack`, `/esbuild`, …), the pattern
[`unplugin-dts`](https://github.com/qmhc/unplugin-dts) uses to let
`vite-plugin-dts` become a thin re-export of `unplugin-dts/vite`.
_(Content was rephrased for compliance with licensing restrictions.)_

**Pros**

- One plugin reaches every major bundler our consumers use (we currently ship a
  Vite plugin only; webpack/Next.js and Angular's esbuild users are unserved by a
  generation plugin today).
- It is the de-facto standard for this exact "write once, run in many bundlers"
  problem, so the pattern is familiar to contributors.
- Can **share** the detection logic with the existing Vite plugin (lifted into a
  common core module) without either plugin replacing the other — see the
  standalone note below.

**Cons / caveats**

- unplugin only covers **bundler** environments. It does **nothing** for the
  Java/Python/CLI requirement — those need a plain executable. So unplugin is
  _part_ of the answer, not all of it.
- Hooks differ slightly per bundler (transform/load are well-supported; richer
  dev-server behavior like our current Vite HMR invalidation in `index.ts`'s
  `handleHotUpdate` has per-bundler differences). Dev-mode "include everything
  for instant HMR" behavior would need per-adapter care.
- Adds a dependency and a build-matrix testing burden (we'd want fixtures beyond
  the current `react-app` / `vue-app`).

**Assessment:** ✅ **Recommended** as the integration layer — but only on top of
a standalone generator core, never as the home of the generation logic itself.

### A′. The existing plugins stay standalone (old and new coloring coexist)

An earlier draft suggested the new unplugin could eventually **supersede**
`@db-ux/core-vite-plugin` and the Vite package become a thin re-export. **Reverse
that:** the `vite-plugin` and the `postcss-plugin` must remain **standalone,
independently published packages**, because the two coloring systems coexist and
a consumer may use either or both:

- **Legacy/classic coloring** — the pre-built color classes and
  `light-dark()`/`var()` token CSS that `@db-ux/core-vite-plugin` already
  optimizes (import + tree-shake) and that `@db-ux/core-postcss-plugin` flattens.
  Consumers on this model today must keep working unchanged.
- **New adaptive coloring** — the theme-driven, generated
  `[data-material]`/`[data-adaptive-color]` matrix this document proposes.

These are different CSS with different optimization needs, and the migration from
one to the other will be **gradual** — some consumers will run both at once
during transition. So:

- `@db-ux/core-vite-plugin` keeps its current job (optimizing the legacy,
  pre-built CSS) and is **not** demoted to a re-export of the new unplugin.
- `@db-ux/core-postcss-plugin` keeps its current job (flattening legacy CSS) and
  stays independently usable.
- The **new** generation/optimization lives in the **new** core + CLI + unplugin
  (Options B/C and the recommendation below). It may **share** low-level code
  with the Vite plugin — most obviously the source scanner in
  `vite-plugin/src/detector.ts` — by extracting that into a common module both
  depend on. Sharing a module is fine; collapsing one package into the other is
  not.

Net effect: we **add** packages for the new system rather than repurposing the
existing ones, so neither coloring model's consumers are disrupted.

### B. A framework-agnostic CLI (for Java/Python/any consumer)

A published binary (`db-ux-theme-tools`, shipped from `@db-ux/core-theme-tools`)
that reads a theme JSON and writes CSS. This is the **only** option that serves
non-Node consumers, who would invoke it as a build step:

```bash
# conceptual
db-ux-theme-tools init                 # scan the project, write a starter config
db-ux-theme-tools generate             # read config via cosmiconfig, emit CSS
db-ux-theme-tools generate --theme theme.json --out db-ux-theme.css \
  --only-colors brand,cyan,green --materials filled-1,origin \
  --no-high-contrast                   # flags override the resolved config
```

The repo already has a CLI precedent and conventions to mirror:
`@db-ux/agent-cli` ships a binary via an **explicit, plain `bin` key**
(`"db-ux-agent-cli": "build/index.js"`), built with esbuild, using `commander`
for argument parsing. A new CLI should follow the same shape
(root `AGENTS.md` "`bin` entries" rule + `packages/agent-cli/AGENTS.md`).

**Pros**

- Serves **every** consumer regardless of language/stack — the headline
  requirement. A Java or Python project calls one command.
- Deterministic, CI-friendly, no bundler needed; easy to pin (repo pins exact
  versions, uses `pnpm exec`, never `npx`/`dlx`).
- Natural home for the generation core that unplugin and the Vite plugin both
  wrap.

The CLI should be **config-driven**, not flag-only. It reads a config via
[`cosmiconfig`](https://github.com/cosmiconfig/cosmiconfig) — the de-facto
standard already used across the repo's toolchain (`prettier`, `cspell`,
`stylelint`) — so a consumer keeps their choices in a committed file instead of a
long command line, from any of cosmiconfig's standard sources (a `db-ux` key in
`package.json`, `.db-uxrc.json`, `db-ux.config.js`, …):

```text
# conceptual db-ux.config.js
export default {
  theme: "./theme.json",
  out: "./db-ux-theme.css",
  colors: ["brand", "cyan", "green"],   // omit => all; with scan => detected set
  materials: ["filled-1", "origin"],    // required baseline always kept
  highContrast: false,                   // drop the high-contrast branch entirely
  scan: ["src/**/*.{html,js,ts,jsx,tsx,vue}"] // optional: auto-detect usage
};
// No `flatten` option: the generator pre-flattens its output (concrete hex,
// collapsed light-dark), so there is nothing left to flatten for the adaptive
// system. Running the legacy PostCSS flatten plugin stays a separate, explicit
// choice for legacy CSS — not a flag of this generator.
```

It should also **generate an initial config** so a consumer never starts from a
blank file:

- `db-ux-theme-tools init` runs the same usage scan the bundler plugins use
  (lifted from `vite-plugin/src/detector.ts`), records the colors/materials it
  found and whether any high-contrast opt-in (`[data-contrast]` /
  `prefers-contrast`) is present, and writes a config the consumer can hand-tune.
- `db-ux-theme-tools generate` resolves the config through cosmiconfig and emits
  the optimized CSS. CLI flags still exist and **override** the resolved config
  for one-off runs.

**Cons**

- A CLI alone can't watch a project's source files as continuously as a bundler,
  so its auto-detection is a point-in-time **scan** (at `init`, or per `generate`
  when `scan` is set) rather than the always-fresh module graph a bundler has.
  Explicit `colors`/`materials` in the config are the deterministic escape hatch.

**Assessment:** ✅ **Recommended** and arguably the **most important** piece,
because it is the only one that covers the explicitly stated Java/Python need —
and `cosmiconfig` + an `init` generator make it usable without memorizing flags.

### C. Reuse / generalize the token pipeline (Style Dictionary / Terrazzo)

The "theme as JSON → CSS" problem is exactly what design-token build tools solve.
[Style Dictionary](https://github.com/style-dictionary/style-dictionary) is the
long-standing cross-platform token transformer; [Terrazzo](https://terrazzo.app/)
(formerly Cobalt) targets the W3C **DTCG** token format. Recent tooling reads both
the DTCG 2025.10 format and the legacy Style Dictionary format, with exports from
Figma / Tokens Studio / Terrazzo
([dev.to, 2026](https://dev.to/prosazhin/a-tailwind-css-theme-from-design-tokens-in-one-command-4l2g)).
_(Content was rephrased for compliance with licensing restrictions.)_

**Pros**

- Mature, well-documented input formats; aligning our `theme.json` to **DTCG**
  would make themes interoperable with Figma/Tokens Studio and reduce our
  bespoke-schema maintenance.
- Style Dictionary has a plugin/transform model we could emit our adaptive
  `color-mix()/light-dark()` structure from.

**Cons**

- Our output is **not** a flat token dump. `generate-css/` emits a large matrix
  of **selector-scoped** rules (`[data-material=…][data-adaptive-color=…]`,
  high-contrast media branches, pride gradient, backdrop alphas). That
  relational/combinatorial logic lives in `material.ts` and is not something
  Style Dictionary models out of the box — we'd still write most of
  `generate-css/materials/` as a custom formatter.
- Adopting a token engine wholesale is a larger architectural shift than the
  issue calls for.

**Assessment:** ⚠️ **Adopt selectively.** Use the **DTCG schema** as inspiration
(or the accepted input) for `theme.json` so themes are portable, but keep our own
generator for the selector matrix. Do **not** replace `generate-css/` with a
generic token tool.

### Custom colors

A theme must let consumers **add their own colors**, not only pick from the 12
built-ins. Today `colors` in `generate-css/materials/color.ts` is a closed
`Record<ColorName, ColorPalette>` with a hard-coded `ColorName` union; the
refactor has to make this map **open**.

**What a custom color must supply.** Each color is a full `ColorPalette`: the
numeric steps `0–14` as `[light, dark]` pairs, plus the named roles
`origin-*`, `on-origin-*`, `transparent-full-*`, and `transparent-semi-*`. The
materials (`material.ts`) reference colors purely by these palette keys/indices,
so any color providing a complete palette flows through every material and state
unchanged — no per-color material wiring is needed.

**Schema & type implications.**

- `ColorName` can no longer be a fixed union at the generator boundary. The
  built-ins stay a known union (good for the default theme and autocomplete), but
  the theme input accepts arbitrary string keys — the same `LooseAutocomplete`
  opening described for `ColorType` below, so a theme's `colors` map is roughly
  `Record<BaseColorType | LooseAutocomplete, ColorPalette>`.
- `ColorType` on the component `MaterialProps` must be **open** so a custom
  `color="petrol"` type-checks and renders, while the built-in names still
  autocomplete. Use the **`LooseAutocomplete` pattern already established for
  icon types** in `packages/foundations/src/icon-types.ts` — a `string &
Record<never, never>` union plus an empty, consumer/theme-extensible interface
  merged via the `Assign` helper:

    ```ts
    /* mirrors packages/foundations/src/icon-types.ts */
    export type LooseAutocomplete = string & Record<never, never>;

    /** Empty by design — a theme or consuming app augments it with its own colors. */
    export interface OverwriteColors {}

    type InternalColors = Assign<
    	{ types: BaseColorType | LooseAutocomplete },
    	OverwriteColors
    >;
    export type ColorType = InternalColors["types"];
    ```

    So the built-in `BaseColorType` names autocomplete, any custom string is still
    accepted, and a theme can declare its custom names (e.g. `"petrol"`) by
    augmenting `OverwriteColors` for first-class completion. The runtime value is
    just a string on `data-adaptive-color`, so this is purely a types-ergonomics
    decision, not a runtime constraint — and it keeps `ColorType` consistent with
    how `IconTypes` is already modeled.

- The generator should **validate** each custom palette (all required keys
  present, values parse as colors) and fail with a clear message, since a missing
  role would otherwise surface as an empty `color-mix()` deep in the output.

**Interaction with optimization.** Custom colors are optimized like any other —
dropped unless detected in source or listed in config. Two caveats the tooling
must handle:

- A consumer who defines `petrol` but only references it dynamically (e.g. sets
  `data-adaptive-color` from JS) won't be detected by a static scan, so they must
  be able to **force-keep** it (the existing `include` concept in the Vite plugin
  config, mirrored by the CLI config's `colors` list).
- The `init` scan should also surface custom colors found in the theme so the
  generated config lists them explicitly.

**Who authors the full palette.** A consumer never hand-writes the ~30 values of
a `ColorPalette`. A separate **Theme-Builder** tool produces the `theme.json`
(including any custom colors) — so the generator's job is only to **consume and
validate** a complete theme, not to help derive palettes. That keeps the
generator focused: it can assume every color it is handed is already a full,
valid palette, and surface a clear error if the Theme-Builder (or a hand-edited
file) ever emits an incomplete one.

**Can a token tool own this?** This is the strongest argument for borrowing the
**DTCG** color-token shape (Option C): a DTCG `color` token group is an open map
by nature, so aligning our palette entries to it makes "bring your own color"
feel native, keeps Figma/Tokens Studio exports usable as-is, and gives the
Theme-Builder a standard output format to target. We still generate the selector
matrix ourselves; DTCG only shapes the **input**.

### D. Build it all bespoke, no unplugin

Extend `generate-css/` into a package with its own Vite/webpack/… integrations
written by hand.

**Pros:** full control, no new abstraction.
**Cons:** re-implements per-bundler glue that unplugin already solves and
maintains; high long-term cost; diverges from the ecosystem-standard approach.

**Assessment:** ❌ **Not recommended** for the bundler layer (reinvents
unplugin). ✅ for the **generator core** itself (it is genuinely bespoke logic).

## Recommendation

Adopt a **single shared core** feeding three delivery surfaces — the CLI, the
unplugin bundler plugin, and a prebuilt ship-everything CSS:

```text
          ┌─────────────────────────────────────────────┐
          │  @db-ux/core-theme-tools (the new core)      │
          │  theme.json (SD/DTCG-like) -> adaptive CSS    │
          │  + optional optimize(usedColors, materials)   │
          │  (lifts generate-css/materials/* logic)       │
          └──────┬────────────────┬────────────────┬─────┘
                 │                │                │
      ┌──────────┘      ┌─────────┘                └──────────┐
      ▼                 ▼                                     ▼
┌─────────────────────┐ ┌──────────────────────────┐  ┌──────────────────────────┐
│ CLI binary          │ │ unplugin wrapper          │  │ Prebuilt "everything" CSS │
│ (db-ux-theme-tools) │ │ (vite/webpack/esbuild/…)  │  │ (per theme, no filter)    │
│ config + JSON       │ │ auto-detect usage, then   │  │ shipped by each theme pkg │
│ Java/Py/CI          │ │ call core (pre-flattened) │  │ (foundations/theme,       │
│ (Journey A)         │ │ (Journey A)               │  │  @db-ux/db-theme, …)      │
└─────────────────────┘ └──────────────────────────┘  └── Journey B, zero-config ─┘
```

All three outputs come from the **same core**: the CLI and unplugin call it with
a theme + optimization context (Journey A), and each theme package's prebuilt
file is the core run at our release time on that package's `theme.json` with no
filtering (Journey B). Every theme package therefore ships a matched pair —
`theme.json` (for Journey A) and prebuilt CSS (for Journey B).

Items 1–3 below are **entry points of a single package**, `@db-ux/core-theme-tools`
(`.`, `/cli`, `/vite` + other bundler subpaths) — see "Package & naming" above —
not three separate packages.

1. **Core generator (`@db-ux/core-theme-tools`)** — framework-agnostic.
    - Refactor `generate-css/materials/*` so `colors` and `materials` become
      **inputs** (a theme object), not module constants. Keep the current values
      as the **default DB theme** so existing output is byte-stable.
    - Accept a `theme.json`; define its schema with **DTCG alignment** in mind.
    - **Support consumer-defined custom colors.** The theme's `colors` map must be
      open — a consumer adds e.g. `"petrol"` by supplying the same palette shape
      the built-in colors use (the `0–14` steps plus the `origin-*` /
      `on-origin-*` / `transparent-*` roles from `ColorPalette` in
      `generate-css/materials/color.ts`). A custom color then flows through the
      whole matrix exactly like a built-in one: it gets its
      `[data-adaptive-color="petrol"]` rules, works as a `color="petrol"` prop
      value, and participates in optimization (kept only if detected/listed). See
      "Custom colors" below for the schema and validation implications.
    - Expose `generate(theme, { colors?, materials?, highContrast? })` that can
      emit the full matrix or a filtered subset (the "no burgundy" and
      "no high-contrast" requirements), always preserving the required baseline.
    - **Pre-flatten the output as far as possible**: emit concrete hex (no
      `@property`/`var()` indirection to resolve), collapse `light-dark(a, b)`
      when `a === b`, and keep only the genuinely runtime-dynamic tokens
      (`--db-adaptive-*`, `--db-emphasis-transparency`, `--db-pride-*`) as
      `var()`. This makes a separate PostCSS flatten pass unnecessary for the
      adaptive output (see "The generator should pre-flatten its output").
    - Pin the default output to the current `generated-colors.css` via a snapshot
      test so the refactor is provably non-breaking. **Sequence this carefully:**
      today's generator always emits `light-dark(a, b)` even when `a === b`, so
      land the theme-input refactor **first** under a byte-stable snapshot, then
      introduce `light-dark` collapse as a **separate, reviewed** change (the
      collapse is value-equivalent but not byte-identical, so it updates the
      snapshot deliberately rather than silently).

2. **CLI** (`@db-ux/core-theme-tools/cli`, bin `db-ux-theme-tools`) — thin wrapper
   over the core, built like `@db-ux/agent-cli` (esbuild + `commander`, explicit
   plain `bin` key). Config-driven via **cosmiconfig** with
   an `init` command that scans the project and writes a starter config; flags
   (`--theme`, `--out`, `--only-colors`, `--materials`, `--no-high-contrast`,
   `--scan <glob>`) override the resolved config. There is **no** flatten flag —
   the generator pre-flattens its output. This is what Java/Python consumers call.

3. **unplugin wrapper** (`@db-ux/core-theme-tools/vite`, `/webpack`, … — same
   package, per-bundler entries) — one plugin for all bundlers. In build mode it
   runs the detection (extended `vite-plugin/src/detector.ts` — now also reading
   the `material`/`color` props and `data-material`/`data-adaptive-color`
   attributes — detection shared with the Vite plugin via a common module),
   calls the core with the required baseline **plus** the detected color/material
   set, and drops high-contrast when the project neither opts in nor configures
   it. No flatten pass is needed on the adaptive output — the core already
   pre-flattens it; if flatten is nonetheless run (e.g. over a combined
   adaptive+legacy stylesheet), the generated adaptive role prefixes must be in
   `dynamicPrefixes` so those tokens are **not** resolved. This is a **new,
   separate** plugin — it does **not** replace `@db-ux/core-vite-plugin`, which
   keeps optimizing the legacy pre-built CSS so the two coloring models can run
   side by side (see "A′. The existing plugins stay standalone").

4. **Per-theme `theme.json` + prebuilt CSS** — every theme package we maintain
   ships a matched pair generated by the core at our release time:
    - a **`theme.json`** (Style-Dictionary-like) that the CLI/bundler consumes
      for Journey A, and
    - a **prebuilt "everything" CSS** (that theme, no filtering) for Journey B.

    `packages/foundations/scss/theme` ships the prebuilt CSS plus a
    **`whitelabel-theme.json`** (the unbranded base); `@db-ux/db-theme` and other
    maintained themes ship their own pair. Because both come from the same core
    run on the same `theme.json`, the prebuilt CSS can never drift from what a
    consumer would get by running Journey A on that package's theme.

### Package & naming

**Name: `@db-ux/core-theme-tools`.** The name fits the repo's `@db-ux/core-*`
house style (`core-foundations`, `core-components`, `core-vite-plugin`,
`core-postcss-plugin`, `core-eslint-plugin`, `core-stylelint`), and it reads
correctly against the deliver/consume split: a **theme package delivers the
theme** (`@db-ux/db-theme` and `packages/foundations/scss/theme` each ship a
`theme.json`), and **`core-theme-tools` consumes it** to generate CSS. It is
deliberately narrower than a generic `core-tools` — the repo already has several
"tools" (`agent-cli`, `stylelint`, `eslint-plugin`, `mcp-server`), so a
catch-all name would both under-describe this package and squat the generic slot.

**One package, multiple entry points — not a package per bundler.** This matches
unplugin's own convention of per-bundler subpaths (`unplugin-dts/vite`,
`unplugin-dts/webpack`, …).

Proposed exports:

```text
@db-ux/core-theme-tools          -> framework-agnostic core API (the generator)
@db-ux/core-theme-tools/cli      -> the CLI (bin: { "db-ux-theme-tools": "..." })
@db-ux/core-theme-tools/vite     -> unplugin Vite entry
@db-ux/core-theme-tools/webpack  -> unplugin webpack entry
@db-ux/core-theme-tools/esbuild  -> unplugin esbuild entry
@db-ux/core-theme-tools/rspack   -> unplugin Rspack entry   (+ rollup, rolldown, …)
```

Why **one** package rather than one per unplugin target:

- **They are version-locked by nature.** The CLI and every bundler adapter call
  the same core and must agree on the theme schema and output. Splitting into
  `@db-ux/core-theme-tools-vite`, `-webpack`, `-cli`, … multiplies the
  release/version-sync work (every core change is a coordinated multi-package
  bump) for no isolation benefit — unplugin adapters are thin wrappers.
- **No install bloat.** A consumer who imports only `.../vite` does not pull in
  the webpack or esbuild code; subpath exports are tree-shaken/resolved per entry.
  The CLI binary is just another entry.
- **One place for the core, CLI, and adapters** keeps the detector-sharing with
  the legacy Vite plugin and the theme-schema types in a single home.

The one real cost of a single package is **peer dependencies**: the bundler
entries need `vite` / `webpack` / `esbuild` / … as peers, and a Vite-only
consumer should not be nagged to install webpack. Declare them **optional** via
`peerDependenciesMeta` (each `{ optional: true }`), exactly as multi-bundler
unplugin packages do. The `cli` entry has no bundler peer at all.

> If a future need for hard isolation appears (e.g. a bundler adapter grows a
> heavy, bundler-specific dependency), that single adapter can be split out
> later — but start unified, matching `unplugin-dts`.

### Why this split

- The **CLI** is the only thing that satisfies the explicit Java/Python ask, and
  it falls out "for free" once the core is framework-agnostic.
- **unplugin** gives us webpack/esbuild/Rspack/etc. reach we lack today without
  hand-writing each integration — as a **new** plugin for the adaptive system,
  not a replacement for the existing Vite plugin.
- The **existing `vite-plugin` and `postcss-plugin` stay standalone**: the legacy
  and adaptive coloring models coexist and migrate gradually, so both keep
  serving their current consumers. The new system shares only low-level code
  (the detector) with them, never absorbs them.
- Keeping the current palette/material values as the **default theme** means the
  whole refactor can be gated on "output is identical to today's
  `generated-colors.css`," which de-risks it.
- The **prebuilt "everything" CSS** (Journey B) is the _same_ core output with no
  filtering — so each theme package ships its prebuilt CSS and `theme.json` as a
  matched pair for free once the core exists, and the two are guaranteed to agree
  per theme.

## Staged Implementation Plan

### Phase 1 — Make the generator theme-driven + ship the prebuilt CSS

1. Introduce a `Theme` type and refactor `generate-css/materials/` to take
   `colors` / `materials` as arguments, defaulting to today's constants.
2. Make the `colors` map **open** (custom colors): accept arbitrary keys with a
   full `ColorPalette`, and validate each palette (required keys present, values
   parse). Keep the built-in names as a known union for the default theme.
3. Add a snapshot test asserting the default output equals the committed
   `generated-colors.css` (byte-for-byte) — the baseline for the refactor.
4. **Pre-flatten the emitted values**: collapse `light-dark(a, b)` to one value
   when both sides are equal, and keep emitting concrete hex (no `@property`/
   intermediate `var()` to resolve later). Land this as a **separate** change on
   top of step 3 — it is value-equivalent but updates the snapshot deliberately —
   while keeping the runtime-dynamic tokens (`--db-adaptive-*`,
   `--db-emphasis-transparency`, `--db-pride-*`) as `var()`.
5. Add a `theme.json` loader + schema validation (Style-Dictionary/DTCG-aligned
   where practical) — the format the Theme-Builder emits.
6. Make the required baseline explicit in the generator and add a single
   `highContrast` on/off option. When off it omits the **whole**
   `@layer material-high-contrast` block — both the `[data-contrast="more"]`
   branch and the `prefers-contrast: more` media branch — since they are the two
   halves of the same feature and are only useful together.
7. **Publish the per-theme pair** (Journey B): wire the core into each theme
   package's build so it emits a `theme.json` + a no-filter prebuilt CSS. Start
   with `packages/foundations/scss/theme` (prebuilt CSS +
   **`whitelabel-theme.json`**), then `@db-ux/db-theme` (its own `theme.json` +
   prebuilt CSS), and apply the same convention to any other maintained theme.

### Phase 2 — Framework-agnostic CLI

1. Add the CLI as the `@db-ux/core-theme-tools/cli` entry (bin
   `db-ux-theme-tools`), mirroring `@db-ux/agent-cli` build/bin conventions —
   same package as the core, not a new package.
2. Load config via **cosmiconfig**; implement `generate` reading that config,
   with flags (`--theme/--out`, `--only-colors`, `--materials`,
   `--no-high-contrast`, `--scan`) overriding it. No flatten flag — the generator
   already pre-flattens.
3. Implement `init`: scan the project (shared detector — colors, materials,
   high-contrast opt-in, custom colors present in the theme) and write a starter
   config the consumer can hand-tune.
4. Document Java/Python usage (call the binary from Gradle/Maven/pip build steps).

### Phase 3 — new standalone unplugin (existing plugins untouched)

1. Extract the detector (`vite-plugin/src/detector.ts`) into a **shared module**
   both the existing Vite plugin and the new unplugin import, and extend it to
   read `material`/`color` props and `data-material`/`data-adaptive-color`
   attributes (plus `alt-state` variants). Do **not** fold the Vite plugin into
   the new system — it keeps optimizing the legacy pre-built CSS.
2. Author the **new, standalone** unplugin that detects usage → calls core
   (baseline + detected set, high-contrast only if used/configured) → optional
   flatten, with the generated adaptive role prefixes added to the flatten
   plugin's `dynamicPrefixes` so those tokens are never resolved.
3. Ship the unplugin's per-bundler entries (`/vite`, `/webpack`, `/esbuild`, …);
   add webpack and esbuild fixtures alongside the existing `react-app` /
   `vue-app`. `@db-ux/core-vite-plugin` and `@db-ux/core-postcss-plugin` stay
   published as-is for legacy-coloring consumers.

### Phase 4 — Optional: Theme-Builder interop & docs

1. Firm up the `theme.json` schema (Style-Dictionary/DTCG-aligned) as the exact
   contract the Theme-Builder emits; document how to export it from Figma /
   Tokens Studio.
2. Patternhub docs page covering **both** journeys: "Bring your own theme"
   (Theme-Builder → CLI/bundler) and "Just use the prebuilt CSS".

## Open Questions

- **Theme schema**: full DTCG, a DB-UX-specific subset, or accept both? DTCG
  interop is attractive (and makes custom colors feel native) but our selector
  matrix needs material/role concepts DTCG does not express directly.
- **Custom `ColorType` typing** — _decided_: open `ColorType` with the
  `LooseAutocomplete` + extensible-interface pattern already used for icon types
  in `packages/foundations/src/icon-types.ts` (see "Custom colors"). Built-in
  color names autocomplete; any custom color string is still accepted, and a
  theme/consumer can declare its custom names via the overwrite interface.
- **Theme-Builder ↔ generator contract**: does the Theme-Builder emit exactly the
  generator's theme schema (DTCG-aligned), or an intermediate format the CLI
  normalizes? Pinning this early keeps the two tools from drifting.
- **Optimization source of truth for the CLI**: `init`/`--scan` only, or also a
  per-`generate` scan when `scan` is set? (Bundler plugins always scan the
  module graph; the CLI scans at a point in time.)
- **Package layout** — _decided_ (see "Package & naming"): one package,
  `@db-ux/core-theme-tools`, with `.` / `/cli` / per-bundler entries, matching
  `unplugin-dts`. Only revisit if one bundler adapter later needs a heavy,
  bundler-specific dependency worth isolating.
- **Default-theme stability**: confirm the snapshot gate is acceptable as the
  definition of "non-breaking" for the refactor.

## Conclusion

The issue is best solved not by a single tool but by a **layered split** around
one core, serving **two consumer journeys**: a framework-agnostic **core
generator** that turns a theme JSON (with consumer-defined custom colors) into
adaptive CSS, wrapped by (a) a **config-driven CLI** for Java/Python/CI consumers
and (b) a **new unplugin** plugin for all major bundlers — plus (c) a **prebuilt
"everything" CSS** shipped from the same core as a zero-config fallback. All of
this is **additive**: the existing `@db-ux/core-vite-plugin` and
`@db-ux/core-postcss-plugin` stay standalone for the legacy coloring model, since
the two systems coexist and migrate gradually. The current palette is kept as the
default theme for a provably non-breaking migration.

- **Two journeys, one matched pair per theme package.** Every theme package we
  maintain ships both a **`theme.json`** (Style-Dictionary-like) and a **prebuilt
  "everything" CSS**: `packages/foundations/scss/theme` ships the prebuilt CSS +
  **`whitelabel-theme.json`**, and `@db-ux/db-theme` (and others) ship their own
  pair. Journey A feeds the shipped `theme.json` to the CLI/bundler for an
  optimized build; Journey B imports the prebuilt CSS with no build step. Both
  come from the same core run, so they cannot drift.
- **Automatic optimization** rests on a two-tier model: a **required baseline**
  (the default-color / `filled-1` roles every component's adaptive styles need)
  that is never dropped, plus a **detected set** harvested by scanning both
  `data-material`/`data-adaptive-color` attributes and the `material`/`color`
  component props. High-contrast is dropped unless used or configured.
- **Custom colors** are first-class: the theme's `colors` map is open, each
  custom color supplies a full palette (authored via the **Theme-Builder**, which
  produces the `theme.json`) and then flows through the whole matrix and the
  optimizer like a built-in. High-contrast is a single on/off that drops both the
  `[data-contrast="more"]` and `prefers-contrast: more` branches together.
- `unplugin` — **recommended** as a **new, standalone** plugin for the bundler
  layer; covers the ecosystem we don't serve today. It does **not** absorb
  `@db-ux/core-vite-plugin` / `@db-ux/core-postcss-plugin` — those stay published
  for legacy-coloring consumers, sharing only the detector module.
- **Flatten at generation, not after**: the core pre-flattens its output
  (concrete hex, collapsed `light-dark()`), so the adaptive CSS needs no PostCSS
  flatten pass. What remains as `var()` is only the runtime-dynamic set
  (`--db-adaptive-*`, `--db-emphasis-transparency`, `--db-pride-*`) — which must
  stay dynamic, so if flatten is ever run over the output those prefixes must be
  in `dynamicPrefixes` and are never resolved.
- A standalone **CLI** (cosmiconfig + `init`) — **recommended and
  highest-priority**; the only option that meets the explicit non-Node
  (Java/Python) requirement, usable without memorizing flags.
- Style Dictionary / Terrazzo / DTCG — **borrow the input schema** (it also makes
  custom colors feel native), don't replace the generator; our selector/material
  matrix is bespoke.
- Fully bespoke bundler glue — **not recommended**; unplugin already solves it.

### Next Steps

1. Agree on the `theme.json` schema direction (DTCG vs. bespoke vs. hybrid) and
   fix it as the contract the Theme-Builder emits and the generator consumes.
2. Start Phase 1 behind a byte-stable snapshot of `generated-colors.css`, with
   the `colors` map made open and the required baseline/high-contrast toggle in,
   and ship that default output as the prebuilt Journey-B artifact.
3. Extract `detector.ts` into a shared module and extend it to cover
   `material`/`color` props and `data-material`/`data-adaptive-color` attributes
   — it backs both the automatic bundler optimization and the CLI's
   `init`/`--scan`, and is shared with (not merged into) the existing Vite plugin.
4. Prioritize the CLI (Phase 2) since it unblocks the non-Node consumers the
   issue specifically calls out.
5. Confirm the coexistence plan with stakeholders: the new adaptive system ships
   as **new** packages while `@db-ux/core-vite-plugin` and
   `@db-ux/core-postcss-plugin` keep serving legacy coloring during the gradual
   migration.

## Sources

- unplugin supported bundlers: [unjs/unplugin](https://github.com/unjs/unplugin),
  [unplugin.unjs.io](https://unplugin.unjs.io/)
- Per-bundler entry-point pattern (`/vite`, `/webpack`, …):
  [unplugin-dts](https://github.com/qmhc/unplugin-dts)
- Token tooling / DTCG format:
  [Style Dictionary](https://github.com/style-dictionary/style-dictionary),
  [Terrazzo](https://terrazzo.app/),
  [DTCG-format token-to-CSS overview (dev.to, 2026)](https://dev.to/prosazhin/a-tailwind-css-theme-from-design-tokens-in-one-command-4l2g)

_Content from external sources was rephrased for compliance with licensing restrictions._
