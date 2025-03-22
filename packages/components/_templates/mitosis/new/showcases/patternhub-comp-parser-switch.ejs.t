# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
inject: true
to: "<%= showcases ? `../../showcases/patternhub/components/component-parser/index.tsx` : null %>"
before: hygen
---
	if (type === '<%= name %>') {
		return (
			<DB<%= h.changeCase.pascal(name) %> className={className} {...props}>
				{resolvedContent}
			</DB<%= h.changeCase.pascal(name) %>>
		);
	}
