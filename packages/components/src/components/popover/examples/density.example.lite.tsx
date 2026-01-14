import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverDensity() {
	return (
		<Fragment>
			<DBPopover
				data-density="functional"
				id="popover-01"
				trigger={<DBButton>Functional</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				data-density="regular"
				id="popover-02"
				trigger={<DBButton>(Default) Regular</DBButton>}>
				<>
					<ul className="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</>
			</DBPopover>
			<DBPopover
				data-density="expressive"
				id="popover-03"
				trigger={<DBButton>Expressive</DBButton>}>
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
