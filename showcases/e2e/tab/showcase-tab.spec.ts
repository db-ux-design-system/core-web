import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTab', () => {
	getDefaultScreenshotTest('04/tab');
});
