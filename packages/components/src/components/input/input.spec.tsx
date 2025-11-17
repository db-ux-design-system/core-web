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
		mount
	}) => {
		// Test with controlled value prop
		let component = await mount(
			<DBInput type="date" label="Date" value="2024-01-15" />
		);
		let input = component.locator('input');
		await expect(input).toHaveValue('2024-01-15');

		// Remount with empty string value - should accept empty string
		await component.unmount();
		component = await mount(<DBInput type="date" label="Date" value="" />);
		input = component.locator('input');

		// The internal input value should be empty string, not null
		const internalValue = await input.evaluate(
			(el: HTMLInputElement) => el.value
		);
		expect(internalValue).toBe('');
	});

	test('should distinguish between undefined, null, and empty string for date input', async ({
		mount
	}) => {
		// Test with initial date value
		let component = await mount(
			<DBInput type="date" label="Date" value="2024-01-15" />
		);
		let input = component.locator('input');
		await expect(input).toHaveValue('2024-01-15');

		// Test empty string - should accept empty string as valid value
		await component.unmount();
		component = await mount(<DBInput type="date" label="Date" value="" />);
		input = component.locator('input');
		await expect(input).toHaveValue('');

		// Test null - should also result in empty value
		await component.unmount();
		component = await mount(
			<DBInput type="date" label="Date" value={null as any} />
		);
		input = component.locator('input');
		await expect(input).toHaveValue('');

		// Test undefined - should also result in empty value
		await component.unmount();
		component = await mount(
			<DBInput type="date" label="Date" value={undefined} />
		);
		input = component.locator('input');
		await expect(input).toHaveValue('');
	});

	test('should handle empty string for datetime-local input', async ({
		mount
	}) => {
		// Test with initial datetime value
		let component = await mount(
			<DBInput
				type="datetime-local"
				label="DateTime"
				value="2024-01-15T10:30"
			/>
		);
		let input = component.locator('input');
		await expect(input).toHaveValue('2024-01-15T10:30');

		// Test empty string - should accept empty string as valid value
		await component.unmount();
		component = await mount(
			<DBInput type="datetime-local" label="DateTime" value="" />
		);
		input = component.locator('input');

		await expect(input).toHaveValue('');
	});
};

test('should handle null as empty for datetime-local input', async ({ mount }) => {
  const component = await mount(<DBInput type="datetime-local" label="DateTime" value={null as any} />);
  const input = component.locator('input');
  await expect(input).toHaveValue('');
});

test('should handle undefined as empty for datetime-local input', async ({ mount }) => {
  const component = await mount(<DBInput type="datetime-local" label="DateTime" value={undefined} />);
  const input = component.locator('input');
  await expect(input).toHaveValue('');
});

test.describe('DBInput', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});
