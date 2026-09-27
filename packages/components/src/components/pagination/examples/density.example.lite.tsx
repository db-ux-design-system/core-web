import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookPaginationArgTypes
});

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
		setFunctional(page: any) {
			state.functionalPage = page?.detail ?? page;
		},
		setRegular(page: any) {
			state.regularPage = page?.detail ?? page;
		},
		setExpressive(page: any) {
			state.expressivePage = page?.detail ?? page;
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
			<i class="line-break" data-sb-ignore="true" />
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
			<i class="line-break" data-sb-ignore="true" />
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
