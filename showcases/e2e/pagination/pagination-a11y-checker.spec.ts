import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBPagination', () => {
	runA11yCheckerTest({ path: 'pagination' });
});
