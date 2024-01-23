import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps,
	SpacingProps
} from '../../shared/model';
import { COLOR } from '../../shared/constants';

export type DBCardDefaultProps = {
	/**
	 * Valid background [colors](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/foundation/colors).
	 */
	colorVariant?: COLOR | string;
	/**
	 * Makes the card interactive (clickable).
	 */
	variant?: 'default' | 'interactive';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement> &
	ImageProps &
	CardProps &
	SpacingProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
