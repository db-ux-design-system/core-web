import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/table';
test.describe('DBTable', () => {
	getDefaultScreenshotTest({ path });
});
