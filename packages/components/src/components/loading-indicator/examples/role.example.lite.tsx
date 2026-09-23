import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Role',
	storybookNames: ['Default (status)', 'role="status"', 'role="alert"'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorRole() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Default (role derived from state)
			</DBInfotext>
			<DBLoadingIndicator
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Default
			</DBLoadingIndicator>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Explicit role=&quot;status&quot;
			</DBInfotext>
			<DBLoadingIndicator
				role="status"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Status
			</DBLoadingIndicator>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational"
				icon="none">
				Explicit role=&quot;alert&quot;
			</DBInfotext>
			<DBLoadingIndicator
				role="alert"
				variant="circular"
				orientation="horizontal"
				progressText="42 of 100">
				Alert
			</DBLoadingIndicator>
		</Fragment>
	);
}
