import type {
	ActiveProps,
	GlobalProps,
	GlobalState,
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
	 * composed item needs it as well, and previous and next look for it to find the
	 * page they step to. Leave it out only for a control that is not a page, the way
	 * the previous and next buttons use this component as their shell - such an item
	 * takes part in no layout and is never collapsed.
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
	 * Which gaps this page borders, as a space separated list of `wide-before`,
	 * `wide-after`, `collapsed-before` and `collapsed-after`. The gap is drawn by the
	 * page that borders it rather than by an element of its own, so it cannot be
	 * reached by assistive technology. Each layout brings its own tokens, because a
	 * marker inherits the visibility of its carrier, and the two sides are separate
	 * tokens so a page standing between two gaps needs no value of its own.
	 */
	ellipsis?: string;
};

// No SizeProps: the size comes from the data-size of the surrounding .db-pagination,
// so it is set once for the whole component instead of once per item. That makes the
// wrapper a requirement rather than a convention - there is no pagination item outside
// a pagination, and an item without that ancestor renders at the medium size.
export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	ActiveProps &
	TextProps;

export type DBPaginationItemDefaultState = {
	getPage: () => number;
	getActive: () => boolean;
	getItemAttribute: () => string | undefined;
};

export type DBPaginationItemState = DBPaginationItemDefaultState & GlobalState;
