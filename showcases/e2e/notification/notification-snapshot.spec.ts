import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '06/notification';
test.describe('DBNotification', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
