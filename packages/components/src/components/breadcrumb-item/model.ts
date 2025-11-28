import { GlobalProps } from '../../shared/model';

export type AriaCurrent =
	| 'page'
	| 'step'
	| 'location'
	| 'date'
	| 'time'
	| 'true'
	| 'false';

export type DBBreadcrumbItemDefaultProps = {
	/**
	 * The URL the breadcrumb item links to
	 */
	href?: string;

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
	 * Whether this item is disabled (renders as span instead of link)
	 */
	disabled?: boolean;
};

export type DBBreadcrumbItemProps = DBBreadcrumbItemDefaultProps & GlobalProps;
