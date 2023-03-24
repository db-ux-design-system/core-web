---
inject: true
to: ../../showcases/angular-showcase/src/app/app.module.ts
before: NgModule
---
import { <%= h.changeCase.pascal(name) %>Component } from "./components/<%= name %>/<%= name %>.component";
