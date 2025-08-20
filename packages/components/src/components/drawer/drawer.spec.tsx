import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBDrawer } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';

const comp: any = <DBDrawer open={true}>Test</DBDrawer>;

const testComponent = (viewport) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test.fixme(
		`should match screenshot for device ${viewport.name}`,
		async ({ mount }) => {
			const component = await mount(comp);
			// TODO: Screenshots are not captured for top-layer
			await expect(component).toHaveScreenshot();
		}
	);
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
			<DBDrawer onClose={() => (test = 'close')}>
				<span data-testid="test">Test</span>
			</DBDrawer>
		);
		const component = await mount(drawer);
		await page.evaluate(() => {
			const selector = document.querySelector('dialog');
			selector.showModal();
		});
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await component.getByRole('button').click();
		expect(test).toEqual('close');
	});

	test(`should close drawer with escape key when focus is on body`, async ({ mount, page }) => {
		let closed: boolean = false;
		const drawer: any = (
			<DBDrawer onClose={() => (closed = true)} open={true}>
				<span data-testid="test">Test</span>
				<button data-testid="disappearing-button" 
					onClick={() => {
						const btn = document.querySelector('[data-testid="disappearing-button"]');
						if (btn) btn.remove();
						// Simulate focus moving to body
						document.body.focus();
					}}>
					Click me
				</button>
			</DBDrawer>
		);
		const component = await mount(drawer);
		
		// Verify drawer is open
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		
		// Click the button to make it disappear and move focus to body
		const disappearingButton = component.getByTestId('disappearing-button');
		await disappearingButton.click();
		
		// Verify button is gone and focus is on body
		await expect(disappearingButton).not.toBeVisible();
		
		// Press escape key - this should still close the drawer
		await page.keyboard.press('Escape');
		
		// Wait a moment for the event to be processed
		await page.waitForTimeout(100);
		
		// Verify the close handler was called
		expect(closed).toBe(true);
	});
};

test.describe('DBDrawer', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
			testAction();
		}
	});
});
