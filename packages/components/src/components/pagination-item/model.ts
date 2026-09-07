import type {
	ActiveProps,
	ClickEventProps,
	GlobalProps,
	GlobalState,
	SizeProps,
	TextProps
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
	 * One-based page number. It identifies the item rather than rendering it: the
	 * pagination reads it back from the DOM to know which page was activated, so a
	 * composed item needs it as well. Leave it out to render a truncation item, the
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
	 * pagination deep linkable and usable without JavaScript. Only used together
	 * with `text`.
	 */
	href?: string;
	/**
	 * Which layout the item belongs to. Defaults to `always`.
	 */
	layout?: PaginationItemLayoutType;
	/**
	 * On which side of this page the wide layout draws an ellipsis. The gap is drawn
	 * by the page that borders it rather than by an element of its own, so it cannot
	 * be reached by assistive technology.
	 */
	wideEllipsis?: string;
	/**
	 * On which side of this page the collapsed layout draws an ellipsis. Separate
	 * from the wide side, because a marker inherits the visibility of its carrier.
	 */
	collapsedEllipsis?: string;
};

export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	ActiveProps &
	SizeProps &
	TextProps &
	ClickEventProps<HTMLElement>;

export type DBPaginationItemDefaultState = {
	getPage: () => number;
	getActive: () => boolean;
	getItemAttribute: () => string | undefined;
};

export type DBPaginationItemState = DBPaginationItemDefaultState & GlobalState;
