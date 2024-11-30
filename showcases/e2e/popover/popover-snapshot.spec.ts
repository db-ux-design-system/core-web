import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-popover';
const path = '01/popover';

test.describe('DBPopover', () => {
	getDefaultScreenshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector)
	});
	runAriaSnapshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector)
	});
});
