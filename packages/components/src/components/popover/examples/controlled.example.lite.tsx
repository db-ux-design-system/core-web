import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: ['Default'],
	storybookArgTypes: StorybookPopoverArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function PopoverControlled() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Fragment>
			<div>
				<DBButton
					data-sb-replace="Open DBPopover by switching open property"
					onClick={() => setOpen(!open)}>
					Toggle popover
				</DBButton>
				<DBPopover
					id="popover-controlled"
					open={open}
					animation={false}
					trigger={<DBButton>Controlled popover</DBButton>}>
					The parent owns the open state
				</DBPopover>
			</div>
		</Fragment>
	);
}
