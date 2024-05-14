import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { waitForDBPage } from '../default';

test.describe('Home', () => {
	test('has title', async ({ page }) => {
		await page.goto('./');
		await expect(page).toHaveTitle('Showcase');
	});

	test('should not have any A11y issues', async ({ page }) => {
		const isAngular = process.env.showcase?.startsWith('angular');

		// Angular wraps custom components in own tags this will cause a lot of issues with axe-core
		if (isAngular) {
			test.skip();
		}

		await page.goto('./', {
			waitUntil: 'domcontentloaded'
		});

		await waitForDBPage(page);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
			// TODO: There might be an issue our implementation of which elements get which roles
			.disableRules(['color-contrast', 'aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
