import { GlobalProps, LinkProps } from '../../shared/model';

export type AriaCurrent =
	| 'page'
	| 'step'
	| 'location'
	| 'date'
	| 'time'
	| 'true'
	| 'false';

export type DBBreadcrumbItemDefaultProps = LinkProps & {
	/**
	 * The text content of the breadcrumb item
	 */
	text?: string;

	/**
	 * Icon name from DB UX icon library
	 */
	icon?: string;

	/**
	 * Indicates the current page in the breadcrumb
	 */
	ariaCurrent?: AriaCurrent;

	/**
	 * Size of the breadcrumb item
	 */
	size?: 'small' | 'medium';
};

export type DBBreadcrumbItems = DBBreadcrumbItemDefaultProps & GlobalProps;
export type DBBreadcrumbItemProps = DBBreadcrumbItems;
