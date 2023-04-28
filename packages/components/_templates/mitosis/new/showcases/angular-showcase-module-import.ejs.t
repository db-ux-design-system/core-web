---
inject: true
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/app.module.ts` : null %>"
before: output/angular/src
---
,DB<%= h.changeCase.pascal(name) %>Module
