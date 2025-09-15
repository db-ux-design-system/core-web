import { type Page, test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';
import { lvl3 } from '../fixtures/variants';

const selector = '.db-popover';

const preAxe = async (page: Page) => hoverPre(page, selector);

test.describe('DBPopover', () => {
	runAxeCoreTest({ path: '01/popover', preAxe });
	runAxeCoreTest({ path: '01/popover', color: lvl3, preAxe });
	runAxeCoreTest({ path: '01/popover', density: 'functional', preAxe });
});
