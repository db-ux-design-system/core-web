import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = [
	// We have multiple <main> because we want to showcase them in the showcases lol
	'landmark-main-is-top-level',
	'landmark-no-duplicate-main',

	// We have an axe-core false-positive with the `role=treeitem`
	'aria-required-children',
	'presentation-role-conflict',
	'aria-required-parent'
];

if (hasWebComponentSyntax(process.env.showcase)) {
	// For angular and stencil the <li> is wrapped inside <db-control-panel-item> which is a false-positive in axe-core
	axeDisableRules.push('listitem');
}

test.describe('DBShell', () => {
	runAxeCoreTest({
		path: '05/shell',
		axeDisableRules
	});
	runAxeCoreTest({ path: '05/shell', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '05/shell',
		density: 'functional',
		axeDisableRules
	});
});
