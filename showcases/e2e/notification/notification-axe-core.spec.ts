import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBNotification', () => {
	runAxeCoreTest({ path: '06/notification' });
	runAxeCoreTest({ path: '06/notification', color: lvl3 });
	runAxeCoreTest({ path: '06/notification', density: 'functional' });
});
