---
inject: true
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/utils/navigation-item.ts` : null %>"
after: NAVIGATION_ITEMS
---
{ path: '<%= name %>', label: '<%= h.changeCase.pascal(name) %>', component: <%= h.changeCase.pascal(name) %>Component },
