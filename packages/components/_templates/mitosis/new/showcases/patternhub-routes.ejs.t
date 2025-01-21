# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/routes.tsx` : null %>"
after: const nameComponentMap = {
---
	'<%= name %>': <<%= h.changeCase.pascal(name) %>Component slotCode={<%= h.changeCase.pascal(name) %>Code} />,
