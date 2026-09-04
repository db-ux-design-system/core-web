import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	// The delayed variants start hidden (visibility: hidden) and only become
	// visible after a CSS delay (max 500ms for "slow"). Wait until every
	// delayed indicator is visible so the screenshot is deterministic without
	// pinning a viewport-specific fixed height.
	getDefaultScreenshotTest({
		path,
		async preScreenShot(page) {
			await page.waitForFunction(() => {
				const delayed = [
					...document.querySelectorAll(
						'.db-loading-indicator[data-delay]'
					)
				];
				return (
					delayed.length > 0 &&
					delayed.every(
						(element) =>
							getComputedStyle(element).visibility === 'visible'
					)
				);
			});
		}
	});
});
