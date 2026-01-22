import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isReact } from '../default.ts';

const path = '01/drawer';
test.describe('DBDrawer', () => {
	getDefaultScreenshotTest({
		path,
		diff: isReact(process.env.showcase) ? undefined : '157'
	});
});
