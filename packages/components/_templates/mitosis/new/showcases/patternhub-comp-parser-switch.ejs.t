---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/components/component-parser/meta-navigation.tsx` : null %>"
before: hygen
---
	if (type === '<%= name %>') {
		return (
			<DB<%= h.changeCase.pascal(name) %> className={className} {...props}>
				{resolvedContent}
			</DB<%= h.changeCase.pascal(name) %>>
		);
	}
