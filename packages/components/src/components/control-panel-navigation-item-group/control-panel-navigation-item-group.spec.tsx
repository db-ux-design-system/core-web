import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelNavigationItemGroup } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';

const comp: any = (
	<menu>
		<DBControlPanelNavigationItemGroup text="More">
			<DBControlPanelNavigationItem>
				<a href="#">Test1</a>
			</DBControlPanelNavigationItem>
			<DBControlPanelNavigationItem>
				<a href="#">Test2</a>
			</DBControlPanelNavigationItem>
			<DBControlPanelNavigationItem>
				<a href="#">Test3</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
	</menu>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-control-panel-navigation-item-group')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testInteraction = () => {
	test('expand button should have aria-expanded and aria-controls', async ({
		mount
	}) => {
		const component = await mount(comp);
		const expandButton = component.locator(
			'.db-control-panel-navigation-item-group-expand-button'
		);
		await expect(expandButton).toHaveAttribute('aria-expanded', 'false');
		await expect(expandButton).toHaveAttribute('aria-controls');
	});

	test('clicking expand button should open the menu', async ({ mount }) => {
		const component = await mount(comp);
		const expandButton = component.locator(
			'.db-control-panel-navigation-item-group-expand-button'
		);

		await expandButton.click();

		await expect(expandButton).toHaveAttribute('aria-expanded', 'true');
		const menu = component.locator(
			'.db-control-panel-navigation-item-group-menu'
		);
		await expect(menu).toBeVisible();
	});

	test('opened menu should contain sub-items', async ({ mount }) => {
		const component = await mount(comp);
		const expandButton = component.locator(
			'.db-control-panel-navigation-item-group-expand-button'
		);

		await expandButton.click();

		const menu = component.locator(
			'.db-control-panel-navigation-item-group-menu'
		);
		await expect(menu).toContainText('Test1');
		await expect(menu).toContainText('Test2');
		await expect(menu).toContainText('Test3');
	});
};

test.describe('DBControlPanelNavigationItemGroup', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testInteraction();
});
