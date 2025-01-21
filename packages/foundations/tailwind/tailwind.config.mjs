// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable import/no-anonymous-default-export */
import tokens from './tailwind-tokens.json';

export default {
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
