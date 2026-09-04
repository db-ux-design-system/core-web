import { type Page, test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// The delayed variants start hidden (visibility: hidden) and only become
// visible after a CSS delay (max 500ms for "slow"). Wait until every delayed
// indicator is actually visible so the a11y checks cover them too.
const waitForDelayedIndicators = async (page: Page) => {
	await page.waitForFunction(() => {
		const delayed = [
			...document.querySelectorAll('.db-loading-indicator[data-delay]')
		];
		return (
			delayed.length > 0 &&
			delayed.every(
				(element) => getComputedStyle(element).visibility === 'visible'
			)
		);
	});
};

test.describe('DBLoadingIndicator', () => {
	runAxeCoreTest({
		path: '06/loading-indicator',
		preAxe: waitForDelayedIndicators
	});
	runAxeCoreTest({
		path: '06/loading-indicator',
		color: lvl3,
		preAxe: waitForDelayedIndicators
	});
	runAxeCoreTest({
		path: '06/loading-indicator',
		density: 'functional',
		preAxe: waitForDelayedIndicators
	});
});
