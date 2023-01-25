---
inject: true
to: src/styles/db-ui-components.scss
append: true
skip_if: components/<%= name %>
---
@use "components/<%= name %>/<%= name %>" as *;
