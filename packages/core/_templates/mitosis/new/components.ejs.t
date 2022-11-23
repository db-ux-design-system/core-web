---
inject: true
to: scripts/post-build/components.js
after: module.exports = \[
skip_if: <%= name %>
---
  {
    name: "<%= name %>",
    defaultStylePath: "components/<%= name %>/<%= name %>.css",
  },
