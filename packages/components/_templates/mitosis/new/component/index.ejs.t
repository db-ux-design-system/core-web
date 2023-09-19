---
to: src/components/<%= name %>/index.ts
---
export { default as DB<%= h.changeCase.pascal(name) %> } from "./<%= name %>";
