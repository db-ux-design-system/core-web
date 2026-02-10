import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Emphasis',
	storybookNames: ['(Default) Weak', 'Strong'],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipEmphasis() {
	return (
		<Fragment>
			<DBButton data-sb-decorator="true">
				(Default) Weak
				<DBTooltip id="tooltip-06">Tooltip</DBTooltip>
			</DBButton>
			<DBButton data-sb-decorator="true">
				Strong
				<DBTooltip emphasis="strong" id="tooltip-07">
					Tooltip
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
