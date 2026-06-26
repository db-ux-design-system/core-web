import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/shell';
test.describe('DBShell', () => {
	getDefaultScreenshotTest({ path });
});
