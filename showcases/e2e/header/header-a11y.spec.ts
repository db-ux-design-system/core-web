import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBHeader', () => {
	const isAngular = process.env.showcase.startsWith('angular');
	getA11yTest({ path: '01/header', skipA11y: isAngular });
});
