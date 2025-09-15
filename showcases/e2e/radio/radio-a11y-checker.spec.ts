import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBRadio', () => {
	runA11yCheckerTest({ path: '03/radio' });
});
