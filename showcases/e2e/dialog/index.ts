import type { Page } from '@playwright/test';

/**
 Every dialog example initializes closed, so the showcase renders only the
 launcher buttons and Axe excludes the hidden dialog contents. Open a
 representative dialog (header + content + footer) before scanning so the
 dialog itself gets meaningful accessibility coverage across all showcases.
 @param page Playwright page
 */
export const openDialog = async (page: Page) => {
	await page
		.locator('main')
		.getByRole('button', { name: 'Open: With text prop' })
		.click();
	await page.locator('dialog[open]').first().waitFor({ state: 'visible' });
	await page.waitForTimeout(1000); // We wait for 1 second for the opacity transition
};
