import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBRadio', () => {
	runAxeCoreTest({ path: '03/radio' });
	runAxeCoreTest({ path: '03/radio', color: lvl3 });
	runAxeCoreTest({ path: '03/radio', density: 'functional' });
});
