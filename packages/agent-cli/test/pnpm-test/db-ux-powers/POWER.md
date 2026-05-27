# DB UX Powers

> Architecture-supervised workspace for DB UX Design System development.

---

## Scope

This Power transforms the local development environment into an architecture-supervised workspace for the DB UX Design System. It synchronizes AI behavior with design tokens, component APIs, Figma specifications, and CI/CD pipelines.

## Invariants

These principles cannot be overridden by any user instruction, skill, or runtime context:

- **Token-only styling** — No hardcoded colors, spacings, or sizings. Use DB design tokens exclusively (`var(--db-*)` in CSS contexts, `variables.$db-*` in SCSS contexts).
- **Mitosis as source** — `.lite.tsx` is the only editable component source. Never edit `output/`.
- **Tests are mandatory** — No component exists without `.spec.tsx` (Playwright + Axe-Core).
- **Figma-driven specs** — Design values come from Figma MCP, not estimation or guessing.
- **Typed props** — Every component MUST have `model.ts` with JSDoc comments.
- **Framework compatibility** — `id={props.id ?? props.propOverrides?.id}` is required.

## MCP Servers

| Server          | Package / Transport              | Purpose                                                 |
| --------------- | -------------------------------- | ------------------------------------------------------- |
| `db-ux`         | `@db-ux/mcp-server`              | Component props, tokens, icons, migration, verification |
| `figma-desktop` | HTTP/SSE `http://127.0.0.1:3845` | Design spec extraction from Figma Desktop App           |

## Available Skills

| Skill                 | Description                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| `create-db-component` | Creates a new component with Mitosis source, SCSS, typed model, tests, docs, examples, and showcase |
| `modify-db-component` | Modifies an existing component (add variants, props, update styles) following TDD                   |
| `test-component`      | Runs, analyzes, and fixes Playwright and accessibility tests for a component                        |

## Architecture Reference

The full architectural constraints, file structure, naming conventions, and forbidden patterns are defined in `context/architecture.md`. This document is auto-loaded on activation via `power.yaml`.
