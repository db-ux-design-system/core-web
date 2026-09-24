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
import { cls, getBoolean } from '../../utils';
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
		isDataDriven: () => {
			const items = props.items;
			if (items) {
				return true;
			}
			return String(props.totalCount ?? '').trim() !== '';
		},
		getTotalPages: () => {
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
			if (!state.isDataDriven()) {
				return currentPage;
			}
			return Math.min(state.getTotalPages(), currentPage);
		},
		isPageDisabled: (page: number) => {
			const itemOptions = props.items;
			if (!itemOptions) {
				return false;
			}
			const option = itemOptions[page - 1];
			return option
				? Boolean(getBoolean(option.disabled, 'disabled'))
				: false;
		},
		/*
		 * The page a step control moves to, skipping pages the items API
		 * disabled. Returns 0 when no reachable page is left, which is what
		 * disables the control. The end of a composed list is unknown, so only
		 * the data driven mode has an upper bound here.
		 */
		getStepPage: (direction: number) => {
			/*
			 * Not named isDataDriven: Mitosis generates a plain function of
			 * that name for React, and a local const would shadow it and throw
			 * from its own initializer.
			 */
			const hasUpperBound = state.isDataDriven();
			const totalPages = state.getTotalPages();
			let page = state.getCurrentPage() + direction;

			while (page >= 1 && (!hasUpperBound || page <= totalPages)) {
				if (!state.isPageDisabled(page)) {
					return page;
				}
				page = page + direction;
			}

			return 0;
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
					disabled: state.isPageDisabled(page),
					label: option ? option.label : undefined,
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
			return (props.pageLabel ?? 'Page {page} of {totalPages}')
				.replaceAll('{page}', String(page))
				.replaceAll('{totalPages}', String(state.getTotalPages()));
		},
		applyItem: (item: any, page: number, description: any) => {
			const control = item.querySelector('a, button');
			const isCurrent = page === state.getCurrentPage();

			item.setAttribute('data-page', String(page));
			item.setAttribute('data-variant', isCurrent ? 'filled' : 'ghost');

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

				const label = state.getPageLabel(page);
				const number = state.getPageText(page);
				if (description) {
					control.setAttribute(
						'aria-label',
						description.label ? description.label : label
					);
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
		preventCurrentPageNavigation: (event: any) => {
			if (state.isModifiedLinkClick(event)) {
				return;
			}

			const target = event.target as HTMLElement;
			const item = target.closest('li.db-pagination-item');
			if (!item || !_ref || item.closest('.db-pagination') !== _ref) {
				return;
			}
			if (!target.closest('a[href]')) {
				return;
			}

			const page = Number(item.getAttribute('data-page'));
			if (Number.isFinite(page) && page === state.getCurrentPage()) {
				event.preventDefault();
			}
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
			/*
			 * The ellipsis is a ::before/::after on the li, so clicking it
			 * targets the li itself. Only a click that came from the control
			 * may report a page.
			 */
			const control = target.closest('a, button');
			if (!control || control.closest('li.db-pagination-item') !== item) {
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
			if (!Number.isFinite(page)) {
				return;
			}
			if (page === state.getCurrentPage()) {
				event.preventDefault();
				return;
			}

			state.handlePageChange(page);
		},
		stepToPage: (page: number) => {
			if (!_ref || page < 1) {
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
		if (_ref) {
			_ref.addEventListener(
				'click',
				state.preventCurrentPageNavigation,
				true
			);
		}
	});

	onUpdate(() => {
		if (_ref) {
			state.syncItems();
		}
	});

	onUnMount(() => {
		if (_ref) {
			_ref.removeEventListener(
				'click',
				state.preventCurrentPageNavigation,
				true
			);
		}
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
				<li class="db-pagination-item" data-variant="ghost">
					<button
						class="db-pagination-previous"
						type="button"
						data-icon="chevron_left"
						disabled={state.getStepPage(-1) < 1 ? true : undefined}
						aria-label={props.previousLabel}
						onClick={() => state.stepToPage(state.getStepPage(-1))}>
						{props.previousLabel}
					</button>
				</li>
				<Show when={state.isDataDriven()} else={props.children}>
					<For each={state.getPaginationItems()}>
						{(item: PaginationItemType, index: number) => (
							<DBPaginationItem
								key={item.key}
								text={state.getPageText(item.page)}
							/>
						)}
					</For>
				</Show>
				<li class="db-pagination-item" data-variant="ghost">
					<button
						class="db-pagination-next"
						type="button"
						data-icon="chevron_right"
						disabled={state.getStepPage(1) < 1 ? true : undefined}
						aria-label={props.nextLabel}
						onClick={() => state.stepToPage(state.getStepPage(1))}>
						{props.nextLabel}
					</button>
				</li>
			</ul>
		</nav>
	);
}
