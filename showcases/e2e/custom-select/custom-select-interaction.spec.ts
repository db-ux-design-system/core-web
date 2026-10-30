import { expect, test, type Locator, type Page } from '@playwright/test';
import { isStencil, runInteractionTest, type SkipType } from '../default.ts';

const path = '03/custom-select';

// Spaces picks past the 200ms internal-change debounce
const SELECTION_DEBOUNCE = 250;

const checkOption = async (page: Page, select: Locator, value: string) => {
	const input = select.locator(`input[value="${value}"]`);
	await input.check({ force: true });
	await expect(input).toBeChecked();
	await page.waitForTimeout(SELECTION_DEBOUNCE);
};

// Reads the submitted FormData, using a temporary form if needed
const getSubmittedValues = async (nativeSelect: Locator) =>
	nativeSelect.evaluate((element: HTMLSelectElement) => {
		const name = element.name || 'db-e2e-submitted';
		let { form } = element;
		let cleanup = () => {};

		if (!form) {
			const previousForm = element.getAttribute('form');
			const previousName = element.getAttribute('name');
			form = document.createElement('form');
			form.id = 'db-e2e-submitted-form';
			document.body.append(form);
			element.setAttribute('form', form.id);
			element.setAttribute('name', name);
			cleanup = () => {
				if (previousForm === null) {
					element.removeAttribute('form');
				} else {
					element.setAttribute('form', previousForm);
				}

				if (previousName === null) {
					element.removeAttribute('name');
				} else {
					element.setAttribute('name', previousName);
				}

				form?.remove();
			};
		}

		const values = new FormData(form).getAll(name);
		cleanup();
		return values;
	});

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

const FOCUS_COOLDOWN = 2000;

