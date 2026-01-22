import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBTabs } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBTabItem } from '../tab-item';
import { DBTabList } from '../tab-list';
import { DBTabPanel } from '../tab-panel';

let activeTabIndex: number | undefined;
let comp: any = null;

test.beforeEach(() => {
	activeTabIndex = undefined;
	comp = (
		<DBTabs onIndexChange={(index: number) => (activeTabIndex = index)}>
			<DBTabList>
				<DBTabItem data-testid="test">Test 1</DBTabItem>
				<DBTabItem data-testid="test2">Test 2</DBTabItem>
				<DBTabItem>Test 3</DBTabItem>
			</DBTabList>

			<DBTabPanel>TestPanel 1</DBTabPanel>

			<DBTabPanel>TestPanel 2</DBTabPanel>

			<DBTabPanel>TestPanel 3</DBTabPanel>
		</DBTabs>
	);
});

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

const testActions = () => {
	test('should be clickable', async ({ mount }) => {
		expect(activeTabIndex).toBe(undefined);
		const component = await mount(comp);
		await component.getByRole('tab', { name: 'Test 2' }).click();
		await expect(
			component.getByRole('tab', { name: 'Test 1' })
		).toHaveAttribute('aria-selected', 'false');
		await expect(
			component.getByRole('tab', { name: 'Test 2' })
		).toHaveAttribute('aria-selected', 'true');
	});
};

const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			// TODO: There might be an issue in our implementation of which elements get which roles
			// So we disabled "aria-allowed-role" for now
			.include('.db-tabs')
			.disableRules(['aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test('should accept content alignment prop', async ({ mount }) => {
	const component = await mount(
		<DBTabs contentAlignment="center">
			<DBTabList>
				<DBTabItem>Test 1</DBTabItem>
			</DBTabList>
			<DBTabPanel>Content 1</DBTabPanel>
		</DBTabs>
	);
	await expect(component).toHaveAttribute('data-content-alignment', 'center');
});

test('should activate tab based on URL hash', async ({ mount, page }) => {
	await page.setViewportSize({ width: 1920, height: 1080 });
	await page.evaluate(() => {
		window.location.hash = '#tabs-my-deep-link-tab-1';
	});
	const component = await mount(
		<DBTabs name="my-deep-link">
			<DBTabList>
				<DBTabItem>Tab 0</DBTabItem>
				<DBTabItem>Tab 1</DBTabItem>
			</DBTabList>
			<DBTabPanel>Panel 0</DBTabPanel>
			<DBTabPanel>Panel 1</DBTabPanel>
		</DBTabs>
	);
	await expect(component.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute(
		'aria-selected',
		'true'
	);
	await expect(component.getByRole('tab', { name: 'Tab 0' })).toHaveAttribute(
		'aria-selected',
		'false'
	);
});

test.describe('DBTabs', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testActions();
});
