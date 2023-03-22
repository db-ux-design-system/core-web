---
inject: true
to: ../../showcases/angular-showcase/src/app/app.module.ts
after: imports
---
DB<%= h.changeCase.pascal(name) %>Module,
