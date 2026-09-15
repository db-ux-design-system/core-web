import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookPaginationArgTypes
});

// One scalar field per pagination instead of an indexed collection: Mitosis maps
// state to useState in React, where assigning into an array by index does not
// trigger a re-render. Both start at 5, so the initial render - and with it the
// committed visual snapshots - stays unchanged.
//
// The setter methods must NOT be named set<Field>: for a state field `mediumPage`
// Mitosis derives the React setter `setMediumPage`, so a method of that name
// collides with it in the same scope - a duplicate declaration whose body also
// calls itself. Hence `setMedium` next to `mediumPage`.
type PaginationSizeState = {
	mediumPage: number;
	smallPage: number;
	setMedium: (page: any) => void;
	setSmall: (page: any) => void;
};

export default function PaginationSize() {
	const state = useStore<PaginationSizeState>({
		mediumPage: 5,
		smallPage: 5,
		// Routed through a state method with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent.
		setMedium(page: any) {
			state.mediumPage = page;
		},
		setSmall(page: any) {
			state.smallPage = page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Medium
				</DBInfotext>
				<DBPagination
					label="Medium pagination"
					currentPage={state.mediumPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setMedium(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Small
				</DBInfotext>
				<DBPagination
					label="Small pagination"
					currentPage={state.smallPage}
					totalCount={100}
					pageSize={10}
					size="small"
					onPageChange={(page: any) => state.setSmall(page)}
				/>
			</div>
		</Fragment>
	);
}
