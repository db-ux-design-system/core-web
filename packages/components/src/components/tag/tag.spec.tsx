import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTag } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { VARIANTS } from '../../shared/constants.ts';

const comp = <DBTag>Test</DBTag>;

const testComponent = () => {
	test('DBTag should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('DBTag should match screenshot', async ({ mount }) => {
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
				<DBTag variant={variant}>Test</DBTag>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBTag component', () => {
	testComponent();
	testVariants();
});

test.describe('DBTag component A11y', () => {
	test('DBTag should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-tag')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
