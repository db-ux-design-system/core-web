import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBLoadingIndicator } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DBLoadingIndicator>Test</DBLoadingIndicator>;

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should default to the status live-region role', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component.locator('[role="status"]')).toBeVisible();
	});

	test('should allow overriding the role', async ({ mount }) => {
		const component = await mount(
			<DBLoadingIndicator role="alert">Test</DBLoadingIndicator>
		);
		await expect(component.locator('[role="alert"]')).toBeVisible();
	});

	test('should put the id on the root element', async ({ mount }) => {
		const component = await mount(
			<DBLoadingIndicator id="my-loading">Test</DBLoadingIndicator>
		);
		await expect(component).toHaveAttribute('id', 'my-loading');
	});

	test('should expose a native progress for determinate values', async ({
		mount
	}) => {
		const component = await mount(
			<DBLoadingIndicator
				indeterminate={false}
				value={42}
				max={100}
				progressText="42 of 100">
				Test
			</DBLoadingIndicator>
		);
		const progress = component.locator('progress');
		await expect(progress).toHaveAttribute('value', '42');
		await expect(progress).toHaveAttribute('max', '100');
	});

	test('should clamp the percentage when value exceeds max', async ({
		mount
	}) => {
		const component = await mount(
			<DBLoadingIndicator
				indeterminate={false}
				value={200}
				max={100}
				variant="bar">
				Test
			</DBLoadingIndicator>
		);
		const percentage = await component.evaluate((element: HTMLElement) =>
			element.style
				.getPropertyValue('--db-loading-indicator-percentage')
				.trim()
		);
		expect(percentage).toBe('1.00');
	});

	test('should treat string boolean "false" as not indeterminate', async ({
		mount
	}) => {
		const component = await mount(
			<DBLoadingIndicator
				indeterminate={'false' as any}
				value={42}
				max={100}>
				Test
			</DBLoadingIndicator>
		);
		// A native progress is only rendered in determinate mode.
		await expect(component.locator('progress')).toHaveCount(1);
	});
};

const testA11y = () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-loading-indicator')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBLoadingIndicator', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
