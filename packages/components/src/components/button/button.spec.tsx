import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBButton } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const defaultButton: any = (
	<DBButton onClick={() => alert('test')}>Test</DBButton>
);
const defaultIconButton: any = (
	<DBButton icon="x_placeholder" noText={true}>
		User
	</DBButton>
);

const testButton = () => {
	for (const variant of ['outlined', 'brand', 'filled', 'ghost']) {
		const variantButton: any = <DBButton variant={variant}>Test</DBButton>;
		const variantIconButton: any = (
			<DBButton icon="x_placeholder" noText={true} variant={variant}>
				User
			</DBButton>
		);
		test(`should contain text for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(variantButton);
			await expect(component).toContainText('Test');
		});

		test(`should match screenshot for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(variantButton);
			await expect(component).toHaveScreenshot();
		});

		test(`should only have icon for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(variantIconButton);
			await expect(component).toHaveScreenshot();
		});
	}
};

const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(defaultIconButton);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(defaultButton);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('DBButton with icon only should not have A11y issues', async ({
		page,
		mount
	}) => {
		await mount(defaultIconButton);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should open alert`, async ({ mount, page }) => {
		let test = '';
		const button: any = (
			<DBButton onClick={() => (test = 'test')}>Test</DBButton>
		);
		const component = await mount(button);
		await component.click();
		expect(test).toEqual('test');
	});
};

test.describe('DBButton', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testButton();
	testA11y();
	testAction();
});
