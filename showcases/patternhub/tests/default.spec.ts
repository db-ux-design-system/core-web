import { expect, type Page, test } from '@playwright/test';
import Components from '../data/components.json' with { type: 'json' };

const getDefaultScreenshotTest = async (
	name: string,
	type: string,
	path: string,
	fn: (page: Page) => Promise<void>
) => {
	test(`${type} should match screenshot`, async ({ page }) => {
		await page.goto(`${path}`, {
			waitUntil: 'domcontentloaded'
		});
		await fn(page);
		await expect(page).toHaveScreenshot([name, 'patternhub.png']);
	});
};

for (const group of Components) {
	for (const component of group.subNavigation) {
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`docs`,
				`.${group.path}/${component.name}/docs/Angular`,
				async (page) => {
					const firstH2 = page.locator('h2').first();
					await expect(firstH2).toBeVisible();
				}
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`overview`,
				`.${group.path}/${component.name}/overview?fullscreen=true`,
				async (page) => {
					const firstH1 = page.locator('h1').first();
					await expect(firstH1).toBeVisible();
				}
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`properties`,
				`.${group.path}/${component.name}/properties?fullscreen=true&noh1=true`,
				async (page) => {
					const firstH2 = page.locator('h2').first();
					await expect(firstH2).toBeVisible();
				}
			);
		});
	}
}
