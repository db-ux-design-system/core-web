import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookPaginationArgTypes
});

// One scalar field per pagination instead of an indexed collection: Mitosis maps
// state to useState in React, where assigning into an array by index does not
// trigger a re-render. All three start at 5, so the initial render - and with it
// the committed visual snapshots - stays unchanged.
//
// The setter methods must NOT be named set<Field>: for a state field
// `functionalPage` Mitosis derives the React setter `setFunctionalPage`, so a
// method of that name collides with it in the same scope - a duplicate
// declaration whose body also calls itself. Hence `setFunctional` next to
// `functionalPage`.
type PaginationDensityState = {
	functionalPage: number;
	regularPage: number;
	expressivePage: number;
	setFunctional: (page: any) => void;
	setRegular: (page: any) => void;
	setExpressive: (page: any) => void;
};

export default function PaginationDensity() {
	const state = useStore<PaginationDensityState>({
		functionalPage: 5,
		regularPage: 5,
		expressivePage: 5,
		// Routed through state methods with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent.
		setFunctional(page: any) {
			state.functionalPage = page;
		},
		setRegular(page: any) {
			state.regularPage = page;
		},
		setExpressive(page: any) {
			state.expressivePage = page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container" data-density="functional">
				<DBInfotext icon="none" size="small" semantic="informational">
					Functional
				</DBInfotext>
				<DBPagination
					label="Functional pagination"
					currentPage={state.functionalPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setFunctional(page)}
				/>
			</div>
			<div class="fit-content-container" data-density="regular">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Regular
				</DBInfotext>
				<DBPagination
					label="Regular pagination"
					currentPage={state.regularPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setRegular(page)}
				/>
			</div>
			<div class="fit-content-container" data-density="expressive">
				<DBInfotext icon="none" size="small" semantic="informational">
					Expressive
				</DBInfotext>
				<DBPagination
					label="Expressive pagination"
					currentPage={state.expressivePage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setExpressive(page)}
				/>
			</div>
		</Fragment>
	);
}
