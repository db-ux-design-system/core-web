import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	LinkProps,
	RoleProps,
	ShowIconProps,
	TextProps,
	WrapProps
} from '../../shared/model';

export const LinkVariantList = ['adaptive', 'brand', 'inline'] as const;
export type LinkVariantType = (typeof LinkVariantList)[number];

export const LinkSizeList = ['medium', 'small'] as const;
export type LinkSizeType = (typeof LinkSizeList)[number];

export const LinkContentList = ['external', 'internal'] as const;
export type LinkContentType = (typeof LinkContentList)[number];

export type DBLinkDefaultProps = {
	/**
	 * Adds a different arrow after the link to indicate external or internal link
	 */
	content?: LinkContentType;
	/**
	 * Change the size of the link
	 */
	size?: LinkSizeType;
	/**
	 * Change the styling of the link. `inline` will remove the arrow. Defaults to adaptive.
	 */
	variant?: LinkVariantType;
};

export type DBLinkProps = DBLinkDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLAnchorElement> &
	LinkProps &
	RoleProps &
	ShowIconProps &
	TextProps &
	WrapProps;

export type DBLinkDefaultState = {};

export type DBLinkState = DBLinkDefaultState &
	GlobalState &
	ClickEventState<HTMLAnchorElement>;
