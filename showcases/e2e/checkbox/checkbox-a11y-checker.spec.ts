import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBCheckbox', () => {
	runA11yCheckerTest({ path: '03/checkbox' });
});
