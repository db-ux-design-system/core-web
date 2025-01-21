// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

const vue = require('./index');

module.exports = {
	files: 'src/**',
	targets: ['vue'],
	dest: '../../output/tmp',
	options: {
		vue
	}
};
