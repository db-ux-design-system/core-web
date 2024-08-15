import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBBrand', () => {
	getDefaultScreenshotTest({ path: '04/brand' });
});
