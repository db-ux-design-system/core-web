import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import DBButton from '../button/button.lite';
import DBPaginationItem from '../pagination-item/pagination-item.lite';
import type {
	DBPaginationProps,
	DBPaginationState,
	PaginationItemType
} from './model';

useMetadata({});

useDefaultProps<DBPaginationProps>({
	currentPage: 1,
	pageSize: 10,
	siblingCount: 1,
	boundaryCount: 1,
	size: 'medium',
	label: 'Pagination',
	previousLabel: 'Previous page',
	nextLabel: 'Next page',
	pageLabel: 'Page {page} of {totalPages}'
});

export default function DBPagination(props: DBPaginationProps) {
	const _ref = useRef<HTMLElement | any>(null);

	const state: DBPaginationState = useStore<DBPaginationState>({
		getInteger: (
			value: number | string | undefined,
			fallback: number,
			minimum: number
		) => {
			// Number('') and Number(null) both return 0, which is finite and would
			// therefore be clamped to `minimum` instead of using `fallback`. A blank
			// value means "not set" - reachable via an empty custom element attribute
			// or a template expression that resolves to an empty string.
			const parsedValue =
				String(value ?? '').trim() === '' ? Number.NaN : Number(value);
			return Number.isFinite(parsedValue)
				? Math.max(minimum, Math.floor(parsedValue))
				: fallback;
		},
		getRange: (start: number, end: number) => {
			return Array.from(
				{ length: Math.max(end - start + 1, 0) },
				(_, index: number) => start + index
			);
		},
		getTotalPages: () => {
			const totalCount = state.getInteger(props.totalCount, 0, 0);
			const pageSize = state.getInteger(props.pageSize, 10, 1);
			return Math.max(1, Math.ceil(totalCount / pageSize));
		},
		getCurrentPage: () => {
			return Math.min(
				state.getTotalPages(),
				state.getInteger(props.currentPage, 1, 1)
			);
		},
		// Returns the visible page numbers for a given siblingCount, without any
		// ellipsis. The ellipses are derived from the gaps in this list by
		// getPaginationItems, which is what allows one DOM to carry the wide and
		// the collapsed layout at the same time: an ellipsis is a property of the
		// gap it spans, and the two layouts do not have the same gaps.
		getPages: (siblingCount: number) => {
			const totalPages = state.getTotalPages();
			const currentPage = state.getCurrentPage();
			const boundaryCount = state.getInteger(props.boundaryCount, 1, 0);
			const maximumVisiblePages =
				boundaryCount * 2 + siblingCount * 2 + 3;

			if (totalPages <= maximumVisiblePages) {
				return state.getRange(1, totalPages);
			}

			const startPages = state.getRange(
				1,
				Math.min(boundaryCount, totalPages)
			);
			const endPages = state.getRange(
				Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
				totalPages
			);
			const siblingsStart = Math.max(
				Math.min(
					currentPage - siblingCount,
					totalPages - boundaryCount - siblingCount * 2 - 1
				),
				boundaryCount + 2
			);
			const siblingsEnd = Math.min(
				Math.max(
					currentPage + siblingCount,
					boundaryCount + siblingCount * 2 + 2
				),
				totalPages - boundaryCount - 1
			);
			let pages: number[] = startPages;

			// Where the window leaves a single page next to the boundary, that page
			// is rendered instead of an ellipsis - an ellipsis standing in for one
			// page would take the same room while hiding information.
			if (
				siblingsStart <= boundaryCount + 2 &&
				boundaryCount + 1 < totalPages - boundaryCount
			) {
				pages = pages.concat(boundaryCount + 1);
			}

			pages = pages.concat(state.getRange(siblingsStart, siblingsEnd));

			if (
				siblingsEnd >= totalPages - boundaryCount - 1 &&
				totalPages - boundaryCount > boundaryCount
			) {
				pages = pages.concat(totalPages - boundaryCount);
			}

			return pages.concat(endPages);
		},
		// The collapsed layout is not the wide algorithm run with siblingCount 0.
		// That one keeps the number of rendered items constant by shifting its window
		// towards the end of the list, so as soon as the current page sits at a
		// border three pages of full width end up next to each other - 1 ... 9998
		// 9999 10000. Width is the only reason the collapsed layout exists, so it
		// gives up that stability and renders one page at each end, the current page,
		// and nothing else.
		getCollapsedPages: () => {
			const totalPages = state.getTotalPages();
			const currentPage = state.getCurrentPage();
			// At most one page is pinned per end, whatever boundaryCount says. The
			// collapsed layout already ignores siblingCount for the same reason: it
			// exists to be narrow, and four pinned pages plus the current one is what
			// pushed the row into a second line at boundaryCount 2.
			// Capping also keeps the candidate list ascending, because the trailing
			// boundary is then the last page and the current page can never sit behind
			// it. With more than one pinned page it could, and the duplicate check
			// below silently dropped the page in between.
			const boundaryCount = Math.min(
				state.getInteger(props.boundaryCount, 1, 0),
				1
			);

			// Same exit as the wide layout: a list this short is the collapsed shape
			// already, so hiding anything would claim a gap that does not exist.
			if (totalPages <= boundaryCount * 2 + 3) {
				return state.getRange(1, totalPages);
			}

			const candidates = state
				.getRange(1, Math.min(boundaryCount, totalPages))
				.concat([currentPage])
				.concat(
					state.getRange(
						Math.max(
							totalPages - boundaryCount + 1,
							boundaryCount + 1
						),
						totalPages
					)
				);
			const pages: number[] = [];
			let lastPage = 0;

			for (const candidate of candidates) {
				// The current page can fall inside the boundaries, where it is part of
				// the list already.
				if (candidate <= lastPage) {
					continue;
				}

				// A gap of exactly one page is rendered instead of hidden, the same
				// rule the wide layout follows: an ellipsis would take the room of the
				// page it replaces while hiding which page that is. The wide layout
				// never leaves such a gap either, so the page filled in here is one it
				// renders as well - that is what keeps these pages a subset of the wide
				// ones, which is the condition for both layouts sharing one list.
				if (lastPage > 0 && candidate - lastPage === 2) {
					pages.push(lastPage + 1);
				}

				pages.push(candidate);
				lastPage = candidate;
			}

			return pages;
		},
		// Only pages are items now. An ellipsis is drawn by the page it borders, which
		// is why each layout marks its own gaps: a marker inherits the visibility of
		// its carrier, so one attached to a page that the collapsing hides would
		// disappear with it.
		getPaginationItems: () => {
			const totalPages = state.getTotalPages();
			const widePages = state.getPages(
				state.getInteger(props.siblingCount, 1, 0)
			);
			// The collapsed pages are a subset of the wide ones, so the wide list is the
			// list of items and the collapsed layout only decides which of them it shows.
			const collapsedPages = state.getCollapsedPages();
			const items: PaginationItemType[] = [];

			for (const page of widePages) {
				const inCollapsed = collapsedPages.includes(page);
				items.push({
					page,
					layout: inCollapsed ? 'always' : 'wide',
					key: 'page-' + page,
					wideEllipsis: state.getEllipsisSide(
						widePages,
						page,
						totalPages
					),
					collapsedEllipsis: inCollapsed
						? state.getEllipsisSide(
								collapsedPages,
								page,
								totalPages
							)
						: undefined
				});
			}

			return items;
		},
		// A page borders a gap before it when the previous page in that layout is more
		// than one away, or when it is the first page shown and page 1 is missing. Only
		// the last page can border a trailing gap. Both sides at once happens with
		// boundaryCount 0, where a single page stands between two gaps.
		getEllipsisSide: (
			pages: number[],
			page: number,
			totalPages: number
		) => {
			const index = pages.indexOf(page);
			if (index === -1) {
				return undefined;
			}

			const previousPage = index > 0 ? pages[index - 1] : 0;
			const hasBefore = index === 0 ? page > 1 : page - previousPage > 1;
			const hasAfter = index === pages.length - 1 && page < totalPages;

			if (hasBefore && hasAfter) {
				return 'both';
			}
			if (hasBefore) {
				return 'before';
			}
			return hasAfter ? 'after' : undefined;
		},
		getHref: (page: number) => {
			// The pattern has to go into a local first. Angular turns every prop
			// access into a signal call, so guarding props.hrefPattern and then
			// using it again are two separate calls and the narrowing is lost -
			// which fails the Angular build with TS2532 while the other three
			// targets compile.
			const pattern = props.hrefPattern;
			if (!pattern || page < 1 || page > state.getTotalPages()) {
				return undefined;
			}
			// replaceAll for the same reason as in getPageLabel: a pattern may
			// legitimately repeat the placeholder, for example in a path segment and
			// a query parameter.
			return pattern.replaceAll('{page}', String(page));
		},
		// The current page gets no href. It is not somewhere to go, so a link to it
		// promises a change and delivers none - the item keeps its focus and its
		// aria-current, but stops being a link, the way the ARIA APG treats the last
		// breadcrumb item. Previous and next keep using getHref, they can never point
		// at the current page.
		getPageHref: (page: number) => {
			if (page === state.getCurrentPage()) {
				return undefined;
			}
			return state.getHref(page);
		},
		getPreviousHref: () => {
			return state.getHref(state.getCurrentPage() - 1);
		},
		getNextHref: () => {
			return state.getHref(state.getCurrentPage() + 1);
		},
		// The conversion lives here because an Angular template cannot call String,
		// the same reason the item parses its page in the store.
		getPageText: (page: number) => {
			return String(page);
		},
		getPageLabel: (page: number) => {
			// replaceAll, not replace: a translation may legitimately repeat a
			// placeholder, and replace with a string pattern only substitutes the
			// first occurrence - leaving a literal {page} in the accessible name.
			return (props.pageLabel ?? 'Page {page} of {totalPages}')
				.replaceAll('{page}', String(page))
				.replaceAll('{totalPages}', String(state.getTotalPages()));
		},
		handleClick: (event: any) => {
			const target = event.target as HTMLElement;
			const item = target.closest('[data-page]');
			if (!item || !_ref) {
				return;
			}

			// Guard against a nested pagination: only handle items of this instance.
			if (item.closest('.db-pagination') !== _ref) {
				return;
			}

			const page = Number(item.getAttribute('data-page'));
			if (Number.isFinite(page)) {
				state.handlePageChange(page);
			}
			// No preventDefault: in link mode the anchor has to stay a working link,
			// which is the whole point of hrefPattern.
		},
		handlePageChange: (page: number) => {
			if (page < 1 || page === state.getCurrentPage()) {
				return;
			}

			// The upper bound only exists in the option API. With composition the
			// consumer owns the list and its length, so there is nothing to clamp
			// against here.
			if (props.totalCount && page > state.getTotalPages()) {
				return;
			}
			if (props.onPageChange) {
				props.onPageChange(page);
			}
		}
	});

	return (
		<nav
			aria-label={props.label}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-pagination', props.className)}
			data-size={props.size}>
			<ul onClick={(event: any) => state.handleClick(event)}>
				{/* Previous and next go through the same shell as the pages, so the
				box and the pointer target come from one place. They pass no page,
				which keeps them out of data-pagination-item and therefore out of the
				collapsing - they belong to every layout. */}
				<DBPaginationItem size={props.size}>
					{/* The anchors carry the same class and data-attributes as
					DBButton renders, because set-basic-button styles by class and
					attribute and explicitly resets text-decoration for anchor use.
					That is what keeps both modes pixel-identical without a single
					line of extra CSS. */}
					<Show
						when={state.getPreviousHref()}
						else={
							<DBButton
								class="db-pagination-previous"
								variant="ghost"
								size={props.size}
								type="button"
								icon="chevron_left"
								noText
								disabled={state.getCurrentPage() <= 1}
								aria-label={props.previousLabel}
								onClick={() =>
									state.handlePageChange(
										state.getCurrentPage() - 1
									)
								}>
								{props.previousLabel}
							</DBButton>
						}>
						<a
							class="db-button db-pagination-previous"
							href={state.getPreviousHref()}
							rel="prev"
							data-icon="chevron_left"
							data-no-text="true"
							data-size={props.size}
							data-variant="ghost"
							aria-label={props.previousLabel}
							onClick={() =>
								state.handlePageChange(
									state.getCurrentPage() - 1
								)
							}>
							{props.previousLabel}
						</a>
					</Show>
				</DBPaginationItem>
				{/* totalCount is the discriminator, not the presence of children.
				Angular can only test inputs, never projected content, which is why the
				accordion keys on its option prop as well. Without totalCount the
				consumer owns the item list and with it the truncation, because the
				component cannot know which pages the children stand for. */}
				<Show when={props.totalCount}>
					<For each={state.getPaginationItems()}>
						{(item: PaginationItemType, index: number) => (
							<DBPaginationItem
								key={item.key}
								page={item.page}
								layout={item.layout}
								size={props.size}
								active={state.getCurrentPage() === item.page}
								href={state.getPageHref(item.page)}
								label={state.getPageLabel(item.page)}
								text={state.getPageText(item.page)}
								wideEllipsis={item.wideEllipsis}
								collapsedEllipsis={item.collapsedEllipsis}
							/>
						)}
					</For>
				</Show>
				<Show when={!props.totalCount}>{props.children}</Show>
				<DBPaginationItem size={props.size}>
					<Show
						when={state.getNextHref()}
						else={
							<DBButton
								class="db-pagination-next"
								variant="ghost"
								size={props.size}
								type="button"
								icon="chevron_right"
								noText
								disabled={
									state.getCurrentPage() >=
									state.getTotalPages()
								}
								aria-label={props.nextLabel}
								onClick={() =>
									state.handlePageChange(
										state.getCurrentPage() + 1
									)
								}>
								{props.nextLabel}
							</DBButton>
						}>
						<a
							class="db-button db-pagination-next"
							href={state.getNextHref()}
							rel="next"
							data-icon="chevron_right"
							data-no-text="true"
							data-size={props.size}
							data-variant="ghost"
							aria-label={props.nextLabel}
							onClick={() =>
								state.handlePageChange(
									state.getCurrentPage() + 1
								)
							}>
							{props.nextLabel}
						</a>
					</Show>
				</DBPaginationItem>
			</ul>
		</nav>
	);
}
