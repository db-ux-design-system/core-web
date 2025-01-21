# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: "<%= showcases ? `../../showcases/react-showcase/src/utils/navigation-item.tsx` : null %>"
after: NAVIGATION_ITEMS
---
{ path: '<%= name %>', label: '<%= h.changeCase.pascal(name) %>', component: <<%= h.changeCase.pascal(name) %>Component /> },
