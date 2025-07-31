import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBSwitch', () => {
	runAxeCoreTest({ path: '03/switch' });
	runAxeCoreTest({ path: '03/switch', color: lvl3 });
	runAxeCoreTest({ path: '03/switch', density: 'functional' });
});
