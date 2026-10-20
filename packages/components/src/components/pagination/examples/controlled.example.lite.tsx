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
		getReadout: () => {
			return `Current page: ${state.currentPage}`;
		},
		setPage(page: any) {
			state.currentPage = page?.detail ?? page;
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
				<p
					aria-live="polite"
					data-sb-replace="The parent keeps the current page in its own state">
					{state.getReadout()}
				</p>
			</div>
		</Fragment>
	);
}
