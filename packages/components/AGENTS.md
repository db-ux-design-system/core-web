# @db-ux/core-components

Contains all component styles and the Mitosis source definitions that generate framework-specific outputs (Angular, React, Vue, Web Components).

## Key Facts

- **ESM only** (`"type": "module"`)
- Components are authored in Mitosis (`.lite.tsx`) and compiled to framework outputs
- Styles are authored in SCSS and compiled via Sass + PostCSS
- Framework outputs land in `output/react/`, `output/vue/`, `output/angular/`, `output/stencil/`

## Scripts

```bash
pnpm run build                  # Full build: Mitosis + assets + SCSS + PostCSS
pnpm run test                   # Run vitest
pnpm run generate:component     # Scaffold a new component (hygen)
pnpm run generate:docs          # Regenerate component docs
pnpm run generate:showcase      # Generate showcase files via Mitosis
pnpm run generate:stories       # Generate Storybook stories via Mitosis
pnpm run dev:html               # Dev server for plain HTML showcase
pnpm run dev:react              # Watch + recompile React output
pnpm run dev:vue                # Watch + recompile Vue output
pnpm run dev:angular            # Watch + recompile Angular output
```

## Structure

```text
src/
└── components/
    └── [component-name]/
        ├── [component].lite.tsx    # Mitosis source (framework-agnostic)
        ├── [component].scss        # Component styles
        ├── model.ts                # Prop definitions (TypeScript interfaces)
        ├── docs/                   # Component documentation
        ├── examples/               # Example use cases (see below)
        └── figma/                  # Figma Code Connect definitions (see below)
configs/
├── mitosis.config.cjs              # Base Mitosis config
├── mitosis.showcase.config.cjs     # Config for showcase generation
├── mitosis.storybook.config.cjs    # Config for Storybook generation
├── mitosis.figma.config.cjs        # Config for Figma Code Connect generation
├── mitosis.agent.config.cjs        # Config for agent documentation generation
├── plugins/
│   ├── storybook/                  # Storybook generation plugin
│   ├── figma/                      # Figma Code Connect generation plugin
│   ├── angular/                    # Angular-specific Mitosis plugins
│   ├── vue/                        # Vue-specific Mitosis plugins
│   ├── stencil/                    # Stencil-specific Mitosis plugins
│   └── agent/                      # Agent documentation plugin
scripts/
├── exec/                           # Per-framework post-Mitosis exec scripts
└── post-build/                     # ⚠️ DEPRECATED — see note below
```

## Examples (`src/components/**/examples/`)

Examples are the **single source of truth** for component usage. They are used to generate:

- **Showcase content** (via `mitosis.showcase.config.cjs`)
- **Storybook stories** (via `mitosis.storybook.config.cjs` + `configs/plugins/storybook/`)
- **Agent documentation** (via `mitosis.agent.config.cjs`)

When adding or modifying examples:

- Place example files inside `src/components/[name]/examples/`
- Use `data-sb-*` attributes to control Storybook story generation (e.g. controls, args, decorators)
- Examples must be valid Mitosis components — they go through the same compilation pipeline
- **Do NOT manually edit showcase files** — they are generated

## Figma Code Connect (`src/components/**/figma/`)

Each component can have a `figma/` folder with Figma Code Connect definitions. These are generated into `figma-code-connect/` via `mitosis.figma.config.cjs` and the `configs/plugins/figma/` plugin.

- Edit only the source files in `src/components/[name]/figma/`
- Never edit files in `figma-code-connect/` directly — they are generated

## Storybook Generation

Stories are generated from the `examples/` folder via the `configs/plugins/storybook/` plugin. The plugin reads `data-sb-*` attributes from example components to configure story metadata, controls, and args.

- `configs/plugins/storybook/get-meta-object.cjs` — builds the story `meta` export
- `configs/plugins/storybook/get-stories.cjs` — builds individual story exports
- `configs/plugins/storybook/storybook-plugin.cjs` — main Mitosis plugin entry

## Adding or Modifying Components

