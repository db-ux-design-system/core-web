import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/breadcrumb';
test.describe('DBBreadcrumb', () => {
	// Use element-only screenshot to stabilize breadcrumb visuals
	getDefaultScreenshotTest({ path, elementOnly: true });
});
