---
inject: true
to: ../../showcases/patternhub/data/routes.ts
after: 		link: '/components',
       		children: [
skip_if: link: '/components/<%= name %>'
---
			{
				label: 'TODO: Add to specific category; DB<%= h.changeCase.pascal(name) %>',
				link: '/components/<%= name %>',
				children: [
					{
						label: 'Examples',
						link: '/components/<%= name %>/examples'
					},
					{
						label: 'How to use',
						link: '/components/<%= name %>/how-to-use'
					}
				]
			},
