import { For, Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../../card/card.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indicators, overlays } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Overlay',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorOverlay() {
	return (
		<Fragment>
			<For each={overlays}>
				{(item) => (
					<div
						class="loading-indicator-grid"
						key={`overlay-${item.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{item.name}
						</DBInfotext>
						<For each={indicators}>
							{(indicator) =>
								item.value ? (
									<DBCard
										key={`overlay-${item.name}-${indicator.label}`}>
										<DBLoadingIndicator
											overlay={item.value}
											variant={indicator.variant}
											progressText={
												indicator.progressText
											}>
											{indicator.label}
										</DBLoadingIndicator>
										<p>Content 1</p>
										<p>Content 2</p>
										<p>Content 3</p>
									</DBCard>
								) : (
									<DBLoadingIndicator
										key={`overlay-${item.name}-${indicator.label}`}
										overlay={item.value}
										variant={indicator.variant}
										progressText={indicator.progressText}>
										{indicator.label}
									</DBLoadingIndicator>
								)
							}
						</For>
					</div>
				)}
			</For>
		</Fragment>
	);
}
