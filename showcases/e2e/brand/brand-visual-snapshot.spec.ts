import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/brand';
test.describe('DBBrand', () => {
	getDefaultScreenshotTest({ path });
});
