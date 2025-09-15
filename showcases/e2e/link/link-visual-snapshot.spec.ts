import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '02/link';
test.describe('DBLink', () => {
	getDefaultScreenshotTest({
		path
	});
});
