import { expect, test, type Page } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// The "Action" interaction fixture nests a labelled DBTextarea inside the second
// (single-behavior, collapsed) accordion item. DBTextarea associates its
// <label htmlFor> with the <textarea id> correctly, but the IBM checker reports
// a false `input_label_exists` for a control inside a closed <details>, where
// the hidden subtree is not evaluated as associated. Rather than disabling the
// rule for the whole page (which would mask real missing-label regressions in
// every other example), open just that item before the scan so the textarea is
// evaluated in a visible subtree - mirroring the openDialog preChecker used by
// the dialog a11y-checker spec. Only the Action item2 holds a form control, so
// opening it alone resolves the finding (its single-behavior accordion cannot
// keep more than one item open at a time anyway).
const openItemWithTextarea = async (page: Page) => {
	const textareaItem = page
		.locator('#main-content .db-accordion-item')
		.filter({ has: page.getByTestId('textarea') });
	const details = textareaItem.locator('details');
	const isOpen = await details.evaluate(
		(element: HTMLDetailsElement) => element.open
	);
	if (!isOpen) {
		await textareaItem.locator('summary').click();
	}
	// Content lives in the <div> after the <summary>; wait until it is shown.
	await expect(page.getByTestId('textarea')).toBeVisible();
};

test.describe('DBAccordion', () => {
	runA11yCheckerTest({
		path: '04/accordion',
		preChecker: openItemWithTextarea
	});
});
