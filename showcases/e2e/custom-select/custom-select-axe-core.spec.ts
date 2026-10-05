import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';

// The interaction fixture's `tag-select` ships preselected removable tags, whose
// remove <button>s render inside the <summary> - a known structural
// `nested-interactive` violation tracked in
// https://github.com/db-ux-design-system/core-web/issues/7866 (fixed in a
// separate breaking change). Exclude only that one summary from the scan rather
// than disabling the rule for the whole page, so every other custom-select
// example on the page still enforces `nested-interactive`.
const axeExclude = '[data-testid="tag-select"] summary';

test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path, axeExclude });
	runAxeCoreTest({ path, color: lvl3, axeExclude });
	runAxeCoreTest({ path, density: 'functional', axeExclude });
});
