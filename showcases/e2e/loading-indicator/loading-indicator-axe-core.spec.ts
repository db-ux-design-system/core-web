import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants.ts';
import { revealDelayedIndicators } from './reveal-delayed-indicators.ts';

test.describe('DBLoadingIndicator', () => {
	runAxeCoreTest({
		path: '06/loading-indicator',
		preAxe: revealDelayedIndicators
	});
	runAxeCoreTest({
		path: '06/loading-indicator',
		color: lvl3,
		preAxe: revealDelayedIndicators
	});
	runAxeCoreTest({
		path: '06/loading-indicator',
		density: 'functional',
		preAxe: revealDelayedIndicators
	});
});
