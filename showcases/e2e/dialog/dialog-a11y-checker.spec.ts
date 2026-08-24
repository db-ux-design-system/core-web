import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBDialog', () => {
	runA11yCheckerTest({ path: 'dialog' });
});
