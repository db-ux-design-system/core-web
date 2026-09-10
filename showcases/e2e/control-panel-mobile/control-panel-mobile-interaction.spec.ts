import { expect, test } from '@playwright/test';
import { waitForDBShell } from '../default.ts';

const path = '05/shell/control-panel-mobile';

test.describe('DBControlPanelMobile', () => {
	test.beforeEach(async ({ page }, { project }) => {
		if (!project.name.startsWith('mobile')) {
			test.skip();
		}

		await page.goto(
			`./#/${path}?density=regular&color=neutral-bg-basic-level-1`,
			{ waitUntil: 'domcontentloaded' }
		);
		await waitForDBShell(page);
	});

	test('clicking the burger button should open the drawer', async ({
		page
	}) => {
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		const dialog = page.locator('dialog');
		await expect(dialog).not.toHaveAttribute('open');

		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');
		await expect(dialog).toHaveAttribute('aria-labelledby');
	});

	test('pressing Escape should close the drawer', async ({ page }) => {
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		const dialog = page.locator('dialog');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');

		await page.keyboard.press('Escape');
		await expect(dialog).not.toHaveAttribute('open');
	});

	test('clicking a navigation item should close the drawer', async ({
		page
	}) => {
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		const dialog = page.locator('dialog');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');

		const navLink = page.locator(
			'dialog .db-control-panel-navigation-item a'
		);
		await navLink.first().click();
		await expect(dialog).not.toHaveAttribute('open');
	});
});
