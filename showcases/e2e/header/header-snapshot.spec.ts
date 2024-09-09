import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBHeader', () => {
	getDefaultScreenshotTest({ path: '01/header' });
});
