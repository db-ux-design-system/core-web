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
			const parsedValue = Number(value);
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
		getPageNumber: (item: PaginationItemType) => {
			return typeof item === 'number' ? item : 0;
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
		getPaginationItems: () => {
			const totalPages = state.getTotalPages();
			const currentPage = state.getCurrentPage();
			const siblingCount = state.getInteger(props.siblingCount, 1, 0);
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
			let items: PaginationItemType[] = startPages;

			if (siblingsStart > boundaryCount + 2) {
				items = items.concat('start-ellipsis');
			} else if (boundaryCount + 1 < totalPages - boundaryCount) {
				items = items.concat(boundaryCount + 1);
			}

			items = items.concat(state.getRange(siblingsStart, siblingsEnd));

			if (siblingsEnd < totalPages - boundaryCount - 1) {
				items = items.concat('end-ellipsis');
			} else if (totalPages - boundaryCount > boundaryCount) {
				items = items.concat(totalPages - boundaryCount);
			}

			return items.concat(endPages);
		},
		getPageLabel: (page: number) => {
			return (props.pageLabel ?? 'Page {page} of {totalPages}')
				.replace('{page}', String(page))
				.replace('{totalPages}', String(state.getTotalPages()));
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
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-pagination', props.className)}
			data-size={props.size}
			aria-label={props.label}>
			<ul>
				<li>
					<DBButton
						class="db-pagination-previous"
						variant="ghost"
						size="small"
						type="button"
						icon="chevron_left"
						noText
						disabled={state.getCurrentPage() <= 1}
						aria-label={props.previousLabel}
						onClick={() =>
							state.handlePageChange(state.getCurrentPage() - 1)
						}>
						{props.previousLabel}
					</DBButton>
				</li>
				<For each={state.getPaginationItems()}>
					{(item: PaginationItemType, index: number) => (
						<Show
							when={typeof item === 'number'}
							else={
								<li
									key={'pagination-ellipsis-' + item + index}
									class="db-pagination-ellipsis"
									aria-hidden="true">
									<span>...</span>
								</li>
							}>
							<li key={'pagination-page-' + item}>
								<DBButton
									class="db-pagination-page"
									variant={
										state.getCurrentPage() ===
										state.getPageNumber(item)
											? 'filled'
											: 'ghost'
									}
									size={props.size}
									type="button"
									aria-current={
										state.getCurrentPage() ===
										state.getPageNumber(item)
											? 'page'
											: undefined
									}
									aria-label={state.getPageLabel(
										state.getPageNumber(item)
									)}
									onClick={() =>
										state.handlePageChange(
											state.getPageNumber(item)
										)
									}>
									{item}
								</DBButton>
							</li>
						</Show>
					)}
				</For>
				<li>
					<DBButton
						class="db-pagination-next"
						variant="ghost"
						size="small"
						type="button"
						icon="chevron_right"
						noText
						disabled={
							state.getCurrentPage() >= state.getTotalPages()
						}
						aria-label={props.nextLabel}
						onClick={() =>
							state.handlePageChange(state.getCurrentPage() + 1)
						}>
						{props.nextLabel}
					</DBButton>
				</li>
			</ul>
		</nav>
	);
}
