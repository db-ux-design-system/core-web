import { expect, test } from '@playwright/test';
import { isStencil, runInteractionTest, waitForDBShell } from '../default.ts';
import { lvl1 } from '../fixtures/variants';

const path = '05/shell/control-panel-desktop';

test.describe('DBControlPanelDesktop', () => {
	test('should have a collapse/expand toggle button in vertical mode', async ({
		page
	}, { project }) => {
		// Settings are not supported by the Stencil showcase.
		if (isStencil(process.env.showcase)) {
			test.skip();
		}

		// The collapse toggle is a desktop-only affordance.
		if (project.name.startsWith('mobile')) {
			test.skip();
		}

		const settings = encodeURIComponent(
			JSON.stringify({ controlPanelDesktopPosition: 'left' })
		);
		await page.goto(
			`./#/?shell=true&density=regular&color=${lvl1}&settings=${settings}`,
			{ waitUntil: 'domcontentloaded' }
		);
		await waitForDBShell(page);

		const toggleButton = page.locator(
			'.db-control-panel-desktop-button > .db-button'
		);
		await expect(toggleButton).toBeVisible();
		await expect(toggleButton).toHaveAttribute('aria-expanded');
	});
});

// DBControlPanelNavigation, DBControlPanelNavigationItem and
// DBControlPanelNavigationItemGroup have no showcase of their own (they are
// sub-components always used inside a parent), so their interaction coverage
// lives here alongside their natural parent.
test.describe('DBControlPanelNavigationItem', () => {
	runInteractionTest({
		title: 'disabled item should have aria-disabled and tabindex -1 on the anchor',
		path,
		example: 'Interaction',
		async run({ content }) {
			const item = content.getByTestId('disabled-item');
			await expect(item).toHaveAttribute('aria-disabled', 'true');
			await expect(item.locator('a')).toHaveAttribute('tabindex', '-1');
		}
	});
});

test.describe('DBControlPanelNavigationItemGroup', () => {
	runInteractionTest({
		title: 'expand button should have aria-expanded and aria-controls',
		path,
		example: 'Interaction',
		async run({ content }) {
			const expandButton = content
				.getByTestId('group')
				.locator(
					'.db-control-panel-navigation-item-group-expand-button'
				);
			await expect(expandButton).toHaveAttribute(
				'aria-expanded',
				'false'
			);
			await expect(expandButton).toHaveAttribute('aria-controls');
		}
	});

	runInteractionTest({
		title: 'clicking the expand button should open the menu and reveal its sub-items',
		path,
		example: 'Interaction',
		async run({ content }) {
			const group = content.getByTestId('group');
			const expandButton = group.locator(
				'.db-control-panel-navigation-item-group-expand-button'
			);
			await expandButton.click();
			await expect(expandButton).toHaveAttribute('aria-expanded', 'true');

			const menu = group.locator(
				'.db-control-panel-navigation-item-group-menu'
			);
			await expect(menu).toBeVisible();
			await expect(content.getByTestId('group-item1')).toBeVisible();
			await expect(content.getByTestId('group-item2')).toBeVisible();
		}
	});
});

test.describe('DBControlPanelNavigation', () => {
	runInteractionTest({
		title: 'tree variant should set role="tree" on the menu and role="treeitem" on items',
		path,
		example: 'Interaction',
		async run({ content }) {
			const treePanel = content.getByTestId('tree-panel');
			const menu = treePanel.locator('menu').first();
			await expect(menu).toHaveAttribute('role', 'tree');
			await expect(
				treePanel.locator('[role="treeitem"]')
			).not.toHaveCount(0);
		}
	});

	runInteractionTest({
		title: 'tree variant should manage tabindex so only one item is focusable',
		path,
		example: 'Interaction',
		async run({ content }) {
			const focusableItems = content
				.getByTestId('tree-panel')
				.locator('[role="treeitem"][tabindex="0"]');
			await expect(focusableItems).toHaveCount(1);
		}
	});

	runInteractionTest({
		title: 'ArrowDown / ArrowUp should move focus between treeitems',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// The fixture's first group is collapsed, so its treeitem (index 1)
			// is present in the DOM but skipped by keyboard navigation - the
			// next reachable treeitem is index 2 (see DBControlPanelNavigation
			// tree-key handling, which only navigates visible items).
			const items = content
				.getByTestId('tree-panel')
				.locator('[role="treeitem"]');

			await items.first().focus();
			await page.keyboard.press('ArrowDown');
			await expect(items.nth(2)).toBeFocused();

			await page.keyboard.press('ArrowUp');
			await expect(items.first()).toBeFocused();
		}
	});
});
