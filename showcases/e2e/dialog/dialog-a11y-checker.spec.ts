import { type Page, test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// Every dialog example initializes closed, so the showcase renders only the
// launcher buttons and the checker only sees them. Open a representative dialog
// (header + content + footer) before checking so the dialog itself gets
// meaningful accessibility coverage across all showcases.
const preChecker = async (page: Page) => {
	await page
		.locator('main')
		.getByRole('button', { name: 'Open: With footer' })
		.click();
	await page.locator('dialog[open]').first().waitFor({ state: 'visible' });
};

test.describe('DBDialog', () => {
	runA11yCheckerTest({ path: '01/dialog', preChecker });
});
