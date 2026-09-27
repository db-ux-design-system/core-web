import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Position',
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationPositionState = {
	startPage: number;
	centerPage: number;
	endPage: number;
	setStart: (page: any) => void;
	setCenter: (page: any) => void;
	setEnd: (page: any) => void;
};

export default function PaginationPosition() {
	const state = useStore<PaginationPositionState>({
		startPage: 1,
		centerPage: 5,
		endPage: 10,
		setStart(page: any) {
			state.startPage = page?.detail ?? page;
		},
		setCenter(page: any) {
			state.centerPage = page?.detail ?? page;
		},
		setEnd(page: any) {
			state.endPage = page?.detail ?? page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Start - previous is disabled
				</DBInfotext>
				<DBPagination
					label="Start position pagination"
					currentPage={state.startPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setStart(page)}
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Center - truncated on both sides
				</DBInfotext>
				<DBPagination
					label="Center position pagination"
					currentPage={state.centerPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setCenter(page)}
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					End - next is disabled
				</DBInfotext>
				<DBPagination
					label="End position pagination"
					currentPage={state.endPage}
					totalCount={100}
					pageSize={10}
					onPageChange={(page: any) => state.setEnd(page)}
				/>
			</div>
		</Fragment>
	);
}
