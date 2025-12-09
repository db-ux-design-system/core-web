import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBStack', () => {
	runA11yCheckerTest({ path: '01/stack' });
});
