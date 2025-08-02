import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBIcon', () => {
	runA11yCheckerTest({ path: '04/icon' });
});
