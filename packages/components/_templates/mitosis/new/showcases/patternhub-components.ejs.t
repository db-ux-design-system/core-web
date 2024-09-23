---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/components.json` : null %>"
before: \[
---
			{
				"label": "TODO: Add to specific category; DB<%= h.changeCase.pascal(name) %>",
				"name": "<%= name %>",
			},
