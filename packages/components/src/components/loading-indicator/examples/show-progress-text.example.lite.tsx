import { For, Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { indicators, showProgressTexts } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Show Progress Text',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorShowProgressText() {
	return (
		<Fragment>
			<For each={showProgressTexts}>
				{(item) => (
					<div
						class="loading-indicator-grid"
						key={`showProgressText-${item.name}`}>
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
										react: `showProgressText-${item.name}-${indicator.label}`,
										default: undefined
									})}
									showProgressText={item.value}
									indeterminate={false}
									value={42}
									max={100}
									state="active"
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
