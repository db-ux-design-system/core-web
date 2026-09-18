import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// The "slow"/"fast" delayed indicators are visual duplicates of the
// always-visible "none" group (same roles, labels, variants and
// orientations), so revealing them adds no a11y coverage while roughly
// doubling the DOM the checker has to walk. We leave them hidden here; the
// "none" group already exercises every configuration.
test.describe('DBLoadingIndicator', () => {
	runA11yCheckerTest({
		path: '06/loading-indicator'
	});
});
