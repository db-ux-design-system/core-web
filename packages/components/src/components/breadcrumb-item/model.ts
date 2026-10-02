import {
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	LinkProps,
	NoTextProps,
	ShowIconLeadingProps,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export const BreadcrumbItemAriaCurrentList = [
	'page',
	'step',
	'location',
	'date',
	'time',
	'true',
	'false'
] as const;
export type BreadcrumbItemAriaCurrentType =
	(typeof BreadcrumbItemAriaCurrentList)[number];

export type DBBreadcrumbItemDefaultProps = {
	/**
	 * Marks the item as the current page/step, forwarded as `aria-current` to
	 * the rendered link or text. The last item of a trail should use `page`.
	 */
	ariaCurrent?: BreadcrumbItemAriaCurrentType;
} & NoTextProps &
	ShowIconProps &
	IconProps &
	TextProps &
	LinkProps;

export type DBBreadcrumbItemProps = DBBreadcrumbItemDefaultProps &
	GlobalProps &
	IconLeadingProps &
	ShowIconLeadingProps;

export type DBBreadcrumbItemDefaultState = {
	/**
	 * MutationObserver that watches the rendered link for aria-disabled and
	 * aria-current changes to keep its tabindex in sync.
	 */
	_ariaObserver?: MutationObserver;
	/**
	 * Applies or removes tabindex="-1" on the link depending on whether it is
	 * disabled or marks the current page (both must not be focusable).
	 */
	_syncLinkTabindex: (link: HTMLAnchorElement) => void;
};

export type DBBreadcrumbItemState = DBBreadcrumbItemDefaultState & GlobalState;
