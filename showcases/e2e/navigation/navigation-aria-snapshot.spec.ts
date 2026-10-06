import { expect, test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/navigation';
const fixedHeight = 1200;

test.describe('DBNavigation', () => {
	runAriaSnapshotTest({
		path,
		fixedHeight,
		// The Interaction fixture's sub-navigation toggle derives its
		// accessible name from its children ("Test1"), which only lands in the
		// a11y tree once the navigation-item's onUpdate effect has inspected
		// the sub-navigation menu. Wait for that name before snapshotting so
		// the capture does not race the init and emit an unnamed button.
		async preScreenShot(page) {
			await expect(
				page.getByRole('button', { name: 'Test1' })
			).toBeVisible();
		},
		skip: { stencil: true } // Navigation isn't working properly for stencil will be fixed with https://github.com/db-ux-design-system/core-web/tree/feat-shell
	});
});
