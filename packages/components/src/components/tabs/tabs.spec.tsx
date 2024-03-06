import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTabs } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBTabList } from '../tab-list';
import { DBTab } from '../tab';
import { DBTabPanel } from '../tab-panel';

const comp = (
	<DBTabs>
		<DBTabList>
			<DBTab name="test" index={0}>
				Test 1
			</DBTab>
			<DBTab name="test" index={1}>
				Test 2
			</DBTab>
			<DBTab name="test" index={2}>
				Test 3
			</DBTab>
		</DBTabList>

		<DBTabPanel name="test" index={0}>
			TestPanel 1
		</DBTabPanel>

		<DBTabPanel name="test" index={1}>
			TestPanel 2
		</DBTabPanel>

		<DBTabPanel name="test" index={2}>
			TestPanel 3
		</DBTabPanel>
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

test.describe('DBTabs', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
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
