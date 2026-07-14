import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/control-panel-desktop';
test.describe('DBControlPanelDesktop', () => {
	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, { project }) => {
		if (project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	getDefaultScreenshotTest({ path });
});
