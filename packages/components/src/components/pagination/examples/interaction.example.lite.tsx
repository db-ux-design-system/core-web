import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBPaginationItem from '../../pagination-item/pagination-item.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookPaginationArgTypes
});

/**
 Fixtures for the cross-framework interaction e2e tests
 (see showcases/e2e/pagination/pagination-interaction.spec.ts).

 Each instance is a self-contained scenario ported from the removed component
 test, addressable via its own `data-testid`. Because DBPagination never
 changes `currentPage` itself (the parent owns it), a page-change request is
 reflected into a per-instance readout element so the spec can assert on
 observable DOM instead of a JS callback counter. Boundary/shape scenarios use
 dedicated fixed-page instances since the controlled page does not move.
 */
type PaginationInteractionState = {
	requestedPage: number;
	requestedComposedPage: number;
	requestedItemsPage: number;
	getReadout: () => string;
	getComposedReadout: () => string;
	getItemsReadout: () => string;
	handlePageChange: (page: any) => void;
	handleComposedPageChange: (page: any) => void;
	handleItemsPageChange: (page: any) => void;
};

export default function PaginationInteraction() {
	const state = useStore<PaginationInteractionState>({
		requestedPage: 0,
		requestedComposedPage: 0,
		requestedItemsPage: 0,
		getReadout: () => {
			return `requested: ${state.requestedPage}`;
		},
		getComposedReadout: () => {
			return `composed requested: ${state.requestedComposedPage}`;
		},
		getItemsReadout: () => {
			return `items requested: ${state.requestedItemsPage}`;
		},
		handlePageChange: (page: any) => {
			state.requestedPage = page?.detail ?? page;
		},
		handleComposedPageChange: (page: any) => {
			state.requestedComposedPage = page?.detail ?? page;
		},
		handleItemsPageChange: (page: any) => {
			state.requestedItemsPage = page?.detail ?? page;
		}
	});

	return (
		<Fragment>
			<div data-testid="default-pagination">
				<DBPagination
					label="Results pages"
					currentPage={5}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.handlePageChange(page)}
				/>
				<span data-testid="default-readout">{state.getReadout()}</span>
			</div>

			<div data-testid="first-pagination">
				<DBPagination
					label="First page"
					currentPage={1}
					totalCount={100}
					pageSize={10}
				/>
			</div>

			<div data-testid="last-pagination">
				<DBPagination
					label="Last page"
					currentPage={10}
					totalCount={100}
					pageSize={10}
				/>
			</div>

			<div data-testid="sibling-boundary-pagination">
				<DBPagination
					label="Without siblings"
					currentPage={10}
					totalCount={200}
					pageSize={10}
					siblingCount={0}
					boundaryCount={0}
				/>
			</div>

			<div data-testid="small-pagination">
				<DBPagination
					label="Results pagination"
					previousLabel="Go to previous page"
					nextLabel="Go to next page"
					pageLabel="Result page {page} of {totalPages}"
					currentPage={2}
					totalCount={30}
					pageSize={10}
					size="small"
				/>
			</div>

			<div data-testid="composed-pagination">
				<DBPagination
					label="Composed"
					currentPage={2}
					onPageChange={(page: any) =>
						state.handleComposedPageChange(page)
					}>
					<DBPaginationItem>
						<a href="#page-1" aria-label="Page 1">
							1
						</a>
					</DBPaginationItem>
					<DBPaginationItem>
						<a href="#page-2" aria-label="Page 2">
							2
						</a>
					</DBPaginationItem>
					<DBPaginationItem>
						<a href="#page-3" aria-label="Page 3">
							3
						</a>
					</DBPaginationItem>
				</DBPagination>
				<span data-testid="composed-readout">
					{state.getComposedReadout()}
				</span>
			</div>

			<div data-testid="items-pagination">
				<DBPagination
					label="With a disabled page"
					currentPage={1}
					items={[{}, { disabled: true }, {}]}
					onPageChange={(page: any) =>
						state.handleItemsPageChange(page)
					}
				/>
				<span data-testid="items-readout">
					{state.getItemsReadout()}
				</span>
			</div>
		</Fragment>
	);
}
