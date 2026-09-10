import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/drawer';

test.describe('DBDrawer', () => {
	runInteractionTest({
		title: 'should open and close drawer',
		path,
		example: 'Interaction',
		async run({ content, page }) {
			const drawerContent = content.getByTestId('drawer-content');
			await expect(drawerContent).toBeHidden();

			await content.getByTestId('open-button').click();
			await expect(drawerContent).toBeVisible();

			// The drawer renders in the top layer, so query the close button on
			// the page rather than within the scoped content.
			await page.getByRole('button', { name: 'Close' }).click();
			await expect(drawerContent).toBeHidden();
		}
	});
});
