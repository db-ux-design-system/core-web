import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'State: Determinate',
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

export default function LoadingIndicatorStateDeterminate() {
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
				indeterminate={false}
				value={42}
				max={100}
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="inactive"
				indeterminate={false}
				value={42}
				max={100}
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="inactive"
				indeterminate={false}
				value={42}
				max={100}
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
				indeterminate={false}
				value={42}
				max={100}
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="active"
				indeterminate={false}
				value={42}
				max={100}
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="active"
				indeterminate={false}
				value={42}
				max={100}
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
				indeterminate={false}
				value={100}
				max={100}
				variant="circular"
				orientation="horizontal"
				progressText="100 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="successful"
				indeterminate={false}
				value={100}
				max={100}
				variant="circular"
				orientation="vertical"
				progressText="100%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="successful"
				indeterminate={false}
				value={100}
				max={100}
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
				indeterminate={false}
				value={100}
				max={100}
				variant="circular"
				orientation="horizontal"
				progressText="100 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="critical"
				indeterminate={false}
				value={100}
				max={100}
				variant="circular"
				orientation="vertical"
				progressText="100%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				state="critical"
				indeterminate={false}
				value={100}
				max={100}
				variant="bar"
				progressText="100 of 100">
				Bar
			</DBLoadingIndicator>
		</Fragment>
	);
}
