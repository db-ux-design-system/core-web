import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';
import { DBCard } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { cardVariantsList, cardDirectionsList } from './model.ts';

const componentVariants = (direction, variant) => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBCard direction={direction} variant={variant}>
			<span>Test 1</span>
			<span>Test 2</span>
		</DBCard>
	</div>
);

const componentPlain = () => (
	<div className={`db-ui-regular db-bg-db-bg-neutral-0`}>
		<DBCard>Test</DBCard>
	</div>
);

const loopAll = (directions, variants, testFunc) => {
	for (const direction of directions) {
		for (const variant of variants) {
			testFunc(direction, variant);
		}
	}
};

const screenshotTest = (direction, variant) => {
	test(`should match screenshot for combination: "${direction}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(componentVariants(direction, variant));
		await expect(component).toHaveScreenshot();
	});
};

const textTest = () => {
	test(`should match text`, async ({ page, mount }) => {
		const component = await mount(componentPlain());
		await expect(component).toContainText('Test');
	});
};

const a11yTest = (direction, variant) => {
	test(`should not have any accessibility issues for combination: "${direction}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			// 				<DBCard colorVariant={colorVariant}>Test</DBCard>
			componentVariants(direction, variant)
		);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-card')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBCard component test', () => {
	textTest();
	const [firstDirection, ...restDirections] = cardDirectionsList;
	const [firstVariant, ..._] = cardVariantsList;
	// Test all variants (with one direction)
	loopAll([firstDirection], cardVariantsList, screenshotTest);
	// Test remaining directions (with one variant)
	loopAll(restDirections, [firstVariant], screenshotTest);
});

test.describe('DBCard component A11y test', () => {
	loopAll(cardDirectionsList, cardVariantsList, a11yTest);
});
