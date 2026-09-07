import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';
import { revealDelayedIndicators } from './reveal-delayed-indicators.ts';

test.describe('DBLoadingIndicator', () => {
	runA11yCheckerTest({
		path: '06/loading-indicator',
		preChecker: revealDelayedIndicators
	});
});
