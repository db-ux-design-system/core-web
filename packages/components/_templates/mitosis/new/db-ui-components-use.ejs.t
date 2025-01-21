# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: src/styles/db-ui-components.scss
prepend: true
skip_if: components/<%= name %>
---
@forward "../components/<%= name %>/<%= name %>";
