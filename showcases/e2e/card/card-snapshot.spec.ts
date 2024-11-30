import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '01/card';
test.describe('DBCard', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
