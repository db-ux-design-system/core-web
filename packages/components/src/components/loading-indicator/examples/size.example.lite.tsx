import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: [
		'Small: Circular horizontal',
		'Small: Circular vertical',
		'Small: Bar',
		'(Default) Medium: Circular horizontal',
		'(Default) Medium: Circular vertical',
		'(Default) Medium: Bar'
	],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorSize() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Small
			</DBInfotext>
			<DBLoadingIndicator
				size="small"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				size="small"
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				size="small"
				variant="bar"
				progressText="42 of 100">
				Bar
			</DBLoadingIndicator>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				(Default) Medium
			</DBInfotext>
			<DBLoadingIndicator
				size="medium"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				size="medium"
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				size="medium"
				variant="bar"
				progressText="42 of 100">
				Bar
			</DBLoadingIndicator>
		</Fragment>
	);
}
