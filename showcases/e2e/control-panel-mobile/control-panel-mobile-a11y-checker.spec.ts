import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBControlPanelMobile', () => {
	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, { project }) => {
		if (!project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runA11yCheckerTest({ path: '05/control-panel-mobile' });
});
