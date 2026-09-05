import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBPagination from '../pagination.lite';
import { StorybookPaginationArgTypes } from './_pagination.arg.types';

useMetadata({
	// Title Case: the generator strips the spaces when it derives the story export
	// name, so lower-case words would end up as "Linkedpages".
	storybookNames: ['Linked Pages', 'First Page'],
	storybookTitle: 'Link',
	storybookArgTypes: StorybookPaginationArgTypes
});

type PaginationLinkState = {
	linkedPage: number;
	boundaryPage: number;
	setLinked: (page: any) => void;
	setBoundary: (page: any) => void;
};

export default function PaginationLink() {
	const state = useStore<PaginationLinkState>({
		linkedPage: 5,
		boundaryPage: 1,
		// Routed through state methods with an `any` parameter: an inline typed
		// callback breaks the Angular showcase, where $event is number | void, and
		// the Stencil showcase, where the payload is a CustomEvent.
		setLinked(page: any) {
			state.linkedPage = page;
		},
		setBoundary(page: any) {
			state.boundaryPage = page;
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					hrefPattern turns the pages into anchors - deep linkable and
					usable without JavaScript
				</DBInfotext>
				<DBPagination
					label="Linked pagination"
					currentPage={state.linkedPage}
					totalCount={100}
					pageSize={10}
					hrefPattern="#linked-page={page}"
					onPageChange={(page: any) => state.setLinked(page)}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					At the boundaries previous and next stay disabled buttons,
					because there is no page to link to
				</DBInfotext>
				<DBPagination
					label="Linked boundary pagination"
					currentPage={state.boundaryPage}
					totalCount={100}
					pageSize={10}
					hrefPattern="#boundary-page={page}"
					onPageChange={(page: any) => state.setBoundary(page)}
				/>
			</div>
		</Fragment>
	);
}
