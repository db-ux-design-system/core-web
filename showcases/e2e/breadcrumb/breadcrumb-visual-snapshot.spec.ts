import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/breadcrumb';
test.describe('DBBreadcrumb', () => {
	getDefaultScreenshotTest({ path });
});
