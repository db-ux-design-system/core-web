---
inject: true
to: src/index.ts
append: true
skip_if: components/<%= name %>
---
export * from "./components/<%= name %>";
