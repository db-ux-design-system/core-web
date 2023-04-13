import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBButton } from './index';

const testButton = () => {
	test('DBButton should contain text', async ({ mount }) => {
		const component = await mount(<DBButton>Test</DBButton>);
		await expect(component).toContainText('Test');
	});

	test('DBButton should match screenshot', async ({ mount }) => {
		const component = await mount(<DBButton>Test</DBButton>);
		await expect(component).toHaveScreenshot();
	});

	test('DBButton should only have icon', async ({ mount }) => {
		const component = await mount(
			<DBButton icon="account" noText={true}>
				Account
			</DBButton>
		);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBButton component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	testButton();
});

test.describe('DBButton component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	testButton();
});

test.describe('DBButton component A11y', () => {
	test('DBButton should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(<DBButton>Test</DBButton>);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('DBButton with icon only should not have any automatically detectable accessibility issues', async ({
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
