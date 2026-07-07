import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = [];
if (hasWebComponentSyntax(process.env.showcase)) {
	// For angular and stencil the <li> is wrapped inside <db-control-panel-item> which is a false-positive in axe-core
	axeDisableRules.push('listitem');
}

test.describe('DBControlPanelMobile', () => {
	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, { project }) => {
		if (!project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runAxeCoreTest({ path: '05/control-panel-mobile', axeDisableRules });
	runAxeCoreTest({
		path: '05/control-panel-mobile',
		color: lvl3,
		axeDisableRules
	});
	runAxeCoreTest({
		path: '05/control-panel-mobile',
		density: 'functional',
		axeDisableRules
	});
});
