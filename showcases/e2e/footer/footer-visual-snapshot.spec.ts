import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isStencil } from '../default.ts';

const path = '01/footer';
test.describe('DBFooter', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	getDefaultScreenshotTest({ path });
});
