import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBCustomButton', () => {
	runA11yCheckerTest({ path: '02/custom-button' });
});
