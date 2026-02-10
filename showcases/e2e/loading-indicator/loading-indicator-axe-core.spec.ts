import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBLoadingIndicator', () => {
	runAxeCoreTest({ path: '06/loading-indicator' });
	runAxeCoreTest({ path: '06/loading-indicator', color: lvl3 });
	runAxeCoreTest({ path: '06/loading-indicator', density: 'functional' });
});
