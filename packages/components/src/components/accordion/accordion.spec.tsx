import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBAccordion } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBAccordionItem } from '../accordion-item';
import { DBButton } from '../button';
import { DBTextarea } from '../textarea';

const comp: any = (
	<DBAccordion>
		<DBAccordionItem headlinePlain="Test" content="Content 1" />
		<DBAccordionItem headlinePlain="Test 2" content="Content 2" />
		<DBAccordionItem headlinePlain="Test 3" content="Content 3" />
	</DBAccordion>
);

const openAccordion: any = (
	<DBAccordion initOpenIndex={[1, 2]}>
		<DBAccordionItem headlinePlain="Test" content="Content 1" />
		<DBAccordionItem headlinePlain="Test 2">
			<span data-testid="item2">Test2</span>
		</DBAccordionItem>
		<DBAccordionItem headlinePlain="Test 3">
			<span data-testid="item3">Test3</span>
		</DBAccordionItem>
	</DBAccordion>
);

const actionAccordion: any = (
	<DBAccordion behavior="single">
		<DBAccordionItem data-testid="item1" headlinePlain="Test">
			<DBButton data-testid="button">Click me</DBButton>
		</DBAccordionItem>
		<DBAccordionItem data-testid="item2" headlinePlain="Test 2">
			<DBTextarea data-testid="textarea" />
		</DBAccordionItem>
		<DBAccordionItem
			disabled={true}
			data-testid="item3"
			headlinePlain="Test 3">
			<DBButton data-testid="button2">Click me</DBButton>
		</DBAccordionItem>
	</DBAccordion>
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
};

const testOpen = () => {
	test('items should be visible', async ({ mount }) => {
		const component = await mount(openAccordion);
		await expect(component.getByTestId('item2')).toBeVisible();
		await expect(component.getByTestId('item3')).toBeVisible();
	});

	test('open items should match screenshot', async ({ mount }) => {
		const component = await mount(openAccordion);
		await expect(component).toHaveScreenshot();
	});
};

const testAction = () => {
	test('single behavior should work', async ({ mount }) => {
		const component = await mount(actionAccordion);
		await component.getByTestId('item1').click();
		await expect(component.getByTestId('button')).toBeVisible();
		await component.getByTestId('item2').click();
		await expect(component.getByTestId('button')).toBeHidden();
		await expect(component.getByTestId('textarea')).toBeVisible();
		await expect(
			component.getByTestId('item3')
			// VUE: .getByRole('group')
		).toBeDisabled();
	});

	test('click inside item works', async ({ mount }) => {
		const component = await mount(actionAccordion);
		await component.getByTestId('item1').click();
		const button = component.getByTestId('button');
		await expect(button).toBeVisible();
		await button.click();
		await expect(button).toBeVisible();
	});

	test('textarea inside item works', async ({ mount }) => {
		const component = await mount(actionAccordion);
		await component.getByTestId('item2').click();
		const textArea = component.getByRole('textbox');
		await expect(textArea).toBeVisible();
		await textArea.fill('Test');
		await expect(textArea).toHaveValue('Test');
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
			.include('.db-accordion')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBAccordion', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testOpen();
	testAction();
	testA11y();
});
