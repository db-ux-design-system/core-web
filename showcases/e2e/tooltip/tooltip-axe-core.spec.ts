import { type Page, test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';
import { lvl3 } from '../fixtures/variants';

const selector = '.db-tooltip';

const preAxe = async (page: Page) => hoverPre(page, selector);

test.describe('DBTooltip', () => {
	runAxeCoreTest({ path: '04/tooltip', preAxe });
	runAxeCoreTest({ path: '04/tooltip', color: lvl3, preAxe });
	runAxeCoreTest({ path: '04/tooltip', density: 'functional', preAxe });
});
