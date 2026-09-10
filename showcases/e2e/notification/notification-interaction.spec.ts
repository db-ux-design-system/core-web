import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '06/notification';

test.describe('DBNotification', () => {
	runInteractionTest({
		title: 'should be closeable',
		path,
		example: 'Interaction',
		async run({ content }) {
			await content
				.getByTestId('notification')
				.getByRole('button')
				.click();
			await expect(
				content.getByTestId('notification-closed')
			).toBeVisible();
		}
	});
});
