import { test } from '@playwright/test';
import { isStencil, runAriaSnapshotTest } from '../default.ts';

const path = '01/header';
test.describe('DBHeader', () => {
	test.describe('aria snapshot', () => {
		if (isStencil(process.env.showcase)) {
			test.skip();
		}

		runAriaSnapshotTest({ path });
	});

	// Runs for every showcase, including stencil: a slotted element exists at
	// exactly one position in the DOM, so the web component build fills the
	// desktop `metaNavigation` slot while the drawer uses its own
	// `mobileMetaNavigation` slot (see `overwrites.stencil` for the header).
	// Regressions move the meta navigation into the closed drawer, which shifts
	// every page's layout and would otherwise only surface as a pixel diff.
	test('renders meta navigation in the header bar, not inside the drawer', async ({
		page
	}) => {
		await page.setViewportSize({ width: 1280, height: 900 });
		await page.goto(`./#/${path}?density=regular&color=neutral-1`);

		// The desktop container precedes the drawer container in the template,
		// so it is the first match in DOM order in every framework output.
		await expect(
			page.locator('.db-header-meta-navigation').first()
		).not.toBeEmpty();
	});
});
