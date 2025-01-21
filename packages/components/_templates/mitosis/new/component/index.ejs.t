# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: src/components/<%= name %>/index.ts
---
export { default as DB<%= h.changeCase.pascal(name) %> } from "./<%= name %>";
