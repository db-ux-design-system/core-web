import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCard } from './index';

const defaultComp = <DBCard>Test</DBCard>;

// TODO: Get variants from https://github.com/db-ui/mono/blob/feat-unify-showcases/packages/components/src/shared/constants.ts when feat-unify branch is merged
const colorVariants = [
	'neutral-0',
	'neutral-1',
	'neutral-3',
	'neutral-4',
	'primary',
	'secondary',
	'critical',
	'successful',
	'warning',
	'informational'
];

const directions = ['row', 'column'];

const variants = ['full-width', 'interactive'];

const testDefaultCard = () => {
	test('DBCard should contain text', async ({ mount }) => {
		const component = await mount(defaultComp);
		await expect(component).toContainText('Test');
	});

	test('DBCard should match screenshot', async ({ mount }) => {
		const component = await mount(defaultComp);
		await expect(component).toHaveScreenshot();
	});
};

const testCardColorVariants = () => {
	for (const colorVariant of colorVariants) {
		test(`DBCard should match screenshot for color variant ${colorVariant}`, async ({
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
		test(`DBCard should match screenshot for variant ${variant}`, async ({
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

test.describe('DBCard component on desktop: Default', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	testDefaultCard();
});

test.describe('DBCard component on mobile: Default', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	testDefaultCard();
});

test.describe('DBCard component on desktop: Color Variants', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	testCardColorVariants();
});

test.describe('DBCard component on mobile: Color Variants', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	testCardColorVariants();
});

test.describe('DBCard component on desktop: Variants', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	testCardVariants();
});

test.describe('DBCard component on mobile: Variants', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	testCardVariants();
});

test.describe('DBCard component A11y', () => {
	test('DBCard should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(defaultComp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			// TODO: Check whether a default background color in DBCard makes sense
			.include('.db-card')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
