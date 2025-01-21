# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: "<%= showcases ? `../../showcases/shared/${name}.json` : null %>"
---
[
	{
		"name": "Density",
		"examples": [
			{
				"name": "Functional",
				"density": "functional",
				"props": {}
			},
			{
				"name": "(Default) Regular",
				"density": "regular",
				"props": {}
			},
			{
				"name": "Expressive",
				"density": "expressive",
				"props": {}
			}
		]
	}
]
