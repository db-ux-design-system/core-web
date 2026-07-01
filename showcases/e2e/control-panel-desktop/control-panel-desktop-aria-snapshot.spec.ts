import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/control-panel-desktop';
test.describe('DBControlPanelDesktop', () => {
	runAriaSnapshotTest({ path });
});
