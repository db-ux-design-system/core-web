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
		'With overlay: Ghost'
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
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="outlined">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="brand">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="filled">
				<DBLoadingIndicator progressText="0 of 100" overlay={false}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="ghost">
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
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="outlined">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="brand">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="filled">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
			<DBButton
				data-sb-ignore="true"
				icon="x_placeholder"
				variant="ghost">
				<DBLoadingIndicator progressText="0 of 100" overlay={true}>
					Loading
				</DBLoadingIndicator>
				Button
			</DBButton>
		</Fragment>
	);
}
