---
inject: true
to: "<%= showcases ? `../../showcases/react-showcase/src/utils/navigation-item.tsx` : null %>"
prepend: true
---
import <%= h.changeCase.pascal(name) %>Component from '../components/<%= name %>';
