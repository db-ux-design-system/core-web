import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Auto', 'Fixed'],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipWidth() {
	return (
		<Fragment>
			<DBButton data-sb-decorator="true">
				(Default) Auto
				<DBTooltip id="tooltip-12">
					Max width, lorem ipsum dolor sit amet, consetetur sadipscing
				</DBTooltip>
			</DBButton>
			<DBButton data-sb-decorator="true">
				Fixed
				<DBTooltip width="fixed" id="tooltip-13">
					Max width, lorem ipsum dolor sit amet, consetetur sadipscing
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
