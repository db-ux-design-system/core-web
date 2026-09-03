import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { LoadingIndicatorStateType } from '../model';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';
import { TimeoutStore } from './_timeout.data';

useMetadata({
	storybookTitle: 'Examples: Timeout',
	storybookNames: ['Timeout'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorTimeout() {
	const state = useStore<TimeoutStore>({
		loadingState: 'inactive',
		onTimeoutFn: () => {
			if (state.loadingState === 'active') {
				state.loadingState = 'critical';
			} else {
				state.loadingState = 'inactive';
			}
		},
		getLabel: (loadState: LoadingIndicatorStateType | string) => {
			return loadState === 'inactive'
				? ''
				: loadState === 'active'
					? 'Loading'
					: 'Error';
		}
	});

	return (
		<Fragment>
			<DBButton
				icon="x_placeholder"
				onClick={() => (state.loadingState = 'active')}>
				<DBLoadingIndicator
					state={state.loadingState}
					overlay
					onTimeout={state.onTimeoutFn}>
					Loading
				</DBLoadingIndicator>
				Start Timeout
			</DBButton>
		</Fragment>
	);
}
