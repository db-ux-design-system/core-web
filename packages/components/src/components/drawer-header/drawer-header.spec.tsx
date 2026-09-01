import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBDrawerHeader } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants.ts';

const comp: any = <DBDrawerHeader>Test</DBDrawerHeader>;
const compWithText: any = <DBDrawerHeader text="My Title">Test</DBDrawerHeader>;
const compWithCloseText: any = (
	<DBDrawerHeader closeButtonText="Dismiss">Test</DBDrawerHeader>
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

	test('should render close button with default accessible name', async ({
		mount
	}) => {
		const component = await mount(comp);
		const closeButton = component.getByRole('button', {
			name: DEFAULT_CLOSE_BUTTON
		});
		await expect(closeButton).toBeVisible();
	});

	test('should render close button with custom accessible name', async ({
		mount
	}) => {
		const component = await mount(compWithCloseText);
		const closeButton = component.getByRole('button', {
			name: 'Dismiss'
		});
		await expect(closeButton).toBeVisible();
	});

	test('should render title text when text prop is set', async ({
		mount
	}) => {
		const component = await mount(compWithText);
		await expect(component).toContainText('My Title');
	});
};

const testA11y = () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-drawer-header')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBDrawerHeader', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
