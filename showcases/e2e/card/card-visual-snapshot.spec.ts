import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/card';
test.describe('DBCard', () => {
	getDefaultScreenshotTest({ path });
});
