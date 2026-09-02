import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: ['Default'],
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationControlledState = {
	currentPage: number;
	getReadout: () => string;
	setPage: (page: any) => void;
};

export default function PaginationControlled() {
	const state = useStore<PaginationControlledState>({
		currentPage: 5,
		// Built in one expression: the Stencil generator puts adjacent text and
		// interpolation on separate lines, which drops the JSX whitespace between
		// them and makes the showcase render "Current page:5" for that target only.
		getReadout: () => {
			return `Current page: ${state.currentPage}`;
		},
		setPage(page: any) {
			state.currentPage = page;
		}
	});

	return (
		<Fragment>
			<div class="db-stack" data-gap="fixed-sm">
				<DBPagination
					currentPage={state.currentPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setPage(page)}
				/>
				<p aria-live="polite" data-sb-replace="Current page: 5">
					{state.getReadout()}
				</p>
			</div>
		</Fragment>
	);
}
