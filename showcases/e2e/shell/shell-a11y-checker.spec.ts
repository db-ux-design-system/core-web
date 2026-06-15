import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBShell', () => {
	runA11yCheckerTest({ path: '01/shell' });
});
