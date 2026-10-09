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

			// Regression guard for the deprecated-but-shipping `rounded`
			// property (the fixture sets it): data-rounded="true" must still
			// reach the container and resolve to the db-border-radius-sm token
			// as a non-zero corner radius. There is no public "Rounded"
			// showcase example, so this is the only coverage of the styling.
			const container = content.locator('.db-drawer-container');
			await expect(container).toHaveAttribute('data-rounded', 'true');
			const borderRadius = await container.evaluate(
				(element) => getComputedStyle(element).borderStartStartRadius
			);
			expect(Number.parseFloat(borderRadius)).toBeGreaterThan(0);

			// The drawer renders in the top layer, so query the close button on
			// the page rather than within the scoped content.
			await page.getByRole('button', { name: 'Close' }).click();
			await expect(drawerContent).toBeHidden();
		}
	});
});
