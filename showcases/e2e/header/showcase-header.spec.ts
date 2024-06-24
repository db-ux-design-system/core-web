import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBHeader', () => {
	const isAngular = process.env.showcase.startsWith('angular');
	getDefaultScreenshotTest({ path: '01/header', skipA11y: isAngular });
});
