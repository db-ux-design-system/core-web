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
				{/* data-sb-replace has to be a hint, not a value: the story drives
				currentPage through the args panel while this readout is replaced by
				static text, so a baked-in "Current page: 5" would contradict the
				rendered page as soon as the arg changes. */}
				<p
					aria-live="polite"
					data-sb-replace="The parent keeps the current page in its own state">
					{state.getReadout()}
				</p>
			</div>
		</Fragment>
	);
}
