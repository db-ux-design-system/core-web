import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	runAriaSnapshotTest({
		path,
		async preScreenShot(page) {
			await page.waitForTimeout(1000);
		}
	});
});
