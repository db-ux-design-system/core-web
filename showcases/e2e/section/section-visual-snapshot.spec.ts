import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/section';
test.describe('DBSection', () => {
	getDefaultScreenshotTest({ path });
});
