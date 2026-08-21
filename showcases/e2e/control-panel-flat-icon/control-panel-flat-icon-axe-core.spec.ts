import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = [];
if (hasWebComponentSyntax(process.env.showcase)) {
	// For angular and stencil the <li> is wrapped inside <db-control-panel-item> which is a false-positive in axe-core
	axeDisableRules.push('listitem');
}

test.describe('DBControlPanelFlatIcon', () => {
	runAxeCoreTest({ path: '05/control-panel-flat-icon', axeDisableRules });
	runAxeCoreTest({
		path: '05/control-panel-flat-icon',
		color: lvl3,
		axeDisableRules
	});
	runAxeCoreTest({
		path: '05/control-panel-flat-icon',
		density: 'functional',
		axeDisableRules
	});
});
