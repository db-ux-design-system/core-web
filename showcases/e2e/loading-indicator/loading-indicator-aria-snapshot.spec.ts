import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	runAriaSnapshotTest({
		path,
		// The delayed variants start hidden and only become visible after a
		// CSS delay (max 500ms for "slow"). Wait until every delayed indicator
		// is visible so the aria snapshot includes them.
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
