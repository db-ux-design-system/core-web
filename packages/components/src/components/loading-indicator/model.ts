import {
	DelayProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	OrientationProps,
	ShowLabelProps,
	SizeProps,
	SizeType
} from '../../shared/model';

export const LoadingIndicatorVariantList = ['bar', 'circular'] as const;
export type LoadingIndicatorVariantType =
	(typeof LoadingIndicatorVariantList)[number];
export const LoadingIndicatorStateList = [
	'inactive',
	'active',
	'successful',
	'critical'
] as const;
export type LoadingIndicatorStateType =
	(typeof LoadingIndicatorStateList)[number];

export type DBLoadingIndicatorDefaultProps = {
	indeterminate?: boolean | string;
	label?: string;

	max?: number | string;

	progressText?: string;
	/**
	 * Enables/disables the visibility of the progressText
	 */
	showProgressText?: boolean | string;
	value?: string | number;

	overlay?: boolean | string;

	variant?: LoadingIndicatorVariantType;

	state?: LoadingIndicatorStateType | string;

	/**
	 * Disable the parent component (e.g. a DBButton) when loading indicator is inside it
	 */
	autoDisable?: boolean | string;

	role?: 'alert' | 'status';

	/**
	 * Triggers after a timeout. For "active" after 5 seconds, for "successful" and "critical" after 2 seconds
	 */
	onTimeout?: (state?: LoadingIndicatorStateType | string) => void;

	/**
	 * The size attribute changes the font-size and other related sizes of the component.
	 */
	size?: SizeType | 'large';

	/**
	 * The timeout attribute specifies the time in milliseconds before the loading indicator triggers the onTimeout event. Default is 2000ms.
	 */
	timeout?: number | string;
	/**
	 * The timeoutActive attribute specifies the time in milliseconds before the loading indicator triggers the onTimeout event when the state is "active". Default is 5000ms.
	 */
	timeoutActive?: number | string;
};

export type DBLoadingIndicatorProps = DBLoadingIndicatorDefaultProps &
	GlobalProps &
	SizeProps &
	ShowLabelProps &
	OrientationProps &
	WidthProps &
	DelayProps;

export type DBLoadingIndicatorDefaultState = {
	_loadingState?: LoadingIndicatorStateType | string;
	_previousLoadingState?: LoadingIndicatorStateType | string;
	_labelId?: string;
	_progressId?: string;
	_timeoutId?: ReturnType<typeof setTimeout>;
	_didDisableParent?: boolean;
	_style: any;
	getPercentage: () => string | undefined;
	getRole: () => string | undefined;
	handleParentAria: (remove: boolean) => void;
	handleParentDisabled: (forceEnable?: boolean) => void;
	resetIds: () => void;
};

export type DBLoadingIndicatorState = DBLoadingIndicatorDefaultState &
	GlobalState &
	InitializedState;
