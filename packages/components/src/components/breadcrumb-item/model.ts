import {
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	LinkProps,
	MaterialProps,
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
	MaterialProps &
	IconLeadingProps &
	ShowIconLeadingProps;

export type DBBreadcrumbItemDefaultState = {
	/**
	 * MutationObserver that watches the rendered link for aria-disabled and
	 * aria-current changes to keep its tabindex in sync.
	 */
	_ariaObserver?: MutationObserver;
	/**
	 * Tracks whether the component itself set `aria-current` on the link
	 * (via the `ariaCurrent` prop / options API). When true the onUpdate
	 * is allowed to remove the attribute on prop clear; when false a
	 * consumer-owned value on the slotted anchor is left untouched.
	 */
	_componentSetAriaCurrent?: boolean;
	/**
	 * Resolved tooltip label: `props.text` for the text/options API,
	 * or the slotted anchor's `innerText` for the composition API.
	 */
	_tooltipText?: string;
	/**
	 * Applies or removes `tabindex="-1"` on the link depending on whether it is
	 * disabled or marks the current page (both must not be focusable). The tab
	 * order is fully managed by the breadcrumb; consumers must not set
	 * `tabindex` on the crumb themselves.
	 */
	_syncLinkTabindex: (link: HTMLAnchorElement) => void;
};

export type DBBreadcrumbItemState = DBBreadcrumbItemDefaultState & GlobalState;
