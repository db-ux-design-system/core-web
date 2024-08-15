import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBNavigation', () => {
	const isAngular = process.env.showcase.startsWith('angular');
	getA11yTest({
		path: '05/navigation',
		skipA11y: isAngular
	});
});
