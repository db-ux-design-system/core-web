import type { GlobalProps, GlobalState, TextProps } from '../../shared/model';

export type DBPaginationItemDefaultProps = {
	/**
	 * Marks the item as disabled. Only used in the option and `items` API, where the
	 * pagination renders the control; a composed consumer disables their own child.
	 */
	disabled?: boolean | string;
};

// A thin wrapper: it renders the `<li>` and, from `text`, the button inside it -
// nothing else. Everything a page needs to take part in the pagination (its index,
// the active state, the layout it belongs to, the ellipsis markers, `aria-current`)
// is written onto the `<li>` and its control by DBPagination through the DOM, the same
// way DBTabs drives its tab buttons. That keeps the item free of props a consumer
// would otherwise have to set by hand in composition, where those values are only
// known to the pagination. No SizeProps either: the size is one `data-size` on the
// surrounding .db-pagination and reaches the control from there.
export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	TextProps;

export type DBPaginationItemState = GlobalState;
