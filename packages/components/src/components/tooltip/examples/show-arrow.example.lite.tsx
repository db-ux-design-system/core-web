import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Show Arrow',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipShowArrow() {
	return (
		<Fragment>
			<DBButton>
				(Default) True
				<DBTooltip id="tooltip-04" showArrow={true}>
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				False
				<DBTooltip showArrow={false} id="tooltip-05">
					Tooltip
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
