import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBDrawerHeader } from '../drawer-header/index';
import { DBDrawer } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';

const comp: any = (
	<DBDrawer open={true} header={<DBDrawerHeader>Title</DBDrawerHeader>}>
		{/*<template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template>*/}
		Test
	</DBDrawer>
);

const testComponent = (viewport) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test.fixme(`should match screenshot for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		// TODO: Screenshots are not captured for top-layer
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-drawer')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should open and close drawer`, async ({ mount, page }) => {
		let test: string = '';
		const drawer: any = (
			<DBDrawer
				open={true}
				onClose={() => (test = 'close')}
				header={<DBDrawerHeader>Title</DBDrawerHeader>}>
				{/*<template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template>*/}
				<span data-testid="test">Test</span>
			</DBDrawer>
		);
		const component = await mount(drawer);
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await component.getByRole('button').click();
		expect(test).toEqual('close');
	});
};

test.describe('DBDrawer', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
			testAction();
		}
	});
});
