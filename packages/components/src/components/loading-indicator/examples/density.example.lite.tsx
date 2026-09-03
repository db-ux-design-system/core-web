import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorDensity() {
	return (
		<Fragment>
			<DBLoadingIndicator
				data-density="functional"
				progressText="42 of 100">
				Functional
			</DBLoadingIndicator>
			<DBLoadingIndicator data-density="regular" progressText="42 of 100">
				(Default) Regular
			</DBLoadingIndicator>
			<DBLoadingIndicator
				data-density="expressive"
				progressText="42 of 100">
				Expressive
			</DBLoadingIndicator>
		</Fragment>
	);
}
