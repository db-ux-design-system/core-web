import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBControlPanelDesktop', () => {
	test.beforeEach((_fixtures, { project }) => {
		if (project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runA11yCheckerTest({ path: '05/control-panel-desktop' });
});