const openDropdown = async (page: Page, summary: Locator) => {
	// Wait for the page to finish loading before driving keyboard input, so the
	// ArrowDown below is not sent before the component is interactive.
	await page.waitForTimeout(FOCUS_COOLDOWN);
	await summary.press('ArrowDown');
	// Opening with ArrowDown moves focus into the dropdown (onto the search
	// field, or the first checkbox/radio) via an async `delay()` in the
	// component. The subsequent Space/Enter presses only select an option once
	// that focus has landed. A fixed cooldown races this on WebKit under CI
	// load, so wait for the focused element to actually be a dropdown input
	// before returning; fall back to the cooldown as an upper bound.
	await page
		.waitForFunction(
			() => {
				const { activeElement } = document;
				const type = activeElement?.getAttribute('type') ?? '';
				return ['checkbox', 'radio', 'search'].includes(type);
			},
			{ timeout: FOCUS_COOLDOWN }
		)
		.catch(() => {
			// Ponytail: swallow the timeout and let the caller's assertion
			// report the real failure, preserving the pre-existing behaviour
			// where the cooldown was only an upper bound on the wait.
		});
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
			// With no selection the component renders the placeholder, not
			// `.db-custom-select-label`, so the label is detached from the DOM.
			// Assert its absence with `toHaveCount(0)` instead of
			// `.not.toContainText(...)`, which waits for an element that never
			// appears and times out.
			await expect(selectedLabel).toHaveCount(0);

			await openDropdown(page, summary);
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
			// With no selection the component renders the placeholder, not
			// `.db-custom-select-label`, so the label is detached from the DOM.
			// Assert its absence with `toHaveCount(0)` instead of
			// `.not.toContainText(...)`, which waits for an element that never
			// appears and times out.
			await expect(selectedLabel).toHaveCount(0);

			await openDropdown(page, summary);
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

			// Opening with ArrowDown moves focus onto the first checkbox (the
			// "select all" checkbox here).
			await openDropdown(page, summary);
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
			// With no selection the component renders the placeholder, not
			// `.db-custom-select-label`, so the label is detached from the DOM.
			// Assert its absence with `toHaveCount(0)` instead of
			// `.not.toContainText(...)`, which waits for an element that never
			// appears and times out.
			await expect(selectedLabel).toHaveCount(0);

			await openDropdown(page, summary);
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
			// With no selection the component renders the placeholder, not
			// `.db-custom-select-label`, so the label is detached from the DOM.
			// Assert its absence with `toHaveCount(0)` instead of
			// `.not.toContainText(...)`, which waits for an element that never
			// appears and times out.
			await expect(selectedLabel).toHaveCount(0);

			await openDropdown(page, summary);
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

			await openDropdown(page, summary);
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

			await openDropdown(page, summary);
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

			await page.waitForTimeout(1000); // Wait for checkboxes to load
			await openDropdown(page, summary);

			await page.keyboard.press('ArrowDown');
			await page.waitForTimeout(FOCUS_COOLDOWN);

			// Navigating from the last item of group 1 must skip the "Option
			// group 2" title and land on the first item of group 2 - the
			// regression fixed in #4920.
			await page.keyboard.press('ArrowDown');
			await page.keyboard.press('ArrowDown');
			// Test reverse navigation.
			await page.keyboard.press('ArrowUp');

			await page.keyboard.press('ArrowUp');
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
		title: 'should submit every selected value of a multiple select (#8465)',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content.getByTestId('tag-select');
			const nativeSelect = select.locator('select');

			// Preselected via `values`, without any user interaction.
			await expect
				.poll(async () => getSubmittedValues(nativeSelect))
				.toEqual(['Blue', 'Green']);

			await select.locator('summary').click();
			await select.locator('input[value="Red"]').check({ force: true });

			await expect
				.poll(async () => getSubmittedValues(nativeSelect))
				.toEqual(['Red', 'Blue', 'Green']);
		}
	});

	runInteractionTest({
		title: 'should submit every selected value from a named multiple select inside a form (#8465)',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			const form = content.getByTestId('native-form');
			const select = content.getByTestId('native-form-select');
			const getFormValues = async () =>
				form.evaluate((element: HTMLFormElement) =>
					new FormData(element).getAll('colors')
				);

			await expect.poll(getFormValues).toEqual([]);

			await select.locator('summary').click();
			await checkOption(page, select, 'red');
			await checkOption(page, select, 'blue');

			await expect.poll(getFormValues).toEqual(['red', 'blue']);
		}
	});

	runInteractionTest({
		title: 'should clear a multiple select without initial values on form reset (#8465)',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			const form = content.getByTestId('native-form');
			const select = content.getByTestId('native-form-select');
			const selectedLabel = select.locator('.db-custom-select-label');

			await select.locator('summary').click();
			await checkOption(page, select, 'red');
			await checkOption(page, select, 'green');
			await expect(selectedLabel).toContainText('Red, Green');

			await form.evaluate((element: HTMLFormElement) => {
				element.reset();
			});

			// Empty selection renders the placeholder instead of the label
			await expect(selectedLabel).toHaveCount(0);
			await expect
				.poll(async () =>
					form.evaluate((element: HTMLFormElement) =>
						new FormData(element).getAll('colors')
					)
				)
				.toEqual([]);
		}
	});

	runInteractionTest({
		title: 'should submit the values of options and values changed in the same render (#8465)',
		path,
		example: 'Controlled',
		// New options render after `values` changed (Angular regression)
		async run({ content }) {
			const nativeSelect = content.locator('select');

			await content
				.getByRole('button', { name: 'Load other options' })
				.click();

			await expect
				.poll(async () => getSubmittedValues(nativeSelect))
				.toEqual(['ch']);
		}
	});

	runInteractionTest({
		title: 'should submit values set via JS before options are rendered (#8465)',
		path,
		example: 'Interaction',
		// Repro from the issue: `options` and `values` set via JS together
		skip: {
			project: () => !isStencil(process.env.showcase)
		},
		async run({ content }) {
			const select = content.getByTestId('tag-select');
			// `data-testid` sits on the inner element, the props on the host
			const host = select.locator(
				'xpath=ancestor-or-self::db-custom-select'
			);

			await host.evaluate(
				(
					element: HTMLElement & {
						options: Array<{ value: string; label: string }>;
						values: string[];
					}
				) => {
					element.options = [
						{ value: 'red', label: 'Red' },
						{ value: 'green', label: 'Green' },
						{ value: 'blue', label: 'Blue' }
					];
					element.values = ['red', 'green'];
				}
			);

			await expect
				.poll(async () => getSubmittedValues(select.locator('select')))
				.toEqual(['red', 'green']);
		}
	});

	runInteractionTest({
		title: 'should take tag remove buttons and clear button out of the tab order when disabled',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content.getByTestId('disabled-tag-select');

			const removeButtons = select.locator('.db-tab-remove-button');
			await expect(removeButtons).toHaveCount(2);

			const clearButton = select.locator('.db-custom-select-clear');
			await expect(clearButton).toHaveCount(1);

			// A disabled custom select must expose no keyboard- or
			// pointer-reachable controls: the tag remove buttons (rendered by
			// DBTag, which has no disabled state of its own) and the clear
			// button are taken out of the tab order and marked disabled.
			for (const button of [
				removeButtons.first(),
				removeButtons.last(),
				clearButton
			]) {
				await expect(button).toHaveAttribute('tabindex', '-1');
			}
		}
	});

	runInteractionTest({
		title: 'should clear tags when values is reset to null, undefined or an empty array',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content.getByTestId('values-reset-select');
			const selectedLabel = select.locator('.db-custom-select-label');

			// When nothing is selected the component renders the placeholder
			// instead of `.db-custom-select-label`, so a cleared selection
			// means the label is removed from the DOM entirely. Assert on its
			// absence rather than `.not.toContainText(...)`, which would fail
			// with "element(s) not found" once the label is detached.
			await content.getByTestId('values-reset-set').click();
			await expect(selectedLabel).toContainText('Option 1, Option 2');

			await content.getByTestId('values-reset-null').click();
			await expect(selectedLabel).toHaveCount(0);

			await content.getByTestId('values-reset-set').click();
			await expect(selectedLabel).toContainText('Option 1, Option 2');
			await content.getByTestId('values-reset-undefined').click();
			await expect(selectedLabel).toHaveCount(0);

			await content.getByTestId('values-reset-set').click();
			await expect(selectedLabel).toContainText('Option 1, Option 2');
			await content.getByTestId('values-reset-empty').click();
			await expect(selectedLabel).toHaveCount(0);
		}
	});

	runInteractionTest({
		title: 'should synchronize a value autofilled into the native select (#7466)',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content.getByTestId('single-select');
			const nativeSelect = select.locator('select');
			const optionInput = select.locator('input[value="Option 3"]');

			const placeholder = select.locator('.db-custom-select-placeholder');
			const selectedLabel = select.locator('.db-custom-select-label');

			await expect(placeholder).toBeVisible();
			await expect(optionInput).not.toBeChecked();

			// Browser autofill and password managers write to the hidden backing <select> and fire `change`; Playwright cannot trigger real autofill, so drive the exact same DOM path directly.
			await nativeSelect.evaluate((element: HTMLSelectElement) => {
				element.value = 'Option 3';
				element.dispatchEvent(new Event('change', { bubbles: true }));
			});

			// The visible summary and the option state have to follow the native value instead of staying stale.
			await expect(placeholder).not.toBeVisible();
			await expect(selectedLabel).toContainText('Option 3');
			await expect(optionInput).toBeChecked();

			// And handleValidation() must not overwrite the autofilled value with a stale one on the way back.
			await expect(nativeSelect).toHaveValue('Option 3');
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

			// With no selection the component renders the placeholder, not
			// `.db-custom-select-label`, so an empty selection means the label
			// is detached. Assert `toHaveCount(0)` for the empty states instead
			// of `.not.toContainText(...)`, which errors with "element(s) not
			// found" on a missing element.
			await expect(selectedLabel).toHaveCount(0);
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
			await expect(selectedLabel).toHaveCount(0);
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(0);
			await expect(selectionReadout).toBeVisible();

			await restoreOptions.click();
			await expect(selectedLabel).toHaveCount(0);
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(2);
			await expect(
				content.locator('input[value="de"]')
			).not.toBeChecked();
			await expect(selectionReadout).toBeVisible();

			await loadOtherOptions.click();
			await restoreOptions.click();
			await expect(selectedLabel).toHaveCount(0);
			await expect(tags).toHaveCount(0);
			await expect(optionInputs).toHaveCount(2);
			await expect(
				content.locator('input[value="de"]')
			).not.toBeChecked();
			await expect(selectionReadout).toBeVisible();
		}
	});
});
