import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBBadge', () => {
	runA11yCheckerTest({ path: '06/badge' });
});
