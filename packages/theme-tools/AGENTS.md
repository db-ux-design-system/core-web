# @db-ux/core-theme-tools

Theme-driven adaptive-color CSS generator for the DB UX Design System – Generation 3. Ships one framework-agnostic core generator plus two thin delivery surfaces over it: a CLI (`db-ux-theme-tools`) and an unplugin bundler plugin (`/vite`, `/webpack`, `/esbuild`).

> Repo-wide rules (changesets, commit/PR workflow, code style, `pnpm exec` over `npx`/`dlx`, Node 26, `@db-ux/core-*` naming, `@public` tagging for Knip, generation-naming) live in the root [`AGENTS.md`](../../AGENTS.md). This file only covers what is specific to this package — it does not duplicate those rules.

## Key Facts

- **ESM only** (`"type": "module"`)
- Built with `tsc` to `build/`
- Published binary: **`db-ux-theme-tools`** (keep the `bin` key an explicit, plain command name — don't rely on scoped-key basename normalization)
- Subpath exports: `.` (core), `/cli`, `/vite`, `/webpack`, `/esbuild`

## Scripts

```bash
pnpm run build        # Compile TypeScript to build/
pnpm run test         # Run vitest
pnpm run test:update  # Update vitest snapshots
```

## Structure

```text
src/
├── index.ts        # Core entry barrel (package entry `.`)
├── generate/       # Core generator (expand-theme, materials-config, generate)
├── detector/       # Shared usage detector (entry `/detector`)
├── cli/            # CLI surface (entry `/cli`, bin db-ux-theme-tools)
└── plugin/         # unplugin per-bundler entries (/vite, /webpack, /esbuild, ...)
scripts/            # Non-shipped helpers (excluded from the build)
build/              # Compiled output — never commit
```

## Architecture

- **Core generator** reads a Style Dictionary (DTCG) `theme.tokens.json` (colors under the `db` prefix, `$type`/`$value` leaves).
    - `load-theme.ts` converts it to the per-color `ColorInput` shape — mapping `neutral` → `grey`, skipping alias colors (reference `$value`s), ignoring non-color groups (`border`/`font`) and `origin.base`.
    - `expand-theme.ts` then expands that into a full `Theme`, and `materials-config.ts` (the in-repo material/role definitions) drives `generate` to emit the material CSS (`--db-bg-*`, `--db-text-*`, `--db-border-*`) as concrete `color-mix(in srgb, light-dark(hex, hex) …)` values, optionally narrowed by an optimization context.
    - Note `ColorInput`/`expandTheme` still take the nested `palette`/`origin`/`on-origin` shape — that is the generator's internal input. Tests and fixtures all load a `theme.tokens.json` through `loadTheme` (the shared fixture is `test/fixtures/vite-app/theme.tokens.json`); there is no baked-in palette fixture.
- **CLI** and **bundler plugin** are thin wrappers over the core. Both share a usage **detector** (`src/detector/`, shared with — not merged into — the legacy `@db-ux/core-vite-plugin`).
- The legacy `@db-ux/core-vite-plugin` and `@db-ux/core-postcss-plugin` stay standalone; this package is additive and the two coloring models coexist.

## Component-aware detection

The detector (`src/detector/detect-usage.ts`) does more than scan literal `data-adaptive-color` / `data-material` values: it also detects **used DB UX components** (JSX tag, `<db-…>` tag, or named import) and unions in the colors/materials each component's template can emit, so a semantic-only usage (`<DBNotification semantic="critical">` → `red`) is still kept. `exclude` (plugin option + CLI config) subtracts colors/materials last, after detection and `include`; the required baseline is always re-added by `generate`.

The CLI `generate` is component-aware too: when the config sets a `scan` but pins no explicit `colors`/`materials`, `runGenerate` runs the same detector over those globs. That is the **CLI-first flow** for builds that cannot host the bundler plugin (Angular): run `db-ux-theme-tools generate` before `ng build` (via an npm `prebuild` script) and import the emitted CSS from the global stylesheet.

- The component → `{colors, materials}` map lives in **`src/detector/component-requirements.ts`**. It is **extracted from the component `.lite.tsx` sources, not authored by hand** — run `node scripts/extract-component-requirements.ts` from the package root to re-derive it after a component changes which colors/materials its template hard-codes.
- `test/component-requirements.spec.ts` re-runs that extraction against the live sources and fails if the shipped manifest drifts, so a stale map is caught in CI. When it fails, regenerate and paste the result into the manifest.

## Cascade layer

`generate` wraps its whole output in one named CSS cascade layer via the `layer` option (`GenerateOptions.layer`, plugin option, and CLI config), defaulting to `DEFAULT_LAYER` = `"db-ux-adaptive"`; `false` emits the raw, un-layered matrix. The generator wraps only its own output — the cross-bundle order (`@layer db-ux, db-theme, db-ux-adaptive;`) is the consumer's to declare. The byte-identical snapshot gate (`generate-default.test.ts`) passes `layer: false` so it keeps comparing the raw matrix; layer behavior is covered by `generate-layer.test.ts`.

## Conventions

- Tag every published export `@public` for Knip (see root `AGENTS.md`).
- Never flatten the runtime-dynamic token prefixes (`--db-adaptive-`, `--db-emphasis-transparency`, `--db-pride-`) — they must stay `var()` references.
- The editor auto-formatter occasionally drops an `import` line between edits — re-read the import block after editing a `.ts` file and confirm every used symbol is imported.
- Do not commit `build/`.
