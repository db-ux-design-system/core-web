import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBAlert } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import {
	VARIANTS,
	COLORS_SIMPLE,
	COLORS,
	TONALITIES
} from '../../shared/constants.ts';

const componentConfiguration = (tonality, color, variant) => (
	<div className={`db-ui-${tonality} db-bg-${color}`}>
		<DBAlert variant={variant}>Test</DBAlert>
	</div>
);

const loopAll = (variants, tonalities, colors, testFunc) => {
	for (const variant of variants) {
		for (const tonality of tonalities) {
			for (const color of colors) {
				testFunc(variant, tonality, color);
			}
		}
	}
};

const screenshotTest = (variant, tonality, color) => {
	test(`should match screenshot for combination: "${tonality}/${color}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfiguration(tonality, color, variant)
		);
		await expect(component).toHaveScreenshot();
	});
};

const textTest = (variant, tonality, color) => {
	test(`should match text for combination: "${tonality}/${color}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfiguration(tonality, color, variant)
		);
		await expect(component).toContainText('Test');
	});
};

const a11yTest = (variant, tonality, color) => {
	test(`should not have any accessibility issues for combination: "${tonality}/${color}/${variant}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfiguration(tonality, color, variant)
		);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-alert')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBAlert comp. @fast', () => {
	loopAll(VARIANTS, TONALITIES, COLORS_SIMPLE, screenshotTest);
	loopAll(VARIANTS, TONALITIES, COLORS_SIMPLE, textTest);
	loopAll(VARIANTS, TONALITIES, COLORS_SIMPLE, a11yTest);
});

test.describe('DBAlert comp. @slow', () => {
	loopAll(VARIANTS, TONALITIES, COLORS, screenshotTest);
	loopAll(VARIANTS, TONALITIES, COLORS, textTest);
	loopAll(VARIANTS, TONALITIES, COLORS, a11yTest);
});
