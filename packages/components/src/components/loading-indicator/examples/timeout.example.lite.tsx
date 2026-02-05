import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { TimeoutStore } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Examples: Timeout',
	storybookNames: ['Timeout'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorTimeout() {
	const state = useStore<TimeoutStore>({
		loadingState: 'inactive'
	});

	return (
		<Fragment>
			<DBButton
				icon="x_placeholder"
				onClick={() => (state.loadingState = 'active')}>
				<DBLoadingIndicator
					state={state.loadingState}
					overlay
					onTimeout={() => {
						if (state.loadingState === 'active') {
							state.loadingState = 'critical';
						} else {
							state.loadingState = 'inactive';
						}
					}}>
					{state.loadingState === 'inactive'
						? ''
						: state.loadingState === 'active'
							? 'Loading'
							: 'Error'}
				</DBLoadingIndicator>
				Start Timeout
			</DBButton>
		</Fragment>
	);
}
