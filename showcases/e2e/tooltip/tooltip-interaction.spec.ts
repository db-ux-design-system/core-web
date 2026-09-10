import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/tooltip';

test.describe('DBTooltip', () => {
	runInteractionTest({
		title: 'should open on focus',
		path,
		example: 'Interaction',
		async run({ content }) {
			await content.getByTestId('button').focus();
			await expect(content.getByTestId('tooltip')).toBeVisible();
		}
	});
});
