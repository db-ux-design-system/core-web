import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBCustomButton', () => {
	runAxeCoreTest({ path: '02/custom-button' });
	runAxeCoreTest({ path: '02/custom-button', color: lvl3 });
	runAxeCoreTest({ path: '02/custom-button', density: 'functional' });
});
