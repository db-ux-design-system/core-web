import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookNames: ['Four Digit Pages', 'Short List'],
	storybookTitle: 'Collapsing',
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationCollapsingState = {
	longPage: number;
	shortPage: number;
	setLong: (page: any) => void;
	setShort: (page: any) => void;
};

export default function PaginationCollapsing() {
	const state = useStore<PaginationCollapsingState>({
		longPage: 5000,
		shortPage: 3,
		setLong(page: any) {
			state.longPage = page?.detail ?? page;
		},
		setShort(page: any) {
			state.shortPage = page?.detail ?? page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Below the sm breakpoint the pages next to the current one
					give way - resize the window to see it
				</DBInfotext>
				<DBPagination
					label="Collapsing pagination"
					currentPage={state.longPage}
					totalCount={100000}
					pageSize={10}
					onPageChange={(page: any) => state.setLong(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					A list this short is already the collapsed layout, so it
					stays as it is
				</DBInfotext>
				<DBPagination
					label="Collapsing short list pagination"
					currentPage={state.shortPage}
					totalCount={50}
					pageSize={10}
					onPageChange={(page: any) => state.setShort(page)}
				/>
			</div>
		</Fragment>
	);
}
