import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBInfotext } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT, VARIANTS } from '../../shared/constants.ts';

const comp = <DBInfotext>Test</DBInfotext>;

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
			const component = await mount(
				<DBInfotext variant={variant}>Test</DBInfotext>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBInfotext', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testVariants();
});

test.describe('DBInfotext', () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-infotext')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
