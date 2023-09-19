import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCard } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const defaultComp = <DBCard>Test</DBCard>;

// TODO: Get variants from https://github.com/db-ui/mono/blob/feat-unify-showcases/packages/components/src/shared/constants.ts when feat-unify branch is merged
const colorVariants = [
	'neutral',
	'neutral-strong',
	'primary',
	'critical',
	'successful',
	'warning',
	'informational'
];

const variants = ['interactive'];

const testDefaultCard = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(defaultComp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(defaultComp);
		await expect(component).toHaveScreenshot();
	});
};

const testCardColorVariants = () => {
	for (const colorVariant of colorVariants) {
		test(`should match screenshot for color variant ${colorVariant}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBCard colorVariant={colorVariant}>Test</DBCard>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

const testCardVariants = () => {
	for (const variant of variants) {
		test(`should match screenshot for variant ${variant}`, async ({
			mount
		}) => {
			const component = await mount(
				<div>
					<DBCard variant={variant}>Test</DBCard>
				</div>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBCard', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testDefaultCard();
	testCardColorVariants();
	testCardVariants();
});

test.describe('DBCard', () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(defaultComp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-card')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
