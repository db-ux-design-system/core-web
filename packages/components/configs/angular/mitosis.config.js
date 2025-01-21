// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

const angular = require('./index');

module.exports = {
	files: 'src/**',
	targets: ['angular'],
	dest: '../../output/tmp',
	options: {
		angular
	}
};
