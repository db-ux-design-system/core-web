---
inject: true
to: scripts/post-build/components.js
after: getComponents
skip_if: <%= name %>
---
  {
    name: "<%= name %>",
    defaultStylePath: "components/<%= name %>/<%= name %>.css"
  },
