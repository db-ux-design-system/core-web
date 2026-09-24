import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBCustomSelect from '../../custom-select/custom-select.lite';
import DBDialogFooter from '../../dialog-footer/dialog-footer.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBIcon from '../../icon/icon.lite';
import DBTooltip from '../../tooltip/tooltip.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'Close and Cancel',
		'Submit form in content',
		'Nested overlays',
		'With text prop',
		'With header start slot',
		'With header end slot',
		'Without footer',
		'With header subtitle'
	],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogExamples() {
	const state = useStore({
		handleClose: () => {
			console.log('onClose fired');
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
					Cancel and close Events in console
				</DBButton>
				<DBDialog
					id="dialog-events"
					onClose={() => state.handleClose()}
					onCancel={() => state.handleCancel()}
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Events Test</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-events">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-events">
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
				<DBButton command="show-modal" commandfor="dialog-events-form">
					Buttons type dialog event in console
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
			<div>
				<DBButton
					command="show-modal"
					commandfor="dialog-nested-overlays">
					Open: Nested overlays
				</DBButton>
				<DBDialog
					id="dialog-nested-overlays"
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Nested overlays</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-nested-overlays">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-nested-overlays">
								Confirm
							</DBButton>
						</DBDialogFooter>
					}>
					<p>
						The tooltip and the custom-select dropdown must line up
						with their trigger and must not be clipped by the
						dialog.
					</p>
					<DBButton>
						Hover for a tooltip
						<DBTooltip placement="top" id="dialog-nested-tooltip">
							I position against the viewport
						</DBTooltip>
					</DBButton>
					<DBCustomSelect
						label="Pick an option"
						listLabel="dialog-nested-select-list"
						options={[
							{ value: 'Option 1', id: 'dialog-nested-opt-1' },
							{ value: 'Option 2', id: 'dialog-nested-opt-2' },
							{ value: 'Option 3', id: 'dialog-nested-opt-3' }
						]}
					/>
				</DBDialog>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="dialog-areas-text">
					Open: With text prop
				</DBButton>
				<DBDialog
					id="dialog-areas-text"
					header={
						<DBDialogHeader
							text="With text prop"
							closeButtonText="Close"
						/>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-areas-text">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-areas-text">
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
				<DBButton command="show-modal" commandfor="dialog-areas-start">
					Open: With header start slot
				</DBButton>
				<DBDialog
					id="dialog-areas-start"
					header={
						<DBDialogHeader
							closeButtonText="Close"
							startSlot={<DBIcon icon="person" />}>
							<h2>With header start slot</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-areas-start">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-areas-start">
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
				<DBButton command="show-modal" commandfor="dialog-areas-end">
					Open: With header end slot
				</DBButton>
				<DBDialog
					id="dialog-areas-end"
					header={
						<DBDialogHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							<h2>With header end slot</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-areas-end">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-areas-end">
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
					commandfor="dialog-areas-no-footer">
					Open: Without footer
				</DBButton>
				<DBDialog
					id="dialog-areas-no-footer"
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Without footer</h2>
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
					commandfor="dialog-areas-subtitle">
					Open: With header subtitle
				</DBButton>
				<DBDialog
					id="dialog-areas-subtitle"
					header={
						<DBDialogHeader
							className="showcase-header-top-aligned"
							closeButtonText="Close"
							startSlot={<DBIcon icon="person" />}>
							<h2>With header subtitle</h2>
							<span>A second line of supporting</span>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-areas-subtitle">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-areas-subtitle">
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
