# Code Review Conventions

Shared code review conventions for the DB UX Design System. These rules apply across all AI tools (Kiro, GitHub Copilot, Amazon Q, Codex) and human reviewers.

## Project-Specific Checks

Based on the DB UX Design System conventions:

- **Accessibility** — Are changes accessible? Semantic HTML elements, ARIA attributes as complementary annotations if needed, keyboard navigation, screen reader support
- **Design Tokens** — Are hardcoded values used instead of design tokens from foundations?
- **Cross-Framework** — If component changes: do they work across React, Angular, Vue, Web Components?
- **CSS/SCSS** — No `!important` abuse, proper use of CSS custom properties, no hardcoded colors/spacing
- **TypeScript** — No `any` types, proper type narrowing, follow existing project patterns (type aliases for component props)
- **Changesets** — Were changes made in `packages/components/src` or `packages/foundations/scss`? A changeset should be present with all required packages listed.

## Mitosis & Component Architecture

If the PR touches component source files (`.lite.tsx`, `model.ts`, SCSS, tests):

### Mitosis Rules

- `.lite.tsx` is the ONLY editable component source — never edit `output/` directly
- No complex function calls inside JSX property bindings that break code generation — simple helper calls like `cls(...)`, `getBooleanAsString(...)`, `getBoolean(...)` are acceptable as they are established patterns in the codebase
- No `_ref` access inside `onMount` — use `onUpdate` with the initialized-pattern
- No getter functions in `useStore` for derived values — compute in `onMount`/`onUpdate`
- Internal state variables use `_` prefix (e.g. `_active`), never `internal`
- Element ID binding: `id={props.id ?? props.propOverrides?.id}` — never `id={props.id}` alone

### SCSS Rules

- Include `@use "@db-ux/core-foundations/build/styles/variables";` when using design token variables (some files may need other imports first, e.g. `@use "sass:map"`)
- Root selector: `.db-<name>`
- Define styles for states via standard selectors or aria-annotations, like e.g. `:disabled` instead of `.disabled` and `[aria-current="page"]` instead of `.active`
- Variants via `data-*` attribute selectors: `&[data-variant="brand"]`
- No `border: 0` or `border: none` — use `@extend %transparent-border` (support for High Contrast Mode)
- No manual `cursor: pointer` — use `@include helpers.hover { ... }`
- No excessive nesting — keep it readable and maintainable
- No `!important`
- No hardcoded colors, spacings, sizings, or border-radius values, but only SCSS Variables provided by Foundations
- Do NOT use utility-classes like tailwind.

### model.ts Rules

- Props type: `DB<ComponentName>Props` (use type aliases — this is the established project pattern)
- Every prop MUST have a JSDoc comment
- Variant lists MUST be `as const` arrays with derived union types

### Testing Rules (for public standalone components)

- Every public component MUST have a `.spec.tsx` (Playwright + Axe-Core)
- Include representative screenshot tests with `toHaveScreenshot()` (visual regression) — exhaustive variant coverage is handled by the showcase/E2E snapshot layer
- Include `ariaSnapshot()` + `toMatchSnapshot()` (accessibility structure)
- Wrap tests in `test.describe('DB<Name>', () => { ... })`
- Use `DEFAULT_VIEWPORT` for viewport setting
- Internal/helper components (e.g. `custom-select-dropdown`, `tab-item`) may be tested through their parent component instead of standalone specs

### File Structure (for public standalone components)

- Check that new public components have the complete file tree: `.lite.tsx`, `.scss`, `.spec.tsx`, `model.ts`, `index.ts`, `index.html`, `docs/`, `examples/`, `showcase/`
- Internal/helper components only need: source, style, model, and index files
- `index.ts` export path must be `./<name>` WITHOUT `.lite` suffix
- Do NOT re-export `./model` in `index.ts`

### Forbidden Patterns (immediate rejection)

- Inline styles with pixel values
- Invented icon names (must verify via `@db-ux/mcp-server` MCP `list_icons`)
- Editing generated files in `output/`
- Skipping `model.ts`
- Implementing designs without referencing the Figma URL in the PR description or linked issue
- `aria-disabled` on native `<button>` (use native `disabled`)
- Excluding files in `mitosis.storybook.config.cjs` — fix the example instead

## Review Checklist

### Code Quality

- [ ] No hardcoded values, magic numbers, or debug code
- [ ] No `any` types in TypeScript
- [ ] Proper error handling
- [ ] No code duplication with existing utilities

