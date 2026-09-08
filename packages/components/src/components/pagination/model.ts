import type { GlobalProps, GlobalState, SizeProps } from '../../shared/model';
import type { PaginationItemLayoutType } from '../pagination-item/model';

/**
 * On which side of a page the gap it borders is drawn. Every layout marks its own
 * gaps, because a marker inherits the visibility of the page that carries it - one
 * hidden below the breakpoint would take its ellipsis with it.
 */
export const PaginationEllipsisList = ['before', 'after', 'both'] as const;
export type PaginationEllipsisType = (typeof PaginationEllipsisList)[number];

export type PaginationItemType = {
	/**
	 * One-based page number.
	 */
	page: number;
	layout: PaginationItemLayoutType;
	/**
	 * Where this page borders a gap in the wide layout.
	 */
	wideEllipsis?: PaginationEllipsisType;
	/**
	 * Where this page borders a gap in the collapsed layout. Only set on pages the
	 * collapsed layout shows, since a hidden page cannot carry a visible marker.
	 */
	collapsedEllipsis?: PaginationEllipsisType;
	/**
	 * Identity of the item across page changes. Keying by list position instead
	 * would move the focus to an adjacent page whenever the window shifts, because
	 * the framework reuses the element for whatever page now sits at that
	 * position.
	 */
	key: string;
};

export type DBPaginationDefaultProps = {
	/**
	 * One-based number of the currently active page. Defaults to `1`.
	 */
	currentPage?: number | string;
	/**
	 * Total number of items across all pages. Defaults to `0`.
	 */
	totalCount?: number | string;
	/**
	 * Number of items displayed on one page. Defaults to `10`.
	 */
	pageSize?: number | string;
	/**
	 * Number of page buttons shown on each side of the current page.
	 */
	siblingCount?: number | string;
	/**
	 * Number of page buttons always shown at the start and end. Below the collapsing
	 * breakpoint at most one page is pinned per end, whatever this says - the
	 * collapsed layout exists to be narrow.
	 */
	boundaryCount?: number | string;
	/**
	 * URL template that turns the pages into links, for example `?page={page}`.
	 * `{page}` is replaced with the page number. Without it the component renders
	 * buttons and stays fully controlled.
	 */
	hrefPattern?: string;
	/**
	 * Accessible label for the pagination navigation landmark.
	 */
	label?: string;
	/**
	 * Accessible label for the previous-page button.
	 */
	previousLabel?: string;
	/**
	 * Accessible label for the next-page button.
	 */
	nextLabel?: string;
	/**
	 * Accessible page-button label. `{page}` and `{totalPages}` are replaced.
	 */
	pageLabel?: string;
	/**
	 * Informs the parent that a different page was requested. The parent must
	 * update `currentPage`; the component never changes it internally.
	 */
	onPageChange?: (page: number) => void;
};

export type DBPaginationProps = DBPaginationDefaultProps &
	GlobalProps &
	SizeProps;

export type DBPaginationDefaultState = {
	getInteger: (
		value: number | string | undefined,
		fallback: number,
		minimum: number
	) => number;
	getRange: (start: number, end: number) => number[];
	hasTotalCount: () => boolean;
	getTotalPages: () => number;
	getCurrentPage: () => number;
	isLastPage: () => boolean;
	getPages: (siblingCount: number) => number[];
	getCollapsedPages: () => number[];
	getPaginationItems: () => PaginationItemType[];
	getEllipsisSide: (
		pages: number[],
		page: number,
		totalPages: number
	) => PaginationEllipsisType | undefined;
	getHref: (page: number) => string | undefined;
	getPageHref: (page: number) => string | undefined;
	getPreviousHref: () => string | undefined;
	getNextHref: () => string | undefined;
	getPageText: (page: number) => string;
	getPageLabel: (page: number) => string;
	handleClick: (event: any) => void;
	handlePageChange: (page: number) => void;
};

export type DBPaginationState = DBPaginationDefaultState & GlobalState;
