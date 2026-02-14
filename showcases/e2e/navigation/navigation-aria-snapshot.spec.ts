import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/navigation';
const fixedHeight = 1200;

test.describe('DBNavigation', () => {
	runAriaSnapshotTest({
		path,
		fixedHeight,
		skip: { stencil: true } // Navigation isn't working properly for stencil will be fixed with https://github.com/db-ux-design-system/core-web/tree/feat-shell
	});
});
