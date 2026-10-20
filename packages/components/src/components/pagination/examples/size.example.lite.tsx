import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookPaginationArgTypes
});

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
		setMedium(page: any) {
			state.mediumPage = page?.detail ?? page;
		},
		setSmall(page: any) {
			state.smallPage = page?.detail ?? page;
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
