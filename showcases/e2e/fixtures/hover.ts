/* eslint-disable no-await-in-loop */
import { type Page } from '@playwright/test';

export const hoverPre = async (page: Page, selector: string) => {
	const components = await page.locator('main').locator(selector).all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			comp.parentElement.dispatchEvent(new Event('mouseenter'));
			comp.parentElement.parentElement.dispatchEvent(
				new Event('mouseenter')
			);

			comp.dataset.e2eHover = 'true';
		});
	}

	// Wait for animations
	await page.waitForTimeout(2000);
};
