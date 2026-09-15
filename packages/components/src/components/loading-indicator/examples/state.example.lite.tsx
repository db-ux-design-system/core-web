import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'State',
	storybookNames: [
		'Inactive: Circular horizontal',
		'Inactive: Circular vertical',
		'Inactive: Bar',
		'Active: Circular horizontal',
		'Active: Circular vertical',
		'Active: Bar',
		'Successful: Circular horizontal',
		'Successful: Circular vertical',
		'Successful: Bar',
		'Critical: Circular horizontal',
		'Critical: Circular vertical',
		'Critical: Bar'
	],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorState() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Inactive
			</DBInfotext>
			<DBLoadingIndicator
				state="inactive"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="inactive"
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="inactive"
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
				Active
			</DBInfotext>
			<DBLoadingIndicator
				state="active"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="active"
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
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
				Successful
			</DBInfotext>
			<DBLoadingIndicator
				state="successful"
				variant="circular"
				orientation="horizontal"
				progressText="100 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="successful"
				variant="circular"
				orientation="vertical"
				progressText="100%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="successful"
				variant="bar"
				progressText="100 of 100">
				Bar
			</DBLoadingIndicator>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Critical
			</DBInfotext>
			<DBLoadingIndicator
				state="critical"
				variant="circular"
				orientation="horizontal"
				progressText="100 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="critical"
				variant="circular"
				orientation="vertical"
				progressText="100%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="critical"
				variant="bar"
				progressText="100 of 100">
				Bar
			</DBLoadingIndicator>
		</Fragment>
	);
}
