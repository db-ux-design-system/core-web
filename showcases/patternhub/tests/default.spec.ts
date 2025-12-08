import { expect, type Page, test } from '@playwright/test';
import Components from '../data/components.json' with { type: 'json' };

const getDefaultScreenshotTest = (
	name: string,
	type: string,
	path: string,
	fn: (page: Page) => Promise<void>
) => {
	test(`${type} should match screenshot`, async ({ page }) => {
		// Navigate and wait for network idle to let assets load
		await page.goto(`${path}`, {
			waitUntil: 'domcontentloaded'
		});
		await page.waitForLoadState('networkidle');

		await fn(page);
		await expect(page).toHaveScreenshot([name, 'patternhub.png']);
	});
};

for (const group of Components) {
	for (const component of group.subNavigation) {
		// Register tests synchronously (do not use async/await here)
		test.describe(component.name, () => {
			getDefaultScreenshotTest(
				component.name,
				`docs`,
				`.${group.path}/${component.name}/docs/Angular`,
				async (page) => {
					const firstH2 = page.locator('h2').first();
					// Allow more time for CI to render
					await expect(firstH2).toBeVisible({ timeout: 60_000 });
				}
			);
		});

		test.describe(component.name, () => {
			getDefaultScreenshotTest(
				component.name,
				`overview`,
				`.${group.path}/${component.name}/overview?fullscreen=true`,
				async (page) => {
					const firstH1 = page.locator('h1').first();
					await expect(firstH1).toBeVisible({ timeout: 60_000 });
				}
			);
		});

		test.describe(component.name, () => {
			getDefaultScreenshotTest(
				component.name,
				`properties`,
				`.${group.path}/${component.name}/properties?fullscreen=true&noh1=true`,
				async (page) => {
					const firstH2 = page.locator('h2').first();
					await expect(firstH2).toBeVisible({ timeout: 60_000 });
				}
			);
		});
	}
}
