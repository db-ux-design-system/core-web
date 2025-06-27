import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '01/section';
test.describe('DBSection', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
