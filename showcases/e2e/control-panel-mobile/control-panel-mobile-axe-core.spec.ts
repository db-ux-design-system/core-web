import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBControlPanelMobile', () => {
	test.beforeEach((_fixtures, { project }) => {
		if (!project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runAxeCoreTest({ path: '05/control-panel-mobile' });
	runAxeCoreTest({ path: '05/control-panel-mobile', color: lvl3 });
	runAxeCoreTest({ path: '05/control-panel-mobile', density: 'functional' });
});
