---
inject: true
to: src/styles/db-ui-components.scss
prepend: true
skip_if: components/<%= name %>
---
@forward "../components/<%= name %>/<%= name %>";
