import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBControlPanelDesktop', () => {
	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, { project }) => {
		if (project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runAxeCoreTest({ path: '05/control-panel-desktop' });
	runAxeCoreTest({ path: '05/control-panel-desktop', color: lvl3 });
	runAxeCoreTest({
		path: '05/control-panel-desktop',
		density: 'functional'
	});
});
