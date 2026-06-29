import { expect, type Page } from '@playwright/test';

export const setScrollViewport = (page: Page, fixedHeight?: number) => {
	return async () => {
		// Fixed header height instead of dynamic fetching via scrollHeight,
		// because scrollHeight includes hidden sub-navigation items whose
		// height grows with each new component added to the navigation,
		// causing inconsistent viewport sizes across test runs.
		const headerHeight = 200;
		const main = await page.waitForSelector('.db-main');
		const mainHeight: number = await main.evaluate((node) =>
			Number(node?.scrollHeight ?? 2500)
		);

		const width = page.viewportSize()?.width ?? 0;
		const height = fixedHeight ?? headerHeight + mainHeight;

		await page.setViewportSize({
			width,
			height
		});

		expect(page.viewportSize()?.height).toEqual(height);
	};
};
