import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';
const axeDisableRules = ['nested-interactive']; // https://github.com/db-ux-design-system/core-web/issues/7866

test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path, axeDisableRules });
	runAxeCoreTest({ path, color: lvl3, axeDisableRules });
	runAxeCoreTest({ path, density: 'functional', axeDisableRules });
});
