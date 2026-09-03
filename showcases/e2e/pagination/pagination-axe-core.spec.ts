import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// Angular and Stencil put a <db-pagination-item> host element between the <ul> and
// its <li>, so axe no longer sees a list with list items - even though the host is
// display: contents and the rendered layout is identical. Same limitation as
// DBAccordion, see
// https://stackoverflow.com/questions/78129019/can-you-have-an-li-in-a-autonomous-custom-element-with-the-parent-ul-not
// Only the two list rules are switched off instead of the whole test, so both
// targets keep the rest of the axe coverage for this page.
// TODO: Let's investigate whether we could prevent this deactivation later on
const axeDisableRules = hasWebComponentSyntax(process.env.showcase)
	? ['list', 'listitem']
	: [];

test.describe('DBPagination', () => {
	runAxeCoreTest({ path: '05/pagination', axeDisableRules });
	runAxeCoreTest({ path: '05/pagination', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '05/pagination',
		density: 'functional',
		axeDisableRules
	});
});
