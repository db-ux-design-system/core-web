import { LoadingIndicatorStateType } from '../model';

export type TimeoutStore = {
	loadingState: LoadingIndicatorStateType;
	onTimeoutFn: () => void;
	getLabel: (loadingState: LoadingIndicatorStateType | string) => string;
};
