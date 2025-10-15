import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBSection', () => {
	runA11yCheckerTest({ path: '01/section' });
});
