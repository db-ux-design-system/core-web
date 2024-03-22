import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTag } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { VARIANTS } from '../../shared/constants.ts';

const comp: any = <DBTag>Test</DBTag>;

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

const testVariants = () => {
	for (const variant of VARIANTS) {
		test(`should match screenshot for variant ${variant}`, async ({
			mount
		}) => {
			const variantComp: any = <DBTag variant={variant}>Test</DBTag>;
			const component = await mount(variantComp);
			await expect(component).toHaveScreenshot();
		});
	}
};
const testA11y = () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-tag')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBTag', () => {
	testComponent();
	testVariants();
	testA11y();
});
