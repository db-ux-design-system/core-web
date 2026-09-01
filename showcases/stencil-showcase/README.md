# Stencil Showcase

A standalone Vite-based showcase for Stencil web components (`@db-ux/wc-core-components`).

## Development

```bash
# Start dev server
pnpm --filter stencil-showcase run dev

# Build for production
pnpm --filter stencil-showcase run build

# Preview built output
pnpm --filter stencil-showcase run preview
```

## Architecture

- **Vite** as the build tool and dev server
- **Vanilla TypeScript** for routing and navigation
- **Hash-based routing** (`#/{category}/{component}`) for navigation between showcase pages
- **vite-plugin-static-copy** copies the pre-built Stencil bundle into the build output
- Each showcase page renders a `<component-showcase>` custom element tag (e.g., `<button-showcase>`)

## Scripts

| Script                  | Description                                  |
| ----------------------- | -------------------------------------------- |
| `dev`                   | Start Vite dev server with browser open      |
| `start`                 | Start Vite dev server                        |
| `build`                 | Build Stencil components then run Vite build |
| `preview`               | Serve built output via http-server           |
| `test:e2e`              | Run Playwright E2E tests                     |
| `test:visual-snapshots` | Run Playwright visual snapshot tests         |
| `test:aria-snapshots`   | Run Playwright ARIA snapshot tests           |
| `test:axe-core`         | Run axe-core accessibility tests             |
| `test:a11y-checker`     | Run accessibility checker tests              |
