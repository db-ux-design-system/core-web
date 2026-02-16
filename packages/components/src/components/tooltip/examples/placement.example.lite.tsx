import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Placement',
	storybookNames: [
		'bottom-start',
		'(Default) bottom',
		'bottom-end',
		'left-start',
		'left',
		'left-end',
		'right-start',
		'right',
		'right-end',
		'top-start',
		'top',
		'top-end'
	],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipPlacement() {
	return (
		<Fragment>
			<DBButton>
				bottom-start
				<DBTooltip placement="bottom-start" id="tooltip-08-start">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				(Default) bottom
				<DBTooltip placement="bottom" id="tooltip-08">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				bottom-end
				<DBTooltip placement="bottom-end" id="tooltip-08-end">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				left-start
				<DBTooltip placement="left-start" id="tooltip-10-start">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				left
				<DBTooltip placement="left" id="tooltip-10">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				left-end
				<DBTooltip placement="left-end" id="tooltip-10-end">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				right-start
				<DBTooltip placement="right-start" id="tooltip-11-start">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				right
				<DBTooltip placement="right" id="tooltip-11">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				right-end
				<DBTooltip placement="right-end" id="tooltip-11-end">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				top-start
				<DBTooltip placement="top-start" id="tooltip-09-start">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				top
				<DBTooltip placement="top" id="tooltip-09">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton>
				top-end
				<DBTooltip placement="top-end" id="tooltip-09-end">
					Tooltip
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
