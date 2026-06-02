# @db-ux/core-postcss-plugin

PostCSS plugin that flattens DB UX Design System CSS custom properties by resolving `var()`, `@property`, `calc()`, `color-mix()`, and `light-dark()` at build time.

## Key Facts

- **ESM only** (`"type": "module"`)
- Single plugin exported: `dbUxFlatten`
- Built with `tsc` to `build/`
- Peer dependency: `postcss ^8.0.0`

## Scripts

```bash
pnpm run build        # Compile TypeScript
pnpm run test         # Run vitest
pnpm run test:update  # Update vitest snapshots
```

## Structure

```text
src/
├── index.ts                    # Barrel export
└── plugins/
    └── flatten/
        ├── index.ts            # dbUxFlatten plugin entry
        ├── data.ts             # Types and constants
        └── helpers/
            ├── css-parser.ts   # Generic CSS string parsing
            ├── resolve.ts      # var(), calc(), color-mix() resolution
            ├── collect.ts      # PostCSS AST collection (layers, vars, imports)
            └── transform.ts    # transformRoot + collapseLightDark
```

## Key Concepts

- **Static variables**: Only declared in `:root`/`:host` and `@property` — safe to inline
- **Dynamic variables**: Re-declared in class selectors, `@media`, or matching `dynamicPrefixes` (default: `--db-adaptive-*`) — must stay as `var()` references
- **Layer priority**: Detected from `@layer` order declarations and `@import ... layer()` rules — theme values override base values
- **`light-dark()` collapsing**: When both arguments resolve to the same value, the function is collapsed to a single value

## Plugin Options

| Option             | Default              | Description                                        |
| ------------------ | -------------------- | -------------------------------------------------- |
| `removeAtProperty` | `true`               | Remove `@property` rules after resolving           |
| `removeResolved`   | `true`               | Remove declarations no longer referenced           |
| `dynamicPrefixes`  | `['--db-adaptive-']` | Prefixes always treated as dynamic, never resolved |

## Development Notes

- When adding new resolution logic, add corresponding vitest snapshot tests
- The plugin must handle Angular's file-by-file processing — it cannot assume all CSS is in one file
- Never resolve `--db-adaptive-*` variables — they are runtime-dynamic by design
