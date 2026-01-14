import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

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
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverPlacement() {
	return (
		<Fragment>
			<DBPopover
				placement="bottom-start"
				id="popover-07-start"
				trigger={<DBButton>bottom-start</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="bottom"
				id="popover-07"
				trigger={<DBButton>(Default) bottom</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="bottom-end"
				id="popover-07-end"
				trigger={<DBButton>bottom-end</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="left-start"
				id="popover-09-start"
				trigger={<DBButton>left-start</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="left"
				id="popover-09"
				trigger={<DBButton>left</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="left-end"
				id="popover-09-end"
				trigger={<DBButton>left-end</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="right-start"
				id="popover-10-start"
				trigger={<DBButton>right-start</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="right"
				id="popover-10"
				trigger={<DBButton>right</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="right-end"
				id="popover-10-end"
				trigger={<DBButton>right-end</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="top-start"
				id="popover-08-start"
				trigger={<DBButton>top-start</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="top"
				id="popover-08"
				trigger={<DBButton>top</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				placement="top-end"
				id="popover-08-end"
				trigger={<DBButton>top-end</DBButton>}>
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
