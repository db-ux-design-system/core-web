import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBNavigation', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`
	const isAngular = process.env.showcase.startsWith('angular');
	getDefaultScreenshotTest({
		path: '05/navigation',
		skipA11y: isAngular
	});
});
