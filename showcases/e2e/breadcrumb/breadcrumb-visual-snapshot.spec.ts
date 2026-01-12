import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/breadcrumb';
test.describe('DBBreadcrumb', () => {
	// Web Components create rendering inconsistencies in visual tests
	// The custom element host (<db-breadcrumb>) causes layout differences
	// in mobile Chrome that cannot be reliably controlled in CI environments
	getDefaultScreenshotTest({ path, skip: { stencil: true } });
});
