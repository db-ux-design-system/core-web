import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBButton } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const testButton = () => {
	for (const variant of ['outlined', 'primary', 'solid', 'text']) {
		test(`should contain text for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBButton variant={variant}>Test</DBButton>
			);
			await expect(component).toContainText('Test');
		});

		test(`should match screenshot for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBButton variant={variant}>Test</DBButton>
			);
			await expect(component).toHaveScreenshot();
		});

		test(`should only have icon for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBButton icon="account" noText={true} variant={variant}>
					Account
				</DBButton>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBButton', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testButton();
});

test.describe('DBButton', () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(<DBButton>Test</DBButton>);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('DBButton with icon only should not have A11y issues', async ({
		page,
		mount
	}) => {
		await mount(
			<DBButton icon="account" noText={true}>
				lorem ipsum
			</DBButton>
		);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
