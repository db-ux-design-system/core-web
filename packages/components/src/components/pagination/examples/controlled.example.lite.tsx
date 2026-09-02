import { useMetadata, useStore } from '@builder.io/mitosis';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: ['Default'],
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationControlledState = {
	currentPage: number;
};

export default function PaginationControlled() {
	const state = useStore<PaginationControlledState>({
		currentPage: 5
	});

	return (
		<div class="db-stack" data-gap="fixed-sm">
			<DBPagination
				currentPage={state.currentPage}
				totalCount={100}
				pageSize={10}
				onPageChange={(page: number) => (state.currentPage = page)}
			/>
			<p aria-live="polite">Current page: {state.currentPage}</p>
		</div>
	);
}
