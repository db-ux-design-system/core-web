import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBDrawer } from '../drawer';
import { DBNavigation } from '../navigation';
import { DBNavigationItem } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<menu style={{ display: 'flex' }}>
		<DBNavigationItem>
			<a href="#">Test1</a>
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Test2</a>
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Test3</a>
		</DBNavigationItem>
	</menu>
);

const nestedSubNavigationComp: any = (
	<DBDrawer open={true} backdrop="none" position="absolute">
		<DBNavigation>
			<DBNavigationItem
				subNavigation={
					<>
						<DBNavigationItem
							subNavigation={
								<>
									<DBNavigationItem>
										<a href="#" aria-current="page">
											Sub-Sub-Navi-Item 1
										</a>
									</DBNavigationItem>
									<DBNavigationItem>
										<a href="#">Sub-Sub-Navi-Item 2</a>
									</DBNavigationItem>
								</>
							}>
							Sub-Navi-Item 1
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</>
				}>
				Navi-Item 1
			</DBNavigationItem>
			<DBNavigationItem icon="x_placeholder">
				<a href="#">Navi-Item 2</a>
			</DBNavigationItem>
			<DBNavigationItem disabled>
				<a href="#">Navi-Item 3</a>
			</DBNavigationItem>
		</DBNavigation>
	</DBDrawer>
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

	test('should match screenshot with expanded mobile sub-navigation inside drawer', async ({
		mount,
		page
	}) => {
		await mount(nestedSubNavigationComp);

		await page.getByRole('button', { name: 'Navi-Item 1' }).click();
		await page.getByRole('button', { name: 'Sub-Navi-Item 1' }).click();

		const drawer = page.locator('.db-drawer');
		await expect(drawer).toHaveScreenshot();
	});
};
const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('DBNavigationItem should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-navigation-item')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBNavigationItem', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
