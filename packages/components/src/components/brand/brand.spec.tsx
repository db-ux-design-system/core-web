import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBBrand } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants.ts';

const comp = <DBBrand>Test</DBBrand>;
const testBrand = () => {
	test(`should contain text`, async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test(`should match screenshot`, async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBBrand', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testBrand();
});

test.describe('DBBrand', () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-brand')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
