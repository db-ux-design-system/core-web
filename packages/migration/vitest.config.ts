// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)']
	}
});
