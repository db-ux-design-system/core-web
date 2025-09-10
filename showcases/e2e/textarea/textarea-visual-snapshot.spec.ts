import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/textarea';
test.describe('DBTextarea', () => {
	getDefaultScreenshotTest({
		path
	});
});
