import {
	GlobalProps,
	GlobalState,
	ShowLabelProps,
	SizeProps
} from '../../shared/model';

export const LoadingIndicatorVariantList = [
	'progress-bar',
	'onsite',
	'inline'
] as const;
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
	value?: string | string[] | number;

	overlay?: boolean | string;

	variant?: LoadingIndicatorVariantType;

	state?: LoadingIndicatorStateType;

	/**
	 * Disable the parent component (e.g. a DBButton) when loading indicator is inside it
	 */
	autoDisable?: boolean | string;
};

export type DBLoadingIndicatorProps = DBLoadingIndicatorDefaultProps &
	GlobalProps &
	SizeProps &
	ShowLabelProps;

export type DBLoadingIndicatorDefaultState = {
	getState: () => LoadingIndicatorStateType;
};

export type DBLoadingIndicatorState = DBLoadingIndicatorDefaultState &
	GlobalState;
