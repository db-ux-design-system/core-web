import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelNavigation } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DESKTOP_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelNavigationItemGroup } from '../control-panel-navigation-item-group';

const comp: any = (
	<DBControlPanelNavigation>
		<DBControlPanelNavigationItemGroup text="More">
			<DBControlPanelNavigationItem data-testid="sub1">
				<a href="#">Sub1</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
		<DBControlPanelNavigationItem data-testid="test1">
			<a href="#">Test2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem>
			<a href="#">Test3</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigation>
);

const testComponent = (viewport: any) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
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

const testClick = () => {
	test(`should open sub navigation mobile`, async ({ mount, page }) => {
		const component = await mount(comp);
		const sub = component.getByTestId('sub1');
		await expect(sub).toBeHidden();
		await component.getByTestId('test1').getByRole('button').click();
		await expect(sub).toBeVisible();
		await component.getByText('Back').click();
		await expect(sub).toBeHidden();
	});
};

test.describe('DBControlPanelNavigation', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		if (viewport.name === 'desktop') {
			testHover();
		}
		if (viewport.name === 'mobile') {
			testA11y();
			testClick();
		}
	});
});
