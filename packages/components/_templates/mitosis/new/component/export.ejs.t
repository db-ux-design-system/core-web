---
inject: true
to: src/index.ts
append: true
---
export * from "./components/<%= name %>";
export * from "./components/<%= name %>/model";
