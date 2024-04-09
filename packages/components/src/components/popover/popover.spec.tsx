import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

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
			slotTrigger={<DBButton data-testid="button">Button</DBButton>}>
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
		await component.getByTestId('button').focus();
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBPopover', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});

test.describe('DBPopover', () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-popover')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
