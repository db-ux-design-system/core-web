import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBInfotext } from './index';

import {
	VARIANTS,
	COLORS_SIMPLE,
	COLORS,
	TONALITIES
} from '../../shared/constants.ts';

const componentConfiguration = (tonality, color, variant) => (
	<div className={`db-ui-${tonality} db-bg-${color}`}>
		<DBInfotext variant="success">Test</DBInfotext>
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
			.include('.db-infotext')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBInfotext comp. @fast', () => {
	loopAll(VARIANTS, TONALITIES, COLORS_SIMPLE, screenshotTest);
	loopAll(VARIANTS, TONALITIES, COLORS_SIMPLE, textTest);
	loopAll(VARIANTS, TONALITIES, COLORS_SIMPLE, a11yTest);
});

test.describe('DBInfotext comp. @slow', () => {
	loopAll(VARIANTS, TONALITIES, COLORS, screenshotTest);
	loopAll(VARIANTS, TONALITIES, COLORS, textTest);
	loopAll(VARIANTS, TONALITIES, COLORS, a11yTest);
});
