import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBPopover } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBButton } from '../button';

// template v-slot is used for vue component tests
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const comp: any = (
	<div className="padding-box">
		<DBPopover
			animation="disabled"
			data-testid="popover"
			trigger={<DBButton data-testid="button">Button</DBButton>}>
			{/*<template v-slot:trigger>
				<DBButton data-testid="button">Button</DBButton>
			</template>*/}
			Test
		</DBPopover>
	</div>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should open', async ({ mount }) => {
		const component = await mount(comp);
		await component.getByTestId('button').focus();
		await expect(component.getByTestId('popover')).toBeVisible();
	});

	test('after open should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await component.getByTestId('button').evaluate((comp: HTMLElement) => {
			comp.dispatchEvent(new Event('mouseenter'));
			comp.parentElement?.dispatchEvent(new Event('mouseenter'));
			comp.parentElement?.parentElement?.dispatchEvent(
				new Event('mouseenter')
			);
		});
		await component.getByTestId('button').focus();
		await expect(component).toHaveScreenshot();
	});
};
const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-popover')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBPopover', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
