import type { Page } from '@playwright/test';

export const setScrollViewport = (page: Page) => {
	return async () => {
		const viewportHeight = await page.evaluate(() => {
			const header = document.querySelector('.db-header');
			const main = document.querySelector('.db-main');

			return (
				(header?.scrollHeight ?? header?.clientHeight ?? 0) +
				(main?.scrollHeight ?? 0) +
				// Some extra height if header is not working
				72
			);
		});

		await page.setViewportSize({
			width: page.viewportSize().width,
			height: viewportHeight
		});
	};
};
