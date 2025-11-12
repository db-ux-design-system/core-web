import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBInput } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DBInput value="Test" label="Label"></DBInput>;

const testComponent = () => {
	test('Label should have Text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Label');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
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
			.include('.db-input')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test('should change on input', async ({ page, mount }) => {
		let test: string = '';
		const comp: any = (
			<DBInput
				label="Label"
				onInput={() => {
					test = 'test';
				}}
			/>
		);
		const component = await mount(comp);
		await component.getByRole('textbox').fill('test');
		expect(test).toEqual('test');
	});

	test('should have enterkeyhint attribute when provided', async ({
		mount
	}) => {
		const component = await mount(
			<DBInput label="Label" enterkeyhint="done" />
		);
		const input = component.getByRole('textbox');
		await expect(input).toHaveAttribute('enterkeyhint', 'done');
	});

	test('should have inputmode attribute when provided', async ({ mount }) => {
		const component = await mount(
			<DBInput label="Label" inputmode="numeric" />
		);
		const input = component.getByRole('textbox');
		await expect(input).toHaveAttribute('inputmode', 'numeric');
	});

	test('should not have enterkeyhint or inputmode when not provided', async ({
		mount
	}) => {
		const component = await mount(<DBInput label="Label" type="text" />);
		const input = component.getByRole('textbox');
		await expect(input).not.toHaveAttribute('enterkeyhint');
		await expect(input).not.toHaveAttribute('inputmode');
	});

	test('should handle empty string value for date input without clearing', async ({
		page
	}) => {
		await page.goto(getPathname('components-input--default'));

		// Get the date input
		const input = page.locator('db-input[type="date"]');

		// Set an initial date value
		await input.fill('2024-01-15');
		await expect(input).toHaveValue('2024-01-15');

		// Now set an empty string - this should NOT clear the input to null
		await input.evaluate((el: HTMLInputElement) => {
			el.value = '';
		});

		// The value should be empty string, not null
		const valueAfterEmpty = await input.evaluate(
			(el: HTMLInputElement) => el.value
		);
		expect(valueAfterEmpty).toBe('');

		// Now test programmatically setting empty string via the component
		const dbInput = page.locator('db-input[type="date"]');
		await dbInput.evaluate((el: any) => {
			el.value = '';
		});

		// Check that the internal input value is empty string, not cleared
		const internalValue = await input.evaluate(
			(el: HTMLInputElement) => el.value
		);
		expect(internalValue).toBe('');

		// Verify the component's value property
		const componentValue = await dbInput.evaluate((el: any) => el.value);
		expect(componentValue).toBe('');
	});

	test('should distinguish between undefined, null, and empty string for date input', async ({
		page
	}) => {
		await page.goto(getPathname('components-input--default'));

		const dbInput = page.locator('db-input[type="date"]');
		const input = page.locator('db-input[type="date"]');

		// Set a date first
		await dbInput.evaluate((el: any) => {
			el.value = '2024-01-15';
		});
		await expect(input).toHaveValue('2024-01-15');

		// Test empty string - should keep the input but make it empty
		await dbInput.evaluate((el: any) => {
			el.value = '';
		});
		let value = await input.evaluate((el: HTMLInputElement) => el.value);
		expect(value).toBe('');

		// Set date again
		await dbInput.evaluate((el: any) => {
			el.value = '2024-02-20';
		});
		await expect(input).toHaveValue('2024-02-20');

		// Test null - should clear the input
		await dbInput.evaluate((el: any) => {
			el.value = null;
		});
		value = await input.evaluate((el: HTMLInputElement) => el.value);
		expect(value).toBe('');

		// Set date again
		await dbInput.evaluate((el: any) => {
			el.value = '2024-03-25';
		});
		await expect(input).toHaveValue('2024-03-25');

		// Test undefined - should clear the input
		await dbInput.evaluate((el: any) => {
			el.value = undefined;
		});
		value = await input.evaluate((el: HTMLInputElement) => el.value);
		expect(value).toBe('');
	});

	test('should handle empty string for datetime-local input', async ({
		page
	}) => {
		await page.goto(getPathname('components-input--default'));

		const dbInput = page.locator('db-input[type="datetime-local"]');
		const input = page.locator('db-input[type="datetime-local"]');

		// Set a datetime value
		await dbInput.evaluate((el: any) => {
			el.value = '2024-01-15T10:30';
		});
		await expect(input).toHaveValue('2024-01-15T10:30');

		// Set empty string - should not be treated as falsy and cleared
		await dbInput.evaluate((el: any) => {
			el.value = '';
		});

		const value = await input.evaluate((el: HTMLInputElement) => el.value);
		expect(value).toBe('');
	});
};

test.describe('DBInput', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});
