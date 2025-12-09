import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBTooltip', () => {
	runA11yCheckerTest({ path: '04/tooltip' });
});
