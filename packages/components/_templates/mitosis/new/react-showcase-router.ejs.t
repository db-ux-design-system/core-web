---
inject: true
to: ../../showcases/react/showcase/src/utils/navigation-item.tsx
after: export const NAVIGATION_ITEMS: NavigationItem[] = [
skip_if: { path: '<%= name %>', label: '<%= h.changeCase.pascal(name) %>', component: <<%= h.changeCase.pascal(name) %>Component /> },
---
{ path: '<%= name %>', label: '<%= h.changeCase.pascal(name) %>', component: <<%= h.changeCase.pascal(name) %>Component /> },
