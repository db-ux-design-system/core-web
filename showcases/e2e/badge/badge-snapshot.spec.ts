// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '06/badge';
test.describe('DBBadge', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
