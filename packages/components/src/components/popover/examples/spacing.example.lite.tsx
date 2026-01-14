import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Spacing',
	storybookNames: ['(Default) Small', 'Medium', 'Large', 'None'],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverSpacing() {
	return (
		<Fragment>
			<DBPopover
				spacing="small"
				id="popover-04"
				trigger={<DBButton>(Default) Small</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				spacing="medium"
				id="popover-05"
				trigger={<DBButton>Medium</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				spacing="large"
				id="popover-055"
				trigger={<DBButton>Large</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				spacing="none"
				id="popover-06"
				trigger={<DBButton>None</DBButton>}>
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
