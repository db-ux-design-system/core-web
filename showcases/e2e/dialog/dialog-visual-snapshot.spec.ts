import { type Page, test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';
import { openViaShowModalCommand } from '../dialog-open-fallback.ts';

const path = '01/dialog';

// Every dialog example initializes closed, so the page shows only the launcher
// buttons. Open a representative dialog (header + content + footer) before the
// screenshot so visual regressions in the dialog itself are actually captured.
const preScreenShot = async (page: Page) => {
	await openViaShowModalCommand(page, 'Open: With text prop');
	await page.locator('dialog[open]').first().waitFor({ state: 'visible' });
};

test.describe('DBDialog', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
});
