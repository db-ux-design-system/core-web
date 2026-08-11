import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBHeading', () => {
	runAxeCoreTest({ path: 'heading' });
	runAxeCoreTest({ path: 'heading', color: lvl3 });
	runAxeCoreTest({ path: 'heading', density: 'functional' });
});
