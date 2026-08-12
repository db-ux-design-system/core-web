import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBHeading', () => {
	runAxeCoreTest({ path: '04/heading' });
	runAxeCoreTest({ path: '04/heading', color: lvl3 });
	runAxeCoreTest({ path: '04/heading', density: 'functional' });
});
