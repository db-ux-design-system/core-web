import { For, Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indicators, sizes } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['Small', '(Default) Medium'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorSize() {
	return (
		<Fragment>
			<For each={sizes}>
				{(size) => (
					<div
						class="loading-indicator-grid"
						key={`size-${size.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{size.name}
						</DBInfotext>
						<For each={indicators}>
							{(indicator) => (
								<DBLoadingIndicator
									key={`size-${size.name}-${indicator.label}`}
									size={size.value}
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
