import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/drawer';
test.describe('DBDrawer', () => {
	getDefaultScreenshotTest({
		path
	});
});
