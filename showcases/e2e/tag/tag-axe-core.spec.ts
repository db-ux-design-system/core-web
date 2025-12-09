import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTag', () => {
	runAxeCoreTest({ path: '04/tag' });
	runAxeCoreTest({ path: '04/tag', color: lvl3 });
	runAxeCoreTest({ path: '04/tag', density: 'functional' });
});
