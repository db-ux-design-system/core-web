import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDialogFooter from '../../dialog-footer/dialog-footer.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBIcon from '../../icon/icon.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Areas',
	storybookNames: [
		'With text prop',
		'With start slot',
		'With end slot',
		'Without footer',
		'With header subtitle'
	],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogAreas() {
	return (
		<Fragment>
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
					Open: With start slot
				</DBButton>
				<DBDialog
					id="dialog-areas-start"
					header={
						<DBDialogHeader
							closeButtonText="Close"
							startSlot={<DBIcon icon="person" />}>
							<h2>With start slot</h2>
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
					Open: With end slot
				</DBButton>
				<DBDialog
					id="dialog-areas-end"
					header={
						<DBDialogHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							<h2>With end slot</h2>
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
