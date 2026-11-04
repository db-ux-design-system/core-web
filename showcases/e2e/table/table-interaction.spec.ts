import { expect, type Locator, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/table';
const example = 'Column Count';

/**
 Reads the grid layout of a table: the number of resolved column tracks, the
 distinct rows its header cells landed on, and whether the caption spans the
 full header row. Without matching tracks the grid falls back to a single
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

		// No child combinator: Angular/Stencil wrap <thead> in a host element
		const headerRow = element.querySelector(':scope thead tr');
		const caption = element.querySelector(':scope caption');
		const headerCells = [...element.querySelectorAll(':scope thead th')];
		return {
			headerCells: headerCells.length,
			tracks: getComputedStyle(element)
				.gridTemplateColumns.split(' ')
				.filter(Boolean).length,
			rows: new Set(
				headerCells.map((cell) =>
					Math.round(cell.getBoundingClientRect().top)
				)
			).size,
			captionSpansAllColumns:
				Math.abs(
					(caption?.getBoundingClientRect().width ?? 0) -
						(headerRow?.getBoundingClientRect().width ?? -1)
				) <= 1
		};
	});

test.describe('DBTable', () => {
	for (const { columns, title } of [
		{ columns: 20, title: 'should detect up to 20 columns' },
		{
			columns: 21,
			title: 'should apply --db-table-grid-template-columns beyond 20 columns'
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
