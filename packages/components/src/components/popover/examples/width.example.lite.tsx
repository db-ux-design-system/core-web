import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Auto', 'Fixed'],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverWidth() {
	return (
		<Fragment>
			<DBPopover
				id="popover-17"
				trigger={<DBButton>(Default) Auto</DBButton>}>
				Max width, lorem ipsum dolor sit amet, consetetur sadipscing
			</DBPopover>
			<DBPopover
				width="fixed"
				id="popover-18"
				trigger={<DBButton>Fixed</DBButton>}>
				Max width, lorem ipsum dolor sit amet, consetetur sadipscing
			</DBPopover>
		</Fragment>
	);
}
