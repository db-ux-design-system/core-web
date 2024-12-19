import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/tab-item';
test.describe('DBTabItem', () => {
	getDefaultScreenshotTest({
		path
	});
	runAriaSnapshotTest({ path });
});
