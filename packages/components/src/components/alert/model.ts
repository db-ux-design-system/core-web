import {
	ClickEventProps,
	ClickEventState,
	DefaultVariantProps,
	GlobalProps,
	GlobalState,
	LinkProps
} from '../../shared/model';

export interface DBAlertDefaultProps {
	closeButtonText?: string;
	headline?: string;
	icon?: string;
	link?: LinkProps;
	type?: 'alert' | 'inline';
	slotLink?: any;
	variant?: 'adaptive' | DefaultVariantProps;
}

export type DBAlertProps = DBAlertDefaultProps & GlobalProps & ClickEventProps;

export interface DBAlertDefaultState {
	getIcon: (
		icon?: string,
		variant?: 'adaptive' | DefaultVariantProps
	) => string;
}

export type DBAlertState = DBAlertDefaultState & GlobalState & ClickEventState;
