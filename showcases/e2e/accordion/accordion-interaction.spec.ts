import { expect, test } from '@playwright/test';
import { isVue, runInteractionTest } from '../default.ts';

const path = '04/accordion';

test.describe('DBAccordion', () => {
	runInteractionTest({
		title: 'items should be visible',
		path,
		example: 'Init Open',
		async run({ content }) {
			await expect(content.getByTestId('item2')).toBeVisible();
			await expect(content.getByTestId('item3')).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'single behavior should work',
		path,
		example: 'Action',
		async run({ content }) {
			await content.getByTestId('item1').click();
			await expect(content.getByTestId('button')).toBeVisible();

			await content.getByTestId('item2').click();
			await expect(content.getByTestId('button')).toBeHidden();
			await expect(content.getByTestId('textarea')).toBeVisible();

			// The disabled state lives on the accordion item's <details>
			// (role "group"). In Vue the test id is placed on a wrapper, so we
			// have to reach the group inside it - this mirrors the original
			// `// VUE: .getByRole('group')` marker from the component test.
			const item3 = content.getByTestId('item3');
			const disabledItem = isVue(process.env.showcase)
				? item3.getByRole('group')
				: item3;
			await expect(disabledItem).toBeDisabled();
		}
	});

	runInteractionTest({
		title: 'click inside item works',
		path,
		example: 'Action',
		async run({ content }) {
			await content.getByTestId('item1').click();
			const button = content.getByTestId('button');
			await expect(button).toBeVisible();
			await button.click();
			await expect(button).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'textarea inside item works',
		path,
		example: 'Action',
		async run({ content }) {
			await content.getByTestId('item2').click();
			const textArea = content.getByRole('textbox');
			await expect(textArea).toBeVisible();
			await textArea.fill('Test');
			await expect(textArea).toHaveValue('Test');
		}
	});
});
