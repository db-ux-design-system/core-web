import {
	DelayProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	OrientationProps,
	ShowLabelProps,
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
	/**
	 * If enabled the loading indicator shows an ongoing animation without a known completion (spinner/indeterminate progress). Set to false to show a determinate value via value/max.
	 */
	indeterminate?: boolean | string;

	/**
	 * The label associated with the progress element. Alternative to passing children.
	 */
	label?: string;

	/**
	 * The maximum value of the determinate progress (used together with value). Defaults to 100.
	 */
	max?: number | string;

	/**
	 * The text describing the current progress (e.g. "42 of 100"), shown next to the indicator.
	 */
	progressText?: string;

	/**
	 * Enables/disables the visibility of the progressText
	 */
	showProgressText?: boolean | string;

	/**
	 * The current value of the determinate progress (used together with max).
	 */
	value?: string | number;

	/**
	 * If enabled the loading indicator is rendered as an overlay covering its positioned parent.
	 */
	overlay?: boolean | string;

	/**
	 * The variant changes the visual appearance of the loading indicator between a circular spinner and a horizontal bar.
	 */
	variant?: LoadingIndicatorVariantType;

	/**
	 * The current loading state. Controls the animation and the announced live-region role.
	 */
	state?: LoadingIndicatorStateType | string;

	/**
	 * Disable the parent component (e.g. a DBButton) when loading indicator is inside it
	 */
	autoDisable?: boolean | string;

	/**
	 * Overrides the automatically derived ARIA live-region role. By default the role is derived from the state ("alert" for critical, otherwise "status").
	 */
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
	 * The timeoutDuration attribute specifies the time in milliseconds before the loading indicator triggers the onTimeout event. Default is 2000ms.
	 */
	timeoutDuration?: number | string;
	/**
	 * The timeoutActiveDuration attribute specifies the time in milliseconds before the loading indicator triggers the onTimeout event when the state is "active". Default is 5000ms.
	 */
	timeoutActiveDuration?: number | string;
};

export type DBLoadingIndicatorProps = DBLoadingIndicatorDefaultProps &
	GlobalProps &
	ShowLabelProps &
	OrientationProps &
	DelayProps;

export type DBLoadingIndicatorDefaultState = {
	_loadingState?: LoadingIndicatorStateType | string;
	_previousLoadingState?: LoadingIndicatorStateType | string;
	_labelId?: string;
	_progressId?: string;
	_timeoutId?: ReturnType<typeof setTimeout>;
	_didDisableParent?: boolean;
	getPercentage: () => string | undefined;
	getRole: () => string | undefined;
	handleParentAria: (remove: boolean) => void;
	handleParentDisabled: (forceEnable?: boolean) => void;
	handleUnmount: () => void;
	resetIds: () => void;
};

export type DBLoadingIndicatorState = DBLoadingIndicatorDefaultState &
	GlobalState &
	InitializedState;
