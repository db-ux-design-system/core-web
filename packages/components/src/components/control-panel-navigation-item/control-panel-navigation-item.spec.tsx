import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelNavigationItem } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<menu style={{ display: 'flex' }}>
		<DBControlPanelNavigationItem>
			<a href="#">Test1</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem>
			<a href="#">Test2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem>
			<a href="#">Test3</a>
		</DBControlPanelNavigationItem>
	</menu>
);

const disabledComp: any = (
	<menu style={{ display: 'flex' }}>
		<DBControlPanelNavigationItem disabled>
			<a href="#">Disabled Item</a>
		</DBControlPanelNavigationItem>
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

const testDisabledState = () => {
	test('disabled item should have aria-disabled on the root li', async ({
		mount
	}) => {
		const component = await mount(disabledComp);
		const listItem = component.locator('.db-control-panel-navigation-item');
		await expect(listItem).toHaveAttribute('aria-disabled', 'true');
	});

	test('disabled item anchor should have tabindex -1', async ({ mount }) => {
		const component = await mount(disabledComp);
		const anchor = component.locator('.db-control-panel-navigation-item a');
		await expect(anchor).toHaveAttribute('tabindex', '-1');
	});
};

const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('DBControlPanelNavigationItem should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-control-panel-navigation-item')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBControlPanelNavigationItem', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testDisabledState();
	testA11y();
});
