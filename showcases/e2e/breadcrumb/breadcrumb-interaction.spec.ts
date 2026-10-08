import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '05/breadcrumb';

test.describe('DBBreadcrumb', () => {
	runInteractionTest({
		title: 'should reveal the collapsed crumbs when the expand toggle is clicked',
		path,
		example: 'Interaction',
		async run({ content }) {
			const breadcrumb = content
				.getByTestId('auto-collapse-breadcrumb')
				.locator('.db-breadcrumb');

			// More crumbs than `maxItems`, so the trail starts collapsed and
			// exposes the ellipsis expand toggle.
			await expect(breadcrumb).toHaveAttribute('data-collapsed', 'true');
			const toggle = breadcrumb.locator(
				'.db-breadcrumb-auto-truncation-item-button'
			);
			await expect(toggle).toBeVisible();

			await toggle.click();

			// After expanding, the trail is no longer collapsed and the toggle
			// is gone.
			await expect(breadcrumb).toHaveAttribute('data-collapsed', 'false');
			await expect(toggle).toHaveCount(0);
		}
	});

	runInteractionTest({
		title: 'should open the truncation popover when its toggle is clicked',
		path,
		example: 'Interaction',
		async run({ content }) {
			const breadcrumb = content.getByTestId('popover-breadcrumb');
			const popover = breadcrumb.getByRole('article');

			// The collapsed middle crumbs live inside a popover that starts
			// closed.
			await expect(popover).not.toBeVisible();

			await breadcrumb
				.locator('.db-breadcrumb-popover-item-toggle')
				.click();

			await expect(popover).toBeVisible();
			// The truncated crumbs are reachable inside the opened popover.
			await expect(popover.locator('li a')).toHaveCount(2);
		}
	});
});
