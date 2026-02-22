---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/components.json` : null %>"
after: \[
---
	{
		"label": "TODO: Add to specific category; DB<%= h.changeCase.pascal(name) %>",
		"name": "<%= name %>",
	},
