import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isStencil } from '../default.ts';

const path = '05/header';
test.describe('DBHeader', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	getDefaultScreenshotTest({
		path,
		// There is some flakiness we set a fixed height
		fixedHeight: 2500
	});
});
