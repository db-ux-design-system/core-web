import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';
// @ts-ignore - vue can only find it with .ts as file ending
import { buttonVariantsList } from './model.ts';

import { DBButton } from './index';

const componentConfigurationVariant = (variant) => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBButton variant={variant}>Test</DBButton>
	</div>
);

const componentConfigurationNoIcon = () => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBButton>Test</DBButton>
	</div>
);

// TODO: Test all icon variants?
const componentConfigurationWithIcon = () => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBButton icon="account" onlyIcon={true}>
			lorem ipsum
		</DBButton>
	</div>
);

const screenshotTestNoIcon = () => {
	test(`should match screenshot "no icon"`, async ({ mount }) => {
		const component = await mount(componentConfigurationNoIcon());
		await expect(component).toHaveScreenshot();
	});
};

const screenshotTestWithIcon = () => {
	test(`should match screenshot "with icon"`, async ({ mount }) => {
		const component = await mount(componentConfigurationWithIcon());
		await expect(component).toHaveScreenshot();
	});
};

const textTest = () => {
	test(`should match text`, async ({ mount }) => {
		const component = await mount(componentConfigurationNoIcon());
		await expect(component).toContainText('Test');
	});
};

const screenshotTestVariant = (variant) => {
	test(`should match screenshot with variant: "${variant}"`, async ({
		mount
	}) => {
		const component = await mount(componentConfigurationVariant(variant));
		await expect(component).toHaveScreenshot();
	});
};

const a11yTestNoIcon = () => {
	test(`should not have any accessibility issues`, async ({
		page,
		mount
	}) => {
		const component = await mount(componentConfigurationNoIcon());
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const a11yTestWithIcon = () => {
	test(`should not have any accessibility issues for combination "with icon"`, async ({
		page,
		mount
	}) => {
		const component = await mount(componentConfigurationWithIcon());
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBButton component test', () => {
	screenshotTestNoIcon();
	screenshotTestWithIcon();
	textTest();
});

test.describe('DBButton component test', () => {
	for (const buttonVariant of buttonVariantsList) {
		screenshotTestVariant(buttonVariant);
	}
});

test.describe('DBButton component A11y test', () => {
	a11yTestNoIcon();
	a11yTestWithIcon();
});
