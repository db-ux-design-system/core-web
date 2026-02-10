import { For, Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import { ButtonVariantList } from '../../button/model';
import DBInfotext from '../../infotext/infotext.lite';
import DBLoadingIndicator from '../loading-indicator.lite';
import { buttonExamples } from './_indicators.data';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Examples: Button',
	storybookNames: ['Without overlay', 'With overlay'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

export default function LoadingIndicatorButton() {
	return (
		<Fragment>
			<For each={buttonExamples}>
				{(example) => (
					<div
						class="loading-indicator-grid"
						key={`button-${example.name}`}>
						<DBInfotext
							size="small"
							semantic="informational"
							icon="none">
							{example.name}
						</DBInfotext>
						<For each={ButtonVariantList}>
							{(variant) => (
								<DBButton
									key={useTarget({
										react: `${example.name}-${variant}`,
										default: undefined
									})}
									icon="x_placeholder"
									variant={variant}>
									<DBLoadingIndicator
										progressText="0 of 100"
										overlay={example.overlay}>
										Loading
									</DBLoadingIndicator>
									Button
								</DBButton>
							)}
						</For>
					</div>
				)}
			</For>
		</Fragment>
	);
}
