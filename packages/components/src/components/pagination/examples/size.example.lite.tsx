import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookPaginationArgTypes
});

export default function PaginationSize() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Medium
				</DBInfotext>
				<DBPagination
					label="Medium pagination"
					currentPage={5}
					totalCount={100}
					pageSize={10}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Small
				</DBInfotext>
				<DBPagination
					label="Small pagination"
					currentPage={5}
					totalCount={100}
					pageSize={10}
					size="small"
				/>
			</div>
		</Fragment>
	);
}
