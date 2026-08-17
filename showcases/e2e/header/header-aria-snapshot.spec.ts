import { expect, test } from '@playwright/test';
import { isStencil, runAriaSnapshotTest } from '../default.ts';

const path = '01/header';
test.describe('DBHeader', () => {
	// Registered conditionally instead of via `test.skip()` in a nested describe,
	// so the test title — and with it the committed snapshot path — stays stable.
	if (!isStencil(process.env.showcase)) {
		runAriaSnapshotTest({ path });
	}

	// Runs for every showcase, including stencil: a slotted element exists at
	// exactly one position in the DOM, so the web component build fills the
	// desktop `metaNavigation` slot while the drawer uses its own
	// `mobileMetaNavigation` slot (see `configs/plugins/stencil/slot-names.cjs`).
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
