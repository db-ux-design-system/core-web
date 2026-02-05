import { For, Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indicators, showLabels } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorShowLabel() {
	return (
		<Fragment>
			<For each={showLabels}>
				{(item) => (
					<div
						class="loading-indicator-grid"
						key={`showLabel-${item.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{item.name}
						</DBInfotext>
						<For each={indicators}>
							{(indicator) => (
								<DBLoadingIndicator
									key={`showLabel-${item.name}-${indicator.label}`}
									showLabel={item.value}
									variant={indicator.variant}
									progressText={indicator.progressText}>
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
