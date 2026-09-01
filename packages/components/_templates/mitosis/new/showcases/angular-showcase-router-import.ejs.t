---
inject: true
to: "<%= (!subComponent && showcases) ? `../../showcases/angular-showcase/src/app/utils/navigation-item.ts` : null %>"
prepend: true
---
import { <%= h.changeCase.pascal(name) %>Component } from '../components/<%= name %>.component';
