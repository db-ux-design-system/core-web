import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/icon';
test.describe('DBIcon', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
