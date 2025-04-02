// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

const react = require('./index.cjs');

module.exports = {
	files: 'src/**',
	targets: ['react'],
	dest: '../../output/tmp',
	options: {
		react
	}
};
