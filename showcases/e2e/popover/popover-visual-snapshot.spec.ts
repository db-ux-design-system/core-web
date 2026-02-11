import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isStencil } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-popover';
const path = '01/popover';

test.describe('DBPopover', () => {
	getDefaultScreenshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector),
		// The fixed popover may differ slightly in different browsers
		ratio: isStencil(process.env.showcase) ? '0.05' : '0.01',
		fixedHeight: (project) =>
			project.name === 'webkit' || project.name === 'mobile_safari'
				? 1886
				: undefined
	});
});
