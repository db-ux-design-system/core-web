import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants.ts';

// The "slow"/"fast" delayed indicators are visual duplicates of the
// always-visible "none" group (same roles, labels, variants and
// orientations), so revealing them adds no a11y coverage. It only doubles the
// tree axe has to scan, which pushed the scan past the 30s test budget on the
// slower Firefox and WebKit engines. We therefore leave them hidden here; the
// "none" group already exercises every configuration.
test.describe('DBLoadingIndicator', () => {
	runAxeCoreTest({
		path: '06/loading-indicator'
	});
	runAxeCoreTest({
		path: '06/loading-indicator',
		color: lvl3
	});
	runAxeCoreTest({
		path: '06/loading-indicator',
		density: 'functional'
	});
});
