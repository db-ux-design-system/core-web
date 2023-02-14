---
inject: true
to: ../../showcases/react-showcase/src/utils/navigation-item.tsx
prepend: true
---
import <%= h.changeCase.pascal(name) %>Component from '../components/<%= name %>';
