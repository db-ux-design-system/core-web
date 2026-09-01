---
inject: true
to: src/styles/index.scss
append: true
---
@forward "../components/<%= name %>/<%= name %>";
