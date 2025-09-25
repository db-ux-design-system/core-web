import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '02/button';
test.describe('DBButton', () => {
	getDefaultScreenshotTest({ path });
});
