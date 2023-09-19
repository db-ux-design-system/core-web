---
inject: true
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/app.module.ts` : null %>"
before: NgModule
---
import { <%= h.changeCase.pascal(name) %>Component } from './components/<%= name %>/<%= name %>.component';
