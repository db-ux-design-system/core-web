import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';
import { DBInfotext } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { VARIANTS } from '../../shared/constants.ts';

const componentVariant = (variant) => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBInfotext variant={variant}>Test</DBInfotext>
	</div>
);

const componentPlain = () => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBInfotext>Test</DBInfotext>
	</div>
);

const screenshotTest = (variant) => {
	test(`should match screenshot for variant: ${variant}`, async ({
		mount
	}) => {
		const component = await mount(componentVariant(variant));
		await expect(component).toHaveScreenshot();
	});
};

const textTest = () => {
	test(`should match text`, async ({ mount }) => {
		const component = await mount(componentPlain());
		await expect(component).toContainText('Test');
	});
};

const a11yTest = (variant) => {
	test(`should not have any accessibility issues for combination: ${variant}`, async ({
		page,
		mount
	}) => {
		const component = await mount(componentVariant(variant));
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-infotext')
			.analyze();

		// TODO: Fix a11y issue for "information" variant
		if (variant !== 'information') {
			expect(accessibilityScanResults.violations).toEqual([]);
		}
	});
};

test.describe('DBInfotext component test', () => {
	textTest();
	for (const variant of VARIANTS) {
		screenshotTest(variant);
	}
});

test.describe('DBInfotext component A11y test', () => {
	for (const variant of VARIANTS) {
		a11yTest(variant);
	}
});
