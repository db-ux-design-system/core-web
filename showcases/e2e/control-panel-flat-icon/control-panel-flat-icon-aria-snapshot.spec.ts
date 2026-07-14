import { expect, test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/control-panel-flat-icon';
test.describe('DBControlPanelFlatIcon', () => {
	runAriaSnapshotTest({
		path,
		async preScreenShot(page) {
			const flatIcon = page
				.locator('.db-control-panel-flat-icon')
				.first();
			await expect(flatIcon).toBeVisible();
		}
	});
});
