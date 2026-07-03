import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/control-panel-mobile';
test.describe('DBControlPanelMobile', () => {
	test.beforeEach((_fixtures, { project }) => {
		if (!project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	runAriaSnapshotTest({ path });
});
