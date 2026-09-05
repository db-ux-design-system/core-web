import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/dialog';
test.describe('DBDialog', () => {
	getDefaultScreenshotTest({ path });
});
