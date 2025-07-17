# Generating `copilot-instructions.md`

This document describes the order in which scripts must be run to produce the `copilot-instructions.md` file, which combines component documentation, code examples and CSS variable references for both Copilot and developers.

## 1. Generate separate documentation files

### 1.1 Annotate components and generate component Markdown

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

```jsonc
// scripts/package.json
"copilot:typedoc": "typedoc --options ../typedoc.json --tsconfig tsconfig.typedoc.json",
```

- **Result:** Generates Markdown files for each component and model (`packages/components/src/components/[component]/[Component].md` and `.../model.md`).

### 1.2 Generate code examples via Mitosis

Create a `*.docs.lite.tsx` file in the docs directory of the component containing examples for your component. Then run the Mitosis build to extract code snippets (React, Angular, Vue) from your `*.docs.lite.tsx` files:

```jsonc
// packages/components/package.json (called from the scripts/package.json)
"generate:mitosis-snippets": "mitosis build -c configs/mitosis.snippet.config.cjs",
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

Then run the script. It scans `packages/components/src/components` for subfolders (each component) and loads each component's SCSS file and transforms them into Markdown.

```jsonc
// scripts/package.json
"copilot:extract-css": "node documentation/extract-css-vars.js",
```

- **Result:** `packages/components/src/components/[component]/[Component].css.md` files are generated.

## 2. Merge files into component Markdown files

After generating the component documentation, code snippets, and CSS docs, merge them into the final component Markdown files. Afterwards, the `docs/api` directory (and all files within) and the default API README file are removed, as those are not needed anymore.

```jsonc
// scripts/package.json
"copilot:merge-docs": "node documentation/merge-component-docs.js && rimraf docs/api/README.md",
```

- **Result:** Each component's Markdown file now includes sections for API, code examples, and CSS variables.

## 3. Generate `copilot-instructions.md`

Combine all of the above `[Component].md` files into the final Copilot instructions file:

```jsonc
// scripts/package.json
"copilot:generate-instructions": "node documentation/generate-copilot-instructions.js",
```

- **Result:** `.github/copilot-instructions.md` updated and now contains sections for each component.

## 4. Postinstall hook to copy instructions into Copilot instructions

After installation, ensure the Copilot instructions got copied into the user’s project. If `postinstall` scripts are not executed automatically, you can copy the instructions manually.

```jsonc
// packages/components/package.json
"postinstall": "node scripts/copy-copilot-instructions.js"
```

---

You don’t have to run each documentation script manually. Simply execute:

```jsonc
// root package.json
"copilot": "npm run copilot --workspace=scripts"
```

The copilot task will trigger the entire workflow, building component docs, code snippets, CSS-variable tables, merging everything, and updating copilot-instructions.md in one step.

---

**Open points**

- Annotate components with JSDoc (only Button is annotated so far)
- Add code examples to `*.docs.lite.tsx` files (only Button has examples so far)
- Add CSS variables to components (only Drawer has commented CSS variables so far)
- After adding comments, remove the part that only uses defined components (merge-components-docs.js, shouldProcessComponent)
- Generation of HTML examples does not work yet
- Foundations package is not yet documented and included into the process
- Formatting of the generated Markdown files has to be checked
