import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Show Progress Text',
	storybookNames: [
		'(Default) True: Circular horizontal',
		'(Default) True: Circular vertical',
		'(Default) True: Bar',
		'False: Circular horizontal',
		'False: Circular vertical',
		'False: Bar'
	],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorShowProgressText() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				(Default) True
			</DBInfotext>
			<DBLoadingIndicator
				showProgressText={true}
				indeterminate={false}
				value={42}
				max={100}
				state="active"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				showProgressText={true}
				indeterminate={false}
				value={42}
				max={100}
				state="active"
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				showProgressText={true}
				indeterminate={false}
				value={42}
				max={100}
				state="active"
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
				False
			</DBInfotext>
			<DBLoadingIndicator
				showProgressText={false}
				indeterminate={false}
				value={42}
				max={100}
				state="active"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				showProgressText={false}
				indeterminate={false}
				value={42}
				max={100}
				state="active"
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				showProgressText={false}
				indeterminate={false}
				value={42}
				max={100}
				state="active"
				variant="bar"
				progressText="42 of 100">
				Bar
			</DBLoadingIndicator>
		</Fragment>
	);
}
