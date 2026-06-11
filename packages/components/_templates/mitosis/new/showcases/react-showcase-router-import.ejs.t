---
inject: true
to: "<%= showcases ? `../../showcases/react-showcase/src/utils/navigation-item.tsx` : null %>"
prepend: true
---
import <%= h.changeCase.pascal(name) %>Showcase from '@components/components/<%= name %>/showcase/<%= name %>.showcase';
