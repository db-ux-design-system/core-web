# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: src/index.ts
append: true
---
export * from "./components/<%= name %>";
