import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	DefaultVariantProps,
	GlobalProps,
	GlobalState,
	IconProps,
	IconState,
	LinkProps
} from '../../shared/model';

export interface DBAlertDefaultProps {
	closeButtonText?: string;
	headline?: string;
	text?: string;
	link?: LinkProps;
	type?: 'alert' | 'inline';
	slotLink?: any;

	behaviour?: 'closable' | 'permanent';
	variant?: DefaultVariantProps;
}

export type DBAlertProps = DBAlertDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps &
	CardProps;

export interface DBAlertDefaultState {
	getIcon: (icon?: string, variant?: DefaultVariantProps) => string;
}

export type DBAlertState = DBAlertDefaultState &
	GlobalState &
	ClickEventState &
	IconState;
