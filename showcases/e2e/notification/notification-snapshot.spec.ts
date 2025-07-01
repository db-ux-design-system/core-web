import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '06/notification';
test.describe('DBNotification', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
