import { For, Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { densities, indicators } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorDensity() {
	return (
		<Fragment>
			<For each={densities}>
				{(density) => (
					<div
						class="loading-indicator-grid"
						key={`density-${density.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{density.name}
						</DBInfotext>
						<For each={indicators}>
							{(indicator) => (
								<DBLoadingIndicator
									key={useTarget({
										react: `density-${density.name}-${indicator.label}`,
										default: undefined
									})}
									data-density={density.value}
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
