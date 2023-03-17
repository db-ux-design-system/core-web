---
inject: true
to: ../../showcases/patternhub/components/component-parser/index.tsx
before: hygen
---
	if (type === '<%= name %>') {
		return (
			<DB<%= h.changeCase.pascal(name) %> className={className} {...props}>
				{resolvedContent}
			</DBIcon>
		);
	}