### Design System Compliance

- [ ] Uses design tokens from foundations (`variables.$db-*` in SCSS, `var(--db-*)` in CSS)
- [ ] No hardcoded colors, spacing, sizing, or border-radius values
- [ ] Follows component API conventions (consistent prop naming: `DB<Name>Props`)
- [ ] Accessible (WCAG 2.1 AA compliance patterns)
- [ ] Works across supported browsers (check `.browserslistrc`)
- [ ] Mitosis source (`.lite.tsx`) is the only component source edited — not `output/`

### Testing

- [ ] Tests added/updated for the changes
- [ ] Edge cases covered
- [ ] Tests pass in CI
- [ ] If component change: representative variants tested with `toHaveScreenshot()` and `ariaSnapshot()`

### Documentation & Changesets

- [ ] PR title follows conventional commits (`feat:`, `fix:`, `chore:`)
- [ ] Changeset added if `packages/components/src` or `packages/foundations/scss` changed
- [ ] `AGENTS.md` updated if architecture/conventions changed in a package

### Framework Coverage

- [ ] Changes in `packages/components/src` work for all framework outputs
- [ ] Examples updated in `packages/components/src/components/[name]/examples/`

## Common Anti-Patterns to Flag

### TypeScript

- Using `any` instead of `unknown` with type guards
- Missing error handling in async functions
- Floating promises (unhandled `Promise`)
- Overly complex generics where simpler types work
- Missing JSDoc comments on props in `model.ts`

### CSS/SCSS

- `transition: all` (specify properties explicitly)
- Excessive nesting that hurts readability
- Using `!important`
- Hardcoded colors/spacing instead of design tokens (`variables.$db-*` or `var(--db-*)`)
- Animating layout properties (width, height, top, left)
- `border: 0` or `border: none` instead of `@extend %transparent-border`
- Manual `cursor: pointer` instead of `@include helpers.hover { ... }`
- Missing `@use "@db-ux/core-foundations/build/styles/variables";` when token variables are used
- Overriding `padding`/`font-size` via `[data-density="..."]` (tokens should resolve automatically)
- Utility-classes (tailwind-style) instead of proper SCSS with design tokens

### Mitosis / Components

- Complex function calls inside JSX property bindings that break code generation (simple helpers like `cls(...)` are fine)
- Accessing `_ref` inside `onMount` instead of `onUpdate` with initialized-pattern
- Getter functions in `useStore` for derived values
- Internal state without `_` prefix
- Missing `propOverrides?.id` fallback in element ID binding
- Props without proper TypeScript types in `model.ts`
- Missing accessibility attributes (aria-label, role, etc.)
- Exposing dedicated `ariaLabel`/`ariaDescribedby` props (frameworks handle these natively)
- `event.preventDefault()` in button click handlers without form-submission context
- Using `name` prop for labels (use `label` — `name` is for form-grouping)
- Editing generated files in `output/` instead of `.lite.tsx` source
- Inline styles instead of proper CSS classes

### Architecture

- Code in wrong package (foundation code in components, or vice versa)
- Breaking changes without a major changeset
- New dependencies without justification
- Mixing concerns (UI logic + business logic in same file)
- Adding files to `exclude` in `mitosis.storybook.config.cjs` (fix the example instead)
- Missing component files (incomplete file structure for public components)

## What NOT to Review Manually

These are handled by tooling (linters, formatters, CI):

- Code formatting (Prettier)
- Import ordering
- Linting violations (ESLint, Stylelint)
- Unused files, dependencies, and exports (Knip)
- Spelling (CSpell)
- Formatting/ordering of `pnpm-lock.yaml` (auto-generated by pnpm — CI verifies it is consistent with the manifests)

> **Exception — review lockfile resolution changes.** CI can confirm that `pnpm-lock.yaml` is syntactically consistent with the `package.json` manifests, but it cannot tell whether a lockfile-only upgrade or a changed resolution was intended. A PR can alter the transitive code installed in builds without touching any `package.json`. When reviewing lockfile changes:
>
> - Compare the changed importers and dependency entries against the manifests.
> - Flag any resolution, version, or integrity change that has no corresponding `package.json` change or explanation.
> - Treat unexplained transitive upgrades as a supply-chain risk and ask for justification (remember dependencies are pinned to exact versions — see `docs/dependency-update-strategy.md`).
