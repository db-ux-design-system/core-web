# Generating `copilot-instructions.md`

This document describes the order in which scripts must be run to produce the `copilot-instructions.md` file, which combines component documentation, code examples and CSS variable references for both Copilot and developers.

## 1. Generate separate documentation files

### 1.1 Annotate components and generate component Markdown

Annotate your components with [JSDoc](https://jsdoc.app/) (classes, properties, etc.) so TypeDoc can pick up API signatures. Then generate the component API documentation:

```jsonc
// packages/components/package.json
"docs:components": "typedoc --options ../../typedoc.json --tsconfig tsconfig.typedoc.json",
```

- **Result:** Generates Markdown files for each component and model (`packages/components/src/components/[component]/[Component].md` and `.../model.md`).

### 1.2 Generate code examples via Mitosis

Create a `*.docs.lite.tsx` file in the docs directory of the component containing examples for your component. Then run the Mitosis build to extract code snippets (React, Angular, Vue) from your `*.docs.lite.tsx` files:

```jsonc
// packages/components/package.json
"generate:mitosis-snippets": "mitosis build -c configs/mitosis.snippet.config.cjs --src packages/components/src/components/**/docs/*.docs.lite.tsx"
```

- **Result:** Example files under `output/[react,angular,vue]/src/components/[component]/docs/[component].docs.md` are generated.

### 1.3 Annotate CSS variables and extract CSS docs

Ensure, that all CSS variables of your component (starting with `--db-...` in the `[component].scss`) are annotated with [SassDoc](http://sassdoc.com/). Then run the script. It scans `packages/components/src/components` for subfolders (each component) and loads each component's SCSS file and transforms them into Markdown.

```jsonc
// package.json
"docs:extract-css": "node scripts/documentation/extract-css-vars.js"
```

- **Result:** `packages/components/src/components/[component]/[Component].css.md` files are generated.

## 2. Merge files into component Markdown files

After generating the component documentation, code snippets, and CSS docs, merge them into the final component Markdown files. Afterwards, the `docs/api` directory (and all files within) and the default API README file are removed, as those are not needed anymore.

```jsonc
// packages/components/package.json
"merge:component-docs": "node ../../scripts/documentation/merge-component-docs.js && rimraf docs/api/README.md"
```

- **Result:** Each component's Markdown file now includes sections for API, code examples, and CSS variables.

## 3. Generate `copilot-instructions.md`

Combine all of the above `[Component].md` files into the final Copilot instructions file:

```jsonc
// packages/components/package.json
"generate:copilot-instructions": "node scripts/generate-copilot-instructions.js"
```

- **Result:** `.github/copilot-instructions.md` updated and now contains sections for each component.

## 4. Postinstall hook to copy instructions into Copilot instructions

After installation, ensure the Copilot instructions got copied into the user’s project. If `postinstall` scripts are not executed automatically, you can copy the instructions manually.

```jsonc
// packages/components/package.json
"postinstall": "node scripts/copy-copilot-instructions.js"
```

---

Following these steps in the described order will keep your documentation up-to-date and ensure Copilot has the latest context for all components, code examples and CSS variables.
