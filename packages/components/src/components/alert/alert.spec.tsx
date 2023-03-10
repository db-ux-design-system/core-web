import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBAlert } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { VARIANTS } from '../../shared/constants.ts';

const componentPlain = () => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBAlert>Test</DBAlert>
	</div>
);

const componentVariant = (variant) => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBAlert variant={variant}>Test</DBAlert>
	</div>
);

const screenshotTest = (variant) => {
	test(`should match screenshot for ${variant}`, async ({ mount }) => {
		const component = await mount(componentVariant(variant));
		await expect(component).toHaveScreenshot();
	});
};

const textTest = () => {
	test(`should match text `, async ({ page, mount }) => {
		const component = await mount(componentPlain());
		await expect(component).toContainText('Test');
	});
};

const a11yTest = (variant) => {
	test(`should not have any accessibility issues for variant ${variant}`, async ({
		page,
		mount
	}) => {
		const component = await mount(componentVariant(variant));
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-alert')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBAlert component test', () => {
	textTest();
	for (const variant of VARIANTS) {
		screenshotTest(variant);
	}
});

test.describe('DBAlert component A11y test', () => {
	for (const variant of VARIANTS) {
		a11yTest(variant);
	}
});
