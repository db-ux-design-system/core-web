---
inject: true
to: "<%= (!subComponent && showcases) ? `../../showcases/patternhub/data/routes.tsx` : null %>"
after: const nameComponentMap = {
---
	'<%= name %>': <<%= h.changeCase.pascal(name) %>Showcase isPatternhub />,
