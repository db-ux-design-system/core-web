import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBTable', () => {
	runA11yCheckerTest({ path: 'table' });
});

