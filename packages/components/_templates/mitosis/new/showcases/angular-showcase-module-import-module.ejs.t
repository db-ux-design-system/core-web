---
inject: true
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/app.module.ts` : null %>"
after: imports
---
DB<%= h.changeCase.pascal(name) %>Module,
