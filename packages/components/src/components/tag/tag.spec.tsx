import { expect, test } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTag } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { SEMANTICS } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBLink } from '../link';
import { DBRadio } from '../radio';
import { DBCheckbox } from '../checkbox';

const comp: any = <DBTag>Test</DBTag>;

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testVariants = () => {
	for (const semantic of SEMANTICS) {
		test(`should match screenshot for semantic ${semantic}`, async ({
			mount
		}) => {
			const variantComp: any = <DBTag semantic={semantic}>Test</DBTag>;
			const component = await mount(variantComp);
			await expect(component).toHaveScreenshot();
		});
	}
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
			.include('.db-tag')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testInterActions = () => {
	test('should be clickable like a button', async ({ mount }) => {
		let test = '';
		const buttonTag: any = (
			<DBTag>
				<button onClick={() => (test = 'test')} type="button">
					Test
				</button>
			</DBTag>
		);
		const component = await mount(buttonTag);
		await component.click();
		expect(test).toEqual('test');
	});

	test('should be a button', async ({ mount }) => {
		const buttonTag: any = (
			<DBTag>
				<button type="button">Test</button>
			</DBTag>
		);
		const component = await mount(buttonTag);
		await expect(component).toHaveScreenshot();
	});

	test('should be a link', async ({ mount }) => {
		const tag: any = (
			<DBTag>
				<a href="#">Test</a>
			</DBTag>
		);
		const component = await mount(tag);
		await expect(component).toHaveScreenshot();
	});

	test('should be a radio', async ({ mount }) => {
		const tag: any = (
			<DBTag>
				<label for="radio01">
					<input name="radio01" id="radio01" type="radio" />
					Test
				</label>
			</DBTag>
		);
		const component = await mount(tag);
		await expect(component).toHaveScreenshot();
	});

	test('should be a radio checked', async ({ mount }) => {
		const tag: any = (
			<DBTag>
				<label for="radio01">
					<input
						name="radio01"
						id="radio01"
						type="radio"
						data-testid="radio"
					/>
					Test
				</label>
			</DBTag>
		);
		const component = await mount(tag);
		await component.getByTestId('radio').check();
		await expect(component).toHaveScreenshot();
	});

	test('should be a checkbox', async ({ mount }) => {
		const tag: any = (
			<DBTag>
				<label for="checkbox01">
					<input id="checkbox01" type="checkbox" />
					Test
				</label>
			</DBTag>
		);
		const component = await mount(tag);
		await expect(component).toHaveScreenshot();
	});

	test('should be a checkbox checked', async ({ mount }) => {
		const tag: any = (
			<DBTag>
				<label for="checkbox01">
					<input
						id="checkbox01"
						type="checkbox"
						data-testid="checkbox"
					/>
					Test
				</label>
			</DBTag>
		);
		const component = await mount(tag);
		await component.getByRole('checkbox').check();
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBTag', () => {
	testComponent();
	testVariants();
	testA11y();
	testInterActions();
});
