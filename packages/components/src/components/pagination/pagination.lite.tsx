import {
	For,
	Show,
	onMount,
	onUnMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
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
		_observer: undefined,
		_pendingRafId: null,
		getInteger: (
			value: number | string | undefined,
			fallback: number,
			minimum: number
		) => {
			/* An empty string and null both convert to 0, which is finite and would
			be clamped to the minimum instead of using the fallback. A blank value
			means "not set" - reachable via an empty custom element attribute or a
			template expression that resolves to an empty string. */
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
		/* Whether the pagination owns the page list: it does when totalCount is set or
		an items array is passed. Otherwise the consumer composed the items and owns
		them. Not a truthiness test on totalCount: a totalCount of 0 is a valid value,
		the empty result set, and a custom element hands the same value over as the
		string "0", which is truthy - so the question is whether the prop is set. */
		isDataDriven: () => {
			const items = props.items;
			if (items) {
				return true;
			}
			return String(props.totalCount ?? '').trim() !== '';
		},
		getTotalPages: () => {
			/* Local first: Angular rewrites every prop access into a signal call, so
			guarding props.items and then reading its length are two calls and the
			narrowing is lost. */
			const items = props.items;
			if (items) {
				return Math.max(1, items.length);
			}
			const totalCount = state.getInteger(props.totalCount, 0, 0);
			const pageSize = state.getInteger(props.pageSize, 10, 1);
			return Math.max(1, Math.ceil(totalCount / pageSize));
		},
		getCurrentPage: () => {
			const currentPage = state.getInteger(props.currentPage, 1, 1);
			/* Clamped only when the pagination owns the list. With composition the
			consumer owns it and getTotalPages falls back to a single page, so clamping
			would pull every page down to 1. */
			if (!state.isDataDriven()) {
				return currentPage;
			}
			return Math.min(state.getTotalPages(), currentPage);
		},
		/* Only a data-driven pagination knows where the list ends. With composition
		the length belongs to the consumer, so next stays enabled and an out of range
		request is theirs to ignore. */
		isLastPage: () => {
			return (
				state.isDataDriven() &&
				state.getCurrentPage() >= state.getTotalPages()
			);
		},
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

			/* Where the window leaves a single page next to the boundary, that page is
			rendered instead of an ellipsis - an ellipsis standing in for one page would
			take the same room while hiding information. */
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
		/* The collapsed layout is not the wide algorithm with siblingCount 0. That one
		keeps the item count constant by shifting its window towards the end, so at a
		border three full-width pages end up next to each other (1 ... 9998 9999 10000).
		Width is the only reason the collapsed layout exists, so it renders one page at
		each end, the current page, and nothing else. */
		getCollapsedPages: () => {
			const totalPages = state.getTotalPages();
			const currentPage = state.getCurrentPage();
			const boundaryCount = Math.min(
				state.getInteger(props.boundaryCount, 1, 0),
				1
			);

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
				if (candidate <= lastPage) {
					continue;
				}
				if (lastPage > 0 && candidate - lastPage === 2) {
					pages.push(lastPage + 1);
				}
				pages.push(candidate);
				lastPage = candidate;
			}

			return pages;
		},
		/* Describes the items the data-driven API renders. syncItems writes the
		description onto the DOM after the list has rendered. */
		getPaginationItems: () => {
			const totalPages = state.getTotalPages();
			const widePages = state.getPages(
				state.getInteger(props.siblingCount, 1, 0)
			);
			const collapsedPages = state.getCollapsedPages();
			const items: PaginationItemType[] = [];

			for (const page of widePages) {
				const inCollapsed = collapsedPages.includes(page);
				const tokens = state
					.getEllipsisTokens('wide', widePages, page, totalPages)
					.concat(
						inCollapsed
							? state.getEllipsisTokens(
									'collapsed',
									collapsedPages,
									page,
									totalPages
								)
							: []
					);
				const itemOptions = props.items;
				const option = itemOptions ? itemOptions[page - 1] : undefined;
				items.push({
					page,
					layout: inCollapsed ? 'always' : 'wide',
					ellipsis: tokens.length > 0 ? tokens.join(' ') : undefined,
					disabled: option
						? Boolean(option.disabled) &&
							String(option.disabled) !== 'false'
						: false,
					key: 'page-' + page
				});
			}

			return items;
		},
		getEllipsisTokens: (
			layout: string,
			pages: number[],
			page: number,
			totalPages: number
		) => {
			const index = pages.indexOf(page);
			if (index === -1) {
				return [];
			}

			const previousPage = index > 0 ? pages[index - 1] : 0;
			const tokens: string[] = [];

			if (index === 0 ? page > 1 : page - previousPage > 1) {
				tokens.push(layout + '-before');
			}
			if (index === pages.length - 1 && page < totalPages) {
				tokens.push(layout + '-after');
			}

			return tokens;
		},
		getPageText: (page: number) => {
			return String(page);
		},
		getPageLabel: (page: number) => {
			/* replaceAll, not replace: a translation may repeat a placeholder, and
			replace with a string pattern only substitutes the first occurrence. */
			return (props.pageLabel ?? 'Page {page} of {totalPages}')
				.replaceAll('{page}', String(page))
				.replaceAll('{totalPages}', String(state.getTotalPages()));
		},
		applyItem: (item: any, page: number, description: any) => {
			const control = item.querySelector('a, button');
			const isCurrent = page === state.getCurrentPage();

			item.setAttribute('data-page', String(page));
			item.setAttribute('data-variant', isCurrent ? 'filled' : 'ghost');

			/* The layout marker comes from the generated description: a page shown in
			both layouts is "page", one only in the wide layout is "sibling", which the
			stylesheet hides below the breakpoint. A composed child has no description,
			so it stays "page" - the consumer laid out a flat list. */
			const marker =
				description && description.layout === 'wide'
					? 'sibling'
					: 'page';
			item.setAttribute('data-pagination-item', marker);
			if (description && description.ellipsis) {
				item.setAttribute('data-ellipsis', description.ellipsis);
			} else {
				item.removeAttribute('data-ellipsis');
			}

			if (control) {
				if (isCurrent) {
					control.setAttribute('aria-current', 'page');
				} else {
					control.removeAttribute('aria-current');
				}

				/* The accessible name is the page label. The visible text is only the
				number: a generated control gets it from getPageText, and a composed
				child that came in with its own text keeps that text as the label and
				shows the number instead - which is what automates the numbering for a
				consumer who wrote "Go to page five" or a router link with a word. */
				const label = state.getPageLabel(page);
				const number = state.getPageText(page);
				if (description) {
					control.setAttribute('aria-label', label);
				} else if (!control.getAttribute('aria-label')) {
					const existing = (control.textContent ?? '').trim();
					control.setAttribute(
						'aria-label',
						existing === '' ? label : existing
					);
				}
				if (control.textContent !== number) {
					control.textContent = number;
				}

				if (description && description.disabled) {
					control.setAttribute('aria-disabled', 'true');
				} else {
					control.removeAttribute('aria-disabled');
				}
			}
		},
		syncItems: () => {
			if (!_ref) {
				return;
			}

			const optionItems = state.isDataDriven()
				? state.getPaginationItems()
				: [];
			const allItems: any[] = Array.from(
				_ref.querySelectorAll('li.db-pagination-item')
			);
			let pageIndex = 0;

			for (let i = 0; i < allItems.length; i++) {
				const item: any = allItems[i];
				const isOwn = item.closest('.db-pagination') === _ref;
				const isShell = item.querySelector(
					'.db-pagination-previous, .db-pagination-next'
				);

				if (isOwn && !isShell) {
					const description = optionItems[pageIndex];
					const page = description ? description.page : pageIndex + 1;
					state.applyItem(item, page, description);
					pageIndex = pageIndex + 1;
				}
			}
		},
		_setupObserver: () => {
			/* Only composition needs the observer: there the consumer owns the item
			list and can add or remove children at runtime. The data-driven API renders
			the items itself and re-syncs through onUpdate, so an observer there would
			only race that sync when the For re-renders the list. */
			if (!_ref || state.isDataDriven()) {
				return;
			}

			const observer = new MutationObserver((mutations: any) => {
				const hasListChange = mutations.some(
					(mutation: any) =>
						mutation.type === 'childList' &&
						(mutation.addedNodes.length > 0 ||
							mutation.removedNodes.length > 0)
				);
				if (!hasListChange) {
					return;
				}

				const pendingRafId = state._pendingRafId;
				if (pendingRafId !== null) {
					cancelAnimationFrame(pendingRafId);
				}
				state._pendingRafId = requestAnimationFrame(() => {
					state._pendingRafId = null;
					state.syncItems();
				});
			});

			observer.observe(_ref, { childList: true, subtree: true });
			state._observer = observer;
		},
		/* True when the browser is about to handle the activation somewhere other than
		this document: a modifier key or a non-primary button on a link opens the
		destination in a new tab, so reporting the page would move this pagination away
		from the page the user still has in front of them. Only links are tested. */
		isModifiedLinkClick: (event: any) => {
			const target = event.target as HTMLElement;
			if (!target || !target.closest('a[href]')) {
				return false;
			}
			return Boolean(
				event.metaKey ||
				event.ctrlKey ||
				event.shiftKey ||
				event.altKey ||
				(typeof event.button === 'number' && event.button > 0)
			);
		},
		handleClick: (event: any) => {
			if (state.isModifiedLinkClick(event)) {
				return;
			}

			const target = event.target as HTMLElement;
			const item = target.closest('li.db-pagination-item');
			if (!item || !_ref) {
				return;
			}
			if (item.closest('.db-pagination') !== _ref) {
				return;
			}
			if (
				target.closest('.db-pagination-previous, .db-pagination-next')
			) {
				return;
			}
			if (target.closest('[aria-disabled="true"]')) {
				return;
			}

			const page = Number(item.getAttribute('data-page'));
			if (Number.isFinite(page)) {
				state.handlePageChange(page);
			}
			/* No preventDefault: a composed anchor has to stay a working link. */
		},
		/* Previous and next report no page themselves: they find the item of the
		neighbouring page and click the control inside it, so the arrow takes the same
		path as a click on the page number - the generated button or a router link a
		consumer composed. The click bubbles to the list, where handleClick reads
		data-page back. */
		stepToPage: (page: number) => {
			if (!_ref) {
				return;
			}

			const item = _ref.querySelector('[data-page="' + page + '"]');
			if (item && item.closest('.db-pagination') === _ref) {
				const control = item.querySelector('a, button');
				if (control) {
					control.click();
					return;
				}
			}

			/* The neighbour is not always rendered - siblingCount 0, or a composed
			list that omits it. Reporting the page directly keeps the arrow working. */
			state.handlePageChange(page);
		},
		handlePageChange: (page: number) => {
			if (page < 1 || page === state.getCurrentPage()) {
				return;
			}
			if (state.isDataDriven() && page > state.getTotalPages()) {
				return;
			}
			if (props.onPageChange) {
				props.onPageChange(page);
			}
		}
	});

	onMount(() => {
		state.syncItems();
		state._setupObserver();
	});

	/* Re-write the page state after every render. A dependency list would be the
	tighter hook, but the page state depends on several props at once and the sync is
	cheap - it walks the rendered items and sets attributes - so running it on each
	update keeps the DOM in step without a brittle dependency array. */
	onUpdate(() => {
		if (_ref) {
			state.syncItems();
		}
	});

	onUnMount(() => {
		if (state._observer) {
			state._observer.disconnect();
		}
		const pendingRafId = state._pendingRafId;
		if (pendingRafId !== null) {
			cancelAnimationFrame(pendingRafId);
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
				{/* Previous and next are plain buttons that click the neighbouring
				page's control, so a composed router link runs for the arrows too. They
				carry no data-page, which keeps them out of the collapsing and the
				delegation. */}
				<li class="db-pagination-item">
					<button
						class="db-pagination-previous"
						type="button"
						data-icon="chevron_left"
						disabled={
							state.isDataDriven() && state.getCurrentPage() <= 1
								? true
								: undefined
						}
						aria-label={props.previousLabel}
						onClick={() =>
							state.stepToPage(state.getCurrentPage() - 1)
						}>
						{props.previousLabel}
					</button>
				</li>
				{/* The data-driven API renders one item per page from the computed
				list, as a button holding the number. syncItems writes the rest of the
				page state onto them after mount. */}
				<Show when={state.isDataDriven()}>
					<For each={state.getPaginationItems()}>
						{(item: PaginationItemType, index: number) => (
							<DBPaginationItem
								key={item.key}
								text={state.getPageText(item.page)}
							/>
						)}
					</For>
				</Show>
				{/* Composition: the consumer owns the item list, including any links.
				syncItems wires each child up from its position. */}
				<Show when={!state.isDataDriven()}>{props.children}</Show>
				<li class="db-pagination-item">
					<button
						class="db-pagination-next"
						type="button"
						data-icon="chevron_right"
						disabled={state.isLastPage() ? true : undefined}
						aria-label={props.nextLabel}
						onClick={() =>
							state.stepToPage(state.getCurrentPage() + 1)
						}>
						{props.nextLabel}
					</button>
				</li>
			</ul>
		</nav>
	);
}
