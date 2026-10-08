import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/breadcrumb';

// The breadcrumb auto-collapses its trail in a post-mount `requestAnimationFrame`
// (see breadcrumb.lite.tsx), which changes the page height a frame after the
// first paint. Measuring `scrollHeight` dynamically therefore races that reflow
// and the captured height drifts between runs (observed 2558-2622px for the same
// page), so we pin a fixed height instead - same remedy as tag/header/divider.
const fixedHeight = 2500;

test.describe('DBBreadcrumb', () => {
	getDefaultScreenshotTest({ path, fixedHeight });
});
