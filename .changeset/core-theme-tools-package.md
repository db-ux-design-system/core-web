---
"@db-ux/core-theme-tools": minor
---

feat(theme-tools): add theme-driven adaptive-color CSS generator

- new `@db-ux/core-theme-tools` package: core generator, CLI (`db-ux-theme-tools`), and unplugin bundler plugin (vite/webpack/esbuild/rollup/rspack/farm)
- reads a Style Dictionary (DTCG) `theme.tokens.json` and emits the adaptive material CSS (`--db-bg-*`, `--db-text-*`, `--db-border-*`)
- component-aware usage detection with `include`/`exclude` escape hatches and configurable `highContrast` output
- configurable outer cascade `layer` (default `db-ux-adaptive`)
