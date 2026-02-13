import { GlobalProps, GlobalState } from '../../shared/model';
import { DBTableRowDefaultProps } from '../table-row/model';

export const DBTableRowSizeList = [
	'x-small',
	'small',
	'medium',
	'large'
] as const;
export type DBTableRowSizeType = (typeof DBTableRowSizeList)[number];

export const DBTableRowStyleList = ['basic', 'zebra'] as const;
export type DBTableRowStyleType = (typeof DBTableRowStyleList)[number];

export const DBTableVariantList = ['joined', 'floating'] as const;
export type DBTableVariantType = (typeof DBTableVariantList)[number];

export const DBTableDividerList = [
	'none',
	'both',
	'horizontal',
	'vertical'
] as const;
export type DBTableDividerType = (typeof DBTableDividerList)[number];


export const DBTableMobileVariantList = ['table', 'list'] as const;
export type DBTableMobileVariantType = (typeof DBTableMobileVariantList)[number];

export type DBTableData = {
	header?: DBTableRowDefaultProps[];
	body?: DBTableRowDefaultProps[];
	footer?: DBTableRowDefaultProps[];
};

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
	 * Enables zebra variant for table
	 */
	rowStyle?: DBTableRowStyleType;

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
};

export type DBTableProps = DBTableDefaultProps & GlobalProps;

export type DBTableDefaultState = {
	_data?: DBTableData;
	convertData: () => DBTableData;
};

export type DBTableState = DBTableDefaultState & GlobalState;
