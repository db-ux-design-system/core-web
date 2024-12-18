import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/brand';
test.describe('DBBrand', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
