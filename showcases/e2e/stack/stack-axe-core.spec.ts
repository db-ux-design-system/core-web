import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBStack', () => {
	runAxeCoreTest({ path: '01/stack' });
	runAxeCoreTest({ path: '01/stack', color: lvl3 });
	runAxeCoreTest({
		path: '01/stack',
		density: 'functional'
	});
});
