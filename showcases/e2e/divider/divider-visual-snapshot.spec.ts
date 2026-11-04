import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isAngular } from '../default.ts';

const path = '01/divider';
const fixedHeight = 1500;
test.describe('DBDivider', () => {
	getDefaultScreenshotTest({
		path,
		fixedHeight,
		// Angular differs from the React baseline only in text anti-aliasing since the examples use a grid wrapper
		ratio: isAngular(process.env.showcase) ? '0.001' : undefined
	});
});
