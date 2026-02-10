import { For, Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indicators, statesArray } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'State: Determinate',
	storybookNames: ['Inactive', 'Active', 'Successful', 'Critical'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorStateDeterminate() {
	return (
		<Fragment>
			<For each={statesArray}>
				{(item) => (
					<div
						class="loading-indicator-grid"
						key={`state-determinate-${item.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{item.name}
						</DBInfotext>

						<For each={indicators}>
							{(indicator) => (
								<DBLoadingIndicator
									key={useTarget({
										react: `state-determinate-${item.name}-${indicator.label}`,
										default: undefined
									})}
									state={item.value}
									variant={indicator.variant}
									indeterminate={false}
									value={42}
									max={100}
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
