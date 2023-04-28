---
inject: true
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/app.module.ts` : null %>"
after: declarations
---
<%= h.changeCase.pascal(name) %>Component,
