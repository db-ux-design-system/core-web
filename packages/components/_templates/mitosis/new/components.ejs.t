---
inject: true
to: scripts/post-build/components.js
after: module.exports = \[
skip_if: <%= name %>
---
  {
    name: "<%= name %>",
    defaultStylePath: "components/<%= name %>/<%= name %>.css",
	overwrites: {
		vue: [
			{
				from: 'import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";',
				to: ''
			}
		]
	}
  },
