import { type Page, test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';
import { openViaShowModalCommand } from '../dialog-open-fallback.ts';

const path = '01/drawer';

// Every drawer example initializes closed, so the page shows only the launcher
// buttons. Open a representative drawer (header + content + footer) before the
// screenshot so visual regressions in the drawer itself are actually captured.
const preScreenShot = async (page: Page) => {
	await openViaShowModalCommand(page, 'Open: With footer');
	// The drawer's <dialog> is a 0x0 box (it sizes to fit-content and the visible
	// panel is the fixed `.db-drawer-container` inside it), so it never counts as
	// "visible". Wait for the panel that actually renders instead.
	await page
		.locator('dialog[open] .db-drawer-container')
		.first()
		.waitFor({ state: 'visible' });
};

test.describe('DBDrawer', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
});
