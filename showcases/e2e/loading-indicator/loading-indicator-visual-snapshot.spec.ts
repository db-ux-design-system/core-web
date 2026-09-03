import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	// The delayed variants start hidden and only appear after a CSS delay
	// (max 500ms). Wait a bit longer so they are visible before the capture,
	// which keeps the screenshot deterministic without pinning a viewport-
	// specific fixed height.
	getDefaultScreenshotTest({
		path,
		async preScreenShot(page) {
			await page.waitForTimeout(1000);
		}
	});
});
