/* eslint-disable no-await-in-loop,unicorn/prefer-dom-node-dataset */
import { type Page } from '@playwright/test';
import { hasWebComponentSyntax } from '../default';

const webComponentSyntax = hasWebComponentSyntax(process.env.showcase);

export const hoverPre = async (page: Page, selector: string) => {
	const components = await page.locator('main').locator(selector).all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			(webComponentSyntax
				? comp.parentElement.parentElement
				: comp.parentElement
			).dispatchEvent(new Event('mouseenter'));

			comp.setAttribute('data-e2e-hover', 'true');
		});
	}

	// Wait for animations
	await page.waitForTimeout(1000);
};
