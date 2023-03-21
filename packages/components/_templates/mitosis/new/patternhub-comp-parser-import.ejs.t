---
inject: true
to: ../../showcases/patternhub/components/component-parser/index.tsx
after: from 'react'
---
import DB<%= h.changeCase.pascal(name) %> from '../src/components/<%= name %>/<%= name %>';
