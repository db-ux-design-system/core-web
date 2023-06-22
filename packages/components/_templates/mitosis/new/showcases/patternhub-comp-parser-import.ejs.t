---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/components/component-parser/index.tsx` : null %>"
after: from 'react'
---
import DB<%= h.changeCase.pascal(name) %> from '../src/components/<%= name %>/<%= name %>';
