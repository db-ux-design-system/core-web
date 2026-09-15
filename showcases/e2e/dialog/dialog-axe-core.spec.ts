import { type Page, test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// Every dialog example initializes closed, so the showcase renders only the
// launcher buttons and Axe excludes the hidden dialog contents. Open a
// representative dialog (header + content + footer) before scanning so the
// dialog itself gets meaningful accessibility coverage across all showcases.
const preAxe = async (page: Page) => {
	await page
		.locator('main')
		.getByRole('button', { name: 'Open: With footer' })
		.click();
	await page.locator('dialog[open]').first().waitFor({ state: 'visible' });
};

test.describe('DBDialog', () => {
	runAxeCoreTest({ path: '01/dialog', preAxe });
	runAxeCoreTest({ path: '01/dialog', color: lvl3, preAxe });
	runAxeCoreTest({ path: '01/dialog', density: 'functional', preAxe });
});
