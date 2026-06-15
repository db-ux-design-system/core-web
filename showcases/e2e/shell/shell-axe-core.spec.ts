import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = [
	// We have multiple <main> because we want to showcase them in the showcases lol
	'landmark-main-is-top-level',
	'landmark-no-duplicate-main'
];

test.describe('DBShell', () => {
	runAxeCoreTest({
		path: '01/shell',
		axeDisableRules
	});
	runAxeCoreTest({ path: '01/shell', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '01/shell',
		density: 'functional',
		axeDisableRules
	});
});
