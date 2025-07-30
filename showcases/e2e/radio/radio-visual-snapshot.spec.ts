import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/radio';
test.describe('DBRadio', () => {
	getDefaultScreenshotTest({
		path
	});
});
