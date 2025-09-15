import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/tag';

test.describe('DBTag', () => {
	getDefaultScreenshotTest({
		path
	});
});
