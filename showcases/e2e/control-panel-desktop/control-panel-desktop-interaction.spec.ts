import { expect, test, type Page } from '@playwright/test';
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

	// Regression guard for #8605: opening a drilldown group must reveal its
	// sliding sub-navigation overlay on screen. The overlay is position:absolute
	// and escapes to the scroll container; a transform on the group <li> (the
	// previous-level slide-out) must not become its containing block, or the
	// overlay is dragged off-screen and its items collapse to zero height.
	runInteractionTest({
		title: 'drilldown variant should reveal the sub-item overlay on screen when a group is opened',
		path,
		example: 'Interaction',
		async run({ content }) {
			const group = content.getByTestId('drilldown-group');
			const expandButton = group.locator(
				'.db-control-panel-navigation-item-group-expand-button'
			);
			const subItem = content.getByTestId('drilldown-sub1');

			await expect(expandButton).toHaveAttribute(
				'aria-expanded',
				'false'
			);

			await expandButton.click();
			await expect(expandButton).toHaveAttribute('aria-expanded', 'true');

			// The sub-item must be visible (non-empty box, inside the viewport).
			// Without the fix it collapses to block-size:0 and slides to a
			// negative x, so toBeVisible() fails.
			await expect(subItem).toBeVisible();
			await expect(subItem.locator('a')).toBeVisible();

			const box = await subItem.boundingBox();
			expect(box).not.toBeNull();
			expect(box!.height).toBeGreaterThan(0);
			expect(box!.x).toBeGreaterThanOrEqual(0);
		}
	});
});

