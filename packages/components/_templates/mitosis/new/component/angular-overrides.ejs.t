---
to: overrides/angular/src/components/<%= name %>/index.ts
---
export { DB<%= h.changeCase.pascal(name) %>, DB<%= h.changeCase.pascal(name) %>Module } from "./<%= name %>";
