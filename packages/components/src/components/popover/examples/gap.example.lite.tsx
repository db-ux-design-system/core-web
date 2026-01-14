import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Gap',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverGap() {
	return (
		<Fragment>
			<DBPopover
				gap={false}
				id="popover-11"
				trigger={<DBButton>(Default) False</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				gap={true}
				id="popover-12"
				trigger={<DBButton>True</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
		</Fragment>
	);
}
