import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

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
