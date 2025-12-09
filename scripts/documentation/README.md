# Generating docs for AI agents

This document describes the order in which scripts must be run to produce the `agent-instructions.md` file,
which combines component documentation, code examples and CSS variable references for both agent and developers.

## 1. Generate separate documentation files

### 1.1 Annotate components and generate component Markdown

> **Note:** This confuses copilot at the moment, we skip this step for now.

Annotate your components with [JSDoc](https://jsdoc.app/) (classes, properties, etc.) so TypeDoc can pick up API signatures:

````ts
/**
* Renders a configurable button element that works across multiple frameworks.
*
* @remarks
* Use `DBButton` for primary and secondary actions. Supports variants, sizes,
* icons, loading state, and ARIA helpers for accessibility.
*
* @param props - {@link DBButtonProps | Component props} controlling appearance and behavior.
* @returns A `<button>` element with the given props bound.
*
* @example
* ```tsx
* <DBButton variant="brand" size="large" icon="check">
*   Save
* </DBButton>
* ```
*/
export function DBButton(props: DBButtonProps): Element {
// ...
}

--- --- --- ---

/**
 * Visual variants supported by {@link DBButton}.
 */
export const ButtonVariantList = ['outlined', 'brand', 'filled', 'ghost'] as const;

/**
 * Type representing a single button variant.
 */
export type ButtonVariantType = typeof ButtonVariantList[number];
````

Then generate the component API documentation:

```bash
npm run agent:00_typedoc --workspace=scripts
```

- **Result:** Generates Markdown files for each component and model (`packages/components/src/components/[component]/[Component].md` and `.../model.md`).

### 1.2 Generate code examples via Mitosis

Create a `*.docs.lite.tsx` file in the docs directory of the component containing examples for your component.
Then run the Mitosis build to extract code snippets (React, Angular, Vue) from your `*.docs.lite.tsx` files:

```bash
npm run agent:00_mitosis-snippets --workspace=scripts
```

- **Result:** Example files under `output/[react,angular,vue]/src/components/[component]/docs/[component].docs.md` are generated.

### 1.3 Annotate CSS variables and extract CSS docs

Ensure, that all CSS variables of your component (starting with `--db-...` in the `[component].scss`) are annotated with [SassDoc](http://sassdoc.com/):

```scss
/// Sets the maximum height of the drawer
/// @propertyname max-block-size
/// @cssprop --db-drawer-max-height
/// @default calc(100% - #{variables.$db-spacing-fixed-xl})
max-block-size: var(
	--db-drawer-max-height,
	calc(100% - #{variables.$db-spacing-fixed-xl})
);
```

Then run the script:

```bash
npm run agent:00_extract-css --workspace=scripts
```

It scans `packages/components/src/components` for subfolders (each component) and loads each
component's SCSS file and transforms them into Markdown.

- **Result:** `output/docs/[component]/[Component].css.md` files are generated.

## 2. Merge files into component Markdown files

After generating the component documentation, code snippets, and CSS docs, merge them into the final component Markdown files.

```bash
npm run agent:merge-docs --workspace=scripts
```

- **Result:** Each component's Markdown file now includes sections for API, code examples, and CSS variables.
- The file is stored in the output folder `output/[target]/agent/[Component].md` folder.

## 3. Update all together

You don’t have to run each documentation script manually. Simply execute:

```bash
npm run agent --workspace=scripts
```

The agent task will trigger the entire workflow, building component docs, code snippets, CSS-variable tables, merging everything in one step.

---

**Open points**

- Annotate components with JSDoc (only Button is annotated so far)
- Add code examples to `*.docs.lite.tsx` files (only Button has examples so far)
- Add CSS variables to components (only Drawer has commented CSS variables so far)
- After adding comments, remove the part that only uses defined components (merge-components-docs.ts, shouldProcessComponent)
- Generation of HTML examples does not work yet
- Foundations package is not yet documented and included into the process
- Formatting of the generated Markdown files has to be checked
