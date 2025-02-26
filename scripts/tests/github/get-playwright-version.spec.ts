// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

const command = 'npx --no tsx github/get-playwright-version.ts';

describe('get-playwright-version', () => {
	test('default', async () => {
		const result = execSync(command);
		expect(result.length > 0).toBeTruthy();
	});
});
