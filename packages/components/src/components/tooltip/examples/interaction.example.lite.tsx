import { useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookTooltipArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/tooltip/tooltip-interaction.spec.ts).
 * Focusing the button opens its tooltip.
 */
export default function TooltipInteraction() {
	return (
		<div class="padding-box">
			<DBButton
				aria-describedby="interaction-tooltip"
				data-testid="button">
				Button
				<DBTooltip
					animation="disabled"
					id="interaction-tooltip"
					data-testid="tooltip">
					Test
				</DBTooltip>
			</DBButton>
		</div>
	);
}
