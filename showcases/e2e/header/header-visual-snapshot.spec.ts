import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isStencil } from '../default.ts';

const path = '01/header';
test.describe('DBHeader', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	getDefaultScreenshotTest({ path });
});
