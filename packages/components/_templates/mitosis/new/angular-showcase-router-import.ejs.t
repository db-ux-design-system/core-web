---
inject: true
to: ../../showcases/angular-showcase/src/app/utils/navigation-item.ts
prepend: true
---
import { <%= h.changeCase.pascal(name) %>Component } from '../components/<%= name %>/<%= name %>.component';
