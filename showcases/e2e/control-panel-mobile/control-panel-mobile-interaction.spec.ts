import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '05/shell/control-panel-mobile';

// The mobile control panel only renders on the mobile projects, so every
// scenario skips the non-mobile projects via `skip.project`. `content` is the
// `Interaction` example container, so `.db-control-panel-mobile` and its drawer
// resolve unambiguously without an extra `#main-content … .first()` scope.
test.describe('DBControlPanelMobile', () => {
	runInteractionTest({
		title: 'clicking the burger button should open the drawer',
		path,
		example: 'Interaction',
		skip: { project: (project) => !project.name.startsWith('mobile') },
		async run({ content }) {
			const panel = content.locator('.db-control-panel-mobile');
			const burgerButton = panel.locator(
				'.db-control-panel-mobile-button'
			);
			const dialog = panel.locator('dialog');

			await expect(dialog).not.toHaveAttribute('open');

			await burgerButton.click();
			await expect(dialog).toHaveAttribute('open');
			await expect(dialog).toHaveAttribute('aria-labelledby');
		}
	});

	runInteractionTest({
		title: 'pressing Escape should close the drawer',
		path,
		example: 'Interaction',
		skip: { project: (project) => !project.name.startsWith('mobile') },
		async run({ page, content }) {
			const panel = content.locator('.db-control-panel-mobile');
			const burgerButton = panel.locator(
				'.db-control-panel-mobile-button'
			);
			const dialog = panel.locator('dialog');

			await burgerButton.click();
			await expect(dialog).toHaveAttribute('open');

			await page.keyboard.press('Escape');
			await expect(dialog).not.toHaveAttribute('open');
		}
	});

	runInteractionTest({
		title: 'clicking a navigation item should close the drawer',
		path,
		example: 'Interaction',
		skip: { project: (project) => !project.name.startsWith('mobile') },
		async run({ content }) {
			const panel = content.locator('.db-control-panel-mobile');
			const burgerButton = panel.locator(
				'.db-control-panel-mobile-button'
			);
			const dialog = panel.locator('dialog');

			await burgerButton.click();
			await expect(dialog).toHaveAttribute('open');

			// The mobile navigation renders as a drilldown, so the sub-item
			// link lives behind its group. Open the group, then click the link.
			const expandButton = dialog.locator(
				'.db-control-panel-navigation-item-group-expand-button'
			);
			await expandButton.click();

			await dialog.getByTestId('drilldown-sub1').locator('a').click();
			// The drawer closes on navigation-item click. The sub-item link
			// points at `#`, which can re-render the example container, so the
			// drawer may be detached rather than just have its `open` attribute
			// removed - `not.toBeVisible()` covers both a closed and a detached
			// dialog.
			await expect(dialog).not.toBeVisible();
		}
	});

	// Regression guard for #8605 on the mobile control panel. The mobile
	// navigation always renders as a drilldown inside the drawer, so opening a
	// group must reveal its sliding sub-navigation overlay on screen. A
	// transform on the group <li> (the previous-level slide-out) must not become
	// the overlay's containing block, or the overlay is dragged off-screen and
	// its sub-items collapse to zero height (empty navigation after the
	// drilldown tap).
	runInteractionTest({
		title: 'opening a group should reveal its sub-item overlay on screen',
		path,
		example: 'Interaction',
		skip: { project: (project) => !project.name.startsWith('mobile') },
		async run({ content }) {
			const panel = content.locator('.db-control-panel-mobile');
			const burgerButton = panel.locator(
				'.db-control-panel-mobile-button'
			);
			const dialog = panel.locator('dialog');

			await burgerButton.click();
			await expect(dialog).toHaveAttribute('open');

			const expandButton = dialog.locator(
				'.db-control-panel-navigation-item-group-expand-button'
			);
			const subItem = dialog.getByTestId('drilldown-sub1');

			await expandButton.click();
			await expect(expandButton).toHaveAttribute('aria-expanded', 'true');

			// Without the fix the overlay slides off-screen and its sub-items
			// collapse to block-size:0, so toBeVisible() fails here.
			await expect(subItem).toBeVisible();
			await expect(subItem.locator('a')).toBeVisible();

			const box = await subItem.boundingBox();
			expect(box).not.toBeNull();
			expect(box!.height).toBeGreaterThan(0);
			expect(box!.x).toBeGreaterThanOrEqual(0);
		}
	});
});
