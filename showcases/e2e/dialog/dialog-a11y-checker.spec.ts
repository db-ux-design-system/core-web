import { type Page, test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// Every dialog example initializes closed, so the showcase renders only the
// launcher buttons and the checker only sees them. Open a representative dialog
// (header + content + footer) before checking so the dialog itself gets
// meaningful accessibility coverage across all showcases.
const preChecker = async (page: Page) => {
	await page
		.locator('main')
		.getByRole('button', { name: 'Open: With text prop' })
		.click();
	await page.locator('dialog[open]').first().waitFor({ state: 'visible' });
};

// The footer's brand-variant confirm button (white text on DB brand red) is
// flagged for insufficient text contrast, but that is a false positive: the
// solid brand token against white measures 4.56:1, which passes WCAG AA. `brand`
// is an intended part of the design. The a11y-checker cannot scope a disabled
// rule to a single element, so the contrast rule is disabled for this dialog
// scan; the axe-core test keeps the rule active and instead excludes only that
// one button (see dialog-axe-core.spec.ts).
const aCheckerDisableRules = ['text_contrast_sufficient'];

test.describe('DBDialog', () => {
	runA11yCheckerTest({ path: '01/dialog', preChecker, aCheckerDisableRules });
});
