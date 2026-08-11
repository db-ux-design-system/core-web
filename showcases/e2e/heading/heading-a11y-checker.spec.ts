import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBHeading', () => {
	runA11yCheckerTest({ path: 'heading' });
});
