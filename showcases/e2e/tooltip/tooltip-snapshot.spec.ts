import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-tooltip';

test.describe('DBTooltip', () => {
	getDefaultScreenshotTest({
		path: '04/tooltip',
		preScreenShot: async (page) => hoverPre(page, selector)
	});
});
