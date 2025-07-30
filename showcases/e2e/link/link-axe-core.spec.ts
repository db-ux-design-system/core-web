import { test } from '@playwright/test';
import { isStencil, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBLink', () => {
	runAxeCoreTest({ path: '02/link' });
	runAxeCoreTest({ path: '02/link', color: lvl3 });
	runAxeCoreTest({ path: '02/link', density: 'functional' });
});
