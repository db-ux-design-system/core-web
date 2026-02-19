import { GlobalProps, GlobalState, WidthProps } from '../../shared/model';
import { DBTableRowDefaultProps } from '../table-row/model';

export const DBTableRowSizeList = [
	'x-small',
	'small',
	'medium',
	'large'
] as const;
export type DBTableRowSizeType = (typeof DBTableRowSizeList)[number];

export const DBTableVariantList = ['joined', 'zebra', 'floating'] as const;
export type DBTableVariantType = (typeof DBTableVariantList)[number];

export const DBTableDividerList = [
	'none',
	'both',
	'horizontal',
	'vertical'
] as const;
export type DBTableDividerType = (typeof DBTableDividerList)[number];

export const DBTableMobileVariantList = ['table', 'list'] as const;
export type DBTableMobileVariantType =
	(typeof DBTableMobileVariantList)[number];

export const DBTableStickHeaderList = [
	'none',
	'both',
	'horizontal',
	'vertical'
] as const;
export type DBTableStickHederType = (typeof DBTableStickHeaderList)[number];

export type DBTableData = {
	header?: DBTableRowDefaultProps[];
	body?: DBTableRowDefaultProps[];
	footer?: DBTableRowDefaultProps[];
};

export const DBTableColumnsSizeList = [
	'auto',
	'1fr',
	'min-content',
	'max-content'
] as const;
export type DBTableColumnsSizeType = (typeof DBTableColumnsSizeList)[number];

export type DBTableDefaultProps = {
	/**
	 * Slot for table caption
	 */
	caption?: any;
	/**
	 * String alternative for table caption slot
	 */
	captionPlain?: string;
	/**
	 * Table data if you don't use default slot/children
	 */
	data?: DBTableData | string;

	/**
	 * Show the divider between the rows and cells
	 */
	divider?: DBTableDividerType;

	/**
	 * Show caption above table default is hidden
	 */
	showCaption?: boolean | string;

	/**
	 * Size of the table rows
	 */
	size?: DBTableRowSizeType;

	/**
	 * Change the layout of the table
	 * floating: card style table
	 * joined: classic table
	 */
	variant?: DBTableVariantType;

	/**
	 * Change the layout of the table on mobile
	 * list: list style
	 * table: classic table
	 */
	mobileVariant?: DBTableMobileVariantType;

	/**
	 * Change the header cells to be sticky when scrolling the table
	 */
	stickyHeader?: DBTableStickHederType;

	/**
	 * Set the width of the columns based in their index.
	 * Alternative: Use `--db-table-column-size-$index` inside CSS to control it.
	 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns
	 */
	columnSizes?: Record<number, DBTableColumnsSizeType | string>;
};

export type DBTableProps = DBTableDefaultProps & GlobalProps & WidthProps;

export type DBTableDefaultState = {
	_data?: DBTableData;
	_style?: any; // We use any here because the style prop may differ in frameworks
	convertData: () => DBTableData;
};

export type DBTableState = DBTableDefaultState & GlobalState;
