---
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

fix: resolve `ERR_UNSUPPORTED_DIR_IMPORT` in strict ESM environments like Vitest

Relative imports in the generated outputs now carry explicit `.js` / `/index.js`
extensions, added during Mitosis generation. The React output additionally
compiles with `module`/`moduleResolution: "node16"` (and `jsx: "react-jsx"`,
`target: "es2022"`) so missing extensions are caught at compile time. The
emitted React JS therefore uses the `react/jsx-runtime` transform and es2022
syntax (React 19 compatible).
