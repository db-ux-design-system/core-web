import { expect, test } from '@playwright/test';
import Components from '../data/components.json' with { type: 'json' };

const getDefaultScreenshotTest = async (
	name: string,
	type: string,
	path: string
) => {
	test(`${type} should match screenshot`, async ({ page }) => {
		await page.goto(path, {
			waitUntil: 'domcontentloaded'
		});
		await expect(page).toHaveScreenshot([name, 'patternhub.png']);
	});
};

for (const group of Components) {
	for (const component of group.subNavigation) {
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`docs`,
				`${group.path}/${component.name}/docs/Angular.html`
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`overview`,
				`${group.path}/${component.name}/overview.html?fullscreen=true`
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`properties`,
				`${group.path}/${component.name}/properties.html?fullscreen=true&noh1=true`
			);
		});
	}
}