1. Use `pnpm run generate:component` to scaffold — never create component folders manually
2. **Check `src/shared/model.ts` first** before adding any new prop — it may already exist as a shared type (see Shared Props section below)
3. **Check other `**/model.ts`files** — if a similar prop exists in another component, consider moving it to`src/shared/model.ts` before reusing it
4. Edit `model.ts` for prop changes (breaking change if props are added/removed/renamed/retyped → needs `major` changeset)
5. Edit the `.lite.tsx` for template/logic changes
6. **Check `src/styles/internal/` first** before writing new SCSS — the style may already exist as a shared internal mixin/placeholder (see Shared Styles section below)
7. Edit the `.scss` for style changes
8. Add or update examples in `src/components/[name]/examples/`
9. Run `pnpm run build` to verify
10. Add a changeset for `@db-ux/core-components` and all framework output packages

**Do NOT manually edit showcase files** — they are generated from examples via Mitosis.

## Shared Styles (`src/styles/internal/`)

Before writing new SCSS for a component, **always check `src/styles/internal/`** for existing shared styles:

| File                      | What it covers                                          |
| ------------------------- | ------------------------------------------------------- |
| `_button-components.scss` | Ghost button appearance, button-like interactive states |
| `_form-components.scss`   | Shared form element styles (inputs, selects, textareas) |
| `_link-components.scss`   | Link-like appearance and states                         |
| `_tag-components.scss`    | Tag/badge/chip shared styles                            |
| `_stack-components.scss`  | Stack/layout shared styles                              |
| `_select-components.scss` | Select/dropdown shared styles                           |
| `_popover-component.scss` | Popover/tooltip positioning and appearance              |
| `_icon-passing.scss`      | Icon passing via data attributes                        |
| `_custom-elements.scss`   | Custom element host/shadow styles                       |
| `_component.scss`         | Base component resets and defaults                      |
| `_db-puls.scss`           | DB Puls animation                                       |
| `_scrollbar.scss`         | Scrollbar styling                                       |

If a new component visually resembles an existing one (e.g. looks like a ghost button, a form field, or a tag), **use the shared internal styles** rather than duplicating the CSS. If a pattern appears in multiple components but has no shared file yet, **create a new `_[pattern].scss`** in `src/styles/internal/` and refactor the existing components to use it.

## Shared Props (`src/shared/model.ts`)

Before adding a new prop to a component's `model.ts`, **always check `src/shared/model.ts`** for existing shared types. Key shared types include:

- `GlobalProps` — `children`, `className`, `class`, `id`, `autofocus`, `propOverrides`
- `SemanticProps` — `semantic` (neutral, critical, informational, warning, successful, adaptive)
- `IconProps` / `IconLeadingProps` / `IconTrailingProps` — icon identifiers
- `ShowIconProps` / `ShowIconLeadingProps` / `ShowIconTrailingProps` — icon visibility toggles
- `SpacingProps` / `MarginProps` / `GapSpacingProps` — spacing and gap
- `SizeProps` — `size` (small, medium)
- `EmphasisProps` — `emphasis` (weak, strong)
- `OrientationProps` — `orientation` (horizontal, vertical)
- `WidthProps` / `ContainerWidthProps` — width variants
- `FormProps` / `BaseFormProps` / `FormMessageProps` / `FormTextProps` — all form-related props
- `LinkProps` — href, target, rel, referrerPolicy
- `PlacementProps` — popover/tooltip placement
- `PopoverProps` — delay, animation, width
- `TextProps` — `text` as alternative to slot
- `NoTextProps` — `noText` for icon-only variants
- `ActiveProps` — `active` state
- `AlignmentProps` — `alignment` (start, center)
- `OverflowProps` / `WrapProps` — text overflow and wrapping
- Event props: `ClickEventProps`, `InputEventProps`, `ChangeEventProps`, `FocusEventProps`, `ToggleEventProps`, `CloseEventProps`

If a prop is needed by multiple components and does not yet exist in `src/shared/model.ts`, **add it there** and import it in each component's `model.ts`. If an existing component already has a similar prop that should be shared, **move it to `src/shared/model.ts`** and update all affected `model.ts` files (this is a `major` changeset if the prop type changes).

## ⚠️ Deprecated: `scripts/post-build/`

The `scripts/post-build/` folder contains post-Mitosis transformations that run after code generation. **This folder is deprecated.**

- Do **not** add new code here
- New transformations must be implemented as Mitosis plugins in `configs/plugins/`
- Existing post-build logic will be migrated to plugins over time

## Changeset Rules

Changes in `packages/components/src` require a changeset for:
`@db-ux/core-components`, `@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components`

- `patch` — bug fix
- `minor` — new feature or example
- `major` — any prop in `model.ts` added, removed, renamed, or retyped
