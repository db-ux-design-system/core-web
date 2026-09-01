---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/components.json` : null %>"
after: \[
---
<% if (subComponent) { %>
	{
		"label": "DB<%= h.changeCase.pascal(name) %>",
		"name": "<%= name %>",
		"isHiddenInMenu": true
	},
<% } else { %>
	{
		"label": "TODO: Add to specific category; DB<%= h.changeCase.pascal(name) %>",
		"name": "<%= name %>",
	},
<% } %>
