import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';
import { revealDelayedIndicators } from './reveal-delayed-indicators.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	runAriaSnapshotTest({
		path,
		// The delayed variants start hidden (visibility: hidden) and only
		// become visible after a CSS animation-delay (max 500ms for "slow").
		// Waiting for that reveal races with the accessibility-tree
		// recomputation in WebKit: getComputedStyle can already report
		// "visible" while the last revealed node (the "Bar" variant, which is
		// last in DOM order per delay group) has not been added to the AX tree
		// yet, so its progressbar is intermittently missing from the snapshot.
		// Instead of waiting for the reveal, neutralize the delay so every
		// indicator is visible from first paint and the AX tree is stable well
		// before the snapshot is taken.
		preScreenShot: revealDelayedIndicators
	});
});
