---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/components/component-parser/index.tsx` : null %>"
prepend: true
---
import { DB<%= h.changeCase.pascal(name) %> } from '../../../../output/react/src/index';
