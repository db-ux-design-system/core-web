import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = 'dialog';
test.describe('DBDialog', () => {
	getDefaultScreenshotTest({ path });
});
