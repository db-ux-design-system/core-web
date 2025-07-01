import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBDrawer', () => {
	runA11yCheckerTest({ path: '01/drawer' });
});
