import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '03/input';
test.describe('DBInput', () => {
	getDefaultScreenshotTest({
		path
	});
	runAriaSnapshotTest({ path });
});
