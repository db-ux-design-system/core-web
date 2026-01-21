---
inject: true
to: "<%= showcases ? `../../showcases/vue-showcase/src/utils/navigation-items.ts` : null %>"
after: "export const navigationItems: NavItem\\[\\] = \\["
---
	{
		path: '/<%= name %>',
		label: '<%= h.changeCase.pascal(name) %>',
		component: <%= h.changeCase.pascal(name) %>
	},
