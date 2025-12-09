import { test } from '@playwright/test';

const path = '03/checkbox';
test.describe('DBCheckbox', () => {
	// TODO: There is an issue with playwright ariaSnapshot not working properly for react
	// runAriaSnapshotTest({ path });
});
