import { For, Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indicators, statesArray } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'State',
	storybookNames: ['Inactive', 'Active', 'Successful', 'Critical'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorState() {
	return (
		<Fragment>
			<For each={statesArray}>
				{(item) => (
					<div
						class="loading-indicator-grid"
						key={`state-${item.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{item.name}
						</DBInfotext>
						<For each={indicators}>
							{(indicator) => (
								<DBLoadingIndicator
									key={`state-${item.name}-${indicator.label}`}
									state={item.value}
									variant={indicator.variant}
									progressText={
										item.value === 'successful' ||
										item.value === 'critical'
											? indicator.progressTextState
											: indicator.progressText
									}>
									{indicator.label}
								</DBLoadingIndicator>
							)}
						</For>
					</div>
				)}
			</For>
		</Fragment>
	);
}
