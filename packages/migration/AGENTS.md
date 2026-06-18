# @db-ux/core-migration

CLI tool that auto-migrates source code between DB UX Design System v3 versions for breaking changes.

## Key Facts

- **ESM only** (`"type": "module"`)
- Entry point: `src/cli.ts`, built to `build/index.js` via `esbuild.js`
- Published as a binary: `npx @db-ux/core-migration`

## Scripts

```bash
pnpm run build          # Bundle with esbuild
pnpm run test           # Run vitest
pnpm run test:migration # Smoke-test a migration locally (dry run)
```

## Usage

```shell
npx @db-ux/core-migration --type=v005_v006 --src=./src
```

## Structure

```text
src/       # CLI + migration logic (TypeScript)
test/      # Vitest tests
esbuild.js # Build script
```

## Development Notes

- Migration types are versioned strings (e.g. `v005_v006`) — add new ones for each breaking change release
- Always use `--dryRun=true` when testing locally to avoid modifying files
- Build artifacts go to `build/` — never commit them
- Each new migration type needs corresponding tests in `test/`
