import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-popover';

test.describe('DBPopover', () => {
	getDefaultScreenshotTest({
		path: '01/popover',
		preScreenShot: async (page) => hoverPre(page, selector)
	});
});
