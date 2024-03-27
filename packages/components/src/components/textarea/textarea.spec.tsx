import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTextarea } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DBTextarea value="Test" label="Label"></DBTextarea>;

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
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-textarea')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test('should change on input', async ({ page, mount }) => {
		let test: string = '';
		const comp: any = (
			<DBTextarea
				label="Label"
				onChange={() => {
					test = 'test';
				}}
			/>
		);
		const component = await mount(comp);
		await component.getByRole('textbox').fill('test');
		expect(test).toEqual('test');
	});
};

test.describe('DBTextarea', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});
