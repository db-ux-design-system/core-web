import type { GlobalProps, GlobalState, SizeProps } from '../../shared/model';

/**
 * The gap tokens a page can carry. Every layout marks its own gaps, because a marker
 * inherits the visibility of the page that carries it - one hidden below the
 * breakpoint would take its ellipsis with it. One token per side, so a page standing
 * between two gaps carries two of them instead of a value meaning both.
 */
export const PaginationEllipsisList = [
	'wide-before',
	'wide-after',
	'collapsed-before',
	'collapsed-after'
] as const;
export type PaginationEllipsisType = (typeof PaginationEllipsisList)[number];

/**
 * A single item the option/`items` API generates. `page` is the one-based page
 * number, `layout` decides whether the collapsing hides it, and `ellipsis` holds the
 * gap tokens it borders. This describes what the pagination writes onto the DOM; it is
 * not a prop the consumer sets.
 */
export type PaginationItemType = {
	page: number;
	layout: 'always' | 'wide';
	ellipsis?: string;
	disabled?: boolean;
	/**
	 * Identity of the item across page changes. Keying by list position instead
	 * would move the focus to an adjacent page whenever the window shifts, because
	 * the framework reuses the element for whatever page now sits at that position.
	 */
	key: string;
};

/**
 * An entry of the `items` prop. A consumer who drives the pagination through data
 * rather than composed children passes these; `disabled` greys a single page out,
 * which the design otherwise cannot express.
 */
export type PaginationItemOption = {
	disabled?: boolean | string;
};

export type DBPaginationDefaultProps = {
	/**
	 * One-based number of the currently active page. Defaults to `1`.
	 */
	currentPage?: number | string;
	/**
	 * Total number of records across all pages. With `pageSize` it decides the page
	 * count. Defaults to `0`.
	 */
	totalCount?: number | string;
	/**
	 * Number of records on one page. Defaults to `10`.
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
	 * Per-page options for the data-driven API, one entry per page. Lets a single
	 * page be disabled. When omitted the pagination derives the pages from
	 * `totalCount` and `pageSize`.
	 */
	items?: PaginationItemOption[];
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
	 * Accessible page-button label. `{page}` and `{totalPages}` are replaced. The
	 * visible text of a page is only its number, so the context lives in this label.
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
	isDataDriven: () => boolean;
	getTotalPages: () => number;
	getCurrentPage: () => number;
	isLastPage: () => boolean;
	getPages: (siblingCount: number) => number[];
	getCollapsedPages: () => number[];
	getPaginationItems: () => PaginationItemType[];
	getEllipsisTokens: (
		layout: string,
		pages: number[],
		page: number,
		totalPages: number
	) => string[];
	getPageText: (page: number) => string;
	getPageLabel: (page: number) => string;
	/**
	 * Writes the page state onto one item and its control: `data-page`,
	 * `data-pagination-item`, `data-ellipsis`, `data-variant`, `aria-current` and,
	 * when the pagination owns the control, the accessible label and the visible
	 * number. `description` comes from the generated list, or is undefined for a
	 * composed child where only the identity and the current marker are applied.
	 */
	applyItem: (item: any, page: number, description: any) => void;
	/**
	 * Walks the page items and calls `applyItem` on each, so both a generated item and
	 * a composed child are wired up without a consumer setting any of it. Called on
	 * mount and whenever the inputs that decide the state change.
	 */
	syncItems: () => void;
	_setupObserver: () => void;
	_observer: any;
	_pendingRafId: number | null;
	isModifiedLinkClick: (event: any) => boolean;
	handleClick: (event: any) => void;
	stepToPage: (page: number) => void;
	handlePageChange: (page: number) => void;
};

export type DBPaginationState = DBPaginationDefaultState & GlobalState;
