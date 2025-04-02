// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

/* We use this for IntelliJ IDEs to fetch xo config */
export default {
	eslintConfig: {
		parser: 'babel-eslint',
		env: {
			node: true,
			es6: true
		},
		extends: ['./node_modules/xo/config/plugins.js']
	}
};
