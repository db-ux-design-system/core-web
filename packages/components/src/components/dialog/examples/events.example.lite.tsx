import { Fragment, useMetadata, useState, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Events',
	storybookNames: ['Close and Cancel'],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogEvents() {
	const [open, setOpen] = useState<boolean>(false);
	const state = useStore({
		handleClose: () => {
			console.log('onClose fired');
			setOpen(false);
		},
		handleCancel: () => {
			console.log('onCancel fired');
		}
	});

	return (
		<Fragment>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpen(true)}>
					Open Dialog
				</DBButton>
				<DBDialog
					open={open}
					onClose={() => state.handleClose()}
					onCancel={() => state.handleCancel()}
					header={
						<DBDialogHeader closeButtonText="Close">
							Events Test
						</DBDialogHeader>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. Press ESC or click
					backdrop to test events.
				</DBDialog>
			</div>
		</Fragment>
	);
}
