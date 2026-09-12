import { type Page } from '@playwright/test';

// Makes the delayed loading indicators deterministic for e2e checks.
//
// The "slow" and "fast" variants start with `visibility: hidden` and only
// reveal themselves after a CSS `animation-delay` (500ms / 250ms) flips them
// back to `visible` via `animation-fill-mode: forwards`. Waiting for that
// reveal is inherently racy: `getComputedStyle().visibility` can report
// "visible" before the browser has added the freshly revealed node to the
// accessibility tree (observed on WebKit for the last-in-DOM "Bar" variant),
// and it depends on wall-clock timing that varies under CI load.
//
// Instead of waiting for the animation, we override it so every delayed
// indicator is visible immediately, then confirm the override took effect.
// This removes the timing dependency entirely.
export const revealDelayedIndicators = async (page: Page): Promise<void> => {
	await page.addStyleTag({
		content: `
			.db-loading-indicator[data-delay="slow"],
			.db-loading-indicator[data-delay="fast"] {
				visibility: visible !important;
				animation: none !important;
			}
		`
	});

	await page.waitForFunction(() => {
		const delayed = [
			...document.querySelectorAll('.db-loading-indicator[data-delay]')
		] as Element[];
		return (
			delayed.length > 0 &&
			delayed.every(
				(element) => getComputedStyle(element).visibility === 'visible'
			)
		);
	});
};
