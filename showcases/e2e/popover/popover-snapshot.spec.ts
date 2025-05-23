import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import {
	getDefaultScreenshotTest,
	isStencil,
	runAriaSnapshotTest
} from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-popover';
const path = '01/popover';

test.describe('DBPopover', () => {
	getDefaultScreenshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector),
		// There is a stencil issue for playwright which aligns the popover wrong
		ratio: isStencil(process.env.showcase) ? '0.05' : undefined
	});
	runAriaSnapshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector)
	});
});
