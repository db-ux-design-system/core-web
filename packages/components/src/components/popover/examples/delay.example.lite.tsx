import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Delay',
	storybookNames: ['(Default) None', 'Slow', 'Fast'],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverDelay() {
	return (
		<Fragment>
			<DBPopover
				id="popover-133"
				delay="none"
				trigger={<DBButton>(Default) None</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				delay="slow"
				id="popover-14"
				trigger={<DBButton>Slow</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				delay="fast"
				id="popover-15"
				trigger={<DBButton>Fast</DBButton>}>
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
