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
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) Strong
				</DBButton>
				<DBDialog
					backdrop="strong"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							(Default) Strong
						</DBDialogHeader>
					}>
					(Default) Strong
				</DBDialog>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: Weak
				</DBButton>
				<DBDialog
					backdrop="weak"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Weak
						</DBDialogHeader>
					}>
					Weak
				</DBDialog>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(2)}>
					Open: No Backdrop
				</DBButton>
				<DBDialog
					backdrop="none"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							No Backdrop
						</DBDialogHeader>
					}>
					No Backdrop
				</DBDialog>
			</div>
		</Fragment>
	);
}
