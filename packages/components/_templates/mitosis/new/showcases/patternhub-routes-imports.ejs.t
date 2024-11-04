---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/routes.tsx` : null %>"
before: import Components from './components.json';
---
import * as <%= h.changeCase.pascal(name) %>Code from '../components/code-docs/<%= name %>';
import <%= h.changeCase.pascal(name) %>Component from '../../react-showcase/src/components/<%= name %>';
