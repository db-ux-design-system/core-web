import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBDialogHeader } from '../dialog-header/index';
import { DBDialog } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';

const comp: any = (
	<DBDialog open={true} header={<DBDialogHeader text="Title" />}>
		{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
		Test
	</DBDialog>
);

const testComponent = (viewport) => {
	test(`should contain text and heading for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		await expect(component).toContainText('Test');
		await expect(
			component.getByRole('heading', { name: 'Title' })
		).toBeVisible();
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
			.include('.db-dialog')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should close dialog via close button`, async ({ mount }) => {
		let closeCount = 0;
		const dialog: any = (
			<DBDialog
				open={true}
				onClose={() => closeCount++}
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const component = await mount(dialog);
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await component.getByRole('button').click();
		await expect.poll(() => closeCount).toEqual(1);
	});

	test(`should cancel and close dialog via escape`, async ({
		mount,
		page
	}) => {
		let cancelCount = 0;
		let closeCount = 0;
		const dialog: any = (
			<DBDialog
				open={true}
				onCancel={() => cancelCount++}
				onClose={() => closeCount++}
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const component = await mount(dialog);
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await page.keyboard.press('Escape');
		await expect.poll(() => cancelCount).toEqual(1);
		await expect.poll(() => closeCount).toEqual(1);
		await expect(testSpan).not.toBeVisible();
	});
};

test.describe('DBDialog', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
			testAction();
		}
	});
});
