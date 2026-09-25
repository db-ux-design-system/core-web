import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogFooter from '../../dialog-footer/dialog-footer.lite';
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
	// A non-modal dialog (backdrop none) opens via show(), which has no native
	// invoker command, so only that dialog is driven through the open prop.
	const [noBackdropOpen, setNoBackdropOpen] = useState<boolean>(false);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="dialog-backdrop-strong">
					Open: (Default) Strong
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'dialog-backdrop-strong' }}
					backdrop="strong"
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>(Default) Strong</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-backdrop-strong">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-backdrop-strong">
								Confirm
							</DBButton>
						</DBDialogFooter>
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
					commandfor="dialog-backdrop-weak">
					Open: Weak
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'dialog-backdrop-weak' }}
					backdrop="weak"
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Weak</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-backdrop-weak">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-backdrop-weak">
								Confirm
							</DBButton>
						</DBDialogFooter>
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
				<DBButton onClick={() => setNoBackdropOpen(true)}>
					Open: No Backdrop
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'dialog-backdrop-none' }}
					backdrop="none"
					open={noBackdropOpen}
					onClose={() => setNoBackdropOpen(false)}
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>No Backdrop</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-backdrop-none">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-backdrop-none">
								Confirm
							</DBButton>
						</DBDialogFooter>
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
