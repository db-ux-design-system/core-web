import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';
import { openDialog } from './index.ts';

test.describe('DBDialog', () => {
	runA11yCheckerTest({ path: '01/dialog', preChecker: openDialog });
});
