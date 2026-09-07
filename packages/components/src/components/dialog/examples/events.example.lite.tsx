import { Fragment, useMetadata, useState, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogFooter from '../../dialog-footer/dialog-footer.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'JS Events on console',
	storybookNames: ['Close and Cancel', 'Submit form in content'],
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
		},
		handleSubmit: (event: any) => {
			event.preventDefault();
			console.log('surrounding form submitted');
			event.currentTarget.closest('dialog').close();
		}
	});

	return (
		<Fragment>
			<div>
				<DBButton command="show-modal" commandfor="dialog-events">
					Open Dialog
				</DBButton>
				<DBDialog
					id="dialog-events"
					open={open}
					onClose={() => state.handleClose()}
					onCancel={() => state.handleCancel()}
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Events Test</h2>
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
				<DBButton command="show-modal" commandfor="dialog-events-form">
					Open Dialog
				</DBButton>
				<DBDialog
					id="dialog-events-form"
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Submit form in content</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							{/*
							 * The submit button sits in the footer, outside the
							 * form, and is wired to the form in the content via
							 * the `form` attribute referencing the form `id`.
							 */}
							<DBButton
								type="submit"
								variant="brand"
								form="dialog-events-form-content">
								Submit
							</DBButton>
						</DBDialogFooter>
					}>
					<form
						id="dialog-events-form-content"
						onSubmit={(event) => state.handleSubmit(event)}>
						<p>
							Submitting reaches the form in the dialog content.
						</p>
					</form>
				</DBDialog>
			</div>
		</Fragment>
	);
}
