// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

const tokens = require('./tailwind-tokens.json');

module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	plugins: [],
	theme: {
		...tokens,
		gap: ({ theme }) => ({
			...theme('spacing')
		}),
		space: ({ theme }) => ({
			...theme('spacing')
		})
	}
};
