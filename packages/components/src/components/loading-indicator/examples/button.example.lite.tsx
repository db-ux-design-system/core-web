import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Examples: Button',
	storybookNames: [
		'Without overlay: Outlined',
		'Without overlay: Brand',
		'Without overlay: Filled',
		'Without overlay: Ghost',
		'With overlay: Outlined',
		'With overlay: Brand',
		'With overlay: Filled',
		'With overlay: Ghost',
		'Successful: Outlined',
		'Successful: Brand',
		'Successful: Filled',
		'Successful: Ghost',
		'Successful with overlay: Outlined',
		'Successful with overlay: Brand',
		'Successful with overlay: Filled',
		'Successful with overlay: Ghost',
		'Critical: Outlined',
		'Critical: Brand',
		'Critical: Filled',
		'Critical: Ghost',
		'Critical with overlay: Outlined',
		'Critical with overlay: Brand',
		'Critical with overlay: Filled',
		'Critical with overlay: Ghost'
	],
	storybookComponentNames: [
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton',
		'DBButton'
	],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorButton() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Without overlay
			</DBInfotext>
			<DBButton icon="x_placeholder" variant="outlined">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="brand">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="filled">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				With overlay
			</DBInfotext>
			<DBButton icon="x_placeholder" variant="outlined">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="brand">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="filled">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Successful
			</DBInfotext>
			<DBButton icon="x_placeholder" variant="outlined">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="brand">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="filled">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Successful with overlay
			</DBInfotext>
			<DBButton icon="x_placeholder" variant="outlined">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="brand">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="filled">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="successful"
					propOverrides={{ progress: { ariaLabel: 'Success' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Critical
			</DBInfotext>
			<DBButton icon="x_placeholder" variant="outlined">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="brand">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="filled">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Critical with overlay
			</DBInfotext>
			<DBButton icon="x_placeholder" variant="outlined">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="brand">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="filled">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost">
				<DBLoadingIndicator
					progressText="0 of 100"
					state="critical"
					propOverrides={{ progress: { ariaLabel: 'Error' } }}
					overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
		</Fragment>
	);
}
