// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
import {
	getDefaultScreenshotTest,
	isStencil,
	runAriaSnapshotTest
	// @ts-expect-error - required for playwright
} from '../default.ts';

const path = '01/header';
test.describe('DBHeader', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
