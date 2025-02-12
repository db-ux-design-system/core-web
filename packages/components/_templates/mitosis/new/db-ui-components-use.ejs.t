---
inject: true
to: src/styles/index.scss
prepend: true
skip_if: components/<%= name %>
---
@forward "../components/<%= name %>/<%= name %>";
