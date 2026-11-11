import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isAngular } from '../default.ts';

const path = '01/divider';
const fixedHeight = 1500;
test.describe('DBDivider', () => {
	getDefaultScreenshotTest({
		path,
		fixedHeight,
		// Angular differs from the React baseline only in text anti-aliasing on mobile Chrome since the examples use a grid wrapper.
		// Scoped to that project, so the default WebKit tolerance stays in place.
		ratio: (project) =>
			isAngular(process.env.showcase) && project.name === 'mobile_chrome'
				? '0.001'
				: undefined
	});
});
