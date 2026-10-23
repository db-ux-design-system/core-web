import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/tabs';

test.describe('DBTabs', () => {
	runInteractionTest({
		title: 'should be clickable',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tabs = content.getByTestId('click-tabs');
			await tabs.getByRole('tab', { name: 'Test 2' }).click();
			await expect(
				tabs.getByRole('tab', { name: 'Test 1' })
			).toHaveAttribute('aria-selected', 'false');
			await expect(
				tabs.getByRole('tab', { name: 'Test 2' })
			).toHaveAttribute('aria-selected', 'true');
		}
	});

	runInteractionTest({
		title: 'should fire onValueChange with value when tabs have value props',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tabs = content.getByTestId('value-tabs');
			await tabs.getByRole('tab', { name: 'Tab B' }).click();
			await expect(content.getByTestId('value-result')).toHaveText(
				'tab-b'
			);
		}
	});

	runInteractionTest({
		title: 'should fire onValueChange with undefined when tabs have no value props',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tabs = content.getByTestId('no-value-tabs');
			await tabs.getByRole('tab', { name: 'Tab 2' }).click();
			await expect(content.getByTestId('no-value-result')).toHaveText(
				'undefined'
			);
		}
	});

	runInteractionTest({
		title: 'should ignore bubbled change events from nested controls in tab panels',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tabs = content.getByTestId('nested-tabs');
			const nestedCheckbox = content.getByTestId('nested-checkbox');
			await nestedCheckbox.evaluate((element) => {
				element.dispatchEvent(new Event('input', { bubbles: true }));
				element.dispatchEvent(new Event('change', { bubbles: true }));
			});

			await expect(content.getByTestId('nested-result')).toHaveText(
				'initial'
			);
			await expect(
				tabs.getByRole('tab', { name: 'Tab 1' })
			).toHaveAttribute('aria-selected', 'true');
			await expect(
				tabs.getByRole('tab', { name: 'Tab 2' })
			).toHaveAttribute('aria-selected', 'false');
		}
	});

	runInteractionTest({
		title: 'should accept tab-item alignment prop',
		path,
		example: 'Interaction',
		async run({ content }) {
			await expect(content.getByTestId('alignment-tabs')).toHaveAttribute(
				'data-tab-item-alignment',
				'center'
			);
		}
	});

	// Regression guard for
	// https://github.com/db-ux-design-system/core-web/issues/8336: a single tab
	// in manual mode must become selected (and show its panel) on click.
	runInteractionTest({
		title: 'should select a single tab on click',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tabs = content.getByTestId('dynamic-tabs');
			const tab1 = tabs.getByRole('tab', { name: 'Dynamic 1' });
			const panel1 = tabs.getByRole('tabpanel', {
				name: 'Dynamic 1'
			});

			// Manual mode: nothing selected initially, panel hidden.
			await expect(tab1).toHaveAttribute('aria-selected', 'false');
			await expect(panel1).toBeHidden();

			await tab1.click();
			await expect(tab1).toHaveAttribute('aria-selected', 'true');
			await expect(panel1).toBeVisible();
		}
	});

	// Regression guard for
	// https://github.com/db-ux-design-system/core-web/issues/8336: a tab added
	// at runtime (composition API) must be wired up (ARIA) and selectable, and
	// a freshly added panel must not be visible while nothing is selected.
	runInteractionTest({
		title: 'should wire up and select a dynamically added tab',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tabs = content.getByTestId('dynamic-tabs');
			await content.getByTestId('dynamic-toggle').click();

			const tab2 = tabs.getByRole('tab', { name: 'Dynamic 2' });
			const panel2 = tabs.getByRole('tabpanel', {
				name: 'Dynamic 2'
			});

			// Added in manual mode: still nothing selected, the new panel must
			// stay hidden instead of defaulting to visible.
			await expect(tab2).toHaveAttribute('aria-selected', 'false');
			await expect(tab2).toHaveAttribute('aria-controls', /tab-panel/);
			await expect(panel2).toBeHidden();

			// The new tab must be selectable.
			await tab2.click();
			await expect(tab2).toHaveAttribute('aria-selected', 'true');
			await expect(panel2).toBeVisible();

			// Removing the selected tab must not leave the tabs empty: the
			// selection falls back to the remaining tab and its panel shows.
			const tab1 = tabs.getByRole('tab', { name: 'Dynamic 1' });
			const panel1 = tabs.getByRole('tabpanel', { name: 'Dynamic 1' });
			await content.getByTestId('dynamic-toggle').click();
			await expect(tab2).toHaveCount(0);
			await expect(tab1).toHaveAttribute('aria-selected', 'true');
			await expect(panel1).toBeVisible();
		}
	});

	// Note: the URL-hash deep-linking test from the removed component test is
	// not portable here. DBTabs reads the entire `window.location.hash`, which
	// the showcase app itself owns for its own hash-based routing
	// (`#/04/tabs?...`), so overwriting it would navigate away from the
	// showcase route instead of exercising the tabs. That behavior stays
	// covered by the "Initial Selection" example and needs its own isolated
	// test setup if it is migrated later.

	// Regression guard for
	// https://github.com/db-ux-design-system/core-web/issues/7405: tab items
	// must not be clipped by a global maximum width.
	runInteractionTest({
		title: 'should not limit the width of horizontal auto-width tab items',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize({ width: 1920, height: 1080 });
			const tab = content
				.getByTestId('auto-width-tabs')
				.getByRole('tab')
				.first();
			await expect(tab).toHaveCSS('max-inline-size', 'none');

			// The removed hard cap was `$db-sizing-2xl` (10rem = 160px).
			const tabWidth = await tab.evaluate(
				(element) => element.getBoundingClientRect().width
			);
			expect(tabWidth).toBeGreaterThan(160);

			// The label text must be rendered completely instead of being
			// cut off.
			const labelMetrics = await tab
				.locator('.db-tab-item-label-text')
				.evaluate((element) => ({
					clientWidth: element.clientWidth,
					scrollWidth: element.scrollWidth
				}));
			expect(labelMetrics.scrollWidth).toBeLessThanOrEqual(
				labelMetrics.clientWidth + 1
			);
		}
	});

	runInteractionTest({
		title: 'should keep truncating vertical tab items',
		path,
		example: 'Interaction',
		async run({ content }) {
			const tab = content
				.getByTestId('vertical-width-tabs')
				.getByRole('tab')
				.first();
			const labelMetrics = await tab
				.locator('.db-tab-item-label-text')
				.evaluate((element) => ({
					clientWidth: element.clientWidth,
					scrollWidth: element.scrollWidth
				}));
			expect(labelMetrics.scrollWidth).toBeGreaterThan(
				labelMetrics.clientWidth
			);

			// Truncated labels stay readable via the built-in truncation
			// tooltip.
			await expect(tab.locator('.db-tooltip')).toBeAttached();
		}
	});

	runInteractionTest({
		title: 'should stretch full-width tab items equally',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize({ width: 1920, height: 1080 });
			const widths = await content
				.getByTestId('full-width-tabs')
				.getByRole('tab')
				.evaluateAll((elements) =>
					elements.map(
						(element) => element.getBoundingClientRect().width
					)
				);
			expect(widths).toHaveLength(2);
			expect(Math.abs(widths[0] - widths[1])).toBeLessThanOrEqual(1);
		}
	});
});
