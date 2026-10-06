import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('Static Paragraph components', () => {
	runAxeCoreTest({ path: '04/paragraph' });
	runAxeCoreTest({ path: '04/paragraph', color: lvl3 });
	runAxeCoreTest({ path: '04/paragraph', density: 'functional' });
});
