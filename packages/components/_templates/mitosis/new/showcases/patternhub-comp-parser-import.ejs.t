# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/components/component-parser/index.tsx` : null %>"
before: } from '../../../../output/react/src/index';
---
,DB<%= h.changeCase.pascal(name) %>
