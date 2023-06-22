import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps
} from '../../shared/model';
import { COLOR } from '../../shared/constants';

export type DBCardDefaultProps = {
	/**
	 * Valid background [colors](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/foundation/colors).
	 */
	colorVariant?: COLOR | string;
	/**
	 * The spacing attribute changes the padding of the card.
	 */
	spacing?: 'none' | 'medium' | 'small';
	/**
	 * Makes the card interactive (clickable).
	 */
	variant?: 'default' | 'interactive';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps &
	CardProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
