---
inject: true
to: ../../showcases/vue-showcase/src/utils/navigation-items.ts
prepend: true
---
import <%= h.changeCase.pascal(name) %> from '../components/<%= name %>/<%= h.changeCase.pascal(name) %>.vue';
