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
				`./components/${component.name}/docs/Angular`,
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
				`./components/${component.name}/overview`,
				async (page) => {
					const dbPage = page.locator('.db-page');
					// We wait till db-page fully loaded
					await dbPage.evaluate((element) => {
						element.style.transition = 'none';
						element.style.opacity = '1';
					});
					await expect(dbPage).not.toHaveAttribute(
						'data-fonts-loaded',
						'false'
					);
					const firstH2 = page.locator('h1').first();
					await expect(firstH2).toBeVisible();
				}
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`properties`,
				`./components/${component.name}/properties?fullscreen=true&noh1=true`,
				async (page) => {
					const firstH2 = page.locator('h2').first();
					await expect(firstH2).toBeVisible();
				}
			);
		});
	}
}
