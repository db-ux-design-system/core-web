import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

test.describe('DBBreadcrumb', () => {
	// Web Components create nested navigation landmarks in the accessibility tree
	// The custom element host (<db-breadcrumb>) appears as a navigation wrapper
	// even with role="none", causing duplicate landmarks in Chromium browsers
	runAriaSnapshotTest({ path: '05/breadcrumb', skip: { stencil: true } });
});
