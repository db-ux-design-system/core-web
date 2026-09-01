import {
	OrientationType,
	PopoverDelayType,
	SizeType
} from '../../../shared/model';
import {
	LoadingIndicatorStateType,
	LoadingIndicatorVariantType
} from '../model';

export const indicators: {
	variant: LoadingIndicatorVariantType;
	orientation?: OrientationType;
	progressText: string;
	progressTextState: string;
	label: string;
}[] = [
	{
		variant: 'circular',
		orientation: 'horizontal',
		progressText: '42 of 100',
		progressTextState: '100 of 100',
		label: 'Circular horizontal'
	},
	{
		variant: 'circular',
		orientation: 'vertical',
		progressText: '42%',
		progressTextState: '100%',
		label: 'Circular vertical'
	},
	{
		variant: 'bar',
		progressText: '42 of 100',
		progressTextState: '100 of 100',
		label: 'Bar'
	}
];

export const densities: { value: string; name: string }[] = [
	{ value: 'functional', name: 'Functional' },
	{ value: 'regular', name: '(Default) Regular' },
	{ value: 'expressive', name: 'Expressive' }
];

export const indeterminateArray: { value: boolean; name: string }[] = [
	{ value: true, name: '(Default) True' },
	{ value: false, name: 'False' }
];

export const sizes: { value: SizeType; name: string }[] = [
	{ value: 'small', name: 'Small' },
	{ value: 'medium', name: '(Default) Medium' }
];

export const statesArray: { value: LoadingIndicatorStateType; name: string }[] =
	[
		{ value: 'inactive', name: 'Inactive' },
		{ value: 'active', name: 'Active' },
		{ value: 'successful', name: 'Successful' },
		{ value: 'critical', name: 'Critical' }
	];

export const showLabels: { value: boolean; name: string }[] = [
	{ value: true, name: '(Default) True' },
	{ value: false, name: 'False' }
];

export const showProgressTexts: { value: boolean; name: string }[] = [
	{ value: true, name: '(Default) True' },
	{ value: false, name: 'False' }
];

export const overlays: { value: boolean; name: string }[] = [
	{ value: false, name: '(Default) False' },
	{ value: true, name: 'True' }
];

export const delays: { value: PopoverDelayType; name: string }[] = [
	{ value: 'none', name: '(Default) None' },
	{ value: 'slow', name: 'Slow' },
	{ value: 'fast', name: 'Fast' }
];

export const buttonExamples: {
	overlay: boolean;
	name: string;
}[] = [
	{ overlay: false, name: 'Without overlay' },
	{ overlay: true, name: 'With overlay' }
];

export type TimeoutStore = {
	loadingState: LoadingIndicatorStateType;
	onTimeoutFn: () => void;
	getLabel: (loadingState: LoadingIndicatorStateType | string) => string;
};
