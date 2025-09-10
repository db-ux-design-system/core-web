import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBSection', () => {
	runAxeCoreTest({ path: '01/section' });
	runAxeCoreTest({ path: '01/section', color: lvl3 });
	runAxeCoreTest({ path: '01/section', density: 'functional' });
});
