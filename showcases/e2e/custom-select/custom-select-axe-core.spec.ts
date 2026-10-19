import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';

// The `nested-interactive` violation for `tag-select`'s removable tags
// (https://github.com/db-ux-design-system/core-web/issues/7866) is fixed: the
// remove <button>s now render as siblings of the empty <summary>, not inside it,
// so the whole page is scanned without any exclude.
test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path });
	runAxeCoreTest({ path, color: lvl3 });
	runAxeCoreTest({ path, density: 'functional' });
});
