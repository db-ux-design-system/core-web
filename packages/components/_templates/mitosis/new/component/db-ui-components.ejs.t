---
inject: true
to: src/styles/db-ui-components.scss
before: angular-workaround
---
@forward "../components/<%= name %>/<%= name %>";
