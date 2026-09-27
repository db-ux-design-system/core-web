import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';
import { revealDelayedIndicators } from './reveal-delayed-indicators.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	// The delayed variants start hidden (visibility: hidden) and only become
	// visible after a CSS animation-delay (max 500ms for "slow"). Force them
	// visible so the screenshot is deterministic without depending on
	// wall-clock timing or a viewport-specific fixed height.
	getDefaultScreenshotTest({
		path,
		preScreenShot: revealDelayedIndicators
	});
});
