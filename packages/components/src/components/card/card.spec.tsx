import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCard } from './index';

import { COLORS_SIMPLE, COLORS, TONALITIES } from '../../shared/constants.ts';

const directions = ['row', 'column'];

const variants = ['full-width', 'interactive'];

const componentConfiguration = (tonality, color, direction, variant) => (
	<div className={`db-ui-${tonality} db-bg-${color}`}>
		<DBCard colorVariant={color} direction={direction} variant={variant}>
			<span>Test 1</span>
			<span>Test 2</span>
		</DBCard>
	</div>
);

const componentConfigurationA11y = (tonality, color) => (
	<div className={`db-ui-${tonality} db-bg-${color}`}>
		<DBCard>Test</DBCard>
	</div>
);

const loopAll = (tonalities, colors, directions, variants, testFunc) => {
	for (const tonality of tonalities) {
		for (const color of colors) {
			for (const direction of directions) {
				for (const variant of variants) {
					testFunc(tonality, color, direction, variant);
				}
			}
		}
	}
};

const loopSome = (tonalities, colors, testFunc) => {
	for (const tonality of tonalities) {
		for (const color of colors) {
			testFunc(tonality, color);
		}
	}
};

const screenshotTest = (tonality, color, direction, variant) => {
	test(`should match screenshot for combination: "${tonality}/${color}/${direction}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfiguration(tonality, color, direction, variant)
		);
		await expect(component).toHaveScreenshot();
	});
};

const textTest = (tonality, color, direction, variant) => {
	test(`should match text for combination: "${tonality}/${color}/${direction}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfiguration(tonality, color, direction, variant)
		);
		await expect(component).toContainText('Test');
	});
};

const a11yTest = (tonality, color, direction, variant) => {
	test(`should not have any accessibility issues for combination: "${tonality}/${color}/${direction}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			// 				<DBCard colorVariant={colorVariant}>Test</DBCard>
			componentConfigurationA11y(tonality, color)
		);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-card')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBCard comp. @fast', () => {
	loopAll(TONALITIES, COLORS_SIMPLE, directions, variants, screenshotTest);
	loopAll(TONALITIES, COLORS_SIMPLE, directions, variants, textTest);
	loopSome(TONALITIES, COLORS_SIMPLE, a11yTest);
});

test.describe('DBCard comp. @slow', () => {
	loopAll(TONALITIES, COLORS, directions, variants, screenshotTest);
	loopAll(TONALITIES, COLORS, directions, variants, textTest);
	loopSome(TONALITIES, COLORS, a11yTest);
});
