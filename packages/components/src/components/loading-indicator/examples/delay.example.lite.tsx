import { For, Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { delays, indicators } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Delay',
	storybookNames: ['(Default) None', 'Slow', 'Fast'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorDelay() {
	return (
		<Fragment>
			<For each={delays}>
				{(delay) => (
					<div
						class="loading-indicator-grid"
						key={`delay-${delay.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{delay.name}
						</DBInfotext>
						<For each={indicators}>
							{(indicator) => (
								<DBLoadingIndicator
									key={useTarget({
										react: `delay-${delay.name}-${indicator.label}`,
										default: undefined
									})}
									delay={delay.value}
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
