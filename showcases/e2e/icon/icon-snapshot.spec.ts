import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/icon';
test.describe('DBIcon', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
