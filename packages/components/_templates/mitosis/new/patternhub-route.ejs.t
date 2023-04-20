---
inject: true
to: ../../showcases/patternhub/data/routes.ts
after: 	const componentChildren = \[
skip_if: '/components/<%= name %>'
---
			{
				label: 'TODO: Add to specific category; DB<%= h.changeCase.pascal(name) %>',
				name: '<%= name %>',
			},
