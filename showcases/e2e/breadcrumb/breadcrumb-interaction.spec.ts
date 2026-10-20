import { expect, test } from '@playwright/test';
import { runInteractionTest, type SkipType } from '../default.ts';

const path = '05/breadcrumb';

// The auto-collapse trail is a desktop-only affordance: on mobile a breadcrumb
// without a manual popover item shows only the last two crumbs and hides the
// auto-truncation toggle entirely (see breadcrumb.scss, `screen("sm", "max")`).
// A trail WITH a `.db-breadcrumb-popover-item` is exempt from that rule, so the
// popover toggle still works on mobile and that test runs on every project.
const skipMobile: SkipType = {
	project: (project) => project.name.startsWith('mobile')
};

test.describe('DBBreadcrumb', () => {
	runInteractionTest({
		title: 'should reveal the collapsed crumbs when the expand toggle is clicked',
		path,
		example: 'Interaction',
		skip: skipMobile,
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
