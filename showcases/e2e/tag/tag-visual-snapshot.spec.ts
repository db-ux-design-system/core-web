import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/tag';

test.describe('DBTag', () => {
	getDefaultScreenshotTest({
		path,
		// The removable DBTag embeds a DBTooltip that is laid out in-flow
		// (position: absolute; visibility: hidden) until its deferred placement
		// switches it to position: fixed. Measuring the page height races that
		// switch and flips the viewport by ~12px between runs, so we pin a fixed
		// height instead of measuring scrollHeight dynamically.
		fixedHeight: 2500
	});
});
