import { expect, test, type Page } from '@playwright/test';
import { runInteractionTest, type SkipType } from '../default.ts';

const path = '03/custom-select';

// Keyboard navigation (ArrowUp/Down, Enter, Space) is a desktop affordance.
// Playwright's WebKit mobile emulation (`mobile_safari`, a touch device) does
// not move DOM focus in response to synthetic key events the way iOS Safari
// behaves for a real user, so `document.activeElement` never updates to the
// focused option and the focus-based assertions below time out. Skip the
// keyboard-driven scenarios on every mobile project, mirroring
// `navigation-interaction.spec.ts`.
const skipKeyboardOnMobile: SkipType = {
	project: (project) => project.name.startsWith('mobile')
};

// Waits for the active element's value to match, instead of a hard-coded
// timeout - mirrors the helper from the removed component test.
const waitForFocusChange = async (
	page: Page,
	expectedValue: string,
	timeout = 5000
) => {
	await page.waitForFunction(
		(expected) => {
			const activeElement = document.activeElement as HTMLInputElement;
			return activeElement?.value === expected;
		},
		expectedValue,
		{ timeout }
	);
};

test.describe('DBCustomSelect', () => {
	runInteractionTest({
		title: 'click on single item',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('single-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');
			await expect(selectedLabel).not.toContainText('Option 1');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'Option 1');
			await page.keyboard.press('Space');
			await expect(selectedLabel).toContainText('Option 1');
		}
	});

	runInteractionTest({
		title: 'click on multiple item',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('multiple-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');
			await expect(selectedLabel).not.toContainText('Option 1');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'Option 1');
			await page.keyboard.press('Space');
			await page.keyboard.press('Escape');
			await expect(selectedLabel).toContainText('Option 1');
		}
	});

	runInteractionTest({
		title: 'test search',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content.getByTestId('search-select');
			const summary = select.locator('summary');
			const details = select.locator('details');

			// The search input has no show/hide of its own - it is a child of
			// the native <details>, so it is only visible once <details open>
			// is set. On WebKit a synthetic `summary.click()` does not reliably
			// trigger the native toggle default action, leaving the input in
			// the DOM but hidden. Open the <details> directly and wait for the
			// `open` attribute instead of racing a click, so the assertion only
			// runs once the dropdown (and its bottom-sheet layout on mobile)
			// has actually opened.
			await summary.click({ force: true });
			await details.evaluate((element: HTMLDetailsElement) => {
				element.open = true;
			});
			await expect(details).toHaveAttribute('open', '');

			const searchInput = select.locator('input[type="search"]');
			await expect(searchInput).toBeVisible();

			const inputs = await select.locator('input').all();
			expect(inputs.length).toBe(7);

			await searchInput.fill('test');
			for (const input of inputs.slice(1)) {
				await expect(input).not.toBeVisible();
			}
		}
	});

	runInteractionTest({
		title: 'test select all',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('select-all-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await page.waitForTimeout(1000); // Wait for checkboxes to load
			await page.waitForTimeout(1000); // Wait for focus to apply
			await page.keyboard.press('Space');
			await page.keyboard.press('Escape');
			await expect(selectedLabel).toContainText(
				'Option 1, Option 2, Option 3, Option 4, Option 5'
			);
		}
	});

	runInteractionTest({
		title: 'select single item with Enter key',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('single-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');
			await expect(selectedLabel).not.toContainText('Option 1');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'Option 1');
			await page.keyboard.press('Enter');
			await expect(selectedLabel).toContainText('Option 1');
			// For single select, the dropdown closes after Enter.
			await expect(select.locator('details')).not.toHaveAttribute('open');
		}
	});

	runInteractionTest({
		title: 'select multiple item with Enter key',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('multiple-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');
			await expect(selectedLabel).not.toContainText('Option 1');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'Option 1');
			await page.keyboard.press('Enter');
			// For multiple select, the dropdown stays open after Enter.
			await expect(select.locator('details')).toHaveAttribute('open');
			await page.keyboard.press('Escape');
			await expect(selectedLabel).toContainText('Option 1');
		}
	});

	runInteractionTest({
		title: 'select first filtered item with Enter key from search field',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('search-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await page.waitForFunction(() => {
				const activeElement =
					document.activeElement as HTMLInputElement;
				return activeElement?.type === 'search';
			});

			await page.keyboard.type('2');
			await page.waitForTimeout(100);
			await page.keyboard.press('Enter');
			await page.keyboard.press('Escape');

			await expect(selectedLabel).toContainText('Option 2');
		}
	});

	runInteractionTest({
		title: 'select first available option with Enter when only one option remains after filtering',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('search-select');
			const summary = select.locator('summary');
			const selectedLabel = select.locator('.db-custom-select-label');

			await summary.focus();
			await page.keyboard.press('ArrowDown');
			await page.waitForFunction(() => {
				const activeElement =
					document.activeElement as HTMLInputElement;
				return activeElement?.type === 'search';
			});

			await page.keyboard.type('Option 3');
			await page.waitForTimeout(100);
			await page.keyboard.press('Enter');
			await page.keyboard.press('Escape');

			await expect(selectedLabel).toContainText('Option 3');
		}
	});

	runInteractionTest({
		title: 'option groups keyboard navigation should skip group titles (#4920)',
		path,
		example: 'Interaction',
		skip: skipKeyboardOnMobile,
		async run({ page, content }) {
			const select = content.getByTestId('option-groups-select');
			const summary = select.locator('summary');

			await summary.focus();
			await page.waitForTimeout(1000); // Wait for checkboxes to load
			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'G1:Option 1');

			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'G1:Option 2');

			// Navigating from the last item of group 1 must skip the "Option
			// group 2" title and land on the first item of group 2 - the
			// regression fixed in #4920.
			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'G2:Option 1');

			await page.keyboard.press('ArrowDown');
			await waitForFocusChange(page, 'G2:Option 2');

			// Test reverse navigation.
			await page.keyboard.press('ArrowUp');
			await waitForFocusChange(page, 'G2:Option 1');

			await page.keyboard.press('ArrowUp');
			await waitForFocusChange(page, 'G1:Option 2');
		}
	});

	runInteractionTest({
		title: 'custom removeTagsTexts should correspond to the correct options',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content.getByTestId('tag-select');
			const tags = select.locator('.db-tag');
			await expect(tags).toHaveCount(2);

			const removeButtons = select.locator(
				'.db-tag .db-tab-remove-button'
			);
			await expect(removeButtons).toHaveCount(2);

			// The selected values are 'Blue' and 'Green' (indices 1 and 2 in
			// the options array).
			await expect(
				removeButtons.first().locator('.db-tooltip')
			).toContainText('Remove Blue Color');
			await expect(
				removeButtons.last().locator('.db-tooltip')
			).toContainText('Remove Green Color');
		}
	});

	runInteractionTest({
		title: 'should clear tags when values is reset to null, undefined or an empty array',
		path,
		example: 'Interaction',
		async run({ content }) {
			const selectedLabel = content
				.getByTestId('values-reset-select')
				.locator('.db-custom-select-label');

			await content.getByTestId('values-reset-set').click();
			await expect(selectedLabel).toContainText('Option 1, Option 2');

			await content.getByTestId('values-reset-null').click();
			await expect(selectedLabel).not.toContainText('Option 1');
			await expect(selectedLabel).not.toContainText('Option 2');

			await content.getByTestId('values-reset-set').click();
			await expect(selectedLabel).toContainText('Option 1, Option 2');
			await content.getByTestId('values-reset-undefined').click();
			await expect(selectedLabel).not.toContainText('Option 1');

			await content.getByTestId('values-reset-set').click();
			await expect(selectedLabel).toContainText('Option 1, Option 2');
			await content.getByTestId('values-reset-empty').click();
			await expect(selectedLabel).not.toContainText('Option 1');
			await expect(selectedLabel).not.toContainText('Option 2');
		}
	});

	runInteractionTest({
		title: 'should synchronize controlled values and options on the same instance',
		path,
		example: 'Controlled',
		// React-specific regression test: this reproduces a bug where options
		// and values changing in the same render desynchronized on React only.
		skip: {
			project: () => !(process.env.showcase ?? '').startsWith('react')
		},
		async run({ content }) {
			const selectedLabel = content.locator('.db-custom-select-label');
			const tags = content.locator('.db-tag');
			const optionInputs = content.locator(
				'.db-custom-select-list-item input[value]'
			);
			const loadOtherOptions = content.getByRole('button', {
				name: 'Load other options'
			});
			const clearOptionsAndSelection = content.getByRole('button', {
				name: 'Clear options and selection'
			});
			const restoreOptions = content.getByRole('button', {
				name: 'Restore options without selection'
			});
			const selectionReadout = content.getByText('Selections by user: 0');

			await expect(selectedLabel).not.toContainText('Germany');
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(2);
			await expect(
				content
					.locator('.db-custom-select-list-item')
					.filter({ hasText: 'Germany' })
			).toHaveCount(1);
			await expect(
				content.locator('input[value="de"]')
			).not.toBeChecked();

			// Options and values change in the same render: the reported bug.
			await loadOtherOptions.click();
			await expect(selectedLabel).toContainText('Switzerland');
			await expect(selectedLabel).not.toContainText('Germany');
			await expect(tags).toHaveCount(1);
			await expect(tags).toContainText('Switzerland');
			await expect(optionInputs).toHaveCount(2);
			await expect(content.locator('input[value="ch"]')).toBeChecked();
			await expect(content.locator('input[value="de"]')).toHaveCount(0);

			await clearOptionsAndSelection.click();
			await expect(selectedLabel).not.toContainText('Switzerland');
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(0);
			await expect(selectionReadout).toBeVisible();

			await restoreOptions.click();
			await expect(selectedLabel).not.toContainText('Germany');
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(2);
			await expect(
				content.locator('input[value="de"]')
			).not.toBeChecked();
			await expect(selectionReadout).toBeVisible();

			await loadOtherOptions.click();
			await restoreOptions.click();
			await expect(selectedLabel).not.toContainText('Switzerland');
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(2);
			await expect(
				content.locator('input[value="de"]')
			).not.toBeChecked();
			await expect(selectionReadout).toBeVisible();
		}
	});
});
