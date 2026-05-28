---
name: "create-rules"
description: "Generates project-specific AI agent rules for consistent DB UX Design System v3 usage."

triggers:
    - "create DB UX rules"
    - "set up design system guidelines"
    - "generate rules for my project"
    - "onboard agent to DB UX"
    - "update DB UX rules after upgrade"

inputs:
    - name: project_root
      type: string
      required: true
      description: "Path to the project root directory containing package.json"
    - name: agent
      type: string
      required: false
      description: "Target agent: copilot, amazon-q, claude, cursor, windsurf (default: copilot)"

requires:
    - context: context/guidelines.md
      autoLoad: true

tools:
    - db-ux/list_components
    - db-ux/list_design_token_categories
    - db-ux/list_icons
    - db-ux/docs_search

outputs:
    - "{project_root}/.github/copilot-instructions.md"

on_error:
    max_retries: 3
    actions:
        - log: "Verify generated rules file is syntactically valid and all referenced components exist."
        - fallback: "If errors persist after 3 retries, report to user with full error output."
---

# Create DB UX Rules

## Pre-Conditions

1. `context/architecture.md` is loaded in context.
2. MCP server (`@db-ux/mcp-server`) is connected.
3. The project at `{project_root}` has a `package.json`.

## Workflow

### Phase 1: Discover Installed Packages

1. Read `{project_root}/package.json` (and workspace manifests if monorepo).
2. Identify installed `@db-ux` packages:
    - `@db-ux/react-core-components` → framework: React
    - `@db-ux/ngx-core-components` → framework: Angular
    - `@db-ux/v-core-components` → framework: Vue
    - `@db-ux/wc-core-components` → framework: Web Components
    - `@db-ux/core-components` → framework: HTML/CSS only
    - `@db-ux/db-theme` → Deutsche Bahn brand theme present
3. Record the detected framework and installed packages.

### Phase 2: Load Component and Token Inventory

1. Call `list_components()`. Record the full component list.
2. Call `list_design_token_categories()`. Record all categories.
3. Call `list_icons()`. Confirm icon naming convention (underscores).

### Phase 3: Analyze Codebase

1. Identify component location (e.g. `src/components/`, `app/ui/`).
2. Identify styling approach (CSS Modules, SCSS, utility classes).
3. Identify import patterns (path aliases, barrel exports).
4. Identify framework version (React 18/19, Angular 17+, Vue 3).
5. Check for existing DB UX usage patterns.

### Phase 4: Generate Rules File

1. Determine target file path based on `{agent}`:
    - `copilot` → `{project_root}/.github/copilot-instructions.md`
    - `amazon-q` → `{project_root}/.amazonq/rules/db-ux.md`
    - `claude` → `{project_root}/CLAUDE.md`
    - `cursor` → `{project_root}/.cursor/rules/db-ux.md`
    - `windsurf` → `{project_root}/.windsurfRules`
2. Write the rules file with these sections:
    - **Framework and Package**: Framework name, package name, import pattern, theme status.
    - **Component Rules**: Use DB UX components, never native HTML interactive elements. List component directory.
    - **Styling Rules**: Use `var(--db-color-*)` and `var(--db-spacing-*)` tokens. Never hardcode. List available categories.
    - **Icon Rules**: Never guess names. Use underscores. Verify with `list_icons`.
    - **MCP Workflow**: 5-step mandatory workflow (list_components → get_component_props → get_example_code → list_icons → get_design_tokens).

### Phase 5: Validate

1. Verify the generated file references only components that exist in `list_components()`.
2. Verify token category names match `list_design_token_categories()`.
3. Save the file to the determined path.

## Output Checklist

- [ ] `package.json` analyzed — framework and packages identified
- [ ] `list_components` called — component inventory loaded
- [ ] `list_design_token_categories` called — token categories loaded
- [ ] `list_icons` called — icon naming convention confirmed
- [ ] Codebase structure analyzed (component dir, styling, imports)
- [ ] Rules file generated with all 5 sections
- [ ] Rules file saved to correct agent-specific path
- [ ] All referenced components verified to exist

## Red Flags & Anti-Rationalizations

| Thought                               | Response                                                                               |
| ------------------------------------- | -------------------------------------------------------------------------------------- |
| "I'll just write generic rules"       | STOP. Rules must reflect the actual installed packages and framework.                  |
| "I'll skip the inventory step"        | STOP. Call `list_components` and `list_design_token_categories`. Ground rules in data. |
| "I'll assume the framework"           | STOP. Read `package.json`. Detect the framework from dependencies.                     |
| "I'll list some common icons"         | STOP. Call `list_icons`. Icon names must be exact.                                     |
| "One rules file works for a monorepo" | STOP. Create separate sections or files per workspace if multiple frameworks.          |
