# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/utils/navigation-item.ts` : null %>"
prepend: true
---
import { <%= h.changeCase.pascal(name) %>Component } from '../components/<%= name %>/<%= name %>.component';
