import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBAlert } from './index';
import {
	DEFAULT_VIEWPORT,
	TESTING_VIEWPORTS,
	VARIANTS
	// @ts-ignore - vue can only find it with .ts as file ending
} from '../../shared/constants.ts';

const comp = <DBAlert>Test</DBAlert>;

const testComponent = () => {
	test(`should contain text`, async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test(`should match screenshot`, async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testVariants = () => {
	for (const variant of VARIANTS) {
		test(`should match screenshot for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBAlert variant={variant}>Test</DBAlert>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBAlert', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});
test.describe('DBAlert', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testVariants();
});

test.describe('DBAlert', () => {
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
