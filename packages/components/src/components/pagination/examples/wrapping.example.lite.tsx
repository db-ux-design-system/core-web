import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookNames: ['Enough Room', 'Narrow Column'],
	storybookTitle: 'Wrapping',
	storybookArgTypes: StorybookPaginationArgTypes
});

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
		setRoomy(page: any) {
			state.roomyPage = page?.detail ?? page;
		},
		setNarrow(page: any) {
			state.narrowPage = page?.detail ?? page;
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
