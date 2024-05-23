import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBRadio', () => {
	getDefaultScreenshotTest({
		path: '03/radio'
	});
});
