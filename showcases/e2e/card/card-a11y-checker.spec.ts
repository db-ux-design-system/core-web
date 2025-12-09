import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBCard', () => {
	runA11yCheckerTest({ path: '01/card' });
});
