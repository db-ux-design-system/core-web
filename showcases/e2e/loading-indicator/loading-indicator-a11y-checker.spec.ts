import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBLoadingIndicator', () => {
	runA11yCheckerTest({
		path: '06/loading-indicator',
		// The delayed variants start hidden and only become visible after a
		// CSS delay (max 500ms for "slow"). Wait until every delayed indicator
		// is visible so the checker covers them too.
		async preChecker(page) {
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
