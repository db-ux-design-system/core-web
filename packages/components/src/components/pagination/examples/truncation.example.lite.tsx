import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	// Title Case: the generator strips the spaces when it derives the story export
	// name, so lower-case words would end up as "Withouttruncation".
	storybookNames: [
		'Without Truncation',
		'(Default) Sibling And Boundary 1',
		'Sibling Count 2',
		'Boundary Count 2'
	],
	storybookTitle: 'Truncation',
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationTruncationState = {
	shortPage: number;
	defaultPage: number;
	siblingsPage: number;
	boundariesPage: number;
	setShort: (page: any) => void;
	setDefault: (page: any) => void;
	setSiblings: (page: any) => void;
	setBoundaries: (page: any) => void;
};

export default function PaginationTruncation() {
	const state = useStore<PaginationTruncationState>({
		shortPage: 3,
		defaultPage: 10,
		siblingsPage: 10,
		boundariesPage: 10,
		// Routed through state methods with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent.
		setShort(page: any) {
			state.shortPage = page;
		},
		setDefault(page: any) {
			state.defaultPage = page;
		},
		setSiblings(page: any) {
			state.siblingsPage = page;
		},
		setBoundaries(page: any) {
			state.boundariesPage = page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Without truncation - all 5 pages fit
				</DBInfotext>
				<DBPagination
					label="Untruncated pagination"
					currentPage={state.shortPage}
					totalCount={50}
					pageSize={10}
					onPageChange={(page: any) => state.setShort(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) siblingCount 1, boundaryCount 1
				</DBInfotext>
				<DBPagination
					label="Default truncation pagination"
					currentPage={state.defaultPage}
					totalCount={200}
					pageSize={10}
					onPageChange={(page: any) => state.setDefault(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					siblingCount 2 - wider window around the current page
				</DBInfotext>
				<DBPagination
					label="Two siblings pagination"
					currentPage={state.siblingsPage}
					totalCount={200}
					pageSize={10}
					siblingCount={2}
					onPageChange={(page: any) => state.setSiblings(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					boundaryCount 2 - two pages pinned at each end
				</DBInfotext>
				<DBPagination
					label="Two boundaries pagination"
					currentPage={state.boundariesPage}
					totalCount={200}
					pageSize={10}
					boundaryCount={2}
					onPageChange={(page: any) => state.setBoundaries(page)}
				/>
			</div>
		</Fragment>
	);
}
