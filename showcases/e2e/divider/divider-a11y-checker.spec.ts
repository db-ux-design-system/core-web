import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBDivider', () => {
	runA11yCheckerTest({ path: '01/divider' });
});
