/* eslint-disable no-await-in-loop */
import { type Page } from '@playwright/test';

export const hoverPre = async (page: Page, isPopover?: boolean) => {
	const selector = isPopover ? '.db-popover' : '.db-tooltip';
	const components = await page.locator('main').locator(selector).all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			const popoverContent = comp.querySelector('.db-popover-content');
			if (popoverContent) {
				(popoverContent as HTMLElement).dataset.animation = 'false';
			} else {
				comp.dataset.animation = 'false';
			}

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
