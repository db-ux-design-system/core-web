import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/brand';
test.describe('DBBrand', () => {
	getDefaultScreenshotTest({ path });
});
