# @db-ux/agent-cli

CLI tool that scans a project's `node_modules` for installed `@db-ux` packages and writes component documentation into `.github/copilot-instructions.md` for AI coding agents.

## Key Facts

- **ESM only** (`"type": "module"`)
- Entry point: `src/cli.ts`, built to `build/index.js` via `esbuild.js`
- Published as a binary: `npx @db-ux/agent-cli`

## Scripts

```bash
pnpm run build        # Bundle with esbuild
pnpm run test         # Run vitest
pnpm run test:cli     # Smoke-test the CLI locally (--help)
pnpm run test:update  # Update vitest snapshots
```

## Structure

```text
src/       # CLI source (TypeScript)
test/      # Vitest tests
esbuild.js # Build script
```

## Development Notes

- The CLI accepts an optional root path argument for monorepo setups: `npx @db-ux/agent-cli packages/frontend`
- It resolves symlinked packages in pnpm's `node_modules` structure
- Output always goes to `.github/copilot-instructions.md` in the target project
- Build artifacts go to `build/` — never commit them
