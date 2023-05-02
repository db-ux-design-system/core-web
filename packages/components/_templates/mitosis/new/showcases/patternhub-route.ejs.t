---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/data/routes.ts` : null %>"
after: 	const componentChildren = \[
---
			{
				label: 'TODO: Add to specific category; DB<%= h.changeCase.pascal(name) %>',
				name: '<%= name %>',
			},
