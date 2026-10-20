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
			// reach the container and its rounded-corner declaration must
			// resolve to the db-border-radius-sm token. We compare the computed
			// radius against that token resolved to px (via a probe element)
			// rather than a fixed amount, because the value is the DB Theme's to
			// set - it is 0 under the sharp-cornered Generation 3 theme and
			// non-zero under a rounded one, and the guard must hold either way.
			// There is no public "Rounded" showcase example, so this is the only
			// coverage of the styling.
			const container = content.locator('.db-drawer-container');
			await expect(container).toHaveAttribute('data-rounded', 'true');
			const { borderRadius, tokenRadius } = await container.evaluate(
				(element) => {
					// Resolve db-border-radius-sm to a px length so it compares
					// with the computed border radius regardless of the token's
					// unit (rem under one theme, 0 under another).
					const probe = document.createElement('div');
					probe.style.borderStartStartRadius =
						'var(--db-border-radius-sm)';
					element.append(probe);
					const tokenRadius =
						getComputedStyle(probe).borderStartStartRadius;
					probe.remove();
					return {
						borderRadius:
							getComputedStyle(element).borderStartStartRadius,
						tokenRadius
					};
				}
			);
			// The resolved radius matches the token, proving the `rounded`
			// declaration still reads db-border-radius-sm (not hardcoded or
			// dropped).
			expect(borderRadius).toBe(tokenRadius);

			// The drawer renders in the top layer, so query the close button on
			// the page rather than within the scoped content.
			await page.getByRole('button', { name: 'Close' }).click();
			await expect(drawerContent).toBeHidden();
		}
	});
});
