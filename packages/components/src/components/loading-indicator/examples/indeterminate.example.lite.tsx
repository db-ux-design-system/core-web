import { For, Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indeterminateArray, indicators } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Indeterminate',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorIndeterminate() {
	return (
		<Fragment>
			<For each={indeterminateArray}>
				{(item) => (
					<div
						class="loading-indicator-grid"
						key={`indeterminate-${item.name}`}>
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
										react: `indeterminate-${item.name}-${indicator.label}`,
										default: undefined
									})}
									indeterminate={item.value}
									value={item.value ? undefined : 42}
									max={item.value ? undefined : 100}
									state={item.value ? undefined : 'active'}
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
