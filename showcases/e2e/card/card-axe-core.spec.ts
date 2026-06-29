import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBCard', () => {
	runAxeCoreTest({ path: '01/card' });
	runAxeCoreTest({ path: '01/card', color: lvl3 });
	runAxeCoreTest({ path: '01/card', density: 'functional' });
});
