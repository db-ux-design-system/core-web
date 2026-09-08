import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Backdrop',
	storybookNames: ['(Default) Strong', 'Weak', 'No Backdrop'],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogBackdrop() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="dialog-backdrop-strong"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) Strong
				</DBButton>
				<DBDialog
					id="dialog-backdrop-strong"
					backdrop="strong"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>(Default) Strong</h2>
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
				<DBButton
					command="show-modal"
					commandfor="dialog-backdrop-weak"
					onClick={() => setOpenIndex(1)}>
					Open: Weak
				</DBButton>
				<DBDialog
					id="dialog-backdrop-weak"
					backdrop="weak"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Weak</h2>
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
				<DBButton
					command="show"
					commandfor="dialog-backdrop-none"
					onClick={() => setOpenIndex(2)}>
					Open: No Backdrop
				</DBButton>
				<DBDialog
					id="dialog-backdrop-none"
					backdrop="none"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>No Backdrop</h2>
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
