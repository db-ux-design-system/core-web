import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTabs } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBTabList } from '../tab-list';
import { DBTab } from '../tab';
import { DBTabPanel } from '../tab-panel';

const comp: any = (
	<DBTabs>
		<DBTabList>
			<DBTab data-testid="test">Test 1</DBTab>
			<DBTab data-testid="test2">Test 2</DBTab>
			<DBTab>Test 3</DBTab>
		</DBTabList>

		<DBTabPanel>TestPanel 1</DBTabPanel>

		<DBTabPanel>TestPanel 2</DBTabPanel>

		<DBTabPanel>TestPanel 3</DBTabPanel>
	</DBTabs>
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

const testActions = () => {
	test('should be clickable', async ({ mount }) => {
		const component = await mount(comp);
		await component
			.getByTestId('test2')
			// VUE: .getByRole('radio')
			.check({ force: true });
		const tabChecked = await component
			.getByTestId('test')
			// VUE: .getByRole('radio')
			.isChecked();
		expect(!tabChecked).toBeTruthy();
	});
};

test.describe('DBTabs', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testActions();
});

// TODO: AXE has problems with tabs...

/*test.describe('DBTabs', () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-tabs')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});*/
