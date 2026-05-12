# Create DB UX Rules

## Overview

This workflow helps you generate project-specific rules that guide AI agents to produce consistent, correct DB UX Design System v3 code. These rules encode your project's framework, installed packages, and conventions so that every UI task automatically follows DB UX standards.

## When to Use This Workflow

Use this workflow when:

- Starting a new project that uses DB UX components
- Onboarding an AI agent to an existing DB UX project
- Updating rules after a DB UX version upgrade
- Users explicitly request: "create DB UX rules", "set up design system guidelines", "generate rules for my project"

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Discover Installed Packages

Analyze the project's `package.json` (or workspace manifests in a monorepo) to identify which `@db-ux` packages are installed:

- `@db-ux/react-core-components` → framework: React
- `@db-ux/ngx-core-components` → framework: Angular
- `@db-ux/v-core-components` → framework: Vue
- `@db-ux/wc-core-components` → framework: Web Components
- `@db-ux/core-components` → framework: HTML/CSS only
- `@db-ux/db-theme` → Deutsche Bahn brand theme is required

### Step 2: Load the Full Component and Token Inventory

```text
list_components()
list_design_token_categories()
list_icons()
```

This gives you the complete list of available components, token categories, and icons to reference in the rules.

### Step 3: Analyze the Codebase

Before writing rules, inspect the project structure:

- **Component location**: Where are UI components placed? (`src/components/`, `app/ui/`, etc.)
- **Styling approach**: CSS Modules, SCSS, inline styles, utility classes?
- **Import patterns**: Path aliases (`@/`, `~`), barrel exports?
- **Framework version**: React 18/19, Angular 17+, Vue 3?
- **Existing DB UX usage**: Are components already used? Which ones?

### Step 4: Generate Rules

Create a rules file (`.github/copilot-instructions.md`, `.amazonq/rules/db-ux.md`, or `CLAUDE.md`) with the following sections:

#### Framework and Package Section

```markdown
## DB UX Design System

- Framework: [React | Angular | Vue | Web Components | HTML]
- Package: `@db-ux/[framework]-core-components`
- Import components from `@db-ux/[framework]-core-components`
- [If DB Theme installed]: Import DB Theme styles from `@db-ux/db-theme`
```

#### Component Usage Rules

```markdown
## Component Rules

- IMPORTANT: Always use DB UX components — never use native HTML interactive elements
- Replace `<button>` with `DBButton`, `<input>` with `DBInput`, `<select>` with `DBSelect`, `<a>` with `DBLink`, `<textarea>` with `DBTextarea`
- Use `DBStack`, `DBSection`, or `DBCard` for layout instead of bare `<div>` wrappers
- Components are located in `[COMPONENT_DIRECTORY]`
```

#### Token and Styling Rules

```markdown
## Styling Rules

- IMPORTANT: Never hardcode colors — always use `var(--db-color-*)` tokens
- IMPORTANT: Never hardcode spacing — always use `var(--db-spacing-*)` tokens
- Available token categories: [list from list_design_token_categories()]
- [If SCSS]: Use SCSS variables from `@db-ux/core-foundations`
```

#### Icon Rules

```markdown
## Icon Rules

- IMPORTANT: Never guess icon names — always verify with the MCP tool `list_icons`
- Icon names use underscores: `arrow_right`, not `arrow-right` or `arrowRight`
```

#### MCP Workflow Rules

```markdown
## MCP Workflow (required for every UI task)

1. Call `list_components` — confirm the component exists before using it
2. Call `get_component_props` — verify the prop API, never assume
3. Call `get_example_code` with framework `"[framework]"` — adapt the output, don't rewrite from scratch
4. Call `list_icons` before using any icon prop
5. Call `get_design_tokens` before using any color or spacing value
```

### Step 5: Save and Validate

Save the rules to the appropriate file for the AI agent being used:

| Agent             | File                                         |
| ----------------- | -------------------------------------------- |
| GitHub Copilot    | `.github/copilot-instructions.md`            |
| Amazon Q          | `.amazonq/rules/db-ux.md`                    |
| Claude Code       | `CLAUDE.md`                                  |
| Cursor / Windsurf | `.cursor/rules/db-ux.md` or `.windsurfRules` |

After saving, test with a simple component implementation task to verify the agent follows the rules.

## Example Output

### React Project Rules

```markdown
## DB UX Design System

- Framework: React
- Package: `@db-ux/react-core-components`
- Import: `import { DBButton, DBInput } from '@db-ux/react-core-components'`
- DB Theme installed: yes — import `@db-ux/db-theme/build/styles/db-theme.css`

## Component Rules

- IMPORTANT: Always use DB UX components — never use native `<button>`, `<input>`, `<a>`, `<select>`
- Replace native elements: `<button>` → `DBButton`, `<input>` → `DBInput`, `<a>` → `DBLink`
- Components live in `src/components/`

## Styling Rules

- IMPORTANT: Never hardcode colors — use `var(--db-color-*)` tokens
- IMPORTANT: Never hardcode spacing — use `var(--db-spacing-*)` tokens

## Icon Rules

- IMPORTANT: Never guess icon names — verify with `list_icons` MCP tool
- Icon names use underscores: `arrow_right`, `chevron_down`

## MCP Workflow

1. `list_components()` — confirm component exists
2. `get_component_props(name)` — verify prop API
3. `get_example_code(name, example, "react")` — use as base
4. `list_icons()` — verify icon names
5. `get_design_tokens(category)` — verify token values
```

## Common Issues

### Issue: Agent ignores the rules

**Solution:** Add `IMPORTANT:` prefix to critical rules. Ensure the rules file is in the correct location for the agent being used. Restart the IDE or agent client.

### Issue: Rules become outdated after a DB UX version upgrade

**Solution:** Re-run this workflow after upgrading. The MCP tools always return data for the currently installed version.

### Issue: Monorepo with multiple frameworks

**Solution:** Create separate rule sections per workspace, or separate rule files per package. Specify the framework explicitly in each section.
