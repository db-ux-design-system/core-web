import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelNavigation } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DESKTOP_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelNavigationItemGroup } from '../control-panel-navigation-item-group';

const comp: any = (
	<DBControlPanelNavigation>
		<DBControlPanelNavigationItemGroup text="Test1" data-testid="test1">
			<DBControlPanelNavigationItem data-testid="sub1">
				<a href="#">Sub1</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
		<DBControlPanelNavigationItem>
			<a href="#">Test2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem>
			<a href="#">Test3</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigation>
);

const testComponent = (viewport: any) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		await expect(component).toContainText('Test1');
	});

	test(`should match screenshot for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		await expect(component.getByTestId('test1')).toBeVisible();
		await expect(component).toHaveScreenshot();
	});
};
const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-control-panel-navigation')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testHover = () => {
	test(`should open sub navigation desktop`, async ({ mount, page }) => {
		await page.setViewportSize({
			width: DESKTOP_VIEWPORT.width,
			height: DESKTOP_VIEWPORT.height
		});
		const component = await mount(comp);
		await expect(component.getByTestId('sub1')).toBeHidden();
		await component.getByTestId('test1').getByRole('button').hover();
		await expect(component.getByTestId('sub1')).toBeVisible();
	});
};

// Tree variant fixture for ARIA role and keyboard tests
const treeComp: any = (
	<DBControlPanelNavigation variant="tree">
		<DBControlPanelNavigationItemGroup text="Group1" data-testid="group1">
			<DBControlPanelNavigationItem data-testid="sub1">
				<a href="#">Sub1</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
		<DBControlPanelNavigationItem data-testid="item2">
			<a href="#">Item2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem data-testid="item3">
			<a href="#">Item3</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigation>
);

const testTreeVariant = () => {
	test('tree variant should set role="tree" on the menu', async ({
		mount
	}) => {
		const component = await mount(treeComp);
		const menu = component.locator('menu');
		await expect(menu).toHaveAttribute('role', 'tree');
	});

	test('tree variant should assign role="treeitem" to interactive elements', async ({
		mount
	}) => {
		const component = await mount(treeComp);
		const treeItems = component.locator('[role="treeitem"]');
		await expect(treeItems).not.toHaveCount(0);
	});

	test('tree variant should manage tabindex (only one item with tabindex=0)', async ({
		mount
	}) => {
		const component = await mount(treeComp);
		const focusableItems = component.locator(
			'[role="treeitem"][tabindex="0"]'
		);
		await expect(focusableItems).toHaveCount(1);
	});

	test('ArrowDown should move focus to next treeitem', async ({
		mount,
		page
	}) => {
		const component = await mount(treeComp);
		const firstItem = component.locator('[role="treeitem"]').first();
		await firstItem.focus();
		await page.keyboard.press('ArrowDown');
		const secondItem = component.locator('[role="treeitem"]').nth(1);
		await expect(secondItem).toBeFocused();
	});

	test('ArrowUp should move focus to previous treeitem', async ({
		mount,
		page
	}) => {
		const component = await mount(treeComp);
		const items = component.locator('[role="treeitem"]');
		const secondItem = items.nth(1);
		await secondItem.focus();
		await page.keyboard.press('ArrowUp');
		const firstItem = items.first();
		await expect(firstItem).toBeFocused();
	});
};

test.describe('DBControlPanelNavigation', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
		if (viewport.name === 'desktop') {
			testHover();
		}
		if (viewport.name === 'mobile') {
			testA11y();
		}
	});
	testTreeVariant();
});
