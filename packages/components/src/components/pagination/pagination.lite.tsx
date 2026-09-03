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
import type {
	DBPaginationProps,
	DBPaginationState,
	PaginationItemType
} from './model';

useMetadata({});

useDefaultProps<DBPaginationProps>({
	currentPage: 1,
	totalCount: 0,
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
		getPaginationItems: () => {
			const totalPages = state.getTotalPages();
			const widePages = state.getPages(
				state.getInteger(props.siblingCount, 1, 0)
			);
			// The collapsed layout is the same algorithm with siblingCount reduced
			// to 0, so it inherits every guarantee that layout already makes:
			// ascending unique pages, the current page always among them, and no
			// ellipsis standing in for a single page. Its pages are a subset of the
			// wide ones, which is why both fit into one list of items.
			const collapsedPages = state.getPages(0);
			const items: PaginationItemType[] = [];
			let lastWidePage = 0;
			// Whether pages are missing since the last page the collapsed layout
			// shows, and whether an ellipsis already stands in for them. Without the
			// second flag a wide gap followed by a hidden page would emit a second
			// ellipsis right next to the first one.
			let collapsedGapOpen = false;
			let collapsedEllipsisPlaced = false;

			for (const page of widePages) {
				const wideGap =
					lastWidePage === 0 ? page > 1 : page - lastWidePage > 1;
				if (wideGap) {
					collapsedGapOpen = true;
				}

				const inCollapsed = collapsedPages.includes(page);
				const collapsedEllipsis =
					collapsedGapOpen && !collapsedEllipsisPlaced;

				// An ellipsis slot is shared by both layouts wherever both need one.
				// A collapsed-only ellipsis goes directly in front of the next page
				// the collapsed layout shows, so it never ends up behind a page that
				// is hidden there.
				if (wideGap || (collapsedEllipsis && inCollapsed)) {
					items.push({
						page: 0,
						layout: state.getEllipsisLayout(
							wideGap,
							collapsedEllipsis
						)
					});
					if (collapsedEllipsis) {
						collapsedEllipsisPlaced = true;
					}
				}

				items.push({
					page,
					layout: inCollapsed ? 'always' : 'wide'
				});
				lastWidePage = page;

				if (inCollapsed) {
					collapsedGapOpen = false;
					collapsedEllipsisPlaced = false;
				} else {
					collapsedGapOpen = true;
				}
			}

			// Same decision for the region behind the last rendered page. It is not
			// enough to look at the wide layout here: with boundaryCount 0 the
			// collapsed layout can end before the wide one does, so it needs a
			// trailing ellipsis where the wide layout needs none.
			const wideTrailingGap =
				lastWidePage > 0 && lastWidePage < totalPages;
			if (wideTrailingGap) {
				collapsedGapOpen = true;
			}
			const collapsedTrailingEllipsis =
				collapsedGapOpen && !collapsedEllipsisPlaced;

			if (wideTrailingGap || collapsedTrailingEllipsis) {
				items.push({
					page: 0,
					layout: state.getEllipsisLayout(
						wideTrailingGap,
						collapsedTrailingEllipsis
					)
				});
			}

			return items;
		},
		getEllipsisLayout: (forWide: boolean, forCollapsed: boolean) => {
			if (!forWide) {
				return 'collapsed';
			}
			return forCollapsed ? 'always' : 'wide';
		},
		getItemAttribute: (item: PaginationItemType) => {
			if (item.page === 0) {
				if (item.layout === 'always') {
					return 'ellipsis';
				}
				return item.layout === 'collapsed'
					? 'collapse-ellipsis'
					: 'wide-ellipsis';
			}
			return item.layout === 'always' ? 'page' : 'sibling';
		},
		// Returns undefined for everything that must not become a link: no pattern
		// means button mode, and a page outside the range means there is nothing to
		// link to. The second case is what keeps the previous and next elements
		// native disabled buttons at the boundaries - a link that leads nowhere
		// would need aria-disabled plus tabindex -1 to be inert, and an anchor
		// announced as a link that cannot be followed is worse than a button that
		// says it is disabled.
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
		getPreviousHref: () => {
			return state.getHref(state.getCurrentPage() - 1);
		},
		getNextHref: () => {
			return state.getHref(state.getCurrentPage() + 1);
		},
		getPageLabel: (page: number) => {
			// replaceAll, not replace: a translation may legitimately repeat a
			// placeholder, and replace with a string pattern only substitutes the
			// first occurrence - leaving a literal {page} in the accessible name.
			return (props.pageLabel ?? 'Page {page} of {totalPages}')
				.replaceAll('{page}', String(page))
				.replaceAll('{totalPages}', String(state.getTotalPages()));
		},
		handlePageChange: (page: number) => {
			if (
				page < 1 ||
				page > state.getTotalPages() ||
				page === state.getCurrentPage()
			) {
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
			<ul>
				<li>
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
				</li>
				<For each={state.getPaginationItems()}>
					{(item: PaginationItemType, index: number) => (
						<Show
							when={item.page > 0}
							else={
								<li
									key={'pagination-ellipsis-' + index}
									class="db-pagination-ellipsis"
									data-pagination-item={state.getItemAttribute(
										item
									)}
									aria-hidden="true">
									<span>...</span>
								</li>
							}>
							<li
								key={'pagination-page-' + item.page}
								data-pagination-item={state.getItemAttribute(
									item
								)}>
								<Show
									when={state.getHref(item.page)}
									else={
										<DBButton
											class="db-pagination-page"
											variant={
												state.getCurrentPage() ===
												item.page
													? 'filled'
													: 'ghost'
											}
											size={props.size}
											type="button"
											aria-current={
												state.getCurrentPage() ===
												item.page
													? 'page'
													: undefined
											}
											aria-label={state.getPageLabel(
												item.page
											)}
											onClick={() =>
												state.handlePageChange(
													item.page
												)
											}>
											{item.page}
										</DBButton>
									}>
									<a
										class="db-button db-pagination-page"
										href={state.getHref(item.page)}
										data-variant={
											state.getCurrentPage() === item.page
												? 'filled'
												: 'ghost'
										}
										data-size={props.size}
										aria-current={
											state.getCurrentPage() === item.page
												? 'page'
												: undefined
										}
										aria-label={state.getPageLabel(
											item.page
										)}
										onClick={() =>
											state.handlePageChange(item.page)
										}>
										{item.page}
									</a>
								</Show>
							</li>
						</Show>
					)}
				</For>
				<li>
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
				</li>
			</ul>
		</nav>
	);
}
