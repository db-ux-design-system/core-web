// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '05/navigation-item';
const fixedHeight = 1800;
test.describe('DBNavigationItem', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`
	getDefaultScreenshotTest({
		path,
		fixedHeight
	});
	runAriaSnapshotTest({
		path,
		fixedHeight
	});
});
