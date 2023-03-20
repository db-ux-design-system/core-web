---
inject: true
to: ../../showcases/vue-showcase/src/utils/navigation-items.ts
after: navigationItems
---
{ path: '/<%= name %>', label: '<%= h.changeCase.pascal(name) %>', component: <%= h.changeCase.pascal(name) %> },
