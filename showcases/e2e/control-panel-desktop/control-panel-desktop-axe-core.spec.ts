import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules =
	// For angular and stencil the <li> is wrapped inside <db-control-panel-item> which is a false-positive in axe-core
	hasWebComponentSyntax(process.env.showcase) ? ['listitem'] : [];

test.describe('DBControlPanelDesktop', () => {
	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, { project }) => {
		if (project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runAxeCoreTest({ path: '05/shell/control-panel-desktop', axeDisableRules });
	runAxeCoreTest({
		path: '05/shell/control-panel-desktop',
		color: lvl3,
		axeDisableRules
	});
	runAxeCoreTest({
		path: '05/shell/control-panel-desktop',
		density: 'functional',
		axeDisableRules
	});
});
