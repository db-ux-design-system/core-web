import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../../card/card.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Overlay',
	storybookNames: [
		'(Default) False: Circular horizontal',
		'(Default) False: Circular vertical',
		'(Default) False: Bar',
		'True: Circular horizontal',
		'True: Circular vertical',
		'True: Bar'
	],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorOverlay() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				(Default) False
			</DBInfotext>
			<DBLoadingIndicator
				overlay={false}
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Circular horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator
				overlay={false}
				variant="circular"
				orientation="vertical"
				progressText="42%">
				Circular vertical
			</DBLoadingIndicator>
			<DBLoadingIndicator
				overlay={false}
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
				True
			</DBInfotext>
			<DBCard>
				<DBLoadingIndicator
					overlay={true}
					variant="circular"
					orientation="horizontal"
					progressText="42 of 100">
					Circular horizontal
				</DBLoadingIndicator>
				<p>Content 1</p>
				<p>Content 2</p>
				<p>Content 3</p>
			</DBCard>
			<DBCard>
				<DBLoadingIndicator
					overlay={true}
					variant="circular"
					orientation="vertical"
					progressText="42%">
					Circular vertical
				</DBLoadingIndicator>
				<p>Content 1</p>
				<p>Content 2</p>
				<p>Content 3</p>
			</DBCard>
			<DBCard>
				<DBLoadingIndicator
					overlay={true}
					variant="bar"
					progressText="42 of 100">
					Bar
				</DBLoadingIndicator>
				<p>Content 1</p>
				<p>Content 2</p>
				<p>Content 3</p>
			</DBCard>
		</Fragment>
	);
}
