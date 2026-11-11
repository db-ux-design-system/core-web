import { expect, type Page, test } from '@playwright/test';
import { isStencil } from '../default';

// Regression tests for https://github.com/db-ux-design-system/core-web/issues/4791
const path = '03/input';

const getInfotext = (page: Page, placeholder: string, semantic?: string) =>
	page
		.locator(`.db-input:has(input[placeholder="${placeholder}"])`)
		.locator(
			semantic
				? `.db-infotext[data-semantic="${semantic}"]`
				: '.db-infotext:not([data-semantic])'
		);

test.describe('DBInput message props', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`./#/${path}?page=message+props`, {
			waitUntil: 'domcontentloaded'
		});
	});

	test('passes the config objects to the inner infotexts', async ({
		page
	}) => {
		await expect(getInfotext(page, 'Message size medium')).toHaveAttribute(
			'data-size',
			'medium'
		);

		const withIcon = getInfotext(page, 'Message with icon');
		await expect(withIcon).toHaveAttribute(
			'data-icon',
			'information_circle'
		);
		await expect(withIcon).toHaveAttribute(
			'data-show-icon-leading',
			'true'
		);

		await expect(getInfotext(page, 'Message without icon')).toHaveAttribute(
			'data-show-icon-leading',
			'false'
		);

		await expect(getInfotext(page, 'Message with wrap')).toHaveAttribute(
			'data-wrap',
			'true'
		);

		await expect(
			getInfotext(page, 'Valid message size medium', 'successful')
		).toHaveAttribute('data-size', 'medium');

		await expect(
			getInfotext(page, 'Invalid message size medium', 'critical')
		).toHaveAttribute('data-size', 'medium');
	});

	test('reads the config from a JSON attribute on the Web Component', async ({
		page
	}) => {
		test.skip(
			!isStencil(process.env.showcase),
			'HTML attributes only apply to Web Components'
		);

		const host = page.locator(
			'db-input:has(input[placeholder="Message with wrap"])'
		);
		await host.evaluate((element) => {
			element.setAttribute(
				'message-props',
				'{"size":"medium","showIcon":false,"class":"from-attribute"}'
			);
		});

		const infotext = getInfotext(page, 'Message with wrap');
		await expect(infotext).toHaveAttribute('data-size', 'medium');
		await expect(infotext).toHaveAttribute(
			'data-show-icon-leading',
			'false'
		);
		await expect(infotext).toHaveClass(/(^|\s)from-attribute(\s|$)/);
	});
});
