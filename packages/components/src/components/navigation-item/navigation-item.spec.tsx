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

const compWithSubNavigation: any = (
	<div>
		<menu style={{ display: 'flex' }}>
			<DBNavigationItem subNavigation={<a href="#">Sub Item</a>}>
				<a href="#">Parent Item</a>
			</DBNavigationItem>
		</menu>
		<button data-testid="outside-target">Outside target</button>
	</div>
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

	test('should expand on hover and collapse on pointer leave', async ({
		mount
	}) => {
		const component = await mount(compWithSubNavigation);
		const expandButton = component.locator(
			'.db-navigation-item-expand-button'
		);

		await expect(expandButton).toHaveAttribute('aria-expanded', 'false');
		await expandButton.hover();
		await expect(expandButton).toHaveAttribute('aria-expanded', 'true');
		await component.locator('[data-testid="outside-target"]').hover();
		await expect(expandButton).toHaveAttribute('aria-expanded', 'false');
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
