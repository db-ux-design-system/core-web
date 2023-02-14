---
inject: true
to: ../../showcases/react/showcase/src/utils/navigation-item.tsx
before: export type NavigationItem = {
skip_if: import <%= h.changeCase.pascal(name) %>Component from '../components/<%= name %>';
---
import <%= h.changeCase.pascal(name) %>Component from '../components/<%= name %>';
