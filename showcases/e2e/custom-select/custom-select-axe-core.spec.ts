import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';

test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path });
	runAxeCoreTest({ path, color: lvl3 });
	runAxeCoreTest({ path, density: 'functional' });
});
