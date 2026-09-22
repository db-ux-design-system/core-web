import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPaginationItem from '../../pagination-item/pagination-item.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	// Title Case: the generator strips the spaces when it derives the story export
	// name, so lower-case words would end up as "Linkedpages".
	storybookNames: ['Linked Pages'],
	storybookTitle: 'Link',
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationLinkState = {
	linkedPage: number;
	setLinked: (page: any) => void;
};

export default function PaginationLink() {
	const state = useStore<PaginationLinkState>({
		linkedPage: 2,
		// Routed through a state method with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent. That event is
		// also why the page is unwrapped before it is stored.
		setLinked(page: any) {
			state.linkedPage = page?.detail ?? page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Links come from composition: pass an anchor per item and it
					stays a working link. The pagination numbers the items and
					reports the page.
				</DBInfotext>
				<DBPagination
					label="Linked pagination"
					currentPage={state.linkedPage}
					onPageChange={(page: any) => state.setLinked(page)}>
					<DBPaginationItem>
						<a href="#linked-page=1">1</a>
					</DBPaginationItem>
					<DBPaginationItem>
						<a href="#linked-page=2">2</a>
					</DBPaginationItem>
					<DBPaginationItem>
						<a href="#linked-page=3">3</a>
					</DBPaginationItem>
				</DBPagination>
			</div>
		</Fragment>
	);
}
