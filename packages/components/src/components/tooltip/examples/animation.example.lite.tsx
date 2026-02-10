import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Animation',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipAnimation() {
	return (
		<Fragment>
			<DBButton data-sb-decorator="true">
				(Default) True
				<DBTooltip id="tooltip-14" animation={true}>
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton data-sb-decorator="true">
				False
				<DBTooltip animation={false} id="tooltip-17">
					Tooltip
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
