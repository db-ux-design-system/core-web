---
inject: true
to: src/db-ui-components.scss
append: true
skip_if: components/<%= name %>
---
@use "components/<%= name %>/<%= name %>" as *;
