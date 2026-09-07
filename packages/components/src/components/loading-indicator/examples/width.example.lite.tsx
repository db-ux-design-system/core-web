import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Full: Bar', 'Auto: Bar'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorWidth() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				(Default) Full
			</DBInfotext>
			<div style={{ inlineSize: '200px' }} data-sb-ignore="true">
				<DBLoadingIndicator
					variant="bar"
					width="full"
					progressText="42 of 100">
					Bar
				</DBLoadingIndicator>
			</div>

			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Auto
			</DBInfotext>
			<div style={{ inlineSize: '200px' }} data-sb-ignore="true">
				<DBLoadingIndicator
					variant="bar"
					width="auto"
					progressText="42 of 100">
					Bar
				</DBLoadingIndicator>
			</div>
		</Fragment>
	);
}
