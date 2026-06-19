import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/control-panel-flat-icon';
test.describe('DBControlPanelFlatIcon', () => {
	runAriaSnapshotTest({ path });
});
