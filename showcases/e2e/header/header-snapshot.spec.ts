import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, isStencil } from '../default.ts';

test.describe('DBHeader', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	getDefaultScreenshotTest({ path: '01/header' });
});
