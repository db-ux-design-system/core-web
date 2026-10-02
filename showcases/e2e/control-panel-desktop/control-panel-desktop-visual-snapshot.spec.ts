import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/shell/control-panel-desktop';
test.describe('DBControlPanelDesktop', () => {
	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, { project }) => {
		if (project.name.startsWith('mobile')) {
			test.skip();
		}
	});

	// The Interaction example renders navigation item groups whose popover
	// menus are position: absolute; visibility: hidden until their placement
	// JS runs. While in flow they inflate the measured scrollHeight, so the
	// dynamically-sized viewport flips by ~90px between runs. Pin a fixed
	// height instead of measuring dynamically (as header/divider/tooltip do).
	getDefaultScreenshotTest({ path, fixedHeight: 3800 });
});
