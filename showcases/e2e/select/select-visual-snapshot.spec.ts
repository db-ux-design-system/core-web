import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/select';
test.describe('DBSelect', () => {
	getDefaultScreenshotTest({
		path
	});
});
