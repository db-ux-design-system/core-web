import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Container Size',
	storybookNames: ['Small', '(Default) Medium', 'Large', 'Full'],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogContainerSize() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton command="show-modal" commandfor="dialog-size-small">
					Open: Small
				</DBButton>
				<DBDialog
					id="dialog-size-small"
					containerSize="small"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Small
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="dialog-size-medium">
					Open: (Default) Medium
				</DBButton>
				<DBDialog
					id="dialog-size-medium"
					containerSize="medium"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							(Default) Medium
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="dialog-size-large">
					Open: Large
				</DBButton>
				<DBDialog
					id="dialog-size-large"
					containerSize="large"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Large
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="dialog-size-full">
					Open: Full
				</DBButton>
				<DBDialog
					id="dialog-size-full"
					containerSize="full"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Full
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
		</Fragment>
	);
}
