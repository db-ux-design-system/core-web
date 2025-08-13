import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/checkbox';
test.describe('DBCheckbox', () => {
	getDefaultScreenshotTest({
		path
	});
});
