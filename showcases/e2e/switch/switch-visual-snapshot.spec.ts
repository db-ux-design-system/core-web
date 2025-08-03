import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/switch';

test.describe('DBSwitch', () => {
	getDefaultScreenshotTest({
		path
	});
});
