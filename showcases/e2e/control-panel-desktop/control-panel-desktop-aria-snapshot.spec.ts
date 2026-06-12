import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/control-panel-desktop';
test.describe('DBControlPanelDesktop', () => {
	runAriaSnapshotTest({ path });
});
