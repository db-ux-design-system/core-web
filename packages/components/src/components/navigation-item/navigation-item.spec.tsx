import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

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

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should use deterministic subNavigationId when id prop is provided', async ({ mount }) => {
		const componentWithId = (
			<DBNavigationItem id="test-nav-item">
				<a href="#">Test</a>
			</DBNavigationItem>
		);
		const component = await mount(componentWithId);
		const subNav = component.locator('menu[id="test-nav-item-sub-navigation"]');
		await expect(subNav).toBeAttached();
	});

	test('should use provided subNavigationId when specified', async ({ mount }) => {
		const componentWithSubNavId = (
			<DBNavigationItem subNavigationId="custom-sub-nav-id">
				<a href="#">Test</a>
			</DBNavigationItem>
		);
		const component = await mount(componentWithSubNavId);
		const subNav = component.locator('menu[id="custom-sub-nav-id"]');
		await expect(subNav).toBeAttached();
	});

	test('should use fallback subNavigationId when no id or subNavigationId provided', async ({ mount }) => {
		const componentWithoutId = (
			<DBNavigationItem>
				<a href="#">Test</a>
			</DBNavigationItem>
		);
		const component = await mount(componentWithoutId);
		const subNav = component.locator('menu[id="sub-navigation"]');
		await expect(subNav).toBeAttached();
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
