import { type Page, test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const preAxe = async (page: Page) => {
	await page.locator('main').getByRole('button').first().click();
	await page.waitForTimeout(1000);
};

test.describe('DBDrawer', () => {
	runAxeCoreTest({ path: '01/drawer', preAxe });
	runAxeCoreTest({ path: '01/drawer', preAxe, color: lvl3 });
	runAxeCoreTest({ path: '01/drawer', preAxe, density: 'functional' });
});
