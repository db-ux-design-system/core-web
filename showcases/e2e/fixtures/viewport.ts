import type { Page } from '@playwright/test';

export const setScrollViewport = (page: Page) => {
	return async () => {
		const viewportHeight = await page.evaluate(() => {
			const header = document.querySelector('.db-header');
			const main = document.querySelector('.db-main');

			return 5000;
			// TODO: Those heights are not working all the time maybe we need some timeout here?
			/* return (
				(header?.scrollHeight ?? header?.clientHeight ?? 0) +
				(main?.scrollHeight ?? 0)
			); */
		});

		await page.setViewportSize({
			width: page.viewportSize().width,
			height: viewportHeight
		});
	};
};
