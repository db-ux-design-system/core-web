import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBButton } from './index';

import { COLORS_SIMPLE, COLORS, TONALITIES } from '../../shared/constants.ts';

const componentConfigurationNoIcon = (tonality, color) => (
	<div className={`db-ui-${tonality} db-bg-${color}`}>
		<DBButton>Test</DBButton>
	</div>
);

// TODO: Test all icon variants?
const componentConfigurationWithIcon = (tonality, color) => (
	<div className={`db-ui-${tonality} db-bg-${color}`}>
		<DBButton icon="account" onlyIcon={true}>
			lorem ipsum
		</DBButton>
	</div>
);

const loopAll = (tonalities, colors, testFunc) => {
	for (const tonality of tonalities) {
		for (const color of colors) {
			testFunc(tonality, color);
		}
	}
};

const screenshotTestNoIcon = (tonality, color) => {
	test(`should match screenshot "no icon" for combination: "${tonality}/${color}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfigurationNoIcon(tonality, color)
		);
		await expect(component).toHaveScreenshot();
	});
};

const screenshotTestWithIcon = (tonality, color) => {
	test(`should match screenshot "with icon" for combination: "${tonality}/${color}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfigurationWithIcon(tonality, color)
		);
		await expect(component).toHaveScreenshot();
	});
};

const textTest = (tonality, color) => {
	test(`should match text for combination: "${tonality}/${color}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfigurationNoIcon(tonality, color)
		);
		await expect(component).toContainText('Test');
	});
};

const a11yTestNoIcon = (tonality, color) => {
	test(`should not have any accessibility issues for combination "no icon": "${tonality}/${color}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfigurationNoIcon(tonality, color)
		);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const a11yTestWithIcon = (tonality, color) => {
	test(`should not have any accessibility issues for combination "with icon": "${tonality}/${color}"`, async ({
		page,
		mount
	}) => {
		const component = await mount(
			componentConfigurationWithIcon(tonality, color)
		);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('.db-button')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBButton comp. @fast', () => {
	loopAll(TONALITIES, COLORS_SIMPLE, screenshotTestNoIcon);
	loopAll(TONALITIES, COLORS_SIMPLE, screenshotTestWithIcon);
	loopAll(TONALITIES, COLORS_SIMPLE, textTest);
	loopAll(TONALITIES, COLORS_SIMPLE, a11yTestNoIcon);
	loopAll(TONALITIES, COLORS_SIMPLE, a11yTestWithIcon);
});

test.describe('DBButton comp. @slow', () => {
	loopAll(TONALITIES, COLORS, screenshotTestNoIcon);
	loopAll(TONALITIES, COLORS, screenshotTestWithIcon);
	loopAll(TONALITIES, COLORS, textTest);
	loopAll(TONALITIES, COLORS, a11yTestNoIcon);
	loopAll(TONALITIES, COLORS, a11yTestWithIcon);
});
