# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: "<%= showcases ? `../../showcases/vue-showcase/src/utils/navigation-items.ts` : null %>"
prepend: true
---
import <%= h.changeCase.pascal(name) %> from '../components/<%= name %>/<%= h.changeCase.pascal(name) %>.vue';
