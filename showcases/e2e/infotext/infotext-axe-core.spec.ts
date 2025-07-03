import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBInfotext', () => {
	runAxeCoreTest({ path: '04/infotext' });
	runAxeCoreTest({ path: '04/infotext', color: lvl3 });
	runAxeCoreTest({ path: '04/infotext', density: 'functional' });
});
