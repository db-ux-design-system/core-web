import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipDensity() {
	return (
		<Fragment>
			<DBButton data-density="functional" data-sb-decorator="true">
				Functional
				<DBTooltip data-density="functional" id="tooltip-01">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton data-density="regular" data-sb-decorator="true">
				(Default) Regular
				<DBTooltip data-density="regular" id="tooltip-02">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton data-density="expressive" data-sb-decorator="true">
				Expressive
				<DBTooltip data-density="expressive" id="tooltip-03">
					Tooltip
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
