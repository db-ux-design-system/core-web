// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

module.exports = {
	plugins: [
		require('cssnano')({
			preset: [
				'default',
				{
					svgo: false
				}
			]
		})
	]
};
