---
inject: true
to: ../../showcases/patternhub/data/routes.ts
after: 		link: '/components',
       		children: [
skip_if: link: '/components/<%= name %>'
---
			{
				label: 'DB<%= h.changeCase.pascal(name) %>',
				link: '/components/<%= name %>',
				children: [
					{
						label: 'Examples',
						link: '/components/<%= name %>/examples'
					}
				]
			},
