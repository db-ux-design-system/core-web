import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookPaginationArgTypes
});

export default function PaginationDensity() {
	return (
		<Fragment>
			<div class="fit-content-container" data-density="functional">
				<DBInfotext icon="none" size="small" semantic="informational">
					Functional
				</DBInfotext>
				<DBPagination
					label="Functional pagination"
					currentPage={5}
					totalCount={100}
					pageSize={10}
				/>
			</div>
			<div class="fit-content-container" data-density="regular">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Regular
				</DBInfotext>
				<DBPagination
					label="Regular pagination"
					currentPage={5}
					totalCount={100}
					pageSize={10}
				/>
			</div>
			<div class="fit-content-container" data-density="expressive">
				<DBInfotext icon="none" size="small" semantic="informational">
					Expressive
				</DBInfotext>
				<DBPagination
					label="Expressive pagination"
					currentPage={5}
					totalCount={100}
					pageSize={10}
				/>
			</div>
		</Fragment>
	);
}
