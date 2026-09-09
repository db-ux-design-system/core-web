import { type Page, test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/drawer';

// Every drawer example initializes closed, so the showcase renders only the
// launcher buttons. Open a representative drawer (header + content + footer)
// before snapshotting so cross-framework ARIA regressions in the drawer itself
// are actually captured.
const preScreenShot = async (page: Page) => {
	await page
		.locator('main')
		.getByRole('button', { name: 'Open: With footer' })
		.click();
	await page.locator('dialog[open]').first().waitFor({ state: 'visible' });
};

test.describe('DBDrawer', () => {
	runAriaSnapshotTest({ path, preScreenShot });
});
