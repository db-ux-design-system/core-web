---
inject: true
to: src/styles/db-ui-components.scss
after: angular-workaround
skip_if: db<%= name %>
---
db<%= name %>,
