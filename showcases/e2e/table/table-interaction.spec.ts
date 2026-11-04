import { expect, type Locator, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/table';
const example = 'Column Count';

/**
 Reads the grid layout of a table: the number of resolved column tracks and
 the distinct rows its header cells landed on. Without a matching column
 count rule the grid falls back to a single track and every cell is stacked.
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

		const headerCells = [
			// No child combinator: Angular/Stencil wrap <thead> in a host element
			...element.querySelectorAll(':scope thead th')
		];
		return {
			headerCells: headerCells.length,
			tracks: getComputedStyle(element)
				.gridTemplateColumns.split(' ')
				.filter(Boolean).length,
			rows: new Set(
				headerCells.map((cell) =>
					Math.round(cell.getBoundingClientRect().top)
				)
			).size
		};
	});

test.describe('DBTable', () => {
	for (const columns of [21, 50]) {
		runInteractionTest({
			title: `should lay out ${columns} columns side by side`,
			path,
			example,
			async run({ content }) {
				const table = content.getByTestId(`table-${columns}-columns`);
				await expect(table).toBeVisible();

				expect(await getGridLayout(table)).toEqual({
					headerCells: columns,
					tracks: columns,
					rows: 1
				});
			}
		});
	}
});
