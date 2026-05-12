---
name: "db-ux"
displayName: "DB UX Design System"
description: "Comprehensive DB UX Design System v3 integration for implementing UI components, migrating legacy v2 code to v3, and generating project-specific design system rules. Use when building UI with DB UX components, migrating from DB UI v2, or establishing coding conventions for DB UX projects."
keywords:
    [
        "db-ux",
        "design system",
        "component",
        "ui",
        "deutsche bahn",
        "migration",
        "v2",
        "v3",
        "implement",
        "generate code",
        "rules",
        "guidelines",
        "db-button",
        "db-input",
        "tokens",
        "design tokens"
    ]
author: "DB UX Design System Team"
---

# DB UX Design System

## Overview

This Power provides three core capabilities for working with the DB UX Design System v3:

1. **Implement Component** — Build production-ready UI using DB UX components, design tokens, and icons
2. **Migrate to v3** — Refactor legacy DB UI v2 code (CSS classes, Web Components, color tokens) to DB UX v3
3. **Create DB UX Rules** — Generate project-specific rules that guide consistent DB UX usage

## When to Use This Power

Activate this Power when the user:

- Wants to build UI using DB UX components (DBButton, DBInput, DBCard, etc.)
- Mentions: implement component, build UI, create form, generate code with DB UX
- Mentions: migrate, v2 to v3, cmp-_, elm-_, rea-_, db-color-_, legacy components
- Mentions: create rules, set up DB UX guidelines, customize design system conventions
- Uses `@db-ux/react-core-components`, `@db-ux/ngx-core-components`, `@db-ux/v-core-components`, or `@db-ux/wc-core-components`

## Available MCP Tools

The DB UX MCP server provides these tools:

| Tool                           | Description                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------- |
| `list_components`              | Lists all available DB UX components (e.g. "button", "input")                 |
| `get_component_props`          | Returns all props, types, and required attributes for a component             |
| `get_component_details`        | Lists available example names for a component                                 |
| `get_example_code`             | Returns generated framework-specific source code for a component example      |
| `list_design_token_categories` | Returns available design token categories (colors, spacing, typography, etc.) |
| `get_design_tokens`            | Returns CSS custom properties for a given token category                      |
| `list_icons`                   | Returns all available icon names                                              |
| `docs_search`                  | Searches component and foundation documentation                               |
| `list_migration_guides`        | Lists all available migration guides                                          |
| `get_migration_guide`          | Returns the full content of a specific migration guide                        |
| `scan_v2_migration`            | Scans a file for v2 patterns and returns a migration plan with line numbers   |
| `list_visuals`                 | Lists available visual reference names                                        |
| `get_visual_reference`         | Returns a visual reference image for layout context                           |

## Steering

Load the appropriate workflow based on the user's intent:

- **Implementing UI with DB UX components** → `readPowerSteering("db-ux", "implement-component.md")`
- **Migrating v2 code to v3** → `readPowerSteering("db-ux", "migrate-to-v3.md")`
- **Creating project-specific DB UX rules** → `readPowerSteering("db-ux", "create-db-ux-rules.md")`

## Skills

For focused, self-contained tasks, load the appropriate skill directly:

| Skill                                                                     | When to use                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [db-ux-implement-component](../skills/db-ux-implement-component/SKILL.md) | Build UI in a consuming application using DB UX components          |
| [db-ux-migrate-to-v3](../skills/db-ux-migrate-to-v3/SKILL.md)             | Migrate legacy DB UI v2 code (`cmp-*`, `elm-*`, `db-color-*`) to v3 |
| [db-ux-create-rules](../skills/db-ux-create-rules/SKILL.md)               | Generate project-specific agent rules for a DB UX project           |
| [db-ux-add-eslint-rule](../skills/db-ux-add-eslint-rule/SKILL.md)         | Add a new rule to `@db-ux/core-eslint-plugin`                       |
| [db-ux-develop-component](../skills/db-ux-develop-component/SKILL.md)     | Develop a new component in the design system monorepo using Mitosis |

## Prerequisites

- DB UX MCP server must be connected and accessible
- For framework-specific components: the appropriate `@db-ux/*-core-components` package must be installed
- For migration: the source file(s) to migrate must be accessible

## Quick Usage Examples

### Implement a Component

User: "Create a login form using DB UX components"

→ Load `implement-component.md` steering, then follow the discovery-first workflow: list components, load props and examples, resolve tokens and icons, then write code.

### Migrate Legacy Code

User: "Migrate this file from DB UI v2 to DB UX v3: src/components/Button.tsx"

→ Load `migrate-to-v3.md` steering, then scan the file, load the relevant migration guides, and apply changes.

### Create DB UX Rules

User: "Create DB UX rules for my React project"

→ Load `create-db-ux-rules.md` steering, then analyze the codebase and generate project-specific conventions.

## Troubleshooting

### Component not found in `list_components`

Do not invent custom components or fall back to native HTML elements in a JavaScript framework context. Stop and inform the user that the component does not exist in the design system.

### Icon name not found in `list_icons`

Never guess icon names. Copy the exact name from the `list_icons` result. Using an unverified icon name will silently render nothing.

### Hardcoded colors or spacing

Always use `get_design_tokens` before writing any color or spacing value. Never use hex codes or pixel values directly — use `var(--db-*)` CSS custom properties.

### Migration scan returns no findings

The file may already be on v3, or it may use patterns not covered by the scanner. Verify manually using `docs_search` and the migration guides.
