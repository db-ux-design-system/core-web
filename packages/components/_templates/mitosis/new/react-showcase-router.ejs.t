---
inject: true
to: ../../showcases/react-showcase/src/utils/navigation-item.tsx
after: NAVIGATION_ITEMS
---
{ path: '<%= name %>', label: '<%= h.changeCase.pascal(name) %>', component: <<%= h.changeCase.pascal(name) %>Component /> },
