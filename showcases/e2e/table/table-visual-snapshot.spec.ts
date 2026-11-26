import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isAngular } from '../default.ts';

const path = '04/table';
test.describe('DBTable', () => {
	getDefaultScreenshotTest({
		path,
		// The `mobileVariant="list"` examples stack every cell below its label
		// on mobile, so the page is a lot taller than on desktop.
		fixedHeight: (project) =>
			project.name.startsWith('mobile') ? 25_000 : 15_000,
		ratio: isAngular(process.env.showcase) ? '0.02' : undefined
	});
});
