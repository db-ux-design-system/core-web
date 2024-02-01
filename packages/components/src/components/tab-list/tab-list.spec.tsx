import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTabList } from "./index";
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp = <DBTabList>Test</DBTabList>;

const testComponent = () =>{
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
}

test.describe('DBTabList', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});

test.describe('DBTabList', () => {
	test('should not have any A11y issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-tab-list')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

});
