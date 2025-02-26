# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: index.html
after: <ul>
---
<li>
<a href="./src/components/<%= name %>/index.html">DB<%= h.changeCase.pascal(name) %></a>
</li>
