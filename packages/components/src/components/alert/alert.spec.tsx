import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBAlert } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS, VARIANTS } from '../../shared/constants.ts';

const comp = <DBAlert>Test</DBAlert>;

const testComponent = (viewport) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test(`should match screenshot for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testVariants = (viewport) => {
	for (const variant of VARIANTS) {
		test(`should match screenshot for variant ${variant} and device ${viewport.name}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBAlert variant={variant}>Test</DBAlert>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBAlert component', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		testVariants(viewport);
	});
});

test.describe('DBAlert component A11y', () => {
	test('should not have any accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-alert')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
