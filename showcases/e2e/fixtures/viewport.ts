import type { Page } from '@playwright/test';

export const setScrollViewport = (page: Page, fixedHeight?: number) => {
	return async () => {
		const header = await page.waitForSelector('.db-header');
		const headerHeight: number = await header.evaluate((node) =>
			Number(node?.scrollHeight ?? node?.clientHeight ?? 72)
		);
		const main = await page.waitForSelector('.db-main');
		const mainHeight: number = await main.evaluate((node) =>
			Number(node?.scrollHeight ?? node?.clientHeight ?? 2500)
		);

		await page.setViewportSize({
			width: page.viewportSize().width,
			height: fixedHeight ?? headerHeight + mainHeight
		});
	};
};
