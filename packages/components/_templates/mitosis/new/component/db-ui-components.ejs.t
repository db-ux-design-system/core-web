---
inject: true
to: src/styles/db-ui-components.scss
before: angular-workaround
---
@use "../components/<%= name %>/<%= name %>" as *;
