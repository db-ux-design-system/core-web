import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '05/navigation';
const fixedHeight = 1200;
test.describe('DBNavigation', () => {
	getDefaultScreenshotTest({
		path,
		fixedHeight
	});
	runAriaSnapshotTest({
		path,
		fixedHeight
	});
});
