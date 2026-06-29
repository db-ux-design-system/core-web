import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBNotification', () => {
	runA11yCheckerTest({ path: '06/notification' });
});
