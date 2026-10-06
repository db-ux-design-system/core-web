import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/tag';

test.describe('DBTag', () => {
	runInteractionTest({
		title: 'should be clickable like a button',
		path,
		example: 'Interaction',
		async run({ content }) {
			await content.getByTestId('button-tag').click();
			await expect(content.getByTestId('tag-clicked')).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should be removable',
		path,
		example: 'Interaction',
		async run({ content }) {
			await content
				.getByTestId('removable-tag')
				.locator('.db-tab-remove-button')
				.click();
			await expect(content.getByTestId('tag-removed')).toBeVisible();
		}
	});
});
