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

	// The showcase page renders many control panels (one per example), so the
	// unscoped `dialog` / `.db-control-panel-mobile-button` locators would be
	// strict-mode ambiguous. Scope every scenario to the first control panel
	// rendered inside #main-content and reach its button and drawer from there.
	test('clicking the burger button should open the drawer', async ({
		page
	}) => {
		const panel = page
			.locator('#main-content .db-control-panel-mobile')
			.first();
		const burgerButton = panel.locator('.db-control-panel-mobile-button');
		const dialog = panel.locator('dialog');
		await expect(dialog).not.toHaveAttribute('open');

		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');
		await expect(dialog).toHaveAttribute('aria-labelledby');
	});

	test('pressing Escape should close the drawer', async ({ page }) => {
		const panel = page
			.locator('#main-content .db-control-panel-mobile')
			.first();
		const burgerButton = panel.locator('.db-control-panel-mobile-button');
		const dialog = panel.locator('dialog');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');

		await page.keyboard.press('Escape');
		await expect(dialog).not.toHaveAttribute('open');
	});

	test('clicking a navigation item should close the drawer', async ({
		page
	}) => {
		const panel = page
			.locator('#main-content .db-control-panel-mobile')
			.first();
		const burgerButton = panel.locator('.db-control-panel-mobile-button');
		const dialog = panel.locator('dialog');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');

		const navLink = dialog.locator('.db-control-panel-navigation-item a');
		await navLink.first().click();
		// The drawer closes on navigation-item click. The showcase's demo link
		// points at `#`, which also re-renders `#main-content`, so the drawer
		// may be detached rather than just have its `open` attribute removed -
		// `not.toBeVisible()` covers both a closed and a detached dialog.
		await expect(dialog).not.toBeVisible();
	});
});
