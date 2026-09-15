import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	// Title Case: the generator strips the spaces when it derives the story export
	// name, so lower-case words would end up as "Enoughroom".
	storybookNames: ['Enough Room', 'Narrow Column'],
	storybookTitle: 'Wrapping',
	storybookArgTypes: StorybookPaginationArgTypes
});

// What happens above the breakpoint when the counts ask for more room than there is.
// The collapsing is bound to the viewport, so it does not help a pagination that sits
// in a narrow column on a wide screen. The list wraps there instead of hiding pages -
// deliberately, because the alternative is a horizontal scrollbar on the document. The
// item count follows boundaryCount * 2 + siblingCount * 2 + 1 plus the two arrows and
// does not depend on the number of pages, so the space needed is predictable: 7
// controls at the defaults, 13 with the counts below.
//
// The setter methods must NOT be named set<Field>: for a state field `roomyPage`
// Mitosis derives the React setter `setRoomyPage`, so a method of that name would
// collide with it in the same scope.
type PaginationWrappingState = {
	roomyPage: number;
	narrowPage: number;
	setRoomy: (page: any) => void;
	setNarrow: (page: any) => void;
};

export default function PaginationWrapping() {
	const state = useStore<PaginationWrappingState>({
		roomyPage: 12,
		narrowPage: 12,
		// Routed through state methods with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent.
		setRoomy(page: any) {
			state.roomyPage = page;
		},
		setNarrow(page: any) {
			state.narrowPage = page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					siblingCount 3 and boundaryCount 2 - 13 controls, one row
				</DBInfotext>
				<DBPagination
					label="Roomy pagination"
					currentPage={state.roomyPage}
					totalCount={400}
					pageSize={10}
					siblingCount={3}
					boundaryCount={2}
					onPageChange={(page: any) => state.setRoomy(page)}
				/>
			</div>
			{/* One per row: the point of the second example is its own width, so it
			must not depend on what the first one leaves over. */}
			<i class="line-break" data-sb-ignore="true" />
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					The same counts in a 320px column - the row wraps and no
					page is dropped
				</DBInfotext>
				<div style={{ inlineSize: '320px' }}>
					<DBPagination
						label="Narrow column pagination"
						currentPage={state.narrowPage}
						totalCount={400}
						pageSize={10}
						siblingCount={3}
						boundaryCount={2}
						onPageChange={(page: any) => state.setNarrow(page)}
					/>
				</div>
			</div>
		</Fragment>
	);
}
