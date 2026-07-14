import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isAngular } from '../default.ts';

const path = '04/table';
test.describe('DBTable', () => {
	getDefaultScreenshotTest({
		path,
		fixedHeight: 10_000,
		ratio: isAngular(process.env.showcase) ? '0.02' : undefined
	});
});
