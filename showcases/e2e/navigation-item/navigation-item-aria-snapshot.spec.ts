import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/navigation-item';
const fixedHeight = 1800;
test.describe('DBNavigationItem', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`

	runAriaSnapshotTest({
		path,
		fixedHeight,
		skip: { stencil: true } // Navigation isn't working properly for stencil will be fixed with https://github.com/db-ux-design-system/core-web/tree/feat-shell
	});
});
