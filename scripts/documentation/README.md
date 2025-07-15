# Generating `copilot-instructions.md`

This document describes the order in which scripts must be run to produce the `copilot-instructions.md` file, which combines omponent documentation, code examples and CSS variable references for both Copilot and developers.

## 1. Generate separate documentation files

### 1.1 Annotate components and generate component markdown

First, ensure your components are annotated with JSDoc (classes, properties, etc.). Then generate the component API documentation and merge snippets:

```jsonc
// In the components package.json
"docs:components": "typedoc --options ../../typedoc.json --tsconfig tsconfig.typedoc.json && node ../../scripts/merge-component-docs.js && rimraf docs/api/README.md"
```

- **Result:** `packages/components/src/components/[component]/[Component].md` and `.../model.md` files are generated

### 1.2 Generate code examples via Mitosis

Run the Mitosis build to extract code snippets (React, Angular, Vue) from your `*.docs.lite.tsx` files:

```jsonc
// In the components package.json
"generate:mitosis-snippets": "mitosis build -c configs/mitosis.snippet.config.cjs --src packages/components/src/components/**/docs/*.docs.lite.tsx"
```

- **Result:** Example files under `output/[react,angular,vue]/...` are generated

### 1.3 Annotate CSS variables and extract CSS docs

Annotate only the public `--db-...` CSS variables in each component's SCSS via SassDoc comments. Then extract these into Markdown:

```jsonc
// In the root package.json
"docs:extract-css": "node scripts/documentation/extract-css-vars.js"
```

- **Result:** `packages/components/src/components/[component]/[Component].css.md` files are generated

## 2. Merge files into component MDs

After generating the component documentation, code snippets, and CSS docs, merge them into the final component markdown files:

```jsonc
// In the components package.json
"merge:component-docs": "node scripts/documentation/merge-component-docs.js"
```

- **Result:** Each component's MD file now includes sections for API, code examples, and CSS variables

## 3. Generate `copilot-instructions.md`

Combine all of the above (component MDs, code snippets, CSS docs) into the final Copilot instructions file:

```jsonc
// In components package.json
"generate:copilot-instructions": "node scripts/generate-copilot-instructions.js"
```

- **Result:** `.github/copilot-instructions.md` updated and now contains merged sections for each component

## 4. Postinstall hook to copy instructions into Copilot instructions

After installation, ensure the Copilot instructions are copied into the user’s project:

```jsonc
// In components package.json
"postinstall": "node scripts/copy-copilot-instructions.js"
```

---

Following these steps in the described order will keep your documentation up-to-date and ensure Copilot has the latest context for all components, code examples and CSS variables.
