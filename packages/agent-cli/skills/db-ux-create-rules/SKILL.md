---
name: db-ux-create-rules
description: Generates project-specific DB UX Design System rules for AI coding agents (GitHub Copilot, Amazon Q, Claude Code, Cursor). Use when the user asks to "create DB UX rules", "set up design system guidelines", "generate rules for my project", or wants to onboard an AI agent to a DB UX project.
disable-model-invocation: false
---

# Create DB UX Rules

## Skill Boundaries

- Use this skill when the deliverable is an agent rules file (`.github/copilot-instructions.md`, `.amazonq/rules/db-ux.md`, `CLAUDE.md`, etc.).
- If the user wants to build UI, switch to [db-ux-implement-component](../db-ux-implement-component/SKILL.md).
- If the user wants to migrate v2 code, switch to [db-ux-migrate-to-v3](../db-ux-migrate-to-v3/SKILL.md).

## Agent Rules File Reference

| Agent          | File                              |
| -------------- | --------------------------------- |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Amazon Q       | `.amazonq/rules/db-ux.md`         |
| Claude Code    | `CLAUDE.md`                       |
| Cursor         | `.cursor/rules/db-ux.mdc`         |
| Windsurf       | `.windsurfRules`                  |

## Required Workflow

### Step 1: Detect Installed Packages

Read `package.json` (or workspace manifests in a monorepo) to identify:

| Package                        | Framework               |
| ------------------------------ | ----------------------- |
| `@db-ux/react-core-components` | React                   |
| `@db-ux/ngx-core-components`   | Angular                 |
| `@db-ux/v-core-components`     | Vue                     |
| `@db-ux/wc-core-components`    | Web Components          |
| `@db-ux/core-components`       | HTML/CSS only           |
| `@db-ux/db-theme`              | DB brand theme required |
| `@db-ux/core-eslint-plugin`    | ESLint plugin installed |

### Step 2: Load Component and Token Inventory

```text
list_components()
list_design_token_categories()
list_icons()
```

### Step 3: Analyze Codebase

- Component location: `src/components/`, `app/ui/`, etc.
- Styling approach: CSS Modules, SCSS, utility classes?
- Import patterns: path aliases (`@/`, `~`)?
- Existing DB UX usage: which components are already used?

### Step 4: Generate Rules

Write a rules file with these sections:

#### Package and Import Section

```markdown
## DB UX Design System

- Framework: [React | Angular | Vue | Web Components | HTML]
- Package: `@db-ux/[framework]-core-components`
- Import: `import { DBButton, DBInput } from '@db-ux/[framework]-core-components'`
- [If @db-ux/db-theme installed]: Import DB Theme styles from `@db-ux/db-theme`
```

#### Component Rules

```markdown
## Component Rules

- IMPORTANT: Always use DB UX components — never use native HTML interactive elements
- `<button>` → `DBButton`, `<input>` → `DBInput`, `<select>` → `DBSelect`, `<a>` → `DBLink`, `<textarea>` → `DBTextarea`
- Use `DBStack`, `DBSection`, `DBCard` for layout instead of bare `<div>` wrappers
- Components live in `[COMPONENT_DIRECTORY]`
```

#### Styling Rules

```markdown
## Styling Rules

- IMPORTANT: Never hardcode colors — use `var(--db-color-*)` tokens
- IMPORTANT: Never hardcode spacing — use `var(--db-spacing-*)` tokens
- Available token categories: [from list_design_token_categories()]
```

#### Icon Rules

```markdown
## Icon Rules

- IMPORTANT: Never guess icon names — verify with `list_icons` MCP tool
- Icon names use underscores: `arrow_right`, not `arrow-right` or `arrowRight`
```

#### ESLint Rules Section (if `@db-ux/core-eslint-plugin` installed)

```markdown
## ESLint Plugin

- `@db-ux/core-eslint-plugin` is installed — all recommended rules are active
- Key rules enforced: `button-type-required`, `form-label-required`, `tooltip-requires-interactive-parent`
- Do not suppress these rules without justification
```

#### MCP Workflow Section

```markdown
## MCP Workflow (required for every UI task)

1. `list_components()` — confirm component exists before using it
2. `get_component_props(name)` — verify prop API, never assume
3. `get_example_code(name, example, "[framework]")` — adapt output, don't rewrite
4. `list_icons()` — verify icon names before use
5. `get_design_tokens(category)` — verify token values before use
```

### Step 5: Save and Validate

Save to the correct file for the detected agent. If multiple agents are in use, generate all relevant files.

Test with a simple component task to verify the agent follows the rules.

## Checklist

- [ ] `package.json` read — framework and installed packages identified
- [ ] `list_components()` called — component inventory loaded
- [ ] `list_design_token_categories()` called — token categories listed
- [ ] Codebase analyzed — component location and styling approach known
- [ ] Rules file saved to correct location for the target agent
- [ ] ESLint section included if `@db-ux/core-eslint-plugin` is installed
- [ ] DB Theme section included if `@db-ux/db-theme` is installed

## Common Issues

**Agent ignores rules** → Add `IMPORTANT:` prefix to critical rules. Restart the IDE or agent client.

**Rules outdated after DB UX upgrade** → Re-run this skill. MCP tools always return data for the currently installed version.

**Monorepo with multiple frameworks** → Create separate rule sections per workspace, or separate files per package.
