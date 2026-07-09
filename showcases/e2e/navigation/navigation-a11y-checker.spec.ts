import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBNavigation', () => {
	runA11yCheckerTest({ path: '05/navigation' });
});
