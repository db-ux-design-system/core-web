import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Position',
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookPaginationArgTypes
});

// Position is not a prop: it follows from currentPage. The three instances render
// the Start, Center and End positions taken from the design and are the only
// place where a disabled previous or next button is shown, so they put that state
// under visual, aria and axe coverage.
//
// Do not put an apostrophe in these comments: Mitosis collapses them onto a
// single line, prettier then reads it as an unterminated string and the whole
// component ends up inside the comment.
//
// Every nav needs its own label: axe runs with the default rule set on the whole
// showcase page, and landmark-unique fails on two landmarks sharing a name.
//
// The setter methods must NOT be named set<Field>: for a state field `startPage`
// Mitosis derives the React setter `setStartPage`, so a method of that name
// collides with it in the same scope.
type PaginationPositionState = {
	startPage: number;
	centerPage: number;
	endPage: number;
	setStart: (page: any) => void;
	setCenter: (page: any) => void;
	setEnd: (page: any) => void;
};

export default function PaginationPosition() {
	const state = useStore<PaginationPositionState>({
		startPage: 1,
		centerPage: 5,
		endPage: 10,
		// Routed through state methods with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent.
		setStart(page: any) {
			state.startPage = page;
		},
		setCenter(page: any) {
			state.centerPage = page;
		},
		setEnd(page: any) {
			state.endPage = page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Start - previous is disabled
				</DBInfotext>
				<DBPagination
					label="Start position pagination"
					currentPage={state.startPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setStart(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Center - truncated on both sides
				</DBInfotext>
				<DBPagination
					label="Center position pagination"
					currentPage={state.centerPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setCenter(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					End - next is disabled
				</DBInfotext>
				<DBPagination
					label="End position pagination"
					currentPage={state.endPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setEnd(page)}
				/>
			</div>
		</Fragment>
	);
}
