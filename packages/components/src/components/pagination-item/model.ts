import type {
	ActiveProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	SizeProps
} from '../../shared/model';

/**
 * Which of the two pagination layouts an item takes part in. `wide` items are
 * hidden once the page list collapses, `collapsed` items only appear there, and
 * `always` items are part of both.
 */
export const PaginationItemLayoutList = [
	'always',
	'wide',
	'collapsed'
] as const;
export type PaginationItemLayoutType =
	(typeof PaginationItemLayoutList)[number];

export type DBPaginationItemDefaultProps = {
	/**
	 * One-based page number. Leave it out to render a truncation item, the
	 * ellipsis that stands in for the pages between two page numbers.
	 */
	page?: number | string;
	/**
	 * Accessible name of the page, for example `Page 5 of 10`. The visible text is
	 * only a bare number, so the context lives in this label - it is not rendered.
	 */
	label?: string;
	/**
	 * Renders the page as an anchor instead of a button, which makes the
	 * pagination deep linkable and usable without JavaScript.
	 */
	href?: string;
	/**
	 * Which layout the item belongs to. Defaults to `always`.
	 */
	layout?: PaginationItemLayoutType;
};

export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	ActiveProps &
	SizeProps &
	ClickEventProps<HTMLElement>;

export type DBPaginationItemDefaultState = {
	getPage: () => number;
	getActive: () => boolean;
	getItemAttribute: () => string;
	handleClick: (event: any) => void;
};

export type DBPaginationItemState = DBPaginationItemDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
