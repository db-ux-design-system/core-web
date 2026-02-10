import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Delay',
	storybookNames: ['(Default) None', 'Slow', 'Fast'],
	storybookArgTypes: StorybookTooltipArgTypes
});

export default function TooltipDelay() {
	return (
		<Fragment>
			<DBButton data-sb-decorator="true">
				(Default) None
				<DBTooltip id="tooltip-144" delay="none">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton data-sb-decorator="true">
				Slow
				<DBTooltip delay="slow" id="tooltip-15">
					Tooltip
				</DBTooltip>
			</DBButton>
			<DBButton data-sb-decorator="true">
				Fast
				<DBTooltip delay="fast" id="tooltip-16">
					Tooltip
				</DBTooltip>
			</DBButton>
		</Fragment>
	);
}
