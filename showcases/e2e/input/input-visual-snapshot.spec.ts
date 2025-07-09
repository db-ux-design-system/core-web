import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/input';
test.describe('DBInput', () => {
	getDefaultScreenshotTest({
		path
	});
});
