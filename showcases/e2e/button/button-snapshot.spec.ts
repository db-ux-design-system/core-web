import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '02/button';
test.describe('DBButton', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
