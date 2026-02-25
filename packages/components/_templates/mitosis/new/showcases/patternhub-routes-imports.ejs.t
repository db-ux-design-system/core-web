---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/routes.tsx` : null %>"
before: import Components from './components.json';
---
import <%= h.changeCase.pascal(name) %>Showcase from '@components/components/<%= name %>/showcase/<%= name %>.showcase';
