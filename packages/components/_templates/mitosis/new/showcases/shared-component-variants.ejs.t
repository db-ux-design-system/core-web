---
to: "<%= showcases ? `../../showcases/shared/${name}.json` : null %>"
---
[
	{
		"name": "Tonality",
		"examples": [
			{
				"name": "<%= name %> (functional)",
				"className": "db-ui-functional",
				"props": {
				}
			},
			{
				"name": "<%= name %> (regular)",
				"className": "db-ui-regular",
				"props": {
				}
			},
			{
				"name": "<%= name %> (expressive)",
				"className": "db-ui-expressive",
				"props": {
				}
			}
		]
	}
]
