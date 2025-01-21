// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

const angular = require('./angular');
const react = require('./react');
const vue = require('./vue');
const stencil = require('./stencil');

module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue', 'react', 'stencil'],
	dest: '../../output',
	options: {
		react,
		angular,
		vue,
		stencil
	}
};
