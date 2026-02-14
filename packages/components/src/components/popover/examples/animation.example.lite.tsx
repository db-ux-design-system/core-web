import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Animation',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverAnimation() {
	return (
		<Fragment>
			<DBPopover
				id="popover-13"
				animation={true}
				trigger={<DBButton>(Default) True</DBButton>}>
				<>
					<ul class="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				animation={false}
				id="popover-16"
				trigger={<DBButton>False</DBButton>}>
				<>
					<ul class="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
		</Fragment>
	);
}