// Regression guard for #8659
test.describe('DBControlPanelNavigation overflow scroll buttons', () => {
	const topSettings = encodeURIComponent(
		JSON.stringify({
			controlPanelDesktopPosition: 'top',
			controlPanelMobilePosition: 'top',
			navigationDesktopVariant: 'popover',
			navigationMobileVariant: 'drilldown',
			subNavigation: 'false',
			subNavigationDesktopPosition: 'top',
			subNavigationMobilePosition: 'none',
			subNavigationVariant: 'popover'
		})
	);
	const navigationSelector =
		'.db-control-panel-desktop .db-control-panel-navigation';

	test.beforeEach(async ({ page }, { project }) => {
		// Settings are not supported by the Stencil showcase.
		if (isStencil(process.env.showcase)) {
			test.skip();
		}

		// Horizontal overflow buttons are a desktop-only affordance.
		if (project.name.startsWith('mobile')) {
			test.skip();
		}

		// Wide enough so the showcase navigation does not overflow initially.
		await page.setViewportSize({ width: 1920, height: 800 });
		await page.goto(
			`./#/?shell=true&density=regular&color=${lvl1}&settings=${topSettings}`,
			{ waitUntil: 'domcontentloaded' }
		);
		await waitForDBShell(page);
		await expect(page.locator(navigationSelector)).toHaveAttribute(
			'data-variant',
			'popover'
		);
	});

	const hasOverflow = async (page: Page): Promise<boolean> =>
		page
			.locator(`${navigationSelector} > menu`)
			.evaluate((menu) => menu.scrollWidth > menu.clientWidth);

	test('should update the scroll buttons right after the navigation geometry changes', async ({
		page
	}) => {
		const navigation = page.locator(navigationSelector);
		const rightButton = navigation.locator('.overflow-scroll-right-button');

		expect(await hasOverflow(page)).toBe(false);
		await expect(rightButton).toHaveCount(0);

		await page.setViewportSize({ width: 900, height: 800 });
		await expect.poll(async () => hasOverflow(page)).toBe(true);
		await expect(rightButton).toHaveCount(1);

		// Measure in the page, independent of the runner polling interval
		await navigation.evaluate((nav) => {
			const menu = nav.querySelector(':scope > menu')!;
			const timings = { fitsAt: 0, removedAt: 0 };
			(globalThis as any).__scrollButtonTimings = timings;
			new ResizeObserver(() => {
				if (!timings.fitsAt && menu.scrollWidth <= menu.clientWidth) {
					timings.fitsAt = performance.now();
				}
			}).observe(menu);
			new MutationObserver(() => {
				if (
					!timings.removedAt &&
					!nav.querySelector('.overflow-scroll-right-button')
				) {
					timings.removedAt = performance.now();
				}
			}).observe(nav, { childList: true, subtree: true });
		});

		await page.setViewportSize({ width: 1920, height: 800 });
		await expect.poll(async () => hasOverflow(page)).toBe(false);
		await expect(rightButton).toHaveCount(0);

		const { fitsAt, removedAt } = await page.evaluate(
			() => (globalThis as any).__scrollButtonTimings
		);
		expect(fitsAt).toBeGreaterThan(0);
		// Below the former fixed 500 ms delay
		expect(removedAt - fitsAt).toBeLessThan(250);
	});

	test('should update the scroll buttons when the menu content grows or shrinks', async ({
		page
	}) => {
		const navigation = page.locator(navigationSelector);
		const rightButton = navigation.locator('.overflow-scroll-right-button');

		expect(await hasOverflow(page)).toBe(false);
		await expect(rightButton).toHaveCount(0);

		// Let evaluations pending from page load settle
		await page.waitForTimeout(1000);

		// Style-only size change without DOM mutation (like a font swap)
		const setItemPadding = async (padding: string) =>
			navigation.locator('> menu').evaluate((menu, value) => {
				for (const element of menu.querySelectorAll<HTMLElement>(
					':scope .db-control-panel-navigation-item > a, :scope .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button'
				)) {
					if (
						!element.closest(
							'.db-control-panel-navigation-item-group-menu'
						)
					) {
						element.style.setProperty(
							'padding-inline',
							value,
							value ? 'important' : ''
						);
					}
				}
			}, padding);

		await setItemPadding('120px');
		await expect.poll(async () => hasOverflow(page)).toBe(true);
		await expect(rightButton).toHaveCount(1);

		await setItemPadding('');
		await expect.poll(async () => hasOverflow(page)).toBe(false);
		await expect(rightButton).toHaveCount(0);
	});

	test('should update the scroll buttons when top-level items are added or removed', async ({
		page
	}) => {
		const navigation = page.locator(navigationSelector);
		const rightButton = navigation.locator('.overflow-scroll-right-button');

		expect(await hasOverflow(page)).toBe(false);
		await expect(rightButton).toHaveCount(0);

		// Let evaluations pending from page load settle
		await page.waitForTimeout(1000);

		await navigation.locator('> menu').evaluate((menu) => {
			const template = menu.firstElementChild!;
			for (let index = 0; index < 8; index++) {
				const clone = template.cloneNode(true) as HTMLElement;
				clone.dataset.testid = 'added-item';
				menu.append(clone);
			}
		});
		await expect.poll(async () => hasOverflow(page)).toBe(true);
		await expect(rightButton).toHaveCount(1);

		await navigation.locator('> menu').evaluate((menu) => {
			for (const item of menu.querySelectorAll(
				':scope > [data-testid="added-item"]'
			)) {
				item.remove();
			}
		});
		await expect.poll(async () => hasOverflow(page)).toBe(false);
		await expect(rightButton).toHaveCount(0);
	});

	test('should show the left scroll button after scrolling with the right scroll button', async ({
		page
	}) => {
		const navigation = page.locator(navigationSelector);
		const leftButton = navigation.locator('.overflow-scroll-left-button');
		const rightButton = navigation.locator('.overflow-scroll-right-button');

		await page.setViewportSize({ width: 900, height: 800 });
		await expect(rightButton).toHaveCount(1);
		await expect(leftButton).toHaveCount(0);

		await rightButton.locator('button').or(rightButton).first().click();

		await expect(leftButton).toHaveCount(1);
	});
});
