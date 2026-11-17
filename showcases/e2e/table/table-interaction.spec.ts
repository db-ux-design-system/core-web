import { expect, type Locator, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/table';
const example = 'Column Count';

/**
 Reads the grid layout of a table: the number of resolved column tracks, the
 distinct rows its header cells landed on, and whether the caption spans the
 full width of all tracks. Without matching tracks the grid falls back to a single
 track and every cell is stacked.
 */
const getGridLayout = async (table: Locator) =>
	table.evaluate((testElement: HTMLElement) => {
		// The test id lands on <table> in most outputs, but on the wrapper
		// or the host element in others (e.g. Vue attribute fallthrough).
		const element = testElement.matches('table')
			? testElement
			: testElement.querySelector(':scope table');
		if (!element) {
			throw new Error('No <table> found for the test id');
		}

		const caption = element.querySelector(':scope caption');
		const headerCells = [...element.querySelectorAll(':scope thead th')];
		const { gridTemplateColumns, columnGap } = getComputedStyle(element);
		const trackSizes = gridTemplateColumns
			.split(' ')
			.filter(Boolean)
			.map((size) => Number(size.replace('px', '')));
		// Total width of all tracks, independent of borders and paddings of
		// the caption, the header row or its sections
		const tracksWidth =
			trackSizes.reduce((sum, size) => sum + size, 0) +
			// "normal" resolves to no gap in a grid
			(columnGap === 'normal' ? 0 : Number(columnGap.replace('px', ''))) *
				(trackSizes.length - 1);
		return {
			headerCells: headerCells.length,
			tracks: trackSizes.length,
			rows: new Set(
				headerCells.map((cell) =>
					Math.round(cell.getBoundingClientRect().top)
				)
			).size,
			captionSpansAllColumns:
				Math.abs(
					(caption?.getBoundingClientRect().width ?? 0) - tracksWidth
				) <= 1
		};
	});

test.describe('DBTable', () => {
	for (const { columns, title } of [
		{ columns: 20, title: 'should detect up to 20 columns' },
		{
			columns: 21,
			title: 'should apply --db-table-columns beyond 20 columns'
		}
	]) {
		runInteractionTest({
			title,
			path,
			example,
			async run({ content }) {
				const table = content.getByTestId(`table-${columns}-columns`);
				await expect(table).toBeVisible();

				expect(await getGridLayout(table)).toEqual({
					headerCells: columns,
					tracks: columns,
					rows: 1,
					captionSpansAllColumns: true
				});
			}
		});
	}
});
