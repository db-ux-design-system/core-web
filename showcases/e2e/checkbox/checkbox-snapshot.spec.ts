import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBCheckbox', () => {
	getDefaultScreenshotTest({
		path: '03/checkbox'
	});
});
