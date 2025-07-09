import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBBrand', () => {
	runA11yCheckerTest({ path: '04/brand' });
});
