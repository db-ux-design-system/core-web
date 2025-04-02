// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

export const getBasePath = () => {
	if (process?.env?.BASE_PATH) {
		return process.env.BASE_PATH;
	}

	if (typeof globalThis !== 'undefined') {
		// eslint-disable-next-line @typescript-eslint/dot-notation
		return window['env']?.BASE_URL;
	}

	return '';
};
